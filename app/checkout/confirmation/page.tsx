/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';

export default function CheckoutConfirmationPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden min-h-screen flex flex-col">
            {/* Scoped Styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .material-symbols-outlined {
                    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
                }
            `}} />

            {/* Top Navigation */}
            <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
                <div className="px-6 md:px-10 lg:px-40 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity" href="/">
                            <span className="material-symbols-outlined text-3xl">diamond</span>
                            <h2 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight">Toi-n-Moi</h2>
                        </Link>
                        <nav className="hidden md:flex items-center gap-6">
                            <Link className="text-sm font-medium hover:text-primary transition-colors" href="/new-arrivals">New Arrivals</Link>
                            <Link className="text-sm font-medium hover:text-primary transition-colors" href="/clothing">Dresses</Link>
                            <Link className="text-sm font-medium hover:text-primary transition-colors" href="/clothing">Tops</Link>
                            <Link className="text-sm font-medium hover:text-primary transition-colors" href="/accessories">Accessories</Link>
                            <Link className="text-sm font-medium text-red-500 hover:text-red-600 transition-colors" href="/sale">Sale</Link>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden lg:flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2 w-64">
                            <span className="material-symbols-outlined text-gray-500 dark:text-gray-400 text-[20px]">search</span>
                            <input className="bg-transparent border-none outline-none text-sm ml-2 w-full placeholder-gray-500 dark:placeholder-gray-500 dark:text-white focus:ring-0" placeholder="Search" />
                        </div>
                        <div className="flex gap-2">
                            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-slate-900 dark:text-white lg:hidden">
                                <span className="material-symbols-outlined text-[24px]">search</span>
                            </button>
                            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-slate-900 dark:text-white">
                                <span className="material-symbols-outlined text-[24px]">favorite</span>
                            </button>
                            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-slate-900 dark:text-white relative">
                                <span className="material-symbols-outlined text-[24px]">shopping_bag</span>
                                <span className="absolute top-1 right-1 size-2 bg-primary rounded-full"></span>
                            </button>
                            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-slate-900 dark:text-white">
                                <span className="material-symbols-outlined text-[24px]">account_circle</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-[960px] space-y-8">
                    {/* Success Hero */}
                    <div className="text-center space-y-4 animate-fade-in-up">
                        <div className="inline-flex items-center justify-center size-20 rounded-full bg-green-100 text-green-600 mb-2">
                            <span className="material-symbols-outlined text-5xl">check_circle</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                            Order Confirmed!
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                            Thank you, Jane! Your order has been successfully placed. We&apos;ve sent a confirmation email to <span className="font-semibold text-primary">jane@example.com</span>.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 pt-4">
                            <button className="px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold transition-colors shadow-lg shadow-primary/30 flex items-center gap-2">
                                <span>Track Order</span>
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                            <Link href="/products" className="px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 text-slate-900 dark:text-white font-semibold transition-colors">
                                Continue Shopping
                            </Link>
                        </div>
                    </div>

                    {/* Order Details Grid */}
                    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden mt-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-800">
                            <div className="p-6 flex flex-col gap-1">
                                <span className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wider">Order Number</span>
                                <span className="text-slate-900 dark:text-white text-lg font-bold">#89012345</span>
                            </div>
                            <div className="p-6 flex flex-col gap-1">
                                <span className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wider">Estimated Delivery</span>
                                <span className="text-slate-900 dark:text-white text-lg font-bold">Oct 24 - Oct 27</span>
                            </div>
                            <div className="p-6 flex flex-col gap-1">
                                <span className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wider">Shipping To</span>
                                <span className="text-slate-900 dark:text-white text-base font-medium">Jane Doe</span>
                                <span className="text-slate-900 dark:text-white text-sm opacity-80">123 Fashion Ave, NY 10001</span>
                            </div>
                            <div className="p-6 flex flex-col gap-1">
                                <span className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wider">Payment Method</span>
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-xl">credit_card</span>
                                    <span className="text-slate-900 dark:text-white text-base font-medium">Visa ending in 4242</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Order Items */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
                                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">Order Summary (2 items)</h3>
                                </div>
                                {/* Table Head (Desktop) */}
                                <div className="hidden sm:grid grid-cols-12 gap-4 px-6 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    <div className="col-span-6">Product</div>
                                    <div className="col-span-3 text-center">Quantity</div>
                                    <div className="col-span-3 text-right">Price</div>
                                </div>
                                {/* Table Body */}
                                <div className="divide-y divide-gray-200 dark:divide-gray-800">
                                    {/* Item 1 */}
                                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 px-6 py-4 items-center">
                                        <div className="col-span-1 sm:col-span-6 flex gap-4">
                                            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-100">
                                                <img alt="Woman in a vibrant floral dress" className="h-full w-full object-cover object-center" data-alt="Woman in a vibrant floral dress" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKWNtUY3ESZMx1khmGNKPE1F6NWHdaFg9pY9rTiGCAjENv7_xGiL-8BbUDiNeziP0Rdz7QnIdgIUknXxo7Jp2EksnjGn93vAwktO98fBVHwsFU4We1EK7Zp13PlR8FokA94ezPm01fI-gwZPNHyUNHoH30KQkgH5y6g8ob5C-ewTE5Ji_HnoztWb5XkIbeg3WJ3LWGFKsqzReg5iYdR1oNHEmzyi5Y_wf8LiYcpXiCenYh9PxOYtuzhS40fPgL8C0S8Qdzlz18_qI" />
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <h4 className="text-base font-bold text-slate-900 dark:text-white">Violet Silk Evening Gown</h4>
                                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Size M, Violet</p>
                                            </div>
                                        </div>
                                        <div className="col-span-1 sm:col-span-3 flex sm:justify-center items-center gap-2 sm:gap-0">
                                            <span className="sm:hidden text-sm text-gray-500 mr-2">Qty:</span>
                                            <span className="text-slate-900 dark:text-white text-sm">1</span>
                                        </div>
                                        <div className="col-span-1 sm:col-span-3 flex sm:justify-end items-center gap-2 sm:gap-0">
                                            <span className="sm:hidden text-sm text-gray-500 mr-auto">Price:</span>
                                            <span className="text-slate-900 dark:text-white font-bold">£120.00</span>
                                        </div>
                                    </div>
                                    {/* Item 2 */}
                                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 px-6 py-4 items-center">
                                        <div className="col-span-1 sm:col-span-6 flex gap-4">
                                            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-100">
                                                <img alt="Patterned silk scarf draped" className="h-full w-full object-cover object-center" data-alt="Patterned silk scarf draped" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhxeLMAQC90HOjfn3PrMX2rlKbLTdcf5SVctFFfcy0SWsNtmtq9K-qyuqkxsx91T6xG6F1BgNNzaIlDmvbmqoJ2b-y_ABYGd5I86apLk3Sq4yT99hsMeSeNRuSpoTr8RHX8wiIhn94INeVIRyjL6MCzUXf0-qHslXhEbjvtQ_tYoFqSD3_EnncKiMaQBJKjZjP8_gxmz55SOP4HHVMmM1JhMaqo-Xx7b4CTTnc01xZuO6HxutgPdKYQscjzKUDphVFWZ9RKWOk7HM" />
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <h4 className="text-base font-bold text-slate-900 dark:text-white">Patterned Silk Scarf</h4>
                                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">One Size, Abstract</p>
                                            </div>
                                        </div>
                                        <div className="col-span-1 sm:col-span-3 flex sm:justify-center items-center gap-2 sm:gap-0">
                                            <span className="sm:hidden text-sm text-gray-500 mr-2">Qty:</span>
                                            <span className="text-slate-900 dark:text-white text-sm">1</span>
                                        </div>
                                        <div className="col-span-1 sm:col-span-3 flex sm:justify-end items-center gap-2 sm:gap-0">
                                            <span className="sm:hidden text-sm text-gray-500 mr-auto">Price:</span>
                                            <span className="text-slate-900 dark:text-white font-bold">£45.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pricing Breakdown */}
                        <div className="lg:col-span-1">
                            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 sticky top-24">
                                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-6">Order Total</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-500 dark:text-gray-400 text-sm">Subtotal</span>
                                        <span className="text-slate-900 dark:text-white font-medium">£165.00</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-500 dark:text-gray-400 text-sm">Shipping</span>
                                        <span className="text-green-600 font-medium text-sm bg-green-50 px-2 py-0.5 rounded">Free</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-500 dark:text-gray-400 text-sm">Tax (Estimate)</span>
                                        <span className="text-slate-900 dark:text-white font-medium">£14.85</span>
                                    </div>
                                    <div className="border-t border-gray-200 dark:border-gray-800 pt-4 mt-4 flex justify-between items-center">
                                        <span className="text-slate-900 dark:text-white font-bold text-lg">Total</span>
                                        <span className="text-primary font-black text-2xl">£179.85</span>
                                    </div>
                                </div>
                                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Need help with your order?</p>
                                    <Link className="text-primary font-semibold text-sm hover:underline" href="/contact">Contact Support</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recommended (Optional Upsell) */}
                    <div className="pt-12 border-t border-gray-200 dark:border-gray-800">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">You might also like</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Card 1 */}
                            <div className="group cursor-pointer">
                                <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-gray-100 mb-3">
                                    <img alt="Elegant woman posing in modern fashion outfit" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Elegant woman posing in modern fashion outfit" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2S-yjJbjP-N8NCKXjVPFkI5O8oSJe1-dnhpi7tP529lP4p3pDsG9yEsobQK2XkokUd2D7zIGU0F4FdSHKpjd06MtIEUyi7cjF_TYRvfuIibadUf6EYx9KAtrzvGQzPOGJCqWLDQU-FPtMdZDWJegeXUxxXx8Pxu7k-WOu3uY2oj2PHSDACtJ3yI8xVA_Tgb8hWE2KoP5Ow0uELzvdmZD0kb5TRusWNI7G0b4afZ52ZtfQKq_IV-FaZzc7whNrLoEA1G7o-T4uueI" />
                                    <button className="absolute bottom-3 right-3 p-2 bg-white/90 rounded-full shadow-sm hover:bg-primary hover:text-white transition-colors text-primary opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                                        <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                                    </button>
                                </div>
                                <h4 className="text-base font-bold text-slate-900 dark:text-white">Velvet Clutch</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">£85.00</p>
                            </div>
                            {/* Card 2 */}
                            <div className="group cursor-pointer">
                                <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-gray-100 mb-3">
                                    <img alt="Close up of high heels shoes" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Close up of high heels shoes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfQuTIDq4-pAVBV05FdQHH_Y7kucY1lPVT1-ctg4l8s3ZXq_zC6oQoP9_i6yNajoq6Socfbj7iSxh23JfrHF60uyRz3ImhG_05yck1Vc1hKUHvcvz8XPVA89a3jk7io-wvLqACwQcwrgeuKirhG24zi_ooxgS_v4G4NWHcPKbOP9SOm165rOrN3Pt7dt3kMZ7zPHaLcZbkwOKgQk-uPl5zO2MG1sY8CCcFVSgwcSuNBECXitx1KELryi6QU-Cb4jSBmpi_VDo-ZLY" />
                                    <button className="absolute bottom-3 right-3 p-2 bg-white/90 rounded-full shadow-sm hover:bg-primary hover:text-white transition-colors text-primary opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                                        <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                                    </button>
                                </div>
                                <h4 className="text-base font-bold text-slate-900 dark:text-white">Satin Heels</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">£120.00</p>
                            </div>
                            {/* Card 3 */}
                            <div className="group cursor-pointer">
                                <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-gray-100 mb-3">
                                    <img alt="Men's minimalist watch on wrist" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Men's minimalist watch on wrist" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAq_IXlmoXDm4xOJKGrS-XKnatubLb1Mx0ORGwn-HfkeVyI0BhjHaqIRoSxBaFFZitV_DQE3PAMp-k3MUPHtCYp0CmCAdQ4Wj7bAV4_aCBbgJIXfX2Uo28Zzh5Z4thlvcGu6ce_aUW3NvLoIYwHbG33lnkMquRIGw7FLedoxDM1teCf1W_JUMA6tVT0WkZhJdND6kOgTH8YabmuBJQasoZp0LDDHR-Bf7E1NMcIDHPYzc8oSAbcSJL7A-jdj1KKOj7AdQCXIJ6Yoa4" />
                                    <button className="absolute bottom-3 right-3 p-2 bg-white/90 rounded-full shadow-sm hover:bg-primary hover:text-white transition-colors text-primary opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                                        <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                                    </button>
                                </div>
                                <h4 className="text-base font-bold text-slate-900 dark:text-white">Gold Bracelet</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">£65.00</p>
                            </div>
                            {/* Card 4 */}
                            <div className="group cursor-pointer">
                                <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-gray-100 mb-3">
                                    <img alt="Model wearing long sleeve white shirt" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Model wearing long sleeve white shirt" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAruJZEGdW6xOmLPXvcVTKu8mTcLleKDojVWiUoXtel1cHryYJ2c6eOWzYPpy7n3sNgVZA-HgUa4D9JtYS0nPjoGkwGZTuGE7LdOYx5ZEzeURFMnAknHPWTEf8xDOzcRs6fu2ol9UPFNCyJYCvk_--XorGswIV6H6q-T-Bil0WANmU_C6BYpogAextlkzOHD1O2_1jdKo7g5HghKUkabLLb-MphAddi4Aq-Y3pIg19UuHyoe8CBzPyPATbIxeNxiMlT1RqKQLeM78c" />
                                    <button className="absolute bottom-3 right-3 p-2 bg-white/90 rounded-full shadow-sm hover:bg-primary hover:text-white transition-colors text-primary opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                                        <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                                    </button>
                                </div>
                                <h4 className="text-base font-bold text-slate-900 dark:text-white">Cotton Blouse</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">£55.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto">
                <div className="max-w-[960px] mx-auto px-6 lg:px-0 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h5 className="text-slate-900 dark:text-white font-bold mb-4">Shop</h5>
                            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                                <li><Link className="hover:text-primary" href="/new-arrivals">New Arrivals</Link></li>
                                <li><Link className="hover:text-primary" href="/products?sort=best-selling">Best Sellers</Link></li>
                                <li><Link className="hover:text-primary" href="/sale">Sale</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-slate-900 dark:text-white font-bold mb-4">Help</h5>
                            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                                <li><Link className="hover:text-primary" href="/shipping">Shipping &amp; Returns</Link></li>
                                <li><Link className="hover:text-primary" href="/faq">FAQ</Link></li>
                                <li><Link className="hover:text-primary" href="/contact">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-slate-900 dark:text-white font-bold mb-4">About</h5>
                            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                                <li><Link className="hover:text-primary" href="/about">Our Story</Link></li>
                                <li><Link className="hover:text-primary" href="/about#careers">Careers</Link></li>
                                <li><Link className="hover:text-primary" href="/privacy">Privacy Policy</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-slate-900 dark:text-white font-bold mb-4">Stay in touch</h5>
                            <div className="flex gap-4 mb-4">
                                <span className="size-8 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-500">
                                    <span className="text-xs">IG</span>
                                </span>
                                <span className="size-8 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-500">
                                    <span className="text-xs">FB</span>
                                </span>
                                <span className="size-8 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-500">
                                    <span className="text-xs">TW</span>
                                </span>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Sign up for our newsletter to get the latest news and offers.</p>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                        <p>© 2024 Toi-n-Moi. All rights reserved.</p>
                        <div className="flex gap-4 mt-4 md:mt-0">
                            <Link className="hover:text-primary" href="/terms">Terms</Link>
                            <Link className="hover:text-primary" href="/privacy">Privacy</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
