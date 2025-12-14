import { client } from '@/sanity/client';
import ProductDetail from '@/components/product/ProductDetail';
import { notFound } from 'next/navigation';

export const revalidate = 60; // Revalidate every minute

// Generate static params for all products (optional but good for performance)
export async function generateStaticParams() {
    const query = `*[_type == "product"]{ "slug": slug.current }`;
    const products = await client.fetch(query);
    return products.map((p: any) => ({ slug: p.slug }));
}

async function getProduct(slug: string) {
    const query = `*[_type == "product" && slug.current == $slug][0] {
        _id,
        title,
        price,
        description,
        "description_portable": body, // Assuming 'body' block content exists for portable text
        slug,
        images,
        "sku": sku,
        "stockLevel": stockLevel,
        "options": options[]{
             name,
             values
        },
        "stripePriceId": stripePriceId
    }`;
    return client.fetch(query, { slug });
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = await getProduct(slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="page-content bg-white">
            <div className="wrapper section-padding">
                <ProductDetail product={product} />
            </div>
        </div>
    );
}
