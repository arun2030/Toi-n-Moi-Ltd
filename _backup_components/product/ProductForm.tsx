'use client';

import { useCart } from '../CartProvider';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import ProductButtons from './ProductButtons';

interface ProductFormProps {
    product: any; // Using any for agility, ideally strictly typed
}

export default function ProductForm({ product }: ProductFormProps) {
    const { addToCart } = useCart();
    const [loading, setLoading] = useState(false);

    // Simple variant handling - assume single variant for now unless robust variant selector needed
    // If we had variants, we'd track selectedVariant here.
    const handleAddToCart = async () => {
        setLoading(true);
        // Simulate network delay for UX
        await new Promise(resolve => setTimeout(resolve, 500));

        addToCart({
            id: product._id,
            title: product.title,
            price: product.price,
            image: product.images?.[0], // Pass sanity image object
            quantity: 1,
            slug: product.slug?.current
        });
        setLoading(false);
    };

    return (
        <div className="product__main__content grid__item large-up--three-eighths medium--one-half">
            <div className="product__inner is-sticky top-24 pl-8">

                {/* Title */}
                <div className="product__block__title mb-4">
                    <h1 className="h2 product__title">{product.title}</h1>
                </div>

                {/* Price */}
                <div className="product__block__price mb-6">
                    <span className="product__price text-xl tracking-wide">
                        ${product.price}
                    </span>
                </div>

                {/* Description */}
                <div className="product__block__description rte body-size-4 mb-8 text-gray-700 leading-relaxed">
                    {product.description}
                </div>

                {/* Add to Cart */}
                <div className="product__block__buttons mb-8">
                    <button
                        onClick={handleAddToCart}
                        disabled={loading}
                        className={cn(
                            "btn btn--full btn--primary uppercase tracking-widest py-4 w-full transition-all",
                            loading ? "opacity-75 cursor-not-allowed" : "hover:bg-gray-900"
                        )}
                    >
                        {loading ? 'Adding...' : 'Add to Cart'}
                    </button>
                </div>

                {/* Extra info / Policy text often found in Shopify themes */}
                <div className="product__block__text text-sm text-gray-500 mt-8">
                    <p>Free shipping on orders over $100. Returns accepted within 30 days.</p>
                </div>

            </div>
        </div>
    );
}
