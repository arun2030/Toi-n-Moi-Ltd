'use client';

import { useState } from 'react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import { cn } from '@/lib/utils';
import { useCart } from '@/components/CartProvider';
import { PortableText } from '@portabletext/react';

interface ProductDetailProps {
    product: any;
}

export default function ProductDetail({ product }: ProductDetailProps) {
    const { addToCart } = useCart();
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [adding, setAdding] = useState(false);
    const [error, setError] = useState("");

    // Variant State
    // Assuming product.options = [{name: 'Size', values: ['S', 'M']}, {name: 'Color', values: ['Red', 'Blue']}]
    // We store selection as { Size: 'S', Color: 'Red' }
    const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});

    const handleOptionChange = (optionName: string, value: string) => {
        setSelectedOptions(prev => ({ ...prev, [optionName]: value }));
        setError("");
    };

    const handleAddToCart = async () => {
        // Validate Options
        if (product.options && product.options.length > 0) {
            const missingOptions = product.options.filter((opt: any) => !selectedOptions[opt.name]);
            if (missingOptions.length > 0) {
                setError(`Please select a ${missingOptions.map((o: any) => o.name).join(' and ')}`);
                return;
            }
        }

        setAdding(true);
        await new Promise(r => setTimeout(r, 500));

        addToCart({
            id: product._id,
            title: product.title,
            price: product.price,
            image: product.images?.[0], // You could pick variant image if implemented
            quantity: 1,
            slug: product.slug?.current,
            size: selectedOptions['Size'],
            color: selectedOptions['Color'],
            stripePriceId: product.stripePriceId || 'price_placeholder' // Placeholder
        });
        setAdding(false);
    };

    const images = product.images || [];
    const mainImage = images[selectedImageIndex];

    return (
        <div className="product-page">
            <div className="wrapper wrapper--full">
                <div className="float-grid product-single">

                    {/* Left Column: Gallery */}
                    <div className="grid__item product__media__wrapper medium-up--one-half">
                        <div className="product__grid product__grid--slides">
                            {/* Main Image */}
                            <div className="product__image__placeholder" style={{ aspectRatio: '3/4', position: 'relative', overflow: 'hidden' }}>
                                {mainImage ? (
                                    <img
                                        src={urlForImage(mainImage).url()}
                                        alt={product.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full bg-gray-100 text-gray-400">No Image</div>
                                )}
                            </div>

                            {/* Thumbnails */}
                            {images.length > 1 && (
                                <div className="media__thumb__holder" style={{ marginTop: '10px', display: 'flex', gap: '10px', overflowX: 'auto' }}>
                                    {images.map((img: any, idx: number) => (
                                        <div
                                            key={img._key || idx}
                                            className={`media__thumb ${selectedImageIndex === idx ? 'is-activated' : ''}`}
                                            onClick={() => setSelectedImageIndex(idx)}
                                            style={{ width: '80px', cursor: 'pointer', border: selectedImageIndex === idx ? '1px solid black' : '1px solid transparent' }}
                                        >
                                            <img src={urlForImage(img).url()} alt={`Thumbnail ${idx}`} style={{ width: '100%' }} />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Info */}
                    <div className="grid__item product__main__content medium-up--one-half">
                        <div className="product__inner is-sticky">

                            <div className="product__block__text">
                                <h1 className="product__title uppercase" style={{ fontSize: 'var(--font-heading-size)', fontFamily: 'var(--font-heading-family)' }}>
                                    {product.title}
                                </h1>
                            </div>

                            <div className="product__block__price">
                                <span className="product__price">
                                    ${product.price}
                                </span>
                            </div>

                            <div className="product__block__buttons">
                                {/* Options */}
                                {product.options && product.options.map((option: any) => (
                                    <div key={option.name} className="product__form__input" style={{ marginBottom: '15px' }}>
                                        <label className="product__form__label" style={{ display: 'block', marginBottom: '5px' }}>
                                            {option.name}: {selectedOptions[option.name]}
                                        </label>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                            {option.values.map((val: string) => (
                                                <button
                                                    key={val}
                                                    onClick={() => handleOptionChange(option.name, val)}
                                                    className={`btn btn--tertiary ${selectedOptions[option.name] === val ? 'is-selected' : ''}`}
                                                    style={{
                                                        padding: '10px 20px',
                                                        border: '1px solid #e5e5e5',
                                                        backgroundColor: selectedOptions[option.name] === val ? '#000' : 'transparent',
                                                        color: selectedOptions[option.name] === val ? '#fff' : '#000',
                                                        cursor: 'pointer'
                                                    }}
                                                >
                                                    {val}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}

                                {error && <p className="errors" style={{ color: 'red', marginTop: '10px' }}>{error}</p>}

                                <div className="product__submit__buttons" style={{ marginTop: '20px' }}>
                                    <button
                                        onClick={handleAddToCart}
                                        disabled={adding}
                                        className="btn--outline btn--full btn--primary btn--add-to-cart"
                                    >
                                        <span className="btn__text">
                                            {adding ? 'Adding...' : 'Add to Cart'}
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div className="product__block__description rte" style={{ marginTop: '30px' }}>
                                {product.description_portable ? (
                                    <PortableText value={product.description_portable} />
                                ) : (
                                    <p>{product.description}</p>
                                )}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
