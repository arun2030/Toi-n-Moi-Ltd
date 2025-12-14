/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';

export default function ContactPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display antialiased text-gray-900 dark:text-white transition-colors duration-200">
            {/* Scoped Styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .material-symbols-outlined {
                    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
                }
            `}} />

            {/* Page Content */}
            <main className="min-h-screen pb-20">
                {/* Hero Header */}
                <div className="px-4 lg:px-40 pt-12 pb-8">
                    <div className="max-w-[960px] mx-auto">
                        <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-4 text-[#1c0d14] dark:text-white">Get in Touch</h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
                            We love hearing from our customers. Whether you have a question about sizing, an order, or just want to say hello, drop us a line below.
                        </p>
                    </div>
                </div>
                {/* Main Content Layout */}
                <div className="px-4 lg:px-40">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                            {/* Left Column: Contact Form */}
                            <div className="lg:col-span-7">
                                <div className="bg-white dark:bg-[#2a1420] rounded-2xl p-8 shadow-sm border border-[#f4e7ed] dark:border-gray-800">
                                    <form className="flex flex-col gap-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <label className="flex flex-col gap-2">
                                                <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Full Name</span>
                                                <input className="w-full h-12 rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:border-primary focus:ring-primary/20 transition-all text-sm placeholder:text-gray-400" placeholder="Jane Doe" type="text" />
                                            </label>
                                            <label className="flex flex-col gap-2">
                                                <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Email Address</span>
                                                <input className="w-full h-12 rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:border-primary focus:ring-primary/20 transition-all text-sm placeholder:text-gray-400" placeholder="jane@example.com" type="email" />
                                            </label>
                                        </div>
                                        <label className="flex flex-col gap-2">
                                            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Subject</span>
                                            <div className="relative">
                                                <select className="w-full h-12 rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:border-primary focus:ring-primary/20 transition-all text-sm text-gray-700 dark:text-gray-200 appearance-none px-4 pr-10">
                                                    <option value="">Select a topic</option>
                                                    <option value="orders">Order Status &amp; Shipping</option>
                                                    <option value="returns">Returns &amp; Exchanges</option>
                                                    <option value="products">Product &amp; Sizing Information</option>
                                                    <option value="other">Other Inquiries</option>
                                                </select>
                                                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 text-[20px]">expand_more</span>
                                            </div>
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Message</span>
                                            <textarea className="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:border-primary focus:ring-primary/20 transition-all text-sm resize-none p-4 placeholder:text-gray-400" placeholder="How can we help you today?" rows={5}></textarea>
                                        </label>
                                        <div className="pt-2">
                                            <button className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2" type="submit">
                                                <span>Send Message</span>
                                                <span className="material-symbols-outlined text-[18px]">send</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* Right Column: Info & Map */}
                            <div className="lg:col-span-5 flex flex-col gap-10">
                                {/* Contact Info Cards */}
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-xl font-bold mb-2">Direct Channels</h3>
                                    <div className="flex gap-4 items-start p-4 rounded-xl bg-white dark:bg-[#2a1420] border border-[#f4e7ed] dark:border-gray-800">
                                        <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined text-primary">call</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white">Customer Service</h4>
                                            <p className="text-sm text-gray-500 mt-1 mb-2">+1 (555) 012-3456</p>
                                            <p className="text-xs text-gray-400">Mon-Fri, 9am - 6pm EST</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start p-4 rounded-xl bg-white dark:bg-[#2a1420] border border-[#f4e7ed] dark:border-gray-800">
                                        <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined text-primary">mail</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white">Email Support</h4>
                                            <p className="text-sm text-gray-500 mt-1">hello@toinmoi-replica.com</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start p-4 rounded-xl bg-white dark:bg-[#2a1420] border border-[#f4e7ed] dark:border-gray-800">
                                        <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined text-primary">storefront</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white">Visit Our Boutique</h4>
                                            <p className="text-sm text-gray-500 mt-1">123 Fashion Ave<br />New York, NY 10012</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Map Section */}
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-xl font-bold">Find Us</h3>
                                    <div className="w-full h-64 rounded-xl overflow-hidden relative group">
                                        {/* Abstract Map Representation */}
                                        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800">
                                            <img alt="Map of New York City streets" className="w-full h-full object-cover opacity-80 mix-blend-multiply hover:opacity-100 transition-opacity duration-500" data-location="New York, NY" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfk34ao_2DBOnJ-mbtdcGOn11Fw_IBr-ugR8YsIziZBuNJueupWL_MbbgvT7hEKOUBAf7pToaRxhLsRhfdPLHtj9e5AmBsk6pegzmpLEvv298iau6FOL0pAWUHDO2Ijkq_w-OBocjbJT5WnbxLhKu7ePKXyHy8Lkl5mPeyd5miu0Kvo-aqjLBmE7NQEP3v5KVO6ApJzByCjG2SqfU_cEqzyk2cPuHfIWem4Hlrq8KeICQk8riLpGbWFMslECyGFhIdS16ES4WovII" />
                                        </div>
                                        <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm flex items-center gap-1">
                                            <span className="material-symbols-outlined text-primary text-[14px] fill-1">location_on</span>
                                            View on Google Maps
                                        </div>
                                    </div>
                                </div>
                                {/* Quick FAQ Link */}
                                <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                                    <h4 className="font-bold text-lg text-primary mb-2">Need to make a return?</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Check out our returns portal for quick and easy exchanges.</p>
                                    <Link className="inline-flex items-center text-sm font-bold text-primary hover:underline" href="/account/orders">
                                        Go to Returns Center <span className="material-symbols-outlined text-[16px] ml-1">arrow_forward</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* Footer */}
            <footer className="bg-white dark:bg-[#1a0c13] border-t border-[#f4e7ed] dark:border-gray-800 pt-16 pb-8">
                <div className="px-4 lg:px-40">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
                        <div className="col-span-2 lg:col-span-2">
                            <h2 className="text-2xl font-bold mb-4 tracking-tight">Toi &amp; Moi</h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs mb-6">Modern fashion for the contemporary soul. Quality, style, and sustainability in every stitch.</p>
                            <div className="flex gap-4">
                                <a className="size-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" href="#">
                                    <span className="text-xs font-bold">IG</span>
                                </a>
                                <a className="size-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" href="#">
                                    <span className="text-xs font-bold">FB</span>
                                </a>
                                <a className="size-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" href="#">
                                    <span className="text-xs font-bold">TW</span>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Shop</h4>
                            <ul className="flex flex-col gap-2 text-sm text-gray-500 dark:text-gray-400">
                                <li><Link className="hover:text-primary" href="/new-arrivals">New Arrivals</Link></li>
                                <li><Link className="hover:text-primary" href="/products">Clothing</Link></li>
                                <li><Link className="hover:text-primary" href="/accessories">Accessories</Link></li>
                                <li><Link className="hover:text-primary" href="/sale">Sale</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Help</h4>
                            <ul className="flex flex-col gap-2 text-sm text-gray-500 dark:text-gray-400">
                                <li><Link className="hover:text-primary" href="/returns">Shipping &amp; Returns</Link></li>
                                <li><Link className="hover:text-primary" href="/faq">FAQ</Link></li>
                                <li><Link className="hover:text-primary" href="/size-guide">Size Guide</Link></li>
                                <li><Link className="hover:text-primary" href="/contact">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Legal</h4>
                            <ul className="flex flex-col gap-2 text-sm text-gray-500 dark:text-gray-400">
                                <li><Link className="hover:text-primary" href="/privacy">Privacy Policy</Link></li>
                                <li><Link className="hover:text-primary" href="/terms">Terms of Service</Link></li>
                                <li><Link className="hover:text-primary" href="/cookies">Cookie Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-[#f4e7ed] dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                        <p>© 2024 Toi &amp; Moi Replica. All rights reserved.</p>
                        <div className="flex gap-4">
                            <span>English (US)</span>
                            <span>GBP</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
