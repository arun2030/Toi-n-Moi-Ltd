/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';

export default function CheckoutInformationPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased min-h-screen flex flex-col lg:flex-row">
            {/* Scoped Styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .form-checkbox:checked {
                    background-color: #1430b8;
                    border-color: #1430b8;
                }
                .form-radio:checked {
                    background-color: #1430b8;
                    border-color: #1430b8;
                }
                .form-input:focus, .form-select:focus {
                    border-color: #1430b8;
                    box-shadow: 0 0 0 1px #1430b8;
                }
                ::-webkit-scrollbar {
                    width: 6px;
                }
                ::-webkit-scrollbar-track {
                    background: transparent;
                }
                ::-webkit-scrollbar-thumb {
                    background: #e5e7eb;
                    border-radius: 3px;
                }
            `}} />

            {/* Left Column: Main Content */}
            <div className="w-full lg:w-[58%] xl:w-[55%] flex flex-col border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark min-h-screen">
                <div className="flex-1 px-4 py-8 sm:px-10 lg:pl-20 lg:pr-14 xl:pl-40 xl:pr-20">
                    {/* Logo */}
                    <header className="pb-6">
                        <div className="flex items-center gap-2 text-primary">
                            <span className="material-symbols-outlined text-4xl">local_florist</span>
                            <h1 className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">Toi &amp; Moi</h1>
                        </div>
                    </header>
                    {/* Breadcrumbs */}
                    <nav className="flex items-center flex-wrap gap-2 text-sm mb-8">
                        <Link className="text-gray-500 hover:text-primary transition-colors" href="/cart">Cart</Link>
                        <span className="material-symbols-outlined text-xs text-gray-500">chevron_right</span>
                        <span className="font-bold text-slate-900 dark:text-white">Information</span>
                        <span className="material-symbols-outlined text-xs text-gray-500">chevron_right</span>
                        <span className="text-gray-500">Payment</span>
                    </nav>
                    {/* ... (Skipping Contact Info & Address sections as they are unchanged) ... */}

                    {/* Navigation Actions */}
                    <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 mt-8 mb-12">
                        <Link className="text-primary hover:text-primary/80 flex items-center gap-1 font-medium text-sm transition-colors" href="/cart">
                            <span className="material-symbols-outlined text-base">chevron_left</span>
                            Return to cart
                        </Link>
                        <button
                            onClick={async () => {
                                try {
                                    const res = await fetch('/api/checkout', {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json',
                                        },
                                        body: JSON.stringify({
                                            items: [
                                                {
                                                    title: 'Silk Touch Blouse',
                                                    price: 120.00,
                                                    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvKq7WPNSS9STRYznA3h4VKjURG7_oPATPxQLtAAODvnRaaaa3eqKM8Jy7T5CF8K9-3YUtrHFHVEzWnGFIBDaE1rJp8Ix4QkiSCvbOArwHzpIGLf_3mOdNTf5K00zCI_j7EfrTAMt1PuBz5ig8IM1cmKEe8x8MesNhZ6HnnPDEZsQMqvqDfkMy5kjvXNlwhQO9IqkzyK-EDZWdA9pOqxhzaXbMPN3cjeMPPJ2F_CBGwkFVWAam-hg6zcKK0tr_LYoi0d_vjq09RIo',
                                                    quantity: 1
                                                },
                                                {
                                                    title: 'Essential Trousers',
                                                    price: 180.00,
                                                    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxA_wlWq9LVDbRx5Hjhlup1ndMvQyq4ZWyV1EjnJdc_3-olQiBddk_NaVeMNq527DgmsBk1p1ev8PCw1mM6gIjJQpErwLtLchM3GIcLJc5fVD3sTZu7Qgo7wNqBu9R0_F273cJNeD0ll9lglgYEcJhKDtN2EX4wNaVstsYbxq3OO8sfqV2X-7jKUkz_SZh1CAMR3IYYozCLH7N7aBqHmKBbVrUFrb7_Z-OG92Inqe7gbdHeWwZ3M3sk41_bGKwha1ytHJLnVjj08c',
                                                    quantity: 1
                                                }
                                            ]
                                        }),
                                    });
                                    const data = await res.json();
                                    if (data.url) {
                                        window.location.href = data.url;
                                    } else {
                                        console.error('No URL returned:', data);
                                        alert('Checkout failed. Please check configuration.');
                                    }
                                } catch (error) {
                                    console.error('Checkout failed:', error);
                                    alert('An error occurred during checkout. Please try again.');
                                }
                            }}
                            className="w-full sm:w-auto bg-primary hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                        >
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">lock</span>
                            Continue to Payment
                        </button>
                    </div>
                    {/* Footer Links */}
                    <footer className="border-t border-gray-200 dark:border-gray-800 pt-6 pb-4">
                        <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                            <a className="hover:text-primary underline" href="#">Refund policy</a>
                            <a className="hover:text-primary underline" href="#">Shipping policy</a>
                            <a className="hover:text-primary underline" href="#">Privacy policy</a>
                            <a className="hover:text-primary underline" href="#">Terms of service</a>
                        </div>
                    </footer>
                </div>
            </div>
            {/* Right Column: Order Summary (Sidebar) */}
            <div className="w-full lg:w-[42%] xl:w-[45%] bg-[#fafafa] dark:bg-background-dark/50 lg:border-l border-gray-200 dark:border-gray-800 order-first lg:order-last">
                <div className="sticky top-0 h-full max-h-screen overflow-y-auto px-4 py-8 sm:px-10 lg:pl-10 lg:pr-20 xl:pl-14 xl:pr-40">
                    {/* Cart Items */}
                    <div className="space-y-6 mb-8">
                        {/* Item 1 */}
                        <div className="flex items-center gap-4">
                            <div className="relative h-16 w-16 rounded-lg border border-gray-200 dark:border-gray-700 bg-white p-1">
                                <img alt="Abstract purple swirly artistic pattern" className="h-full w-full object-cover rounded" data-alt="Abstract purple swirly artistic pattern" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvKq7WPNSS9STRYznA3h4VKjURG7_oPATPxQLtAAODvnRaaaa3eqKM8Jy7T5CF8K9-3YUtrHFHVEzWnGFIBDaE1rJp8Ix4QkiSCvbOArwHzpIGLf_3mOdNTf5K00zCI_j7EfrTAMt1PuBz5ig8IM1cmKEe8x8MesNhZ6HnnPDEZsQMqvqDfkMy5kjvXNlwhQO9IqkzyK-EDZWdA9pOqxhzaXbMPN3cjeMPPJ2F_CBGwkFVWAam-hg6zcKK0tr_LYoi0d_vjq09RIo" />
                                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-slate-900/90 text-xs font-bold text-white backdrop-blur-sm">1</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-medium text-slate-900 dark:text-white">Silk Touch Blouse</h3>
                                <p className="text-xs text-gray-500">Lavender / M</p>
                            </div>
                            <p className="font-medium text-slate-900 dark:text-white">£120.00</p>
                        </div>
                        {/* Item 2 */}
                        <div className="flex items-center gap-4">
                            <div className="relative h-16 w-16 rounded-lg border border-gray-200 dark:border-gray-700 bg-white p-1">
                                <img alt="Minimalist purple silk fabric texture" className="h-full w-full object-cover rounded" data-alt="Minimalist purple silk fabric texture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxA_wlWq9LVDbRx5Hjhlup1ndMvQyq4ZWyV1EjnJdc_3-olQiBddk_NaVeMNq527DgmsBk1p1ev8PCw1mM6gIjJQpErwLtLchM3GIcLJc5fVD3sTZu7Qgo7wNqBu9R0_F273cJNeD0ll9lglgYEcJhKDtN2EX4wNaVstsYbxq3OO8sfqV2X-7jKUkz_SZh1CAMR3IYYozCLH7N7aBqHmKBbVrUFrb7_Z-OG92Inqe7gbdHeWwZ3M3sk41_bGKwha1ytHJLnVjj08c" />
                                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-slate-900/90 text-xs font-bold text-white backdrop-blur-sm">2</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-medium text-slate-900 dark:text-white">Essential Trousers</h3>
                                <p className="text-xs text-gray-500">Black / 32</p>
                            </div>
                            <p className="font-medium text-slate-900 dark:text-white">£180.00</p>
                        </div>
                    </div>
                    {/* Discount Code */}
                    <div className="flex gap-3 mb-8 pb-8 border-b border-dashed border-gray-300 dark:border-gray-700">
                        <div className="relative flex-1">
                            <input className="form-input w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-base placeholder:text-gray-400 focus:ring-0 focus:border-primary text-slate-900 dark:text-white" placeholder="Discount code" type="text" />
                        </div>
                        <button className="bg-primary/10 hover:bg-primary/20 text-primary font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                            Apply
                        </button>
                    </div>
                    {/* Calculation */}
                    <div className="space-y-3 mb-8 border-b border-dashed border-gray-300 dark:border-gray-700 pb-8">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Subtotal</span>
                            <span className="font-medium text-slate-900 dark:text-white">£300.00</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Shipping</span>
                            <span className="text-xs text-gray-500 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Calculated at next step</span>
                        </div>
                    </div>
                    {/* Total */}
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-medium text-slate-900 dark:text-white">Total</span>
                        <div className="flex items-baseline gap-2">
                            <span className="text-sm text-gray-500">GBP</span>
                            <span className="text-2xl font-bold text-slate-900 dark:text-white">£300.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
