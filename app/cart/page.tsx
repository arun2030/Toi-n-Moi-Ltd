/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export default function CartPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-white transition-colors duration-200 font-display">
            {/* Scoped Styles for Scrollbar */}
            <style dangerouslySetInnerHTML={{
                __html: `
                ::-webkit-scrollbar {
                    width: 8px;
                }
                ::-webkit-scrollbar-track {
                    background: transparent;
                }
                ::-webkit-scrollbar-thumb {
                    background: #cbd5e1;
                    border-radius: 4px;
                }
                ::-webkit-scrollbar-thumb:hover {
                    background: #94a3b8;
                }
            `}} />

            <main className="max-w-[1280px] mx-auto px-4 md:px-10 py-8 md:py-12">
                {/* Page Layout: Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                    {/* Left Column: Bag Items (Span 8) */}
                    <div className="lg:col-span-8 flex flex-col gap-6">
                        {/* Heading */}
                        <div className="flex items-end justify-between border-b border-[#e7e9f3] dark:border-gray-800 pb-4">
                            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-text-main dark:text-white">Shopping Bag (2)</h2>
                        </div>
                        {/* Free Shipping Progress */}
                        <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-[#e7e9f3] dark:border-gray-800 shadow-sm">
                            <div className="flex flex-wrap justify-between gap-2 mb-3">
                                <p className="font-medium text-text-main dark:text-white">Spend <span className="font-bold text-primary">£37.50</span> more for free shipping</p>
                                <span className="text-sm text-text-secondary dark:text-gray-400">Free shipping over £150</span>
                            </div>
                            <div className="h-2.5 w-full bg-[#e7e9f3] dark:bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-primary rounded-full" style={{ width: '75%' }}></div>
                            </div>
                        </div>
                        {/* Item List */}
                        <div className="flex flex-col gap-4">
                            {/* Item 1 */}
                            <div className="group flex flex-col sm:flex-row gap-6 bg-white dark:bg-surface-dark p-4 rounded-xl border border-transparent hover:border-[#e7e9f3] dark:hover:border-gray-700 transition-all shadow-sm">
                                {/* Image */}
                                <div className="w-full sm:w-32 aspect-[3/4] sm:aspect-square bg-gray-100 rounded-lg overflow-hidden shrink-0 relative">
                                    <div className="absolute inset-0 bg-cover bg-center" data-alt="Camel colored oversized wool coat" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDEFm1gZr6Utz-z93axpSUNMhMysJxb56XYoNc-jpOPA5FFj6vfHM2QMGqaL7lwG0Ao7rEpDL4vRhLSIA7jnWt2aA5VxRx51YHNtuhW0ZQPhxSHaVcC-lWbBdWnR0_S-heKB69KnGT6nddMczDvx3yTScJVQb8WffiIlfbydO3ZIZIlIjZPhDq9XSRlRaYjAuo0Ro_1RZvIrUKKwYFukLpsywueB5GnHzXz2EqzMbUXAaT8IETL_fCLwxaL4ZDoLqp2NpjAyKo-m_g')" }}></div>
                                </div>
                                {/* Content */}
                                <div className="flex flex-1 flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-lg font-bold text-text-main dark:text-white mb-1">Oversized Wool Coat</h3>
                                            <p className="text-sm text-text-secondary dark:text-gray-400">Art. No. 5439201</p>
                                            <div className="mt-2 space-y-1">
                                                <p className="text-sm text-text-secondary dark:text-gray-300">Color: <span className="text-text-main dark:text-white font-medium">Camel</span></p>
                                                <p className="text-sm text-text-secondary dark:text-gray-300">Size: <span className="text-text-main dark:text-white font-medium">M</span></p>
                                            </div>
                                            <div className="mt-2 text-green-600 text-xs font-bold flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[14px]">check_circle</span> In Stock
                                            </div>
                                        </div>
                                        <p className="text-lg font-bold text-text-main dark:text-white">£240.00</p>
                                    </div>
                                    <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                                        {/* Quantity */}
                                        <div className="flex items-center border border-[#e7e9f3] dark:border-gray-700 rounded-lg h-9">
                                            <button className="px-3 hover:text-primary transition-colors flex items-center justify-center h-full">
                                                <span className="material-symbols-outlined text-[16px]">remove</span>
                                            </button>
                                            <input className="w-8 p-0 text-center border-none focus:ring-0 bg-transparent text-sm font-medium text-text-main dark:text-white" readOnly type="text" value="1" />
                                            <button className="px-3 hover:text-primary transition-colors flex items-center justify-center h-full">
                                                <span className="material-symbols-outlined text-[16px]">add</span>
                                            </button>
                                        </div>
                                        {/* Actions */}
                                        <div className="flex items-center gap-4">
                                            <button className="text-sm text-text-secondary hover:text-primary dark:text-gray-400 dark:hover:text-white underline decoration-transparent hover:decoration-current transition-all">Move to Wishlist</button>
                                            <button className="text-sm text-red-500 hover:text-red-700 flex items-center gap-1 transition-colors group/remove">
                                                <span className="material-symbols-outlined text-[18px]">delete</span>
                                                <span className="hidden sm:inline">Remove</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Item 2 */}
                            <div className="group flex flex-col sm:flex-row gap-6 bg-white dark:bg-surface-dark p-4 rounded-xl border border-transparent hover:border-[#e7e9f3] dark:hover:border-gray-700 transition-all shadow-sm">
                                {/* Image */}
                                <div className="w-full sm:w-32 aspect-[3/4] sm:aspect-square bg-gray-100 rounded-lg overflow-hidden shrink-0 relative">
                                    <div className="absolute inset-0 bg-cover bg-center" data-alt="Grey slim fit trousers on model" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCxIX_0kUBtrBQaxoljljA_DdRISC9J_gTfvQdUactR5DnqY6V6bGDsvyb0IVFPLvodGzzEp2m4iSBNG_steIyaduoxRJVVR67lUAtiahyR7808bHqO2Glmp_tzy7KlpXHy8yiRZVXu6rsKJ25PpB9MCRp6Tf9rEYY_w1xxSjGx2dSgOqI9gO4mCiiYKcCTV1_iROKYP4j0kSv4mgeJz1UNOSDbaMI147CsBxASyeqz-mHMeaEU_Ha9Mht_bVebuF1vaYAWobyrrnI')" }}></div>
                                </div>
                                {/* Content */}
                                <div className="flex flex-1 flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-lg font-bold text-text-main dark:text-white mb-1">Slim Fit Trousers</h3>
                                            <p className="text-sm text-text-secondary dark:text-gray-400">Art. No. 8821004</p>
                                            <div className="mt-2 space-y-1">
                                                <p className="text-sm text-text-secondary dark:text-gray-300">Color: <span className="text-text-main dark:text-white font-medium">Charcoal</span></p>
                                                <p className="text-sm text-text-secondary dark:text-gray-300">Size: <span className="text-text-main dark:text-white font-medium">32</span></p>
                                            </div>
                                            <div className="mt-2 text-orange-500 text-xs font-bold flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[14px]">warning</span> Low Stock
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-lg font-bold text-text-main dark:text-white">£120.00</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                                        {/* Quantity */}
                                        <div className="flex items-center border border-[#e7e9f3] dark:border-gray-700 rounded-lg h-9">
                                            <button className="px-3 hover:text-primary transition-colors flex items-center justify-center h-full">
                                                <span className="material-symbols-outlined text-[16px]">remove</span>
                                            </button>
                                            <input className="w-8 p-0 text-center border-none focus:ring-0 bg-transparent text-sm font-medium text-text-main dark:text-white" readOnly type="text" value="1" />
                                            <button className="px-3 hover:text-primary transition-colors flex items-center justify-center h-full">
                                                <span className="material-symbols-outlined text-[16px]">add</span>
                                            </button>
                                        </div>
                                        {/* Actions */}
                                        <div className="flex items-center gap-4">
                                            <button className="text-sm text-text-secondary hover:text-primary dark:text-gray-400 dark:hover:text-white underline decoration-transparent hover:decoration-current transition-all">Move to Wishlist</button>
                                            <button className="text-sm text-red-500 hover:text-red-700 flex items-center gap-1 transition-colors">
                                                <span className="material-symbols-outlined text-[18px]">delete</span>
                                                <span className="hidden sm:inline">Remove</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Suggested Products Carousel Area (Simplified Grid) */}
                        <div className="mt-12 pt-8 border-t border-[#e7e9f3] dark:border-gray-800">
                            <h3 className="text-xl font-bold mb-6 text-text-main dark:text-white">You Might Also Like</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {/* Suggestion 1 */}
                                <div className="group cursor-pointer">
                                    <div className="aspect-[3/4] bg-gray-100 rounded-lg mb-3 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Beige tote bag" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDvX3PWHdUg9Ir4Wg9rmwBlsyg7D04yEdbrwj8jsyPc6uNqaRYTs9uBgRU_dypkUqERgEQyLyvmGXmg5ZO78ZABcXWO11taOMkmd9qj7281KM4VlEmZiH0964FPU58Op-48b0D3PtsdXjKETOfNNDfmPUuHw20xOUPVTMqe2zE3V7bVrflO7xG1qL9soAtS96KO41OxkDHQXK0RnhJFeAVF415Dw2JJz5fliDS45RGSL7xWTkzTWspbAvZC4hLcVaiorfOpQhjAfH0')" }}></div>
                                        <button className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white text-primary">
                                            <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                                        </button>
                                    </div>
                                    <p className="text-sm font-semibold text-text-main dark:text-white truncate">Leather Tote Bag</p>
                                    <p className="text-xs text-text-secondary dark:text-gray-400">£85.00</p>
                                </div>
                                {/* Suggestion 2 */}
                                <div className="group cursor-pointer">
                                    <div className="aspect-[3/4] bg-gray-100 rounded-lg mb-3 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="White classic t-shirt" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBS0xzpn9xKPyKgnASh-ASeU94n2fhwqB4h5rVhnz3sUBQ0ROUrDTiTRFuwhEAs13f2cB6eO5WmIfXFiCUphQKneLrFUwXrGE8WRrhvXn4rBzHg1AH5UDSaUvpHVKF9hvTPZJhbDK1CzOHuVjK4syJiBoN2NnAt7hZZrgJQuyCqqnE_rvbBHCsRanCcdpPoisCzqhF1-os1wiaxO7wqIWHp-pMpd3m-mHg3E_QjoqdsuZ9Ly7YVvsBvLrWsiGz445btcO8gjYNTqV4')" }}></div>
                                        <button className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white text-primary">
                                            <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                                        </button>
                                    </div>
                                    <p className="text-sm font-semibold text-text-main dark:text-white truncate">Classic White Tee</p>
                                    <p className="text-xs text-text-secondary dark:text-gray-400">£35.00</p>
                                </div>
                                {/* Suggestion 3 */}
                                <div className="group cursor-pointer">
                                    <div className="aspect-[3/4] bg-gray-100 rounded-lg mb-3 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Black wool scarf" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCk4esh6eeGZCCPQYFbzAtcUpOZ77en3XsAkHfA3kA8de937pUcvg5zC9LRm8Evz20qG9rLAJbI9y_8x04z7eeRemzTfBwwl6mAA5oDfckMAASEHqPXYjSUpg120eoGr8l3wZHJmYb4w2VO7RUsgqMrpefrEyzkT2Yi976uqHqIHQ7LXQxjp1_-eGKU9Jook_qDyH-_TOJjpuBXz9OF8l6GCWCNHUILtF6XwOhROKdX7BwFE_vONEvPqUARnxN3qFH4wS3Vb6AV4Ws')" }}></div>
                                        <button className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white text-primary">
                                            <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                                        </button>
                                    </div>
                                    <p className="text-sm font-semibold text-text-main dark:text-white truncate">Merino Wool Scarf</p>
                                    <p className="text-xs text-text-secondary dark:text-gray-400">£60.00</p>
                                </div>
                                {/* Suggestion 4 */}
                                <div className="group cursor-pointer">
                                    <div className="aspect-[3/4] bg-gray-100 rounded-lg mb-3 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Silver minimalist watch" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBozwXJ-Z3OtmtpS8oKrovNMUfg_4OkilkHIQB4HTJG0ymSi0yL7e7Wei0pDuxYqgi-9mysIOC1j5c9LoLUfBNigevpjNcruxjY-Uomq-k0DPSxsoq6UcuHyBgPwDa0RPcHb67IIQW3D8jUoloxMvfcsV44kHnqdmI3F7VcYPH8xqppgXe9z6Z2Xj1G_zp0kWlcadvox2HrRSYmslM7XULlefwdvVMkVs3jRz0F1aqFC-j9hFQnj-Fea10v5a7c9eXKpcQVw9zG17o')" }}></div>
                                        <button className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white text-primary">
                                            <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                                        </button>
                                    </div>
                                    <p className="text-sm font-semibold text-text-main dark:text-white truncate">Minimalist Watch</p>
                                    <p className="text-xs text-text-secondary dark:text-gray-400">£180.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Column: Order Summary (Span 4) */}
                    <div className="lg:col-span-4 relative">
                        <div className="bg-white dark:bg-surface-dark p-6 md:p-8 rounded-xl border border-[#e7e9f3] dark:border-gray-800 shadow-sm sticky top-24">
                            <h2 className="text-2xl font-bold mb-6 text-text-main dark:text-white">Order Summary</h2>
                            {/* Line Items */}
                            <div className="space-y-4 mb-6 text-sm">
                                <div className="flex justify-between items-center text-text-secondary dark:text-gray-300">
                                    <span>Subtotal</span>
                                    <span className="font-medium text-text-main dark:text-white">£360.00</span>
                                </div>
                                <div className="flex justify-between items-center text-text-secondary dark:text-gray-300">
                                    <span>Shipping estimate</span>
                                    <span className="font-medium text-text-main dark:text-white">£15.00</span>
                                </div>
                                <div className="flex justify-between items-center text-text-secondary dark:text-gray-300">
                                    <span>Tax estimate</span>
                                    <span className="font-medium text-text-main dark:text-white">£24.00</span>
                                </div>
                                {/* Divider */}
                                <div className="h-px bg-[#e7e9f3] dark:bg-gray-700 my-4"></div>
                                <div className="flex justify-between items-end">
                                    <span className="text-base font-bold text-text-main dark:text-white">Order Total</span>
                                    <span className="text-xl font-black text-text-main dark:text-white">£399.00</span>
                                </div>
                            </div>
                            {/* Promo Code */}
                            <div className="mb-6">
                                <label className="block text-xs font-semibold text-text-secondary dark:text-gray-400 mb-2 uppercase tracking-wider">Promo Code</label>
                                <div className="flex gap-2">
                                    <input className="flex-1 rounded-lg border-[#e7e9f3] bg-background-light dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary text-sm px-4 py-2.5" placeholder="Enter code" type="text" />
                                    <button className="px-4 py-2.5 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-text-main dark:text-white font-semibold text-sm rounded-lg transition-colors">Apply</button>
                                </div>
                            </div>
                            {/* Checkout Button */}
                            {/* Checkout Button */}
                            <Link href="/checkout/information" className="w-full bg-primary hover:bg-blue-800 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group">
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">lock</span>
                                Checkout
                            </Link>
                            {/* Trust/Payment Icons */}
                            <div className="mt-6 flex flex-col items-center gap-4">
                                <div className="flex gap-3 opacity-60 grayscale hover:grayscale-0 transition-all">
                                    {/* Simple CSS shapes/icons to represent cards for generic modern look */}
                                    <div className="h-6 w-10 bg-blue-900 rounded flex items-center justify-center text-[8px] font-bold text-white italic tracking-tighter" title="Visa">VISA</div>
                                    <div className="h-6 w-10 bg-red-600 rounded flex items-center justify-center relative overflow-hidden" title="Mastercard">
                                        <div className="w-4 h-4 rounded-full bg-red-500 absolute left-1 opacity-90"></div>
                                        <div className="w-4 h-4 rounded-full bg-yellow-400 absolute right-1 opacity-90 mix-blend-screen"></div>
                                    </div>
                                    <div className="h-6 w-10 bg-blue-500 rounded flex items-center justify-center text-[8px] font-bold text-white" title="Amex">AMEX</div>
                                    <div className="h-6 w-10 bg-indigo-600 rounded flex items-center justify-center text-[6px] font-bold text-white" title="PayPal">Pay</div>
                                </div>
                                <p className="text-xs text-text-secondary dark:text-gray-500 text-center">
                                    Secure Checkout. 30-day returns.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* Footer Simple */}
            <footer className="bg-white dark:bg-surface-dark border-t border-[#e7e9f3] dark:border-gray-800 mt-12">
                <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-secondary dark:text-gray-400">
                        <p>© 2024 Toi &amp; Moi. All rights reserved.</p>
                        <div className="flex gap-6">
                            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                            <Link href="/shipping" className="hover:text-primary transition-colors">Shipping Info</Link>
                            <Link href="/returns" className="hover:text-primary transition-colors">Returns</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
