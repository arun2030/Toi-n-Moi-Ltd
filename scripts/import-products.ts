import { createClient } from '@sanity/client';
import csv from 'csv-parser';
import fs from 'fs';
import slugify from 'slugify';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: false,
    apiVersion: '2024-12-13',
    token: process.env.SANITY_API_TOKEN,
});

async function uploadImage(imageUrl: string) {
    try {
        // Convert Google Drive 'open' links to direct download links
        let finalUrl = imageUrl;
        if (imageUrl.includes('drive.google.com') && imageUrl.includes('id=')) {
            const idMatch = imageUrl.match(/id=([^&]+)/);
            if (idMatch) {
                finalUrl = `https://drive.google.com/uc?export=download&id=${idMatch[1]}`;
            }
        }

        const response = await fetch(finalUrl);
        if (!response.ok) throw new Error(`Failed to fetch image: ${finalUrl}`);
        const buffer = await response.arrayBuffer();
        const asset = await client.assets.upload('image', Buffer.from(buffer), {
            filename: path.basename(imageUrl), // Keep original name or slugify title
        });
        return asset;
    } catch (error) {
        console.error('Image upload failed:', error);
        return null;
    }
}

async function importProducts() {
    const results: any[] = [];

    fs.createReadStream('products.csv')
        .pipe(csv({
            mapHeaders: ({ header }) => header.trim().replace(/^[\uFEFF\uFFFE]/, '') // Strip BOM and whitespace
        }))
        .on('data', (data) => results.push(data))
        .on('end', async () => {
            console.log(`Found ${results.length} products to import...`);

            if (results.length > 0) {
                console.log('First row keys:', Object.keys(results[0]));
            }

            for (const product of results) {
                const title = product['Title'];
                if (!title) {
                    console.error('Skipping row due to missing Title:', product);
                    continue;
                }
                const price = parseFloat(product['Price']);
                const imageUrl = product['Image URL'];
                const sku = product['SKU'];
                const description = product['Description'] || `Imported product: ${title}`;
                const stockLevel = parseInt(product['Stock'] || '0', 10);
                // Supplier is available but maybe not in schema yet. access as product['Supplier']

                const slug = slugify(title, { lower: true, strict: true });

                console.log(`Processing: ${title}`);

                let imageAsset = null;
                if (imageUrl) {
                    imageAsset = await uploadImage(imageUrl);
                }

                const sanityProduct = {
                    _type: 'product',
                    title,
                    slug: { _type: 'slug', current: slug },
                    price,
                    description,
                    sku,
                    stockLevel, // Added stockLevel
                    images: imageAsset ? [{
                        _key: `${slug}-image-0`,
                        _type: 'image',
                        asset: {
                            _type: 'reference',
                            _ref: imageAsset._id,
                        },
                    }] : [],
                };

                try {
                    // Create or replace to avoid duplicates if run multiple times
                    // Using slug as ID determinant would be better for idempotency, 
                    // but let's just create new ones or generic create() as per request "Create a Sanity product document".
                    // Actually, createOrReplace with a deterministic ID is safer.
                    // Let's use create() for simplicity as requested, or maybe createIfNotExists.
                    // "Create a Sanity product document" implies create.
                    await client.create(sanityProduct);
                    console.log(`Success: imported ${title}`);
                } catch (err) {
                    console.error(`Failed to import ${title}:`, err);
                }
            }
            console.log('Import completed!');
        });
}

importProducts();
