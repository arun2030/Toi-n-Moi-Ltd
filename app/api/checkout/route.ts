import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
    try {
        const { items } = await req.json();

        // In a real app, verifying prices on the server is crucial. 
        // For now, we'll trust the passed structure or use price IDs if available.
        // If items have stripePriceId, use that. Otherwise, construct line_items with mock data.

        const lineItems = items.map((item: any) => {
            if (item.stripePriceId) {
                return {
                    price: item.stripePriceId,
                    quantity: item.quantity || 1,
                }
            } else {
                // Fallback for demo/testing without syncing all products to Stripe yet
                return {
                    price_data: {
                        currency: 'gbp',
                        product_data: {
                            name: item.title,
                            images: item.image ? [item.image] : [],
                        },
                        unit_amount: Math.round(item.price * 100), // Amount in cents
                    },
                    quantity: item.quantity || 1,
                };
            }
        });

        const origin = req.headers.get('origin') || 'http://localhost:3000';
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'], // Add other methods if needed
            line_items: lineItems,
            mode: 'payment',
            success_url: `${origin}/checkout/confirmation?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/checkout/payment`,
        });

        return NextResponse.json({ url: session.url });
    } catch (err: any) {
        console.error('Error creating checkout session:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
