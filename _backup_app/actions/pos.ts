'use server'

import { client } from '@/sanity/client';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-11-17.clover',
});

export interface CartItem {
    id: string; // Sanity ID
    title: string;
    price: number;
    quantity: number;
    imageUrl?: string;
    stripePriceId?: string; // If we had sync, we'd use this.
}

export async function searchProducts(query: string) {
    if (!query) return [];

    // Search by title or SKU
    const sanityQuery = `*[_type == "product" && (title match $q || sku match $q)] {
    _id,
    title,
    price,
    sku,
    "imageUrl": images[0].asset->url,
    stripePriceId
  }`;

    return client.fetch(sanityQuery, { q: `${query}*` });
}

export async function createPaymentLink(items: CartItem[]) {
    try {
        const lineItems = items.map((item) => {
            // If we had strict syncing, we would use price ID. 
            // For this simple POS, we can use price_data to create one-time prices on the fly
            // providing flexible prices is easier for this demo unless verified otherwise.
            return {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.title,
                        images: item.imageUrl ? [item.imageUrl] : undefined,
                    },
                    unit_amount: Math.round(item.price * 100), // Stripe expects cents
                },
                quantity: item.quantity,
            };
        });

        const paymentLink = await stripe.paymentLinks.create({
            line_items: lineItems,
            after_completion: {
                type: 'redirect',
                redirect: {
                    url: 'http://localhost:3000/pos?success=true', // Redirect back to POS
                },
            },
        });

        return { url: paymentLink.url };
    } catch (error) {
        console.error('Stripe Error:', error);
        throw new Error('Failed to create payment link');
    }
}
