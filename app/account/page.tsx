/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';

export default function AccountPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-white flex flex-col min-h-screen transition-colors duration-200">
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
                    background-color: #e5e7eb;
                    border-radius: 20px;
                }
                ::-webkit-scrollbar-thumb:hover {
                    background-color: #d1d5db;
                }
            `}} />

            {/* Main Container */}
            <main className="flex-grow max-w-[1440px] mx-auto w-full px-6 md:px-10 py-8">
                {/* Breadcrumbs */}
                <nav className="flex mb-8 text-sm font-medium text-gray-500 dark:text-gray-400">
                    <ol className="flex items-center space-x-2">
                        <li><Link className="hover:text-primary transition-colors" href="/">Home</Link></li>
                        <li><span className="mx-1">/</span></li>
                        <li><Link className="hover:text-primary transition-colors" href="/account">Account</Link></li>
                        <li><span className="mx-1">/</span></li>
                        <li className="text-gray-900 dark:text-white font-semibold">Profile</li>
                    </ol>
                </nav>
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">My Account</h1>
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Sidebar Navigation */}
                    <aside className="w-full lg:w-72 flex-shrink-0">
                        <div className="bg-white dark:bg-[#2a172e] rounded-xl border border-gray-100 dark:border-gray-800 p-6 sticky top-24 shadow-sm">
                            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100 dark:border-gray-700">
                                <div className="size-12 rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden relative">
                                    <div className="w-full h-full bg-cover bg-center" data-alt="Portrait of Sarah Jenkins" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAg-849wiD1WKSYLVhU9eF1VZAtEk0cPnq4XGmm0F2i1AcCT01Bw13qAm1OQxx5ajLGPGHqHhQePY72laShguK4WduJoVDbZlnOB_63PdxheyuSmMbqnOJfz6JerrVSJjus3vsddIo6T0kjG0JuHxM820qVReDgPcXa_OurLWboPFvRgFHp_NEOL413q-UVYAYiGU7OH5t1tJsKJIz2Uwl-cUDtKtwkfGKZdc78JR_irjlJ2Gmjck0FAXUPp6E7e3Gk6Hr-VEV7710")' }}></div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white">Sarah Jenkins</h3>
                                    <p className="text-xs text-gray-500">sarah.j@example.com</p>
                                </div>
                            </div>
                            <nav className="space-y-1">
                                <Link className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg text-gray-600 dark:text-gray-300 hover:bg-[#f8f6f8] dark:hover:bg-gray-800 transition-colors" href="/account">
                                    <span className="material-symbols-outlined text-[20px]">dashboard</span>
                                    Dashboard
                                </Link>
                                <Link className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg bg-primary/10 text-primary dark:text-primary dark:bg-primary/20 transition-colors" href="/account/profile">
                                    <span className="material-symbols-outlined text-[20px] fill-current">person</span>
                                    My Profile
                                </Link>
                                <Link className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg text-gray-600 dark:text-gray-300 hover:bg-[#f8f6f8] dark:hover:bg-gray-800 transition-colors" href="/account/orders">
                                    <span className="material-symbols-outlined text-[20px]">package_2</span>
                                    Order History
                                    <span className="ml-auto bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full">2</span>
                                </Link>
                                <Link className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg text-gray-600 dark:text-gray-300 hover:bg-[#f8f6f8] dark:hover:bg-gray-800 transition-colors" href="/account/addresses">
                                    <span className="material-symbols-outlined text-[20px]">location_on</span>
                                    Address Book
                                </Link>
                                <Link className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg text-gray-600 dark:text-gray-300 hover:bg-[#f8f6f8] dark:hover:bg-gray-800 transition-colors" href="/account/payment">
                                    <span className="material-symbols-outlined text-[20px]">credit_card</span>
                                    Payment Methods
                                </Link>
                                <button className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg text-gray-600 dark:text-gray-300 hover:bg-[#f8f6f8] dark:hover:bg-gray-800 transition-colors mt-6 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 w-full text-left">
                                    <span className="material-symbols-outlined text-[20px]">logout</span>
                                    Log Out
                                </button>
                            </nav>
                        </div>
                    </aside>
                    {/* Main Content */}
                    <div className="flex-1 space-y-8">
                        {/* Personal Information Section */}
                        <section className="bg-white dark:bg-[#2a172e] rounded-xl border border-gray-100 dark:border-gray-800 p-6 md:p-8 shadow-sm">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Personal Information</h2>
                                <button className="text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[18px]">edit</span> Edit
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">First Name</label>
                                    <input className="w-full bg-[#f8f6f8] dark:bg-gray-800 border-transparent focus:border-primary focus:bg-white focus:ring-0 rounded-lg text-sm text-gray-900 dark:text-white px-4 py-3 transition-colors" type="text" defaultValue="Sarah" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">Last Name</label>
                                    <input className="w-full bg-[#f8f6f8] dark:bg-gray-800 border-transparent focus:border-primary focus:bg-white focus:ring-0 rounded-lg text-sm text-gray-900 dark:text-white px-4 py-3 transition-colors" type="text" defaultValue="Jenkins" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">Email Address</label>
                                    <input className="w-full bg-[#f8f6f8] dark:bg-gray-800 border-transparent focus:border-primary focus:bg-white focus:ring-0 rounded-lg text-sm text-gray-900 dark:text-white px-4 py-3 transition-colors" type="email" defaultValue="sarah.j@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">Phone Number</label>
                                    <input className="w-full bg-[#f8f6f8] dark:bg-gray-800 border-transparent focus:border-primary focus:bg-white focus:ring-0 rounded-lg text-sm text-gray-900 dark:text-white px-4 py-3 transition-colors" type="tel" defaultValue="+1 (555) 123-4567" />
                                </div>
                            </div>
                            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 flex justify-end">
                                <button className="bg-primary hover:bg-primary/90 text-white font-medium py-2.5 px-6 rounded-lg text-sm transition-colors shadow-lg shadow-primary/30">
                                    Save Changes
                                </button>
                            </div>
                        </section>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Default Shipping Address */}
                            <section className="bg-white dark:bg-[#2a172e] rounded-xl border border-gray-100 dark:border-gray-800 p-6 md:p-8 shadow-sm flex flex-col h-full">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-[22px]">local_shipping</span>
                                        Default Shipping
                                    </h2>
                                    <button className="text-sm font-medium text-gray-400 hover:text-primary transition-colors">Manage</button>
                                </div>
                                <div className="flex-grow bg-[#f8f6f8] dark:bg-gray-800/50 rounded-lg p-4 border border-gray-100 dark:border-gray-700">
                                    <p className="font-bold text-gray-900 dark:text-white mb-1">Sarah Jenkins</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                        4821 Ridge Top Cir.<br />
                                        Apartment 4B<br />
                                        Anchorage, AK 99508<br />
                                        United States
                                    </p>
                                </div>
                                <button className="mt-4 w-full py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-sm font-medium hover:border-primary hover:text-primary transition-colors">
                                    Edit Address
                                </button>
                            </section>
                            {/* Recent Order Status */}
                            <section className="bg-white dark:bg-[#2a172e] rounded-xl border border-gray-100 dark:border-gray-800 p-6 md:p-8 shadow-sm flex flex-col h-full">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-[22px]">history</span>
                                        Recent Order
                                    </h2>
                                    <Link className="text-sm font-medium text-gray-400 hover:text-primary transition-colors" href="/account/orders">View All</Link>
                                </div>
                                <div className="flex-grow flex flex-col justify-center">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="size-16 rounded-md bg-gray-100 dark:bg-gray-700 overflow-hidden flex-shrink-0 border border-gray-200 dark:border-gray-600">
                                            <div className="w-full h-full bg-cover bg-center" data-alt="Yellow knitted sweater folded" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA2E9zy8rnic3I--KNtxV7KEGiDz_ppjkx4SICshbE0O5n1WFE6vhAhzyPSZSdQQdzoAtZxsAEwI-AeDD4XBtn_zVdx_BvAm4anxoUBqKyiUhtHCDNOMA8-Rq_qzHU4LFDBA2b1iIEfBfkme75JREMGWsQ01Z2dZ76z5VFb5YXQVON4VbYuapUIK--ZClJyhZ6ZrT5dtQqyQmew8WoOhtbuaaJsjxTJL2_yDsfcbXGzBGBArG84Ml5lJ-IiyLO5OsKKUFjSMmxZLfo")' }}></div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-gray-900 dark:text-white">Order #249012</h4>
                                            <p className="text-xs text-gray-500 mb-2">Placed on Oct 24, 2023</p>
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                                Shipped
                                            </span>
                                        </div>
                                    </div>
                                    {/* Tracking Bar (Visual only) */}
                                    <div className="relative pt-2">
                                        <div className="overflow-hidden h-2 mb-2 text-xs flex rounded bg-gray-100 dark:bg-gray-700">
                                            <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary" style={{ width: '70%' }}></div>
                                        </div>
                                        <div className="flex justify-between text-[10px] text-gray-500 font-medium uppercase tracking-wide">
                                            <span>Processing</span>
                                            <span className="text-primary font-bold">In Transit</span>
                                            <span>Delivered</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="mt-4 w-full py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors">
                                    Track Package
                                </button>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
            {/* Simple Footer */}
            <footer className="mt-20 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-[#2a172e] py-12">
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2 text-gray-900 dark:text-white">
                        <span className="font-bold text-lg tracking-tight">TOI-N-MOI</span>
                        <span className="text-gray-400 text-sm">© 2023</span>
                    </div>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <Link className="hover:text-primary transition-colors" href="/privacy">Privacy Policy</Link>
                        <Link className="hover:text-primary transition-colors" href="/terms">Terms of Service</Link>
                        <Link className="hover:text-primary transition-colors" href="/help">Help Center</Link>
                    </div>
                    <div className="flex gap-4">
                        <a className="text-gray-400 hover:text-primary transition-colors" href="#">
                            <span className="sr-only">Instagram</span>
                            <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.409-.06 3.809-.06h.63zm1.673 5.378c-.628-.016-1.258.058-1.873.22-1.01.265-1.865.82-2.49 1.614-.625.795-.945 1.773-.929 2.846.017 1.072.378 2.031 1.045 2.783.667.752 1.562 1.257 2.585 1.46 1.022.202 2.072.062 2.997-.399.924-.461 1.666-1.203 2.127-2.127.461-.925.601-1.975.399-2.997-.203-1.023-.708-1.918-1.46-2.585-.752-.667-1.711-1.028-2.783-1.045-.536-.008-1.073.076-1.588.25l-.03-.02zm.609 2.146c.792-.012 1.558.286 2.118.825.561.539.882 1.282.894 2.074.012.792-.286 1.558-.825 2.118-.539.561-1.282.882-2.074.894-.792.012-1.558-.286-2.118-.825-.561-.539-.882-1.282-.894-2.074-.012-.792.286-1.558.825-2.118.539-.561 1.282-.882 2.074-.894zM17.4 6.6c.451 0 .817.366.817.817s-.366.817-.817.817c-.451 0-.817-.366-.817-.817s.366-.817.817-.817z" fillRule="evenodd"></path></svg>
                        </a>
                        <a className="text-gray-400 hover:text-primary transition-colors" href="#">
                            <span className="sr-only">Twitter</span>
                            <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
