'use client';

import { useState } from 'react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import { cn } from '@/lib/utils';

interface ProductGalleryProps {
    images: any[];
    title?: string;
}

export default function ProductGallery({ images, title }: ProductGalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    if (!images || images.length === 0) {
        return (
            <div className="product__media__wrapper large-up--five-eighths medium--one-half bg-gray-100 min-h-[400px] flex items-center justify-center">
                <span className="text-gray-400">No Image Available</span>
            </div>
        );
    }

    const selectedImage = images[selectedIndex];

    return (
        <div className="grid__item product__media__wrapper large-up--five-eighths medium--one-half">
            {/* Main Image */}
            <div className="product__grid product__grid--slides" data-product-slideshow>
                <div className="product__media relative aspect-[3/4] w-full bg-gray-50 overflow-hidden group">
                    <Image
                        src={urlForImage(selectedImage).url()}
                        alt={title || 'Product Image'}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                    />
                </div>
            </div>

            {/* Thumbnails (Below) */}
            {images.length > 1 && (
                <div className="media__thumb__holder mt-4">
                    <div className="media__thumb__wrapper flex gap-2 overflow-x-auto pb-2">
                        {images.map((img: any, idx: number) => (
                            <button
                                key={img._key || idx}
                                onClick={() => setSelectedIndex(idx)}
                                className={cn(
                                    "media__thumb relative w-20 aspect-[3/4] flex-shrink-0 border-2 transition-all",
                                    selectedIndex === idx ? "border-black opacity-100" : "border-transparent opacity-60 hover:opacity-100"
                                )}
                            >
                                <Image
                                    src={urlForImage(img).url()}
                                    width={80}
                                    height={100}
                                    alt={`Thumbnail ${idx + 1}`}
                                    className="object-cover w-full h-full"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
