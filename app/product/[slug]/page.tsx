/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { client } from '@/lib/sanity/client';
import { notFound } from 'next/navigation';

interface Product {
    _id: string;
    title: string;
    price: number;
    description: string;
    images: string[];
}

async function getProduct(slug: string): Promise<Product | null> {
    return client.fetch(`*[_type == "product" && slug.current == $slug][0]{
        _id,
        title,
        price,
        description,
        "images": images[].asset->url
    }`, { slug });
}

export default async function ProductDetailPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const product = await getProduct(params.slug);

    if (!product) {
        return notFound();
    }

    return (
        <div className="w-full flex-grow">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-6">
                {/* Breadcrumbs */}
                <nav className="flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <span className="material-symbols-outlined text-[16px] text-gray-400">chevron_right</span>
                    <Link href="/shop" className="hover:text-primary transition-colors">Shop</Link>
                    <span className="material-symbols-outlined text-[16px] text-gray-400">chevron_right</span>
                    <span className="font-semibold text-[#0e101b] dark:text-white">{product.title}</span>
                </nav>

                <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">
                    {/* Left Column: Image Gallery */}
                    <div className="w-full lg:w-[60%] flex flex-col gap-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {product.images && product.images.length > 0 ? (
                                product.images.map((imageUrl: string, index: number) => (
                                    <div key={index} className="aspect-[3/4] w-full rounded-xl bg-gray-100 dark:bg-gray-800 overflow-hidden group cursor-zoom-in relative">
                                        <img
                                            src={imageUrl}
                                            alt={product.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                ))
                            ) : (
                                <div className="aspect-[3/4] w-full rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400">
                                    No Image Available
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Product Details */}
                    <div className="w-full lg:w-[40%] relative">
                        <div className="sticky top-28 flex flex-col gap-8">
                            {/* Header Info */}
                            <div className="flex flex-col gap-4 border-b border-[#e7e9f3] dark:border-gray-800 pb-6">
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-3xl md:text-4xl font-bold leading-tight text-[#0e101b] dark:text-white">{product.title}</h1>
                                </div>
                                <div className="flex items-baseline gap-4">
                                    <span className="text-2xl font-bold text-[#0e101b] dark:text-white">£{product.price}</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            {/* Selectors */}
                            <div className="flex flex-col gap-6">
                                {/* Colors */}
                                <div className="flex flex-col gap-3">
                                    <span className="text-sm font-bold text-[#0e101b] dark:text-white">Color: <span className="font-normal text-gray-600 dark:text-gray-400">Classic Beige</span></span>
                                    <div className="flex items-center gap-3">
                                        <button aria-label="Beige" className="w-10 h-10 rounded-full bg-[#D2B48C] ring-2 ring-primary ring-offset-2 ring-offset-background-light dark:ring-offset-background-dark shadow-sm"></button>
                                        <button aria-label="Black" className="w-10 h-10 rounded-full bg-[#1A1A1A] hover:ring-2 hover:ring-gray-300 ring-offset-2 ring-offset-background-light dark:ring-offset-background-dark transition-all shadow-sm"></button>
                                        <button aria-label="Navy" className="w-10 h-10 rounded-full bg-[#1e3a8a] hover:ring-2 hover:ring-gray-300 ring-offset-2 ring-offset-background-light dark:ring-offset-background-dark transition-all shadow-sm"></button>
                                    </div>
                                </div>
                                {/* Sizes */}
                                <div className="flex flex-col gap-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-bold text-[#0e101b] dark:text-white">Size</span>
                                        <button className="text-sm text-primary underline underline-offset-4 hover:text-primary/80">Size Guide</button>
                                    </div>
                                    <div className="grid grid-cols-5 gap-2">
                                        <button className="h-12 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 font-medium hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all bg-white dark:bg-gray-800 text-gray-400 cursor-not-allowed opacity-50 relative overflow-hidden">
                                            XS
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-full border-t border-gray-300 dark:border-gray-600 transform -rotate-45"></div>
                                            </div>
                                        </button>
                                        <button className="h-12 flex items-center justify-center rounded-lg border-2 border-primary bg-primary/5 text-primary font-bold transition-all">S</button>
                                        <button className="h-12 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 font-medium hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all bg-white dark:bg-gray-800 text-[#0e101b] dark:text-white">M</button>
                                        <button className="h-12 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 font-medium hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all bg-white dark:bg-gray-800 text-[#0e101b] dark:text-white">L</button>
                                        <button className="h-12 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 font-medium hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all bg-white dark:bg-gray-800 text-[#0e101b] dark:text-white">XL</button>
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col gap-4 pt-4">
                                <div className="flex gap-3">
                                    <div className="relative w-24">
                                        <div className="flex items-center justify-between w-full h-12 px-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800">
                                            <button className="text-gray-500 hover:text-primary">
                                                <span className="material-symbols-outlined text-[18px]">remove</span>
                                            </button>
                                            <span className="font-medium text-[#0e101b] dark:text-white">1</span>
                                            <button className="text-gray-500 hover:text-primary">
                                                <span className="material-symbols-outlined text-[18px]">add</span>
                                            </button>
                                        </div>
                                    </div>
                                    <button className="flex-1 h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2">
                                        <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                                        Add to Cart
                                    </button>
                                    <button className="h-12 w-12 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-500 hover:text-red-500 hover:border-red-200 transition-colors">
                                        <span className="material-symbols-outlined">favorite</span>
                                    </button>
                                </div>
                                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-2">
                                    <span className="material-symbols-outlined text-[16px] text-green-600">check_circle</span>
                                    <span>Free shipping on orders over £200</span>
                                </div>
                            </div>

                            {/* Accordions */}
                            <div className="flex flex-col divide-y divide-[#e7e9f3] dark:divide-gray-800 border-t border-[#e7e9f3] dark:border-gray-800 mt-4">
                                <details className="group py-4">
                                    <summary className="flex justify-between items-center font-bold cursor-pointer list-none text-[#0e101b] dark:text-white group-hover:text-primary transition-colors">
                                        Description & Fit
                                        <span className="transition group-open:rotate-180">
                                            <span className="material-symbols-outlined">expand_more</span>
                                        </span>
                                    </summary>
                                    <div className="text-gray-600 dark:text-gray-300 mt-3 text-sm leading-relaxed space-y-2 animate-[fadeIn_0.3s_ease-in-out]">
                                        <p>Our Classic Oversized Trench is cut for a loose, draped fit. We recommend taking your normal size for the intended look, or sizing down for a more fitted appearance.</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>100% Cotton Gabardine</li>
                                            <li>Double-breasted closure</li>
                                            <li>Adjustable belt with D-rings</li>
                                            <li>Storm shield</li>
                                        </ul>
                                    </div>
                                </details>
                                <details className="group py-4">
                                    <summary className="flex justify-between items-center font-bold cursor-pointer list-none text-[#0e101b] dark:text-white group-hover:text-primary transition-colors">
                                        Shipping & Returns
                                        <span className="transition group-open:rotate-180">
                                            <span className="material-symbols-outlined">expand_more</span>
                                        </span>
                                    </summary>
                                    <div className="text-gray-600 dark:text-gray-300 mt-3 text-sm leading-relaxed">
                                        <p>We offer free standard shipping on all orders over £200. Returns are accepted within 30 days of purchase. Please ensure items are unworn and tags are attached.</p>
                                    </div>
                                </details>
                                <details className="group py-4">
                                    <summary className="flex justify-between items-center font-bold cursor-pointer list-none text-[#0e101b] dark:text-white group-hover:text-primary transition-colors">
                                        Sustainability
                                        <span className="transition group-open:rotate-180">
                                            <span className="material-symbols-outlined">expand_more</span>
                                        </span>
                                    </summary>
                                    <div className="text-gray-600 dark:text-gray-300 mt-3 text-sm leading-relaxed">
                                        <p>Made in a certified ethical factory in Portugal. We use organic cotton and recycled buttons to minimize our environmental footprint.</p>
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recommendation Section */}
                <div className="mt-24 mb-12 border-t border-[#e7e9f3] dark:border-gray-800 pt-16">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl font-bold text-[#0e101b] dark:text-white">Complete the Look</h3>
                        <a href="#" className="text-primary font-medium hover:underline">View All</a>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {/* Item 1 */}
                        <div className="flex flex-col gap-3 group cursor-pointer">
                            <div className="w-full aspect-[3/4] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden relative">
                                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDyn0b2Bgv8JqpjcpYt_HIVcO2Ywpfg5iujn3_x_wRqiD4dkblluY-k7aiRrE-mzGQZEWd8UVeNCEMrYlw9GTZbuW4kloHP5OGfxA3fF3t7E4-pT7QFQ8nDLQRFa5vYGDoPkX8G8C1yGmi0OISqFr2NMOsIblI0zURLZxeuX-W_ObO-rEUNPR0jBPaonyOeTSCjcQr4UvB55wAgLNVOmP-lk7-AvE15it42LoczQLz0h68oYjrJxPSnJBlL2qhoU2BDj_VKm-2vBIE')" }}></div>
                                <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 dark:bg-black/50 hover:bg-white text-gray-600 dark:text-white hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
                                    <span className="material-symbols-outlined text-[18px]">favorite</span>
                                </button>
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-sm font-bold text-[#0e101b] dark:text-white group-hover:text-primary transition-colors">Wool Knit Sweater</h4>
                                <span className="text-sm text-gray-500">£89.00</span>
                            </div>
                        </div>
                        {/* Item 2 */}
                        <div className="flex flex-col gap-3 group cursor-pointer">
                            <div className="w-full aspect-[3/4] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden relative">
                                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBP5gRE9JU1ikndi8ZdlV3JtTVbHaomk9dBUkosPn0k3kTnW9Zc0nt9NyiSwRaoXX2NW6TOqoxRWmgWiITSkOaEkF2dhLgIA2N8AFumn49X6BEBydylXAF9QrJILeavEkFn1Vv1C8WnuKtZvq661GMD66KevVLcMvW61Kf_oK9kM1FxxvonSCgx3G4yNhh5r0xK28Y8VvlRGiLBH1C9OuTpdbAAEXOdaxpTieOd0zUi1XzBOZ1ndU7c7H1Cy3ub8kusywGFD5ubmSE')" }}></div>
                                <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 dark:bg-black/50 hover:bg-white text-gray-600 dark:text-white hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
                                    <span className="material-symbols-outlined text-[18px]">favorite</span>
                                </button>
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-sm font-bold text-[#0e101b] dark:text-white group-hover:text-primary transition-colors">Straight Leg Jeans</h4>
                                <span className="text-sm text-gray-500">£120.00</span>
                            </div>
                        </div>
                        {/* Item 3 */}
                        <div className="flex flex-col gap-3 group cursor-pointer">
                            <div className="w-full aspect-[3/4] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden relative">
                                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCh5-L6aHzfxIDKuxwhKT2jfwgAIcj0mgHzeqDgm4YlX2ubTItlepBqZPdubekI_NO-k-U7c01-113v10Qew3RTE8DBsiPPQJ8KA6Tw6cEwWx5R-zklAhs6re-9dzOaiKqCthBu7oLzKh2HBpb5SEXZ1HbkVhpez5iCWHbwTmgEwNIM9PRcLrQv8xG4pVzyKIFDc7sNsRRV0qFmLIbN9SY3pgWQoA4KU0PUB7dCBREYnw_-jepaDOGOKcrBo7j_ije6HAT4350omKg')" }}></div>
                                <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 dark:bg-black/50 hover:bg-white text-gray-600 dark:text-white hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
                                    <span className="material-symbols-outlined text-[18px]">favorite</span>
                                </button>
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-sm font-bold text-[#0e101b] dark:text-white group-hover:text-primary transition-colors">Leather Ankle Boots</h4>
                                <span className="text-sm text-gray-500">£210.00</span>
                            </div>
                        </div>
                        {/* Item 4 */}
                        <div className="flex flex-col gap-3 group cursor-pointer">
                            <div className="w-full aspect-[3/4] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden relative">
                                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBojk5Nb7LZ-9PBvaUmCX1n_coW-jTfRJPGOGFbIKMtj5a_0kEazFXU-90AJgKC-A7Jwx9LI6MUvLS4YpIeWpE7LBXvBorVxglUtKsj0QL7PiUfVRJHjZEtkQJ51xMwbOiTDKJD857WAc6V9EJppRhGekYEYTqev6O9UHpFGcbXIQjPwqOz__XNgwa3W_cNymm9qu69nudyYmwv24rFozoGs3HqefaFCJL2L0K2ibwng_eQ7xBKoiE39CdfAzfHtjBm7whTvlnnYh0')" }}></div>
                                <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 dark:bg-black/50 hover:bg-white text-gray-600 dark:text-white hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
                                    <span className="material-symbols-outlined text-[18px]">favorite</span>
                                </button>
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-sm font-bold text-[#0e101b] dark:text-white group-hover:text-primary transition-colors">Minimalist Shoulder Bag</h4>
                                <span className="text-sm text-gray-500">£155.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
