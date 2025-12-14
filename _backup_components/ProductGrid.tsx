import { client } from '@/sanity/client';
import Link from 'next/link';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

interface Product {
    _id: string;
    title: string;
    price: number;
    slug: string;
    imageUrl: string;
}

interface ProductGridProps {
    title?: string;
    collection?: any[]; // Sanity references
    limit?: number;
    layout?: 'grid' | 'carousel';
}

export default async function ProductGrid({ title, collection: manualProducts, limit = 4, layout = 'grid' }: ProductGridProps) {
    let products: Product[] = [];

    if (manualProducts) {
        // Map manual refs to product shape (assuming expansions happen in query)
        products = manualProducts.map((p: any) => ({
            _id: p._id,
            title: p.title,
            price: p.price,
            slug: p.slug?.current || p.slug, // Handle both object and string slug if needed
            imageUrl: p.images?.[0] ? urlForImage(p.images[0]).url() : '' // Fallback to empty string if null
        }));
    } else {
        // Default fetch if no props (fallback for Home)
        // Note: limit is harder to apply to query here without changing query string dynamically or slicing result
        const query = `*[_type == "product"] {
        _id,
        title,
        price,
        "slug": slug.current,
        "imageUrl": images[0].asset->url
    }[0...${limit}]`;
        products = await client.fetch(query);
    }

    // Apply limit to manual products if present
    if (manualProducts && limit) {
        products = products.slice(0, limit);
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {title && <h2 className="text-2xl font-medium mb-8 text-center uppercase tracking-widest">{title}</h2>}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
                {products.map((product) => (
                    <Link key={product._id} href={`/product/${product.slug}`} className="group">
                        <div className="aspect-[3/4] w-full overflow-hidden bg-gray-100 relative">
                            {product.imageUrl ? (
                                <Image
                                    src={product.imageUrl}
                                    alt={product.title}
                                    fill
                                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full text-gray-400 bg-gray-50">
                                    No Image
                                </div>
                            )}
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm font-medium text-gray-900 group-hover:underline decoration-1 underline-offset-4">
                                    {product.title}
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">${product.price}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
