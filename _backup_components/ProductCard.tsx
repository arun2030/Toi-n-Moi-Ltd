import Link from 'next/link';
import Image from 'next/image';

interface Product {
    _id: string;
    title: string;
    slug: string;
    price: number;
    compareAtPrice?: number;
    imageUrl: string;
    available?: boolean;
}

export default function ProductCard({ product }: { product: Product }) {
    const onSale = product.compareAtPrice && product.compareAtPrice > product.price;
    const soldOut = product.available === false;

    return (
        <div className="product-grid-item product-block group/product-grid-item relative">
            <div className="product-grid-item__container">

                {/* IMAGE LINK */}
                <Link href={`/product/${product.slug}`} className="product-grid-item__link block" aria-label={product.title}>

                    {/* BADGES (Sale / Sold Out) */}
                    <div className="absolute top-2 right-2 z-10 flex flex-col items-end gap-1">
                        {soldOut && (
                            <div className="product__badge product__badge--sold bg-white text-black px-2 py-1 text-xs font-bold uppercase tracking-widest border border-black">
                                Sold Out
                            </div>
                        )}
                        {onSale && !soldOut && (
                            <div className="product__badge product__badge--sale bg-black text-white px-2 py-1 text-xs font-bold uppercase tracking-widest">
                                Sale
                            </div>
                        )}
                    </div>

                    {/* IMAGE WRAPPER (Matches Pipeline Aspect Ratio) */}
                    <div className="product-grid-item__images relative overflow-hidden" style={{ aspectRatio: '0.8' }}>
                        <div className="product-grid-item__image-wrapper is-active h-full w-full">
                            {product.imageUrl ? (
                                /* eslint-disable-next-line @next/next/no-img-element */
                                <img
                                    src={product.imageUrl}
                                    alt={product.title}
                                    className="product-grid-item__image h-full w-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
                                    loading="lazy"
                                />
                            ) : (
                                <div className="product-no-image h-full w-full bg-gray-100" />
                            )}
                        </div>
                    </div>
                </Link>

                {/* QUICK ADD BUTTON (Visual Only for now) */}
                <div className="group/quick-actions-toolbar absolute bottom-4 right-4 opacity-0 transition-opacity duration-300 group-hover/product-grid-item:opacity-100">
                    <button className="btn btn--quick-add bg-white text-black p-3 rounded-full shadow-lg hover:bg-black hover:text-white transition-colors" title="Quick Add">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 5v14M5 12h14" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* PRODUCT INFO */}
            <div className="product__grid__info text-center pt-4">
                <div className="product__grid__title__wrapper justify-center">
                    <Link href={`/product/${product.slug}`} className="product__grid__title block text-base font-medium text-black no-underline hover:text-gray-600 transition-colors">
                        {product.title}
                    </Link>
                </div>

                <div className="product__grid__price mt-1 text-sm text-gray-700">
                    {onSale ? (
                        <>
                            <span className="product__price--sale text-red-600 mr-2">
                                ${product.price}
                            </span>
                            <span className="compare-at text-gray-400 line-through">
                                ${product.compareAtPrice}
                            </span>
                        </>
                    ) : (
                        <span className="price">
                            ${product.price}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
