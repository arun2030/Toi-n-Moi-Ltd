'use server'

import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, token } from '../../sanity/env'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const client = createClient({
    projectId,
    dataset,
    apiVersion,
    token,
    useCdn: false,
})

export async function searchProducts(query: string) {
    if (!query || query.length < 2) return [];

    const groq = `*[_type == "product" && (title match $q + "*" || sku match $q + "*")] | order(title asc) [0...10] {
    _id,
    title,
    price,
    sku,
    "imageUrl": mainImage.asset->url,
    stockLevel
  }`;

    try {
        const products = await client.fetch(groq, { q: query });
        return products;
    } catch (error) {
        console.error("Sanity search error:", error);
        return [];
    }
}

export async function createPosPayment(cartItems: any[]) {
    try {
        const lineItems = cartItems.map((item) => ({
            price_data: {
                currency: 'gbp',
                product_data: {
                    name: item.title,
                    images: item.imageUrl ? [item.imageUrl] : [],
                    metadata: {
                        sku: item.sku
                    }
                },
                unit_amount: Math.round(item.price * 100),
            },
            quantity: item.quantity,
        }));

        // Use a fixed origin if env var not set, for local dev
        // In production, NEXT_PUBLIC_BASE_URL should be set
        const origin = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            payment_method_types: ['card', 'apple_pay', 'google_pay'] as any, // explicit types for POS emphasis
            line_items: lineItems,
            success_url: `${origin}/pos?status=success&session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/pos?status=cancelled`,
        });

        return { url: session.url };
    } catch (error: any) {
        console.error("Stripe session error:", error);
        throw new Error(error.message);
    }
}
