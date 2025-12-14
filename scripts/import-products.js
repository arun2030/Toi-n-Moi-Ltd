const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const dotenv = require('dotenv');
const slugify = require('slugify');
const { createClient } = require('@sanity/client');

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const config = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    token: process.env.SANITY_API_TOKEN,
    apiVersion: '2024-03-20',
    useCdn: false,
};

if (!config.projectId || !config.dataset || !config.token) {
    console.error('Missing configuration. Please check .env.local for NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, and SANITY_API_TOKEN.');
    process.exit(1);
}

const client = createClient(config);

async function uploadImage(url) {
    if (!url) return null;
    console.log(`Uploading image: ${url}`);
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`);
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const asset = await client.assets.upload('image', buffer, {
            filename: path.basename(url) || 'imported-image.jpg',
        });
        return asset._id;
    } catch (error) {
        console.error(`Failed to upload image ${url}:`, error.message);
        return null;
    }
}

async function getOrCreateSupplier(name) {
    if (!name) return null;

    // Check if supplier exists
    const query = `*[_type == "supplier" && name == $name][0]`;
    const params = { name };

    try {
        const existingSupplier = await client.fetch(query, params);
        if (existingSupplier) {
            console.log(`Found existing supplier: ${name}`);
            return existingSupplier._id;
        }

        // Create new supplier
        console.log(`Creating new supplier: ${name}`);
        const newSupplier = await client.create({
            _type: 'supplier',
            name: name,
            contactEmail: `contact@${slugify(name, { lower: true })}.com`, // Placeholder email
        });
        return newSupplier._id;
    } catch (error) {
        console.error(`Error handling supplier ${name}:`, error.message);
        return null;
    }
}

async function importProducts() {
    const results = [];
    const filePath = path.resolve(__dirname, '../products.csv');

    if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${filePath}`);
        process.exit(1);
    }

    console.log('Reading CSV file...');

    fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', async () => {
            console.log(`Found ${results.length} products. Starting import...`);

            for (const row of results) {
                const title = row['Title'] || row['title'];
                const price = row['Price'] || row['price'];
                const imageUrl = row['Image URL'] || row['image url'] || row['Image'];
                const sku = row['SKU'] || row['sku'];
                const supplierName = row['Supplier Name'] || row['supplier name'] || row['Supplier'];

                if (!title) {
                    console.warn('Skipping row with missing Title');
                    continue;
                }

                console.log(`Processing "${title}"...`);

                try {
                    // 1. Handle Supplier
                    const supplierId = await getOrCreateSupplier(supplierName);

                    // 2. Upload Image
                    const imageAssetId = await uploadImage(imageUrl);

                    // 3. Create Product
                    const productDoc = {
                        _type: 'product',
                        title: title,
                        slug: {
                            _type: 'slug',
                            current: slugify(title, { lower: true, strict: true }),
                        },
                        price: price ? parseFloat(price) : 0,
                        sku: sku,
                        supplier: supplierId ? {
                            _type: 'reference',
                            _ref: supplierId,
                        } : undefined,
                        mainImage: imageAssetId ? {
                            _type: 'image',
                            asset: {
                                _type: 'reference',
                                _ref: imageAssetId,
                            },
                        } : undefined,
                        // Also add to images array as per schema often having both
                        images: imageAssetId ? [{
                            _type: 'image',
                            _key: `${slugify(title, { lower: true })}-img-0`,
                            asset: {
                                _type: 'reference',
                                _ref: imageAssetId,
                            },
                        }] : [],
                        stockLevel: 100, // Default stock level
                    };

                    const res = await client.create(productDoc);
                    console.log(`✓ Created product "${title}" (ID: ${res._id})`);

                } catch (error) {
                    console.error(`✗ Error importing "${title}":`, error.message);
                }
            }
            console.log('Import complete!');
        });
}

importProducts();
