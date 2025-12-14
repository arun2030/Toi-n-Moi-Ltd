/* eslint-disable @next/next/no-img-element */
'use client';

export default function CheckoutReviewPage() {
    return (
        <div className="bg-[#f6f6f8] dark:bg-[#111621] text-[#0e121b] dark:text-gray-100 min-h-screen flex flex-col font-display">
            {/* TopNavBar */}
            <header className="w-full bg-white dark:bg-[#1a202c] border-b border-[#e7ebf3] dark:border-gray-800 sticky top-0 z-50">
                <div className="px-4 md:px-10 py-3 flex items-center justify-between mx-auto max-w-[1440px]">
                    {/* Logo */}
                    <div className="flex items-center gap-4 text-[#0e121b] dark:text-white">
                        <div className="size-8 text-primary">
                            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
                            </svg>
                        </div>
                        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Toi &amp; Moi</h2>
                    </div>
                    {/* Nav Links */}
                    <div className="flex items-center gap-8">
                        <div className="hidden md:flex items-center gap-9">
                            <a className="text-[#0e121b] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Shop</a>
                            <a className="text-[#0e121b] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">New Arrivals</a>
                            <a className="text-[#0e121b] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Sale</a>
                        </div>
                        {/* Cart Button */}
                        <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-700 transition-colors">
                            <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                            <span className="hidden sm:inline">Cart (2)</span>
                        </button>
                    </div>
                </div>
            </header>
            {/* Main Content */}
            <main className="flex-1 flex justify-center py-6 md:py-10 px-4 md:px-10">
                <div className="w-full max-w-[1100px] flex flex-col gap-6">
                    {/* Breadcrumbs */}
                    <div className="flex flex-wrap gap-2 text-sm md:text-base">
                        <a className="text-[#4e6797] dark:text-gray-400 font-medium hover:underline" href="#">Cart</a>
                        <span className="text-[#4e6797] dark:text-gray-400">/</span>
                        <a className="text-[#4e6797] dark:text-gray-400 font-medium hover:underline" href="#">Information</a>
                        <span className="text-[#4e6797] dark:text-gray-400">/</span>
                        <a className="text-[#4e6797] dark:text-gray-400 font-medium hover:underline" href="#">Shipping</a>
                        <span className="text-[#4e6797] dark:text-gray-400">/</span>
                        <span className="text-[#0e121b] dark:text-white font-bold">Review</span>
                        <span className="text-[#4e6797] dark:text-gray-400">/</span>
                        <span className="text-[#9ca3af] font-medium">Payment</span>
                    </div>
                    {/* Page Heading */}
                    <div className="flex flex-col gap-2">
                        <h1 className="text-[#0e121b] dark:text-white text-3xl md:text-4xl font-bold leading-tight">Review Order</h1>
                        <p className="text-[#4e6797] dark:text-gray-400 text-sm md:text-base">Please verify your details and items before placing the order.</p>
                    </div>
                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-2">
                        {/* Left Column: Details & Items */}
                        <div className="lg:col-span-8 flex flex-col gap-6">
                            {/* Action Panel: Shipping Address */}
                            <div className="bg-white dark:bg-[#1a202c] rounded-xl border border-[#d0d7e7] dark:border-gray-700 p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-shadow hover:shadow-sm">
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-[#0e121b] dark:text-white text-base font-bold">Shipping Address</h3>
                                    <p className="text-[#4e6797] dark:text-gray-400 text-sm md:text-base leading-relaxed">Jane Doe<br />123 Fashion Ave, Apt 4B<br />New York, NY 10012</p>
                                </div>
                                <a className="text-primary text-sm font-bold flex items-center gap-1 hover:underline group" href="#">
                                    Edit
                                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">edit</span>
                                </a>
                            </div>
                            {/* Action Panel: Shipping Method */}
                            <div className="bg-white dark:bg-[#1a202c] rounded-xl border border-[#d0d7e7] dark:border-gray-700 p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-shadow hover:shadow-sm">
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-[#0e121b] dark:text-white text-base font-bold">Shipping Method</h3>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-green-600 text-[20px]">local_shipping</span>
                                        <p className="text-[#4e6797] dark:text-gray-400 text-sm md:text-base">Standard Shipping (5-7 business days)</p>
                                    </div>
                                </div>
                                <a className="text-primary text-sm font-bold flex items-center gap-1 hover:underline group" href="#">
                                    Edit
                                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">edit</span>
                                </a>
                            </div>
                            {/* Action Panel: Payment Method */}
                            <div className="bg-white dark:bg-[#1a202c] rounded-xl border border-[#d0d7e7] dark:border-gray-700 p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-shadow hover:shadow-sm">
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-[#0e121b] dark:text-white text-base font-bold">Payment Method</h3>
                                    <div className="flex items-center gap-2 text-[#4e6797] dark:text-gray-400">
                                        <span className="material-symbols-outlined text-[20px]">credit_card</span>
                                        <p className="text-sm md:text-base">Visa ending in •••• 4242</p>
                                    </div>
                                </div>
                                <a className="text-primary text-sm font-bold flex items-center gap-1 hover:underline group" href="#">
                                    Edit
                                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">edit</span>
                                </a>
                            </div>
                            {/* Product List */}
                            <div className="mt-4">
                                <h3 className="text-[#0e121b] dark:text-white text-xl font-bold mb-4">Items in Your Shipment</h3>
                                <div className="flex flex-col gap-4">
                                    {/* Item 1 */}
                                    <div className="flex gap-4 p-4 bg-white dark:bg-[#1a202c] rounded-xl border border-[#d0d7e7] dark:border-gray-700 items-start">
                                        <div className="w-24 h-32 shrink-0 bg-gray-100 rounded-lg overflow-hidden relative">
                                            <img alt="A folded white t-shirt on a minimal background" className="w-full h-full object-cover" data-alt="A folded white t-shirt on a minimal background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0htEuFaNRUOVZDu-rc5Uk7kSDr6Ga_58iJNGV6xiZF6ZxuGacaf6r5_onrwQ01FHcpinD9WZloyXd1eeexnmYHLkDi_Ci5H9o3zIu1w6BQ1Co6PjyRN075fQ7WyiIllw88RbojeStcf3yM3ozzfv1IrUWxeo4PEQlaA1A9ChDYUIx9yFYBxJuMffUNO9A8Rprb3CDxn_bvf-clE8Ffa9vcd5ZGkOCtsUOP2Xg-EeFPRmRN9fJP_m59m8mrCNZlkE5epmTfskSp8c" />
                                        </div>
                                        <div className="flex flex-1 flex-col sm:flex-row justify-between gap-4">
                                            <div className="flex flex-col gap-1">
                                                <h4 className="text-[#0e121b] dark:text-white font-bold text-lg">Cotton Classic Tee</h4>
                                                <p className="text-[#4e6797] dark:text-gray-400 text-sm">Size: M • Color: White</p>
                                                <p className="text-[#4e6797] dark:text-gray-400 text-sm">Qty: 1</p>
                                            </div>
                                            <div className="text-right flex flex-row sm:flex-col justify-between items-end sm:items-end w-full sm:w-auto">
                                                <p className="text-[#0e121b] dark:text-white font-bold text-lg">£45.00</p>
                                                <button className="text-red-500 text-xs font-bold hover:underline">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Item 2 */}
                                    <div className="flex gap-4 p-4 bg-white dark:bg-[#1a202c] rounded-xl border border-[#d0d7e7] dark:border-gray-700 items-start">
                                        <div className="w-24 h-32 shrink-0 bg-gray-100 rounded-lg overflow-hidden relative">
                                            <img alt="Elegant beige linen trousers hanging" className="w-full h-full object-cover" data-alt="Elegant beige linen trousers hanging" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9tEdDH6HjaxbU6-4TRpr1hn8llDgQaX70VNEmONQa_qD2GNCPFkj-DK8pZorJlbeqokYpL7AAf093OoNhnqeJJXVk468_3y4t4jpflsBzkeM4xib8vUba9LwA4XzxM5ZzgJmyhCmZ7YXn5TGkkynP7e7b2K8k1T-1A4XXcnQrw82EbPckI1QA3MA2MW11PL6kcUkuOvni26ahTVKaUoqXy7A68_dWWNFmkE_Uiw6kTfFbcv1p0t7sfxQA7GgrDnT5dqNWokYpna8" />
                                        </div>
                                        <div className="flex flex-1 flex-col sm:flex-row justify-between gap-4">
                                            <div className="flex flex-col gap-1">
                                                <h4 className="text-[#0e121b] dark:text-white font-bold text-lg">Linen Pleated Trousers</h4>
                                                <p className="text-[#4e6797] dark:text-gray-400 text-sm">Size: 32 • Color: Beige</p>
                                                <p className="text-[#4e6797] dark:text-gray-400 text-sm">Qty: 1</p>
                                            </div>
                                            <div className="text-right flex flex-row sm:flex-col justify-between items-end sm:items-end w-full sm:w-auto">
                                                <p className="text-[#0e121b] dark:text-white font-bold text-lg">£120.00</p>
                                                <button className="text-red-500 text-xs font-bold hover:underline">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Right Column: Order Summary */}
                        <div className="lg:col-span-4">
                            <div className="sticky top-24 bg-white dark:bg-[#1a202c] rounded-xl border border-[#d0d7e7] dark:border-gray-700 p-6 flex flex-col gap-6 shadow-sm">
                                <h3 className="text-[#0e121b] dark:text-white text-xl font-bold">Order Summary</h3>
                                {/* Cost Breakdown */}
                                <div className="flex flex-col gap-3 pb-6 border-b border-[#e7ebf3] dark:border-gray-700">
                                    <div className="flex justify-between items-center text-[#4e6797] dark:text-gray-400">
                                        <span>Subtotal</span>
                                        <span className="font-medium text-[#0e121b] dark:text-gray-200">£165.00</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[#4e6797] dark:text-gray-400">
                                        <span>Shipping</span>
                                        <span className="font-medium text-green-600">Free</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[#4e6797] dark:text-gray-400">
                                        <span>Estimated Tax</span>
                                        <span className="font-medium text-[#0e121b] dark:text-gray-200">£14.85</span>
                                    </div>
                                </div>
                                {/* Total */}
                                <div className="flex justify-between items-end">
                                    <span className="text-[#0e121b] dark:text-white font-bold text-lg">Total</span>
                                    <div className="flex flex-col items-end">
                                        <span className="text-[#0e121b] dark:text-white font-extrabold text-2xl tracking-tight">£179.85</span>
                                        <span className="text-xs text-[#4e6797] dark:text-gray-500">GBP</span>
                                    </div>
                                </div>
                                {/* CTA Button */}
                                <button className="w-full bg-primary hover:bg-blue-700 text-white font-bold text-base py-3.5 px-6 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group">
                                    <span>Place Order</span>
                                    <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </button>
                                {/* Trust Badges */}
                                <div className="flex justify-center gap-4 text-[#9ca3af] dark:text-gray-500 mt-2">
                                    <div className="flex items-center gap-1 text-xs">
                                        <span className="material-symbols-outlined text-[16px]">lock</span>
                                        <span>Secure Checkout</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-xs">
                                        <span className="material-symbols-outlined text-[16px]">verified_user</span>
                                        <span>Money-back Guarantee</span>
                                    </div>
                                </div>
                                <div className="text-center text-xs text-[#9ca3af] dark:text-gray-500">
                                    By placing your order, you agree to our <a className="underline hover:text-primary" href="#">Terms of Service</a> and <a className="underline hover:text-primary" href="#">Privacy Policy</a>.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* Simple Footer for context */}
            <footer className="mt-12 py-8 bg-white dark:bg-[#1a202c] border-t border-[#e7ebf3] dark:border-gray-800">
                <div className="flex justify-center text-[#4e6797] dark:text-gray-500 text-sm">
                    © 2024 Toi &amp; Moi. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
