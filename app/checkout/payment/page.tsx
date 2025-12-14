/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';

export default function CheckoutPaymentPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased selection:bg-primary selection:text-white min-h-screen flex flex-col">
            {/* Scoped Styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
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

            {/* Top Navigation */}
            <header className="sticky top-0 z-50 flex items-center justify-between border-b border-solid border-gray-200 bg-white/95 backdrop-blur-md px-6 py-4 dark:bg-background-dark/95 dark:border-gray-800 lg:px-40">
                <div className="flex items-center gap-4 text-slate-900 dark:text-white">
                    <div className="size-6 text-primary">
                        <span className="material-symbols-outlined text-3xl">local_florist</span>
                    </div>
                    <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-slate-900 dark:text-white">Toi &amp; Moi</h2>
                </div>
                <div className="hidden flex-1 justify-end gap-8 md:flex">
                    <div className="flex gap-3">
                        <button className="relative flex size-10 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-slate-900 transition-colors hover:bg-primary/20 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
                            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>shopping_bag</span>
                            <span className="absolute right-0 top-0 flex size-3 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">3</span>
                        </button>
                    </div>
                </div>
            </header>

            <main className="layout-container flex h-full grow flex-col px-4 py-6 md:px-10 lg:px-40">
                <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 lg:flex-row">
                    {/* Left Column: Payment Process */}
                    <div className="flex flex-1 flex-col gap-6">
                        {/* Breadcrumbs */}
                        <div className="flex flex-wrap items-center gap-2 text-sm md:text-base">
                            <Link className="font-medium text-gray-500 hover:text-primary dark:text-gray-400" href="/cart">Cart</Link>
                            <span className="text-gray-500 dark:text-gray-400">/</span>
                            <Link className="font-medium text-gray-500 hover:text-primary dark:text-gray-400" href="/checkout/information">Information</Link>
                            <span className="text-gray-500 dark:text-gray-400">/</span>
                            <span className="font-bold text-slate-900 dark:text-white">Payment</span>
                        </div>
                        {/* Heading */}
                        <div className="flex flex-col gap-2">
                            <h1 className="text-3xl font-black leading-tight tracking-tight text-slate-900 dark:text-white md:text-4xl">Payment Details</h1>
                            <p className="text-gray-500 dark:text-gray-400">Complete your purchase securely.</p>
                        </div>
                        {/* Payment Method Selection */}
                        <section className="flex flex-col gap-4">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Choose payment method</h3>
                            <div className="flex flex-col gap-3" style={{ '--radio-dot-svg': "url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(20,48,184)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%273%27/%3e%3c/svg%3e')" } as any}>
                                {/* Credit Card Option */}
                                <label className="group relative flex cursor-pointer items-center gap-4 rounded-xl border border-solid border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-primary dark:border-gray-700 dark:bg-gray-900 dark:hover:border-primary">
                                    <input defaultChecked className="h-5 w-5 border-2 border-gray-200 bg-transparent text-transparent checked:border-primary checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 dark:border-gray-600 dark:checked:border-primary" name="payment_method" type="radio" />
                                    <div className="flex grow items-center justify-between">
                                        <div className="flex flex-col">
                                            <p className="font-bold text-slate-900 dark:text-white">Credit Card</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Safe money transfer using your bank account.</p>
                                        </div>
                                        <div className="flex gap-2 text-gray-400 dark:text-gray-500">
                                            <img alt="Mastercard logo" className="h-6" data-alt="Mastercard logo showing overlapping red and orange circles" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJVNAF642ECt3e2RzTyRCf7O9KBVNz6lOAy5Gv-niAnl57dmAGOqqQfCnP9JhTwTOQP6rYkL9K6QteY6fubCyqrthp7c6PM7hYr-R5ArsBU7AXNpnV6FeJlcs-fG7LWPNlC42mzKJ1OyB5j8G3lbGz8RU_nhwyqi2AoTu3lVDOeg__2AC25r-wAj3wkc39Sv4vuuL9AHQMze__IDw1Bju4ySIITuTHFIN3Y3g4txo9uXgozWBbfZMJMP1mwk6t_5gc5LNl3spkZX8" />
                                            <img alt="Visa logo" className="h-6" data-alt="Visa logo in blue text with yellow detail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU3WrzlFv8RHDg0vXMYsJ5F0hgtfs-cWca8Wl56VU7zC8423N4eV3zQn1SFNxEpg0mk6G-KSPNgtvlsOHypAz7ErmMB8JTMOY8A9D1zvY518VwwGArnr_1cLC8VkJO6b9NdCtHi02taJ1EVQOGuWQcMxbv7F6srWnLbMOAv87w9H1uW1VtiF81BAmBPpsE7Rv6RYic8ehFwWnQWQWX4kiEVoCja_O5YwZlG7m4paQMHQT8jdLKQPKmEn6CfvW9NF8GQWRX-C70jpc" />
                                        </div>
                                    </div>
                                </label>
                                {/* PayPal Option */}
                                <label className="group relative flex cursor-pointer items-center gap-4 rounded-xl border border-solid border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-primary dark:border-gray-700 dark:bg-gray-900 dark:hover:border-primary">
                                    <input className="h-5 w-5 border-2 border-gray-200 bg-transparent text-transparent checked:border-primary checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 dark:border-gray-600 dark:checked:border-primary" name="payment_method" type="radio" />
                                    <div className="flex grow items-center justify-between">
                                        <div className="flex flex-col">
                                            <p className="font-bold text-slate-900 dark:text-white">PayPal</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">You will be redirected to PayPal website.</p>
                                        </div>
                                        <div className="text-[#003087]">
                                            <span className="material-symbols-outlined">account_balance_wallet</span>
                                        </div>
                                    </div>
                                </label>
                                {/* Google Pay Option */}
                                <label className="group relative flex cursor-pointer items-center gap-4 rounded-xl border border-solid border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-primary dark:border-gray-700 dark:bg-gray-900 dark:hover:border-primary">
                                    <input className="h-5 w-5 border-2 border-gray-200 bg-transparent text-transparent checked:border-primary checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 dark:border-gray-600 dark:checked:border-primary" name="payment_method" type="radio" />
                                    <div className="flex grow items-center justify-between">
                                        <div className="flex flex-col">
                                            <p className="font-bold text-slate-900 dark:text-white">Google Pay</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Pay easily with your saved Google Pay account.</p>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-400">
                                            <span className="material-symbols-outlined">android</span>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </section>
                        {/* Card Details Form */}
                        <section className="mt-2 flex flex-col gap-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                {/* Card Number */}
                                <div className="col-span-1 md:col-span-2">
                                    <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">Card Number</label>
                                    <div className="relative flex items-center rounded-lg border border-gray-200 bg-background-light focus-within:border-primary focus-within:ring-1 focus-within:ring-primary dark:border-gray-600 dark:bg-gray-800">
                                        <input className="w-full border-none bg-transparent px-4 py-3 text-slate-900 placeholder-gray-400 focus:ring-0 dark:text-white dark:placeholder-gray-500" placeholder="0000 0000 0000 0000" type="text" />
                                        <div className="mr-4 text-gray-400 dark:text-gray-500">
                                            <span className="material-symbols-outlined">credit_card</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Expiry Date */}
                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">Expiry Date</label>
                                    <div className="relative flex items-center rounded-lg border border-gray-200 bg-background-light focus-within:border-primary focus-within:ring-1 focus-within:ring-primary dark:border-gray-600 dark:bg-gray-800">
                                        <input className="w-full border-none bg-transparent px-4 py-3 text-slate-900 placeholder-gray-400 focus:ring-0 dark:text-white dark:placeholder-gray-500" placeholder="MM / YY" type="text" />
                                        <div className="mr-4 text-gray-400 dark:text-gray-500">
                                            <span className="material-symbols-outlined">calendar_month</span>
                                        </div>
                                    </div>
                                </div>
                                {/* CVC */}
                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">CVC / CVV</label>
                                    <div className="relative flex items-center rounded-lg border border-gray-200 bg-background-light focus-within:border-primary focus-within:ring-1 focus-within:ring-primary dark:border-gray-600 dark:bg-gray-800">
                                        <input className="w-full border-none bg-transparent px-4 py-3 text-slate-900 placeholder-gray-400 focus:ring-0 dark:text-white dark:placeholder-gray-500" placeholder="123" type="text" />
                                        <div className="mr-4 text-gray-400 dark:text-gray-500">
                                            <span className="material-symbols-outlined">lock</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Cardholder Name */}
                                <div className="col-span-1 md:col-span-2">
                                    <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">Cardholder Name</label>
                                    <div className="relative flex items-center rounded-lg border border-gray-200 bg-background-light focus-within:border-primary focus-within:ring-1 focus-within:ring-primary dark:border-gray-600 dark:bg-gray-800">
                                        <input className="w-full border-none bg-transparent px-4 py-3 text-slate-900 placeholder-gray-400 focus:ring-0 dark:text-white dark:placeholder-gray-500" placeholder="Full Name on Card" type="text" />
                                        <div className="mr-4 text-gray-400 dark:text-gray-500">
                                            <span className="material-symbols-outlined">person</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Checkboxes */}
                            <div className="flex flex-col gap-3">
                                <label className="flex items-center gap-3">
                                    <input className="h-5 w-5 rounded border-gray-200 text-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-800" type="checkbox" />
                                    <span className="text-sm font-medium text-slate-900 dark:text-gray-300">Save this card for future purchases</span>
                                </label>
                                <label className="flex items-center gap-3">
                                    <input defaultChecked className="h-5 w-5 rounded border-gray-200 text-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-800" type="checkbox" />
                                    <span className="text-sm font-medium text-slate-900 dark:text-gray-300">Billing address same as shipping</span>
                                </label>
                            </div>
                        </section>
                        {/* Pay Button */}
                        <div className="mt-4">
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
                                                        title: 'Floral Summer Dress',
                                                        price: 120.00,
                                                        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxQGJh7RFQvJ03dCXlpCR5_X34On_EdULTmHwM7u1KmMHZY6Xb1uqFEWcCZdduKPGq7JOI85R60Ffbur4Cf_jdUQEryBMwngb043Z3EQ6qKiUKFbGlwAL0WNr7CTUpps7Bl_IscoCFKnJhU3SIbBLfgSy2DBZF3zTrxdDW8CVL63gtkxjzuyME949qE10KI9mjUXgBx8I-a0DqVXtgJWwYCxUM76bzz4h5adyFi1r55nELrG8LyuUxBsIstZKmE2scEM3Vb-7-y40',
                                                        quantity: 1
                                                    },
                                                    {
                                                        title: 'Classic Heels',
                                                        price: 85.00,
                                                        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtIFd0N3JB0nJGxJDZljQkY2gd_hgN6QfXWpP8MZaNIYhsNsPrIa241Txd8ybKqIJcpyiAaR8q4lRxCSaL8v-d_aKJRyCGq1_RtcCl6j2fbmXV5v3rPZ_uAvvAdcsChvUF4vcjdL3jvvxibdqi3c2sW-ZgRIM9dELpULy4wZ5v_AZnb04D-SIV28iC9uyj8GbXnr7fDRbbUAZRZNsZZ7JqH3hSdFsAkQqxgqfOLeJGDx_FtiOg2R2_YRjZZKsETOtUm-_jGvNm1AE',
                                                        quantity: 1
                                                    },
                                                    {
                                                        title: 'Leather Tote',
                                                        price: 40.00,
                                                        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4ISbv-4K-G3b7w9CHcXot2ZhWTARp9-PASzICdX9daogdb0-wieQOxCnN3gm14TvcG9UQolBViRS0BnXDJlJv2MlLGhuXJW3vtmFywJeAwymfLV3OnArJqZKZEy-ChKh4JQ1qrcZ5ORh8qXEGzI76aCiCL3PxZK6DpVt41CThoDG5Joau_47C_yKQHPpy3Sgwx6Grz_IhRN-zM1Sh5N9lz5TFoueIbDtJxYsDuNEndimVMFXMVNEfaZoPTOnl6tsrxT_RiN0PB-Y',
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
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 text-lg font-bold text-white transition-all hover:bg-primary/90 focus:ring-4 focus:ring-primary/30 active:scale-[0.99]"
                            >
                                <span className="material-symbols-outlined">lock</span>
                                Pay £245.00
                            </button>
                            <div className="mt-4 flex justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>lock</span>
                                <p>All transactions are secure and encrypted.</p>
                            </div>
                        </div>
                    </div>
                    {/* Right Column: Order Summary */}
                    <aside className="flex w-full flex-col gap-6 lg:w-[420px]">
                        <div className="sticky top-24 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                            <h2 className="mb-6 text-xl font-bold text-slate-900 dark:text-white">Order Summary</h2>
                            {/* Cart Items */}
                            <div className="mb-6 flex flex-col gap-4">
                                {/* Item 1 */}
                                <div className="flex gap-4">
                                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                                        <img alt="Floral Summer Dress" className="h-full w-full object-cover" data-alt="Woman wearing floral summer dress standing in sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxQGJh7RFQvJ03dCXlpCR5_X34On_EdULTmHwM7u1KmMHZY6Xb1uqFEWcCZdduKPGq7JOI85R60Ffbur4Cf_jdUQEryBMwngb043Z3EQ6qKiUKFbGlwAL0WNr7CTUpps7Bl_IscoCFKnJhU3SIbBLfgSy2DBZF3zTrxdDW8CVL63gtkxjzuyME949qE10KI9mjUXgBx8I-a0DqVXtgJWwYCxUM76bzz4h5adyFi1r55nELrG8LyuUxBsIstZKmE2scEM3Vb-7-y40" />
                                        <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-gray-500 text-xs font-bold text-white shadow-sm">1</span>
                                    </div>
                                    <div className="flex flex-1 flex-col justify-center">
                                        <h4 className="font-bold text-slate-900 dark:text-white">Floral Summer Dress</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Size: M</p>
                                    </div>
                                    <div className="flex items-center justify-end">
                                        <p className="font-bold text-slate-900 dark:text-white">£120.00</p>
                                    </div>
                                </div>
                                {/* Item 2 */}
                                <div className="flex gap-4">
                                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                                        <img alt="Leather Ankle Boots" className="h-full w-full object-cover" data-alt="Close up of blue high heel shoes on pavement" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtIFd0N3JB0nJGxJDZljQkY2gd_hgN6QfXWpP8MZaNIYhsNsPrIa241Txd8ybKqIJcpyiAaR8q4lRxCSaL8v-d_aKJRyCGq1_RtcCl6j2fbmXV5v3rPZ_uAvvAdcsChvUF4vcjdL3jvvxibdqi3c2sW-ZgRIM9dELpULy4wZ5v_AZnb04D-SIV28iC9uyj8GbXnr7fDRbbUAZRZNsZZ7JqH3hSdFsAkQqxgqfOLeJGDx_FtiOg2R2_YRjZZKsETOtUm-_jGvNm1AE" />
                                        <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-gray-500 text-xs font-bold text-white shadow-sm">1</span>
                                    </div>
                                    <div className="flex flex-1 flex-col justify-center">
                                        <h4 className="font-bold text-slate-900 dark:text-white">Classic Heels</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Size: 38</p>
                                    </div>
                                    <div className="flex items-center justify-end">
                                        <p className="font-bold text-slate-900 dark:text-white">£85.00</p>
                                    </div>
                                </div>
                                {/* Item 3 */}
                                <div className="flex gap-4">
                                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                                        <img alt="Designer Tote Bag" className="h-full w-full object-cover" data-alt="Brown leather designer tote bag on white surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4ISbv-4K-G3b7w9CHcXot2ZhWTARp9-PASzICdX9daogdb0-wieQOxCnN3gm14TvcG9UQolBViRS0BnXDJlJv2MlLGhuXJW3vtmFywJeAwymfLV3OnArJqZKZEy-ChKh4JQ1qrcZ5ORh8qXEGzI76aCiCL3PxZK6DpVt41CThoDG5Joau_47C_yKQHPpy3Sgwx6Grz_IhRN-zM1Sh5N9lz5TFoueIbDtJxYsDuNEndimVMFXMVNEfaZoPTOnl6tsrxT_RiN0PB-Y" />
                                        <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-gray-500 text-xs font-bold text-white shadow-sm">1</span>
                                    </div>
                                    <div className="flex flex-1 flex-col justify-center">
                                        <h4 className="font-bold text-slate-900 dark:text-white">Leather Tote</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Color: Brown</p>
                                    </div>
                                    <div className="flex items-center justify-end">
                                        <p className="font-bold text-slate-900 dark:text-white">£40.00</p>
                                    </div>
                                </div>
                            </div>
                            {/* Divider */}
                            <div className="my-6 border-t border-dashed border-gray-200 dark:border-gray-700"></div>
                            {/* Cost Breakdown */}
                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                                    <span>Subtotal</span>
                                    <span className="font-medium text-slate-900 dark:text-white">£245.00</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                                    <span>Shipping</span>
                                    <span className="font-medium text-green-600 dark:text-green-400">Free</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                                    <span>Taxes</span>
                                    <span className="font-medium text-slate-900 dark:text-white">£0.00</span>
                                </div>
                            </div>
                            {/* Divider */}
                            <div className="my-6 border-t border-solid border-gray-200 dark:border-gray-700"></div>
                            {/* Total */}
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-bold text-slate-900 dark:text-white">Total</span>
                                <div className="flex items-end gap-1">
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">GBP</span>
                                    <span className="text-2xl font-black text-primary">£245.00</span>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}
