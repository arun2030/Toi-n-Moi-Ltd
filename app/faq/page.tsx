/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';

export default function FAQPage() {
    return (
        <div className="bg-[#f8f5f7] dark:bg-[#221019] text-[#1c0d14] dark:text-gray-100 font-display transition-colors duration-200 min-h-screen flex flex-col">
            {/* Scoped Styles for Accordion */}
            <style dangerouslySetInnerHTML={{
                __html: `
                details > summary {
                    list-style: none;
                }
                details > summary::-webkit-details-marker {
                    display: none;
                }
                details[open] summary ~ * {
                    animation: sweep .3s ease-in-out;
                }
                @keyframes sweep {
                    0%    {opacity: 0; transform: translateY(-10px)}
                    100%  {opacity: 1; transform: translateY(0)}
                }
                details[open] summary .chevron {
                    transform: rotate(180deg);
                }
                .chevron {
                    transition: transform 0.3s ease;
                }
            `}} />

            {/* Top Navigation */}
            <div className="relative flex w-full flex-col bg-white dark:bg-[#2d1522] border-b border-[#f4e7ed] dark:border-[#4a2436]">
                <header className="flex items-center justify-between whitespace-nowrap px-10 py-3 max-w-[1440px] mx-auto w-full">
                    <div className="flex items-center gap-8">
                        <Link className="flex items-center gap-4 text-[#1c0d14] dark:text-white" href="/">
                            <div className="size-8 text-primary flex items-center justify-center">
                                <span className="material-symbols-outlined text-[32px]">diamond</span>
                            </div>
                            <h2 className="text-[#1c0d14] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Toi &amp; Moi</h2>
                        </Link>
                        <nav className="hidden md:flex items-center gap-9">
                            <Link className="text-[#1c0d14] dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="/products">Shop</Link>
                            <Link className="text-[#1c0d14] dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="/new-arrivals">New Arrivals</Link>
                            <Link className="text-[#1c0d14] dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="/sale">Sale</Link>
                            <Link className="text-[#1c0d14] dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="/blog">Journal</Link>
                            <Link className="text-[#1c0d14] dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="/about">About Us</Link>
                        </nav>
                    </div>
                    <div className="flex flex-1 justify-end gap-6">
                        {/* Mobile Menu Button */}
                        <button className="md:hidden flex items-center justify-center rounded-lg size-10 bg-[#f4e7ed] dark:bg-[#4a2436] text-[#1c0d14] dark:text-white">
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                        {/* Desktop Actions */}
                        <div className="hidden md:flex gap-4">
                            <label className="flex flex-col min-w-40 !h-10 max-w-64">
                                <div className="flex w-full flex-1 items-stretch rounded-lg h-full border border-transparent focus-within:border-primary transition-colors">
                                    <div className="text-[#9c4973] dark:text-gray-400 flex bg-[#f4e7ed] dark:bg-[#4a2436] items-center justify-center pl-4 rounded-l-lg border-r-0">
                                        <span className="material-symbols-outlined text-[20px]">search</span>
                                    </div>
                                    <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-[#1c0d14] dark:text-white focus:outline-0 bg-[#f4e7ed] dark:bg-[#4a2436] h-full placeholder:text-[#9c4973] dark:placeholder:text-gray-500 px-3 pl-2 text-sm font-normal" placeholder="Search" />
                                </div>
                            </label>
                            <div className="flex gap-2">
                                <Link href="/cart" className="flex items-center justify-center rounded-lg size-10 bg-[#f4e7ed] dark:bg-[#4a2436] text-[#1c0d14] dark:text-white hover:bg-primary hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
                                </Link>
                                <Link href="/account" className="flex items-center justify-center rounded-lg size-10 bg-[#f4e7ed] dark:bg-[#4a2436] text-[#1c0d14] dark:text-white hover:bg-primary hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-[20px]">person</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

            {/* Main Content Container */}
            <main className="layout-container flex h-full grow flex-col px-4 md:px-10 lg:px-40 py-8">
                <div className="flex flex-col max-w-[1024px] mx-auto w-full flex-1">
                    {/* Breadcrumbs */}
                    <nav className="flex flex-wrap gap-2 px-4 pb-4">
                        <Link className="text-[#9c4973] dark:text-gray-400 text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors" href="/">Home</Link>
                        <span className="text-[#9c4973] dark:text-gray-500 text-sm font-medium">/</span>
                        <Link className="text-[#9c4973] dark:text-gray-400 text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors" href="#">Help Center</Link>
                        <span className="text-[#9c4973] dark:text-gray-500 text-sm font-medium">/</span>
                        <span className="text-[#1c0d14] dark:text-gray-200 text-sm font-medium">FAQ</span>
                    </nav>
                    {/* Page Heading */}
                    <div className="flex flex-wrap justify-between gap-3 px-4 pb-8">
                        <div className="flex min-w-72 flex-col gap-3">
                            <h1 className="text-[#1c0d14] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">Frequently Asked Questions</h1>
                            <p className="text-[#9c4973] dark:text-gray-300 text-lg font-normal leading-normal">Find answers to common questions about our products, shipping, and returns.</p>
                        </div>
                    </div>
                    {/* Search Bar (Large) */}
                    <div className="px-4 pb-10">
                        <label className="flex flex-col w-full h-14 md:h-16 shadow-sm rounded-lg">
                            <div className="flex w-full flex-1 items-stretch rounded-lg h-full border border-[#f4e7ed] dark:border-[#4a2436] focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                                <div className="text-primary flex bg-white dark:bg-[#2d1522] items-center justify-center pl-6 rounded-l-lg border-r-0">
                                    <span className="material-symbols-outlined text-[28px]">search</span>
                                </div>
                                <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-[#1c0d14] dark:text-white focus:outline-0 bg-white dark:bg-[#2d1522] h-full placeholder:text-[#9c4973] dark:placeholder:text-gray-500 px-4 text-lg font-normal leading-normal" placeholder="Search for answers (e.g. 'return policy')" />
                            </div>
                        </label>
                    </div>

                    {/* Two Column Layout */}
                    <div className="flex flex-col lg:flex-row gap-8 px-4">
                        {/* Sidebar (Sticky) */}
                        <aside className="w-full lg:w-1/4 min-w-[240px]">
                            <div className="bg-white dark:bg-[#2d1522] rounded-xl p-4 lg:sticky lg:top-8 border border-[#f4e7ed] dark:border-[#4a2436] shadow-sm">
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col px-3 pt-2">
                                        <h2 className="text-[#1c0d14] dark:text-white text-base font-bold uppercase tracking-wider">Categories</h2>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        {/* Active Item */}
                                        <button className="flex items-center gap-3 px-3 py-3 rounded-lg bg-primary/10 text-primary dark:text-primary-400 font-bold transition-colors">
                                            <span className="material-symbols-outlined text-[20px] fill-1">local_shipping</span>
                                            <p className="text-sm">Shipping &amp; Delivery</p>
                                        </button>
                                        {/* Standard Items */}
                                        <button className="flex items-center gap-3 px-3 py-3 rounded-lg text-[#1c0d14] dark:text-gray-300 hover:bg-[#f4e7ed] dark:hover:bg-[#4a2436] transition-colors text-left">
                                            <span className="material-symbols-outlined text-[20px]">info</span>
                                            <p className="text-sm font-medium">General Overview</p>
                                        </button>
                                        <button className="flex items-center gap-3 px-3 py-3 rounded-lg text-[#1c0d14] dark:text-gray-300 hover:bg-[#f4e7ed] dark:hover:bg-[#4a2436] transition-colors text-left">
                                            <span className="material-symbols-outlined text-[20px]">credit_card</span>
                                            <p className="text-sm font-medium">Orders &amp; Payments</p>
                                        </button>
                                        <button className="flex items-center gap-3 px-3 py-3 rounded-lg text-[#1c0d14] dark:text-gray-300 hover:bg-[#f4e7ed] dark:hover:bg-[#4a2436] transition-colors text-left">
                                            <span className="material-symbols-outlined text-[20px]">history</span>
                                            <p className="text-sm font-medium">Returns &amp; Refunds</p>
                                        </button>
                                        <button className="flex items-center gap-3 px-3 py-3 rounded-lg text-[#1c0d14] dark:text-gray-300 hover:bg-[#f4e7ed] dark:hover:bg-[#4a2436] transition-colors text-left">
                                            <span className="material-symbols-outlined text-[20px]">sell</span>
                                            <p className="text-sm font-medium">Product Care</p>
                                        </button>
                                    </div>
                                    {/* Sidebar Contact Mini-Card */}
                                    <div className="mt-6 p-4 rounded-lg bg-[#f4e7ed] dark:bg-[#4a2436]/50 border border-[#f4e7ed] dark:border-[#4a2436]">
                                        <div className="flex items-center gap-2 mb-2 text-primary">
                                            <span className="material-symbols-outlined text-[20px]">support_agent</span>
                                            <span className="text-xs font-bold uppercase">Support</span>
                                        </div>
                                        <p className="text-xs text-[#1c0d14] dark:text-gray-300 mb-3">Need to speak to someone directly?</p>
                                        <Link className="text-xs font-bold underline text-primary hover:text-primary-dark" href="/contact">Chat with us</Link>
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Main FAQ Content */}
                        <div className="w-full lg:w-3/4 flex flex-col gap-6">
                            {/* Section: Shipping */}
                            <div>
                                <h3 className="text-2xl font-bold text-[#1c0d14] dark:text-white mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">local_shipping</span>
                                    Shipping &amp; Delivery
                                </h3>
                                <div className="flex flex-col gap-3">
                                    {/* Question 1 */}
                                    <details className="group bg-white dark:bg-[#2d1522] border border-[#f4e7ed] dark:border-[#4a2436] rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                                        <summary className="flex cursor-pointer items-center justify-between p-5 text-[#1c0d14] dark:text-gray-100 font-bold select-none">
                                            <span className="text-lg">How long does standard shipping take?</span>
                                            <span className="material-symbols-outlined text-[#9c4973] chevron">expand_more</span>
                                        </summary>
                                        <div className="px-5 pb-5 pt-0 text-[#9c4973] dark:text-gray-300 leading-relaxed">
                                            <p>Standard shipping typically takes 3-5 business days within the continental US. For international orders, please allow 7-14 business days depending on customs processing in your country.</p>
                                        </div>
                                    </details>
                                    {/* Question 2 */}
                                    <details className="group bg-white dark:bg-[#2d1522] border border-[#f4e7ed] dark:border-[#4a2436] rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                                        <summary className="flex cursor-pointer items-center justify-between p-5 text-[#1c0d14] dark:text-gray-100 font-bold select-none">
                                            <span className="text-lg">Do you ship internationally?</span>
                                            <span className="material-symbols-outlined text-[#9c4973] chevron">expand_more</span>
                                        </summary>
                                        <div className="px-5 pb-5 pt-0 text-[#9c4973] dark:text-gray-300 leading-relaxed">
                                            <p>Yes! We ship to over 50 countries worldwide. Shipping costs and delivery times vary by location and are calculated at checkout. Please note that duties and taxes are not included in the shipping price.</p>
                                        </div>
                                    </details>
                                    {/* Question 3 */}
                                    <details className="group bg-white dark:bg-[#2d1522] border border-[#f4e7ed] dark:border-[#4a2436] rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                                        <summary className="flex cursor-pointer items-center justify-between p-5 text-[#1c0d14] dark:text-gray-100 font-bold select-none">
                                            <span className="text-lg">How can I track my order?</span>
                                            <span className="material-symbols-outlined text-[#9c4973] chevron">expand_more</span>
                                        </summary>
                                        <div className="px-5 pb-5 pt-0 text-[#9c4973] dark:text-gray-300 leading-relaxed">
                                            <p>Once your order ships, you’ll receive a confirmation email with a tracking number. You can also view your order status by logging into your account and visiting the <Link className="text-primary underline" href="/account">Orders</Link> page.</p>
                                        </div>
                                    </details>
                                    {/* Question 4 */}
                                    <details className="group bg-white dark:bg-[#2d1522] border border-[#f4e7ed] dark:border-[#4a2436] rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                                        <summary className="flex cursor-pointer items-center justify-between p-5 text-[#1c0d14] dark:text-gray-100 font-bold select-none">
                                            <span className="text-lg">What happens if my package is lost?</span>
                                            <span className="material-symbols-outlined text-[#9c4973] chevron">expand_more</span>
                                        </summary>
                                        <div className="px-5 pb-5 pt-0 text-[#9c4973] dark:text-gray-300 leading-relaxed">
                                            <p>If your package hasn&apos;t arrived within the expected timeframe, please verify the tracking information. If it appears lost, contact our support team within 14 days of the estimated delivery date, and we will assist you in filing a claim.</p>
                                        </div>
                                    </details>
                                </div>
                            </div>
                            {/* Contact CTA */}
                            <div className="mt-8 rounded-2xl bg-[#1c0d14] dark:bg-[#2d1522] text-white p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&amp;w=2029&amp;auto=format&amp;fit=crop')] bg-cover bg-center relative overflow-hidden">
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-[#221019]/80 dark:bg-black/70 z-0"></div>
                                <div className="relative z-10 flex flex-col gap-2 text-center md:text-left">
                                    <h4 className="text-2xl md:text-3xl font-bold">Still have questions?</h4>
                                    <p className="text-gray-300 text-sm md:text-base max-w-md">Can&apos;t find the answer you&apos;re looking for? Our friendly team is here to help.</p>
                                </div>
                                <div className="relative z-10 flex flex-wrap gap-3 justify-center">
                                    <Link href="/contact" className="px-6 py-3 rounded-lg bg-primary hover:bg-primary-dark text-white font-bold transition-colors shadow-lg shadow-primary/30 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[20px]">mail</span>
                                        Contact Us
                                    </Link>
                                    <button className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold transition-colors backdrop-blur-sm border border-white/20">
                                        Live Chat
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Simple Footer */}
            <footer className="bg-white dark:bg-[#2d1522] border-t border-[#f4e7ed] dark:border-[#4a2436] py-12 px-10 mt-12">
                <div className="max-w-[1024px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-[#1c0d14] dark:text-white">
                            <span className="material-symbols-outlined text-primary">diamond</span>
                            <span className="font-bold text-lg">Toi &amp; Moi</span>
                        </div>
                        <p className="text-sm text-[#9c4973] dark:text-gray-400">Curated fashion for the modern soul. Designed with love and attention to detail.</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h5 className="font-bold text-[#1c0d14] dark:text-white">Shop</h5>
                        <Link className="text-sm text-[#9c4973] dark:text-gray-400 hover:text-primary transition-colors" href="/new-arrivals">New Arrivals</Link>
                        <Link className="text-sm text-[#9c4973] dark:text-gray-400 hover:text-primary transition-colors" href="/clothing">Clothing</Link>
                        <Link className="text-sm text-[#9c4973] dark:text-gray-400 hover:text-primary transition-colors" href="/sale">Sale</Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h5 className="font-bold text-[#1c0d14] dark:text-white">Help</h5>
                        <Link className="text-sm text-[#9c4973] dark:text-gray-400 hover:text-primary transition-colors" href="/shipping">Shipping</Link>
                        <Link className="text-sm text-[#9c4973] dark:text-gray-400 hover:text-primary transition-colors" href="/returns">Returns</Link>
                        <Link className="text-sm text-[#9c4973] dark:text-gray-400 hover:text-primary transition-colors" href="/faq">FAQ</Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h5 className="font-bold text-[#1c0d14] dark:text-white">Stay in the loop</h5>
                        <div className="flex gap-2">
                            <input className="w-full rounded-md border-[#f4e7ed] dark:border-[#4a2436] bg-[#f8f5f7] dark:bg-[#221019] text-sm px-3 py-2 focus:ring-1 focus:ring-primary focus:border-primary" placeholder="Your email" type="email" />
                            <button className="bg-primary hover:bg-primary-dark text-white rounded-md px-3 py-2 transition-colors">
                                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="max-w-[1024px] mx-auto mt-12 pt-6 border-t border-[#f4e7ed] dark:border-[#4a2436] text-center text-xs text-[#9c4973] dark:text-gray-500">
                    © 2024 Toi &amp; Moi. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
