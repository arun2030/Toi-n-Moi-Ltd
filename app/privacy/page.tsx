import Link from 'next/link';
import React from 'react';

export default function PrivacyPolicyPage() {
    return (
        <div className="font-display bg-[#f8f6f8] dark:bg-[#1e1121] text-[#190e1b] antialiased overflow-x-hidden selection:bg-[#b017cf]/20 selection:text-[#b017cf] min-h-screen flex flex-col">
            <div className="relative flex min-h-screen w-full flex-col group/design-root">
                {/* Top Navigation */}
                <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-[#1e1121]/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
                    <div className="px-4 md:px-10 py-3 flex items-center justify-between whitespace-nowrap">
                        <div className="flex items-center gap-8">
                            <Link href="/" className="flex items-center gap-4 text-[#190e1b] dark:text-white group">
                                <div className="size-8 text-[#b017cf]">
                                    <svg className="w-full h-full text-current" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">  <path clipRule="evenodd" d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4ZM24 10C26.2091 10 28 11.7909 28 14C28 16.2091 26.2091 18 24 18C21.7909 18 20 16.2091 20 14C20 11.7909 21.7909 10 24 10ZM16 26C16 23.7909 17.7909 22 20 22H28C30.2091 22 32 23.7909 32 26V34C32 36.2091 30.2091 38 28 38H20C17.7909 38 16 36.2091 16 34V26Z" fill="currentColor" fillRule="evenodd"></path> </svg>
                                </div>
                                <h2 className="text-xl font-bold tracking-tight">Toi & Moi</h2>
                            </Link>
                            <nav className="hidden lg:flex items-center gap-9">
                                <Link href="/shop" className="text-sm font-medium hover:text-[#b017cf] transition-colors">New Arrivals</Link>
                                <Link href="/clothing" className="text-sm font-medium hover:text-[#b017cf] transition-colors">Clothing</Link>
                                <Link href="/shop" className="text-sm font-medium hover:text-[#b017cf] transition-colors">Shoes</Link>
                                <Link href="/accessories" className="text-sm font-medium hover:text-[#b017cf] transition-colors">Accessories</Link>
                                <Link href="/sale" className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors">Sale</Link>
                            </nav>
                        </div>
                        <div className="flex flex-1 justify-end gap-4 md:gap-8 items-center">
                            <label className="hidden md:flex flex-col min-w-40 h-10 max-w-64 group relative">
                                <div className="flex w-full flex-1 items-stretch rounded-lg bg-gray-50 dark:bg-gray-800 border border-transparent focus-within:border-[#b017cf]/50 transition-all">
                                    <div className="text-gray-400 flex items-center justify-center pl-3">
                                        <span className="material-symbols-outlined text-[20px]">search</span>
                                    </div>
                                    <input className="flex w-full min-w-0 flex-1 bg-transparent border-none focus:ring-0 text-sm px-3 text-[#190e1b] dark:text-white placeholder:text-gray-400" placeholder="Search..." />
                                </div>
                            </label>
                            <div className="flex gap-2">
                                {/* Icons */}
                                <Link href="/cart" className="flex size-10 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-[#190e1b] dark:text-white"> <span className="material-symbols-outlined">shopping_cart</span> </Link>
                                <Link href="/login" className="flex size-10 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-[#190e1b] dark:text-white"> <span className="material-symbols-outlined">person</span> </Link>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Layout */}
                <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Breadcrumbs */}
                    <div className="mb-8">
                        <nav className="flex text-sm font-medium text-gray-500">
                            <Link href="/" className="hover:text-[#b017cf] transition-colors">Home</Link>
                            <span className="mx-2">/</span>
                            <span className="hover:text-[#b017cf] transition-colors">Legal</span>
                            <span className="mx-2">/</span>
                            <span className="text-[#b017cf] font-semibold">Privacy Policy</span>
                        </nav>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Sticky Sidebar */}
                        <aside className="w-full lg:w-1/4 flex-shrink-0">
                            <div className="sticky top-28 space-y-8">
                                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
                                    <nav className="p-3 flex flex-col gap-1">
                                        <a href="#introduction" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#b017cf] text-white font-medium shadow-sm transition-all group"> <span className="material-symbols-outlined text-[18px]">info</span> Introduction </a>
                                        <a href="#data-collection" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-[#b017cf] transition-all group"> <span className="material-symbols-outlined text-[18px]">database</span> Information We Collect </a>
                                        <a href="#data-usage" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-[#b017cf] transition-all group"> <span className="material-symbols-outlined text-[18px]">analytics</span> How We Use Data </a>
                                        <a href="#sharing" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-[#b017cf] transition-all group"> <span className="material-symbols-outlined text-[18px]">share</span> Sharing Information </a>
                                        {/* More links */}
                                    </nav>
                                </div>
                            </div>
                        </aside>

                        {/* Content Area - Placeholder */}
                        {/* Content Area */}
                        <article className="w-full lg:w-3/4 space-y-16">
                            {/* Section: Introduction */}
                            <section id="introduction" className="scroll-mt-32">
                                <h2 className="text-2xl font-bold mb-4 text-[#190e1b] dark:text-white flex items-center gap-2">
                                    <span className="w-1.5 h-8 bg-[#b017cf] rounded-full block"></span>
                                    Introduction
                                </h2>
                                <div className="prose prose-lg text-gray-600 dark:text-gray-300 max-w-none">
                                    <p className="leading-relaxed mb-4">
                                        Welcome to Toi & Moi. We respect your privacy and are committed to protecting
                                        your personal data. This privacy policy will inform you as to how we look after
                                        your personal data when you visit our website (regardless of where you visit it
                                        from) and tell you about your privacy rights and how the law protects you.
                                    </p>
                                    <p className="leading-relaxed">
                                        By using our services, you agree to the collection and use of information in
                                        accordance with this policy. We will not use or share your information with
                                        anyone except as described in this Privacy Policy.
                                    </p>
                                </div>
                            </section>

                            {/* Section: Data Collection */}
                            <section id="data-collection" className="scroll-mt-32">
                                <h2 className="text-2xl font-bold mb-6 text-[#190e1b] dark:text-white flex items-center gap-2">
                                    <span className="w-1.5 h-8 bg-[#b017cf] rounded-full block"></span>
                                    Information We Collect
                                </h2>
                                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                                        We may collect, use, store and transfer different kinds of personal data about
                                        you which we have grouped together follows:
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="flex gap-4">
                                            <div className="size-10 rounded-full bg-[#b017cf]/10 flex items-center justify-center text-[#b017cf] flex-shrink-0">
                                                <span className="material-symbols-outlined">badge</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#190e1b] dark:text-white mb-1">
                                                    Identity Data
                                                </h4>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    Includes first name, maiden name, last name, username or similar
                                                    identifier, marital status, title, date of birth and gender.
                                                </p>
                                            </div>
                                        </div>
                                        {/* Additional Data Points omitted for brevity, adding key ones */}
                                        <div className="flex gap-4">
                                            <div className="size-10 rounded-full bg-[#b017cf]/10 flex items-center justify-center text-[#b017cf] flex-shrink-0">
                                                <span className="material-symbols-outlined">call</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#190e1b] dark:text-white mb-1">Contact Data</h4>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">Includes billing address, delivery address, email address and telephone numbers.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Section: How We Use Data */}
                            <section id="data-usage" className="scroll-mt-32">
                                <h2 className="text-2xl font-bold mb-6 text-[#190e1b] dark:text-white flex items-center gap-2">
                                    <span className="w-1.5 h-8 bg-[#b017cf] rounded-full block"></span>
                                    How We Use Your Data
                                </h2>
                                <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
                                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 w-1/3">Purpose / Activity</th>
                                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Type of Data</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                                            <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                                                <td className="px-6 py-4 text-sm font-medium text-[#190e1b] dark:text-white">To register you as a new customer</td>
                                                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Identity, Contact</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                                                <td className="px-6 py-4 text-sm font-medium text-[#190e1b] dark:text-white">To process and deliver your order</td>
                                                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Identity, Contact, Financial, Transaction, Marketing</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Section: Sharing */}
                            <section id="sharing" className="scroll-mt-32">
                                <h2 className="text-2xl font-bold mb-4 text-[#190e1b] dark:text-white flex items-center gap-2">
                                    <span className="w-1.5 h-8 bg-[#b017cf] rounded-full block"></span>
                                    Sharing Information
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    We do not sell your personal data. However, we may share your data with third parties for specific purposes like service delivery and legal compliance.
                                </p>
                            </section>

                            {/* Section: Contact */}
                            <section id="contact" className="scroll-mt-32">
                                <div className="bg-gradient-to-br from-[#b017cf]/90 to-purple-900 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl font-black mb-4 tracking-tight">Have Questions?</h2>
                                        <p className="text-purple-100 max-w-xl mx-auto mb-8 text-lg">Contact our Data Protection Officer for any privacy concerns.</p>
                                        <a href="mailto:privacy@toinmoi.com" className="px-8 py-3 bg-white text-[#b017cf] font-bold rounded-xl shadow-lg inline-flex items-center justify-center gap-2">
                                            Email DPO
                                        </a>
                                    </div>
                                </div>
                            </section>
                        </article>
                    </div>
                </main>
            </div>
        </div>
    );
}
