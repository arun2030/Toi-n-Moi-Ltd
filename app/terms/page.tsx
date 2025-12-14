import Link from 'next/link';
import React from 'react';

export default function TermsOfUsePage() {
    return (
        <div className="bg-[#fbf8fc] dark:bg-[#1e1121] text-[#190e1b] dark:text-gray-100 font-display antialiased flex flex-col min-h-screen selection:bg-[#b017cf]/20 selection:text-[#b017cf]">
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-50 bg-[#fbf8fc]/80 dark:bg-[#1e1121]/80 backdrop-blur-md border-b border-[#f1e7f3] dark:border-[#3a2d3d] w-full">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
                    {/* Logo Area */}
                    <div className="flex items-center gap-8">
                        <Link href="/" className="flex items-center gap-4 text-[#190e1b] dark:text-white group">
                            <div className="size-8 text-[#b017cf] transition-transform group-hover:scale-110">
                                <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
                                </svg>
                            </div>
                            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Toi & Moi</h2>
                        </Link>
                        <nav className="hidden md:flex items-center gap-9">
                            <Link href="/shop" className="text-[#190e1b] dark:text-gray-200 text-sm font-medium hover:text-[#b017cf] transition-colors">Shop</Link>
                            <Link href="/shop" className="text-[#190e1b] dark:text-gray-200 text-sm font-medium hover:text-[#b017cf] transition-colors">New Arrivals</Link>
                            <Link href="/brands" className="text-[#190e1b] dark:text-gray-200 text-sm font-medium hover:text-[#b017cf] transition-colors">Brands</Link>
                            <Link href="/sale" className="text-[#190e1b] dark:text-gray-200 text-sm font-medium hover:text-[#b017cf] transition-colors">Sale</Link>
                        </nav>
                    </div>
                    {/* Actions Area */}
                    <div className="flex flex-1 justify-end gap-4 md:gap-8 items-center">
                        {/* Search Input */}
                        <div className="hidden lg:flex w-full max-w-xs h-10">
                            <div className="flex w-full items-center rounded-lg bg-[#f1e7f3] dark:bg-gray-800 text-[#8b4e97] dark:text-gray-400">
                                <div className="pl-4 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[20px]">search</span>
                                </div>
                                <input className="w-full bg-transparent border-none text-sm text-[#190e1b] dark:text-white placeholder:text-[#8b4e97]/70 dark:placeholder:text-gray-500 focus:ring-0 px-3" placeholder="Search products..." />
                            </div>
                        </div>
                        {/* Icons */}
                        <div className="flex gap-2">
                            <Link href="/login" className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-[#f1e7f3] dark:hover:bg-gray-800 text-[#190e1b] dark:text-white transition-colors">
                                <span className="material-symbols-outlined text-[24px]">account_circle</span>
                            </Link>
                            <Link href="/cart" className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-[#f1e7f3] dark:hover:bg-gray-800 text-[#190e1b] dark:text-white transition-colors relative">
                                <span className="material-symbols-outlined text-[24px]">shopping_cart</span>
                                <span className="absolute top-2 right-2 w-2 h-2 bg-[#b017cf] rounded-full"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content Wrapper */}
            <main className="flex-grow flex flex-col items-center w-full px-4 sm:px-8 py-8 md:py-12">
                <div className="w-full max-w-[1200px] flex flex-col gap-8">
                    {/* Breadcrumbs */}
                    <nav className="flex flex-wrap gap-2 text-sm">
                        <Link href="/" className="text-[#8b4e97] dark:text-[#b017cf]/80 font-medium hover:underline">Home</Link>
                        <span className="text-gray-400">/</span>
                        <span className="text-[#8b4e97] dark:text-[#b017cf]/80 font-medium hover:underline">Legal</span>
                        <span className="text-gray-400">/</span>
                        <span className="text-[#190e1b] dark:text-gray-200 font-medium">Terms of Use</span>
                    </nav>

                    {/* Page Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[#f1e7f3] dark:border-[#3a2d3d] pb-8">
                        <div className="flex flex-col gap-3 max-w-2xl">
                            <h1 className="text-[#190e1b] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                                Terms of Use
                            </h1>
                            <p className="text-[#8b4e97] dark:text-[#b017cf]/90 text-base md:text-lg font-medium">
                                Last Updated: October 24, 2023
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 text-base mt-2 max-w-prose">
                                Please read these terms carefully before using our services. By accessing or using Toi & Moi, you agree to be bound by these terms and all terms incorporated by reference.
                            </p>
                        </div>
                        <button className="group flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#f1e7f3] dark:border-gray-700 hover:bg-[#f1e7f3] dark:hover:bg-gray-800 transition-colors text-[#190e1b] dark:text-white text-sm font-bold">
                            <span className="material-symbols-outlined text-[20px] text-[#b017cf] group-hover:scale-110 transition-transform">print</span>
                            Print / Download PDF
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
                        {/* Sticky Sidebar (Table of Contents) */}
                        <aside className="hidden lg:block lg:col-span-3 xl:col-span-3">
                            <div className="sticky top-24 flex flex-col gap-4">
                                <h3 className="text-[#190e1b] dark:text-white text-lg font-bold flex items-center gap-2 mb-2">
                                    <span className="material-symbols-outlined text-[#b017cf]">list_alt</span>
                                    Table of Contents
                                </h3>
                                <nav className="flex flex-col gap-1 sidebar-scroll max-h-[calc(100vh-150px)] overflow-y-auto pr-2">
                                    <a href="#introduction" className="block p-3 rounded-lg text-sm font-medium text-[#190e1b] dark:text-gray-300 hover:bg-[#b017cf]/10 hover:text-[#b017cf] transition-all border-l-2 border-transparent hover:border-[#b017cf]">1. Introduction</a>
                                    <a href="#user-account" className="block p-3 rounded-lg text-sm font-medium text-[#190e1b] dark:text-gray-300 hover:bg-[#b017cf]/10 hover:text-[#b017cf] transition-all border-l-2 border-transparent hover:border-[#b017cf]">2. User Account & Security</a>
                                    <a href="#products-pricing" className="block p-3 rounded-lg text-sm font-medium text-[#190e1b] dark:text-gray-300 hover:bg-[#b017cf]/10 hover:text-[#b017cf] transition-all border-l-2 border-transparent hover:border-[#b017cf]">3. Products & Pricing</a>
                                    <a href="#orders-billing" className="block p-3 rounded-lg text-sm font-medium text-[#190e1b] dark:text-gray-300 hover:bg-[#b017cf]/10 hover:text-[#b017cf] transition-all border-l-2 border-transparent hover:border-[#b017cf]">4. Orders & Billing</a>
                                    <a href="#intellectual-property" className="block p-3 rounded-lg text-sm font-medium text-[#190e1b] dark:text-gray-300 hover:bg-[#b017cf]/10 hover:text-[#b017cf] transition-all border-l-2 border-transparent hover:border-[#b017cf]">5. Intellectual Property</a>
                                    <a href="#liability" className="block p-3 rounded-lg text-sm font-medium text-[#190e1b] dark:text-gray-300 hover:bg-[#b017cf]/10 hover:text-[#b017cf] transition-all border-l-2 border-transparent hover:border-[#b017cf]">6. Limitation of Liability</a>
                                    <a href="#contact" className="block p-3 rounded-lg text-sm font-medium text-[#190e1b] dark:text-gray-300 hover:bg-[#b017cf]/10 hover:text-[#b017cf] transition-all border-l-2 border-transparent hover:border-[#b017cf]">7. Contact Us</a>
                                </nav>
                                {/* Quick Helper Card */}
                                <div className="mt-6 p-4 rounded-xl bg-[#f1e7f3]/50 dark:bg-gray-800/50 border border-[#f1e7f3] dark:border-gray-700">
                                    <div className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-[#b017cf] mt-1">help</span>
                                        <div>
                                            <p className="text-sm font-bold text-[#190e1b] dark:text-white">Need Clarification?</p>
                                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Our support team is available 24/7 to answer questions about these terms.</p>
                                            <Link href="/contact" className="inline-block mt-3 text-xs font-bold text-[#b017cf] hover:underline">Contact Support →</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Main Text Content - Placeholder */}
                        {/* Main Text Content */}
                        <article className="col-span-1 lg:col-span-9 xl:col-span-8 flex flex-col gap-12 lg:pl-8 lg:border-l border-[#f1e7f3] dark:border-gray-800">
                            {/* Section 1 */}
                            <section id="introduction" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#b017cf]/10 text-[#b017cf] font-bold text-sm">1</span>
                                    <h2 className="text-2xl font-bold text-[#190e1b] dark:text-white">Introduction</h2>
                                </div>
                                <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300 max-w-none">
                                    <p className="leading-relaxed">
                                        Welcome to Toi & Moi. These Terms of Use ("Terms") govern your use of our website, products, and services. By accessing or using our platform, you acknowledge that you have read, understood, and agree to be legally bound by these Terms and our Privacy Policy.
                                    </p>
                                    <p className="leading-relaxed mt-4">
                                        If you do not agree to these Terms, you may not access or use the Services. We reserve the right to modify these Terms at any time. All changes will be effective immediately upon posting to the Website.
                                    </p>
                                </div>
                            </section>

                            {/* Section 2 */}
                            <section id="user-account" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#b017cf]/10 text-[#b017cf] font-bold text-sm">2</span>
                                    <h2 className="text-2xl font-bold text-[#190e1b] dark:text-white">User Account & Security</h2>
                                </div>
                                <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300 max-w-none">
                                    <p className="leading-relaxed">
                                        To access certain features of the Website, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                                    </p>
                                    <ul className="list-disc pl-6 mt-4 space-y-2 marker:text-[#b017cf]">
                                        <li>You are responsible for safeguarding your password.</li>
                                        <li>You agree not to disclose your password to any third party.</li>
                                        <li>You must take sole responsibility for any activities or actions under your account, whether or not you have authorized such activities or actions.</li>
                                    </ul>
                                    <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/10 border-l-4 border-yellow-400 rounded-r-lg">
                                        <p className="text-sm text-yellow-800 dark:text-yellow-200">
                                            <strong>Security Notice:</strong> We will never ask for your password via email or phone. Please report any suspicious activity immediately.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Section 3 */}
                            <section id="products-pricing" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#b017cf]/10 text-[#b017cf] font-bold text-sm">3</span>
                                    <h2 className="text-2xl font-bold text-[#190e1b] dark:text-white">Products & Pricing Accuracy</h2>
                                </div>
                                <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300 max-w-none">
                                    <p className="leading-relaxed">
                                        We strive to display our products and their colors as accurately as possible. However, the displayed colors of the products will depend upon your monitor and we cannot guarantee that your monitor's display of any color will be accurate.
                                    </p>
                                    <p className="leading-relaxed mt-4">
                                        Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time. We shall not be liable to you or to any third-party for any modification, price change, suspension, or discontinuance of the Service.
                                    </p>
                                </div>
                            </section>

                            {/* Section 4 */}
                            <section id="orders-billing" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#b017cf]/10 text-[#b017cf] font-bold text-sm">4</span>
                                    <h2 className="text-2xl font-bold text-[#190e1b] dark:text-white">Order Acceptance & Billing</h2>
                                </div>
                                <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300 max-w-none">
                                    <p className="leading-relaxed">
                                        We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address.
                                    </p>
                                    <p className="leading-relaxed mt-4">
                                        If we make a change to or cancel an order, we may attempt to notify you by contacting the e-mail and/or billing address/phone number provided at the time the order was made.
                                    </p>
                                </div>
                            </section>

                            {/* Section 5 */}
                            <section id="intellectual-property" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#b017cf]/10 text-[#b017cf] font-bold text-sm">5</span>
                                    <h2 className="text-2xl font-bold text-[#190e1b] dark:text-white">Intellectual Property Rights</h2>
                                </div>
                                <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300 max-w-none">
                                    <p className="leading-relaxed">
                                        The Website and its original content, features, and functionality are owned by Toi & Moi and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                        <div className="p-4 rounded-lg border border-[#f1e7f3] dark:border-gray-700 bg-[#fbf8fc] dark:bg-gray-800">
                                            <span className="material-symbols-outlined text-[#b017cf] mb-2">copyright</span>
                                            <h4 className="font-bold text-[#190e1b] dark:text-white mb-1">Copyright</h4>
                                            <p className="text-sm text-gray-500">All content including text, graphics, logos, and images is the property of Toi & Moi.</p>
                                        </div>
                                        <div className="p-4 rounded-lg border border-[#f1e7f3] dark:border-gray-700 bg-[#fbf8fc] dark:bg-gray-800">
                                            <span className="material-symbols-outlined text-[#b017cf] mb-2">verified</span>
                                            <h4 className="font-bold text-[#190e1b] dark:text-white mb-1">Trademarks</h4>
                                            <p className="text-sm text-gray-500">Toi & Moi and our logo are trademarks. They may not be used without permission.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Section 6 */}
                            <section id="liability" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#b017cf]/10 text-[#b017cf] font-bold text-sm">6</span>
                                    <h2 className="text-2xl font-bold text-[#190e1b] dark:text-white">Limitation of Liability</h2>
                                </div>
                                <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300 max-w-none">
                                    <p className="leading-relaxed">
                                        In no case shall Toi & Moi, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages.
                                    </p>
                                </div>
                            </section>

                            {/* Section 7 */}
                            <section id="contact" className="scroll-mt-32 pb-10 border-b border-[#f1e7f3] dark:border-gray-800">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#b017cf]/10 text-[#b017cf] font-bold text-sm">7</span>
                                    <h2 className="text-2xl font-bold text-[#190e1b] dark:text-white">Contact Us</h2>
                                </div>
                                <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300 max-w-none">
                                    <p className="leading-relaxed">
                                        If you have any questions about these Terms of Use, please contact us:
                                    </p>
                                    <ul className="list-none pl-0 mt-4 space-y-4">
                                        <li className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-[#8b4e97]">mail</span>
                                            <span>By email: <a href="mailto:legal@toi-n-moi.com" className="text-[#b017cf] hover:underline font-medium">legal@toi-n-moi.com</a></span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-[#8b4e97]">location_on</span>
                                            <span>By mail: 123 Fashion Ave, Design District, NY 10012, USA</span>
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            {/* Related Links Footer */}
                            <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-between items-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                                <div className="flex flex-col gap-1">
                                    <h4 className="font-bold text-[#190e1b] dark:text-white">Related Policies</h4>
                                    <p className="text-sm text-gray-500">Explore other legal documents.</p>
                                </div>
                                <div className="flex gap-4">
                                    <Link href="/privacy" className="text-sm font-bold text-[#b017cf] hover:bg-[#b017cf]/10 px-4 py-2 rounded-lg transition-colors">Privacy Policy</Link>
                                    <Link href="/shipping-returns" className="text-sm font-bold text-[#b017cf] hover:bg-[#b017cf]/10 px-4 py-2 rounded-lg transition-colors">Return Policy</Link>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </main>

            {/* Simple Footer for Context */}
            <footer className="bg-white dark:bg-[#221019] border-t border-[#f1e7f3] dark:border-[#3a2d3d] py-8 px-4 sm:px-8 mt-auto">
                <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© 2023 Toi & Moi. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-[#b017cf] transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-[#b017cf] transition-colors">Terms</Link>
                        <Link href="/sitemap" className="hover:text-[#b017cf] transition-colors">Sitemap</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
