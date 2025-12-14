import { createClient } from '@sanity/client';
import slugify from 'slugify';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({ path: '.env.local' });

// Initialize Sanity Client
const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: false,
    apiVersion: '2024-12-13',
    token: process.env.SANITY_API_TOKEN,
});

// Placeholder Supplier API URL - Replace with actual URL
const SUPPLIER_API_URL = 'https://api.supplier.com/v1/products';

// Interface for Supplier Product (Hypothetical structure)
interface SupplierProduct {
    id: string;
    product_name: string;
    product_sku: string;
    cost: number;
    details: string;
    inventory_count: number;
    image_url?: string;
    stripe_price_id?: string;
}

async function uploadImage(imageUrl: string) {
    try {
        const response = await fetch(imageUrl);
        if (!response.ok) throw new Error(`Failed to fetch image: ${imageUrl}`);
        const buffer = await response.arrayBuffer();
        const asset = await client.assets.upload('image', Buffer.from(buffer), {
            filename: path.basename(imageUrl),
        });
        return asset;
    } catch (error) {
        console.error('Image upload failed:', error);
        return null;
    }
}

async function syncSupplierProducts() {
    try {
        console.log(`Fetching products from ${SUPPLIER_API_URL}...`);

        // Mocking the fetch for now since the URL is a placeholder
        // In reality: const response = await fetch(SUPPLIER_API_URL);
        // const products: SupplierProduct[] = await response.json();

        // Mock Data for demonstration
        const products: SupplierProduct[] = [
            {
                id: 'supp_001',
                product_name: 'Velvet Evening Gown',
                product_sku: 'VEG-001',
                cost: 250,
                details: 'A luxurious velvet gown for special occasions.',
                inventory_count: 15,
                image_url: 'https://via.placeholder.com/600x800',
                stripe_price_id: 'price_12345'
            },
            {
                id: 'supp_002',
                product_name: 'Silk Blouse',
                product_sku: 'SB-002',
                cost: 120,
                details: 'Pure silk blouse with elegant stitching.',
                inventory_count: 42,
                image_url: 'https://via.placeholder.com/600x800',
                stripe_price_id: 'price_67890'
            }
        ];

        console.log(`Found ${products.length} products to sync.`);

        for (const item of products) {
            console.log(`Processing ${item.product_name}...`);

            // Generate Slug
            const slug = slugify(item.product_name, { lower: true, strict: true });

            // Prepare Image
            let imageAsset: any = null;
            if (item.image_url) {
                // Check if we already have this image or logic to skip re-uploading can be added here
                // For now, we upload
                // imageAsset = await uploadImage(item.image_url); 
                // Commented out actual upload to prevent spamming assets with placeholder images in dry run
            }

            // Map Supplier Fields -> Sanity Schema
            const sanityProduct = {
                _type: 'product',
                _id: `product-${slug}`, // Deterministic ID based on slug to ensure updates
                title: item.product_name,
                slug: { _type: 'slug', current: slug },
                price: item.cost,
                description: item.details,
                sku: item.product_sku,
                stockLevel: item.inventory_count, // Updating stock level
                stripePriceId: item.stripe_price_id,
                // Only update image if we fetched a new one
                // Only update image if we fetched a new one
                ...(imageAsset ? {
                    mainImage: {
                        _type: 'image',
                        asset: {
                            _type: 'reference',
                            _ref: imageAsset._id,
                        },
                    },
                    images: [{
                        _key: `${slug}-image-0`,
                        _type: 'image',
                        asset: {
                            _type: 'reference',
                            _ref: imageAsset._id,
                        },
                    }]
                } : {}),
            };

            // Perform Update (createOrReplace)
            await client.createOrReplace(sanityProduct);
            console.log(`Synced: ${item.product_name} (Stock: ${item.inventory_count})`);
        }

        console.log('Sync completed successfully.');

    } catch (error) {
        console.error('Sync failed:', error);
    }
}

// Execute
syncSupplierProducts();
