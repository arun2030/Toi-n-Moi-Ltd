/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function NewArrivalsPage() {
    const [isCategoryOpen, setIsCategoryOpen] = useState(true);
    const [isSizeOpen, setIsSizeOpen] = useState(false);
    const [isColorOpen, setIsColorOpen] = useState(false);
    const [isPriceOpen, setIsPriceOpen] = useState(false);

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased selection:bg-primary selection:text-white min-h-screen flex flex-col">
            {/* Scoped Styles */}
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
            `}} />

            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
                <div className="px-4 md:px-10 py-3 flex items-center justify-between max-w-[1440px] mx-auto w-full">
                    {/* Logo */}
                    <Link className="flex items-center gap-4 text-slate-900 dark:text-white cursor-pointer" href="/">
                        <div className="size-8 text-primary">
                            <span className="material-symbols-outlined text-3xl">diamond</span>
                        </div>
                        <h2 className="text-xl font-bold tracking-tight hidden sm:block">TOI-N-MOI</h2>
                    </Link>
                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link className="text-slate-900 dark:text-white hover:text-primary text-sm font-medium transition-colors" href="/shop">Shop</Link>
                        <Link className="text-primary text-sm font-bold transition-colors" href="/new-arrivals">New</Link>
                        <Link className="text-slate-900 dark:text-white hover:text-primary text-sm font-medium transition-colors" href="/sale">Sale</Link>
                        <Link className="text-slate-900 dark:text-white hover:text-primary text-sm font-medium transition-colors" href="/blog">Editorial</Link>
                    </nav>
                    {/* Actions */}
                    <div className="flex items-center gap-2">
                        <button className="flex items-center justify-center rounded-lg size-10 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-slate-900 dark:text-white">
                            <span className="material-symbols-outlined text-[20px]">search</span>
                        </button>
                        <Link href="/account" className="flex items-center justify-center rounded-lg size-10 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-slate-900 dark:text-white">
                            <span className="material-symbols-outlined text-[20px]">account_circle</span>
                        </Link>
                        <Link href="/cart" className="flex items-center justify-center rounded-lg size-10 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-slate-900 dark:text-white relative">
                            <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                            <span className="absolute top-2 right-2 size-2 bg-primary rounded-full"></span>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative bg-slate-900 text-white py-16 px-4 md:px-10 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="w-full h-full bg-cover bg-center opacity-60" data-alt="Fashion model walking on runway wearing high fashion clothing" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDuth1Rh9HFT7mCWfnTKhPx0xg8nYwaR298Sk6wM99AeKefrF1LtR39SvwuwGX8G2zKpuJiAhwp-ipTx7EltYcteBnEPaaouMqSkzg6_QAcyyq3UpotAe5YVBrjzcoPtBJIkVXHeWWk0fzZE0230SILGKHw681eKoyEadipcLpgm-s2WiTkfsmOU1QUpU4OTq7X65aP4JttneDZPhFEk9XXR2tSkH0bvA3F40HUSveOCPhcdMofGUs-w0TmtVcmjdJi5VvvCfjqlHo")' }}></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
                </div>
                <div className="relative z-10 max-w-[1440px] mx-auto flex flex-col justify-center h-full gap-4">
                    <span className="text-primary font-bold tracking-wider text-sm uppercase">Just In</span>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight max-w-2xl">
                        New Season Collection
                    </h1>
                    <p className="text-gray-200 text-lg max-w-lg font-light">
                        Discover the latest trends fresh from the runway. Bold silhouettes and elegant textures defining this season&apos;s look.
                    </p>
                </div>
            </section>

            {/* Breadcrumbs */}
            <div className="px-4 md:px-10 py-4 border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-[1440px] mx-auto flex items-center gap-2 text-sm">
                    <Link className="text-gray-500 hover:text-primary transition-colors" href="/">Home</Link>
                    <span className="text-gray-500">/</span>
                    <Link className="text-gray-500 hover:text-primary transition-colors" href="/shop">Shop</Link>
                    <span className="text-gray-500">/</span>
                    <span className="text-slate-900 dark:text-white font-medium">New Arrivals</span>
                </div>
            </div>

            {/* Main Layout */}
            <main className="flex-grow flex flex-col md:flex-row max-w-[1440px] mx-auto w-full px-4 md:px-10 py-8 gap-8">
                {/* Sidebar Filters */}
                <aside className="w-full md:w-64 flex-shrink-0">
                    <div className="sticky top-24 space-y-6">
                        <div className="flex items-center justify-between pb-2 border-b border-gray-200 dark:border-gray-800">
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Filters</h3>
                            <button className="text-xs font-medium text-gray-500 hover:text-primary">Clear All</button>
                        </div>
                        <div className="flex flex-col gap-4">
                            {/* Category Accordion */}
                            <div className="group border-b border-gray-200 dark:border-gray-800 pb-4">
                                <button className="flex cursor-pointer items-center justify-between py-2 w-full" onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
                                    <p className="text-slate-900 dark:text-white text-sm font-bold">Category</p>
                                    <span className={`material-symbols-outlined transition-transform text-gray-500 text-lg ${isCategoryOpen ? 'rotate-180' : ''}`}>expand_more</span>
                                </button>
                                {isCategoryOpen && (
                                    <div className="flex flex-col gap-2 mt-2 pl-1">
                                        <label className="flex items-center gap-3 cursor-pointer group/item">
                                            <input className="form-checkbox rounded border-gray-300 dark:border-gray-700 text-primary focus:ring-primary size-4" type="checkbox" />
                                            <span className="text-sm text-gray-500 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">Dresses (42)</span>
                                        </label>
                                        <label className="flex items-center gap-3 cursor-pointer group/item">
                                            <input className="form-checkbox rounded border-gray-300 dark:border-gray-700 text-primary focus:ring-primary size-4" type="checkbox" />
                                            <span className="text-sm text-gray-500 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">Tops &amp; Blouses (28)</span>
                                        </label>
                                        <label className="flex items-center gap-3 cursor-pointer group/item">
                                            <input className="form-checkbox rounded border-gray-300 dark:border-gray-700 text-primary focus:ring-primary size-4" type="checkbox" />
                                            <span className="text-sm text-gray-500 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">Pants &amp; Skirts (35)</span>
                                        </label>
                                        <label className="flex items-center gap-3 cursor-pointer group/item">
                                            <input className="form-checkbox rounded border-gray-300 dark:border-gray-700 text-primary focus:ring-primary size-4" type="checkbox" />
                                            <span className="text-sm text-gray-500 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">Outerwear (12)</span>
                                        </label>
                                    </div>
                                )}
                            </div>
                            {/* Size Accordion */}
                            <div className="group border-b border-gray-200 dark:border-gray-800 pb-4">
                                <button className="flex cursor-pointer items-center justify-between py-2 w-full" onClick={() => setIsSizeOpen(!isSizeOpen)}>
                                    <p className="text-slate-900 dark:text-white text-sm font-bold">Size</p>
                                    <span className={`material-symbols-outlined transition-transform text-gray-500 text-lg ${isSizeOpen ? 'rotate-180' : ''}`}>expand_more</span>
                                </button>
                                {isSizeOpen && (
                                    <div className="grid grid-cols-4 gap-2 mt-2">
                                        <button className="h-8 w-full border border-gray-200 dark:border-gray-700 rounded hover:border-primary hover:text-primary text-xs font-medium transition-colors text-slate-900 dark:text-white">XS</button>
                                        <button className="h-8 w-full border border-slate-900 dark:border-white rounded bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-medium">S</button>
                                        <button className="h-8 w-full border border-gray-200 dark:border-gray-700 rounded hover:border-primary hover:text-primary text-xs font-medium transition-colors text-slate-900 dark:text-white">M</button>
                                        <button className="h-8 w-full border border-gray-200 dark:border-gray-700 rounded hover:border-primary hover:text-primary text-xs font-medium transition-colors text-slate-900 dark:text-white">L</button>
                                        <button className="h-8 w-full border border-gray-200 dark:border-gray-700 rounded hover:border-primary hover:text-primary text-xs font-medium transition-colors text-slate-900 dark:text-white">XL</button>
                                    </div>
                                )}
                            </div>
                            {/* Color Accordion */}
                            <div className="group border-b border-gray-200 dark:border-gray-800 pb-4">
                                <button className="flex cursor-pointer items-center justify-between py-2 w-full" onClick={() => setIsColorOpen(!isColorOpen)}>
                                    <p className="text-slate-900 dark:text-white text-sm font-bold">Color</p>
                                    <span className={`material-symbols-outlined transition-transform text-gray-500 text-lg ${isColorOpen ? 'rotate-180' : ''}`}>expand_more</span>
                                </button>
                                {isColorOpen && (
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        <button className="size-6 rounded-full bg-black ring-2 ring-offset-1 ring-gray-200" title="Black"></button>
                                        <button className="size-6 rounded-full bg-white border border-gray-300 hover:ring-2 ring-offset-1 ring-gray-200" title="White"></button>
                                        <button className="size-6 rounded-full bg-[#1430b8] hover:ring-2 ring-offset-1 ring-gray-200" title="Blue"></button>
                                        <button className="size-6 rounded-full bg-blue-900 hover:ring-2 ring-offset-1 ring-gray-200" title="Navy"></button>
                                        <button className="size-6 rounded-full bg-orange-400 hover:ring-2 ring-offset-1 ring-gray-200" title="Orange"></button>
                                        <button className="size-6 rounded-full bg-green-700 hover:ring-2 ring-offset-1 ring-gray-200" title="Green"></button>
                                    </div>
                                )}
                            </div>
                            {/* Price Accordion */}
                            <div className="group pb-4">
                                <button className="flex cursor-pointer items-center justify-between py-2 w-full" onClick={() => setIsPriceOpen(!isPriceOpen)}>
                                    <p className="text-slate-900 dark:text-white text-sm font-bold">Price Range</p>
                                    <span className={`material-symbols-outlined transition-transform text-gray-500 text-lg ${isPriceOpen ? 'rotate-180' : ''}`}>expand_more</span>
                                </button>
                                {isPriceOpen && (
                                    <div className="flex flex-col gap-2 mt-2 pl-1">
                                        <label className="flex items-center gap-3 cursor-pointer group/item">
                                            <input className="form-checkbox rounded border-gray-300 dark:border-gray-700 text-primary focus:ring-primary size-4" type="checkbox" />
                                            <span className="text-sm text-gray-500 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">Under £50</span>
                                        </label>
                                        <label className="flex items-center gap-3 cursor-pointer group/item">
                                            <input className="form-checkbox rounded border-gray-300 dark:border-gray-700 text-primary focus:ring-primary size-4" type="checkbox" />
                                            <span className="text-sm text-gray-500 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">£50 - £100</span>
                                        </label>
                                        <label className="flex items-center gap-3 cursor-pointer group/item">
                                            <input className="form-checkbox rounded border-gray-300 dark:border-gray-700 text-primary focus:ring-primary size-4" type="checkbox" />
                                            <span className="text-sm text-gray-500 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">£100 - £200</span>
                                        </label>
                                        <label className="flex items-center gap-3 cursor-pointer group/item">
                                            <input className="form-checkbox rounded border-gray-300 dark:border-gray-700 text-primary focus:ring-primary size-4" type="checkbox" />
                                            <span className="text-sm text-gray-500 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">£200+</span>
                                        </label>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </aside>
                {/* Product Grid Area */}
                <div className="flex-1 flex flex-col">
                    {/* Toolbar */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                        <p className="text-gray-500 text-sm font-medium">Showing 12 of 117 products</p>
                        <div className="flex items-center gap-3">
                            <label className="text-sm font-medium text-slate-900 dark:text-white" htmlFor="sort">Sort by:</label>
                            <div className="relative">
                                <select className="appearance-none pl-4 pr-10 py-2 bg-transparent border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary cursor-pointer text-slate-900 dark:text-white" id="sort">
                                    <option>Newest Arrivals</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Best Selling</option>
                                </select>
                                <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-slate-900 dark:text-white pointer-events-none text-lg">expand_more</span>
                            </div>
                        </div>
                    </div>
                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                        {/* Product Card 1 */}
                        <div className="group flex flex-col gap-3">
                            <div className="relative overflow-hidden rounded-md aspect-[3/4] bg-gray-100 dark:bg-gray-800">
                                <Link href="/product/detail">
                                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer" data-alt="Silk Midi Dress in blush pink" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcfXjjXS1l7-GbKeuL0ZUzoawtN8TNjvNfyufEBxNLF-KeSZVCSpE287I37PgUtzUFqU2qMP_GeQtoXe_kOfzibNE9KhHMlyZx2S0wip1gqcgsdt8iVFhTHAcNml4y3FksHuVPQw7ZaHcLiSeuUa3PttKYUnR-fk90uVDjl5gM7tbjq-lxmqhvcAl2cn76NEmEl5CN4iI6R4Wpp1uEaYWF6qlpuQOJ0sXSsC4fQvnXAg_4cVg37xca3pzh_5rpEuBcjY_3h3I8MrU" />
                                </Link>
                                <div className="absolute top-2 left-2 bg-primary text-white text-[10px] uppercase font-bold px-2 py-1 rounded tracking-wide shadow-sm">New</div>
                                {/* Quick Add Overlay */}
                                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-center bg-gradient-to-t from-black/20 to-transparent">
                                    <button className="w-full bg-white hover:bg-gray-50 text-slate-900 font-bold py-3 px-4 rounded-md shadow-lg text-sm transition-colors flex items-center justify-center gap-2">
                                        <span className="material-symbols-outlined text-lg">add_shopping_cart</span> Quick Add
                                    </button>
                                </div>
                                <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 hover:bg-white text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                                    <span className="material-symbols-outlined text-[20px] filled">favorite</span>
                                </button>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base leading-tight group-hover:text-primary transition-colors cursor-pointer">Silk Midi Dress</h3>
                                <p className="text-gray-500 text-sm">Blush Pink</p>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="font-medium text-slate-900 dark:text-white">£120.00</span>
                                </div>
                            </div>
                        </div>
                        {/* Product Card 2 */}
                        <div className="group flex flex-col gap-3">
                            <div className="relative overflow-hidden rounded-md aspect-[3/4] bg-gray-100 dark:bg-gray-800">
                                <Link href="/product/detail">
                                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer" data-alt="Structured Blazer in charcoal grey" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMLna0K8NOvo-Skj91gsartfrwLaW51KDMp0JFlZs33961KrDfv-CGoCoCmgtzdM15CWxm_x03HeIX2omqoPOJxjPXAp8LN5prv5qATBsDnwT4YHN5VaYyshTxr_BUM2OBPVSZ7PWzuqnxvp44VZfCy7C6k7xFYe-79eFi-fTisCRmfJxyRpQo9OugKhMZkw7Xc8bm-uyP7mfdnNa2r2Sksc7pAqTlPKc6Z1xRu4S9TqHBZh1o97KZaGyiIA_aiv6E1FieuTSNLS4" />
                                </Link>
                                {/* Quick Add Overlay */}
                                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-center bg-gradient-to-t from-black/20 to-transparent">
                                    <button className="w-full bg-white hover:bg-gray-50 text-slate-900 font-bold py-3 px-4 rounded-md shadow-lg text-sm transition-colors flex items-center justify-center gap-2">
                                        <span className="material-symbols-outlined text-lg">add_shopping_cart</span> Quick Add
                                    </button>
                                </div>
                                <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 hover:bg-white text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                                    <span className="material-symbols-outlined text-[20px]">favorite</span>
                                </button>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base leading-tight group-hover:text-primary transition-colors cursor-pointer">Structured Blazer</h3>
                                <p className="text-gray-500 text-sm">Charcoal</p>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="font-medium text-slate-900 dark:text-white">£185.00</span>
                                </div>
                            </div>
                        </div>
                        {/* Product Card 3 */}
                        <div className="group flex flex-col gap-3">
                            <div className="relative overflow-hidden rounded-md aspect-[3/4] bg-gray-100 dark:bg-gray-800">
                                <Link href="/product/detail">
                                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer" data-alt="Pleated Trousers with belt" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgQR17IE_sxHWhJ7l47IPll9RSeQTXh1hEBbYkwbqGFpopwq8s3MNejih5nk2O7Zd2LczD3dl2fE6djclWwAhSUA_az4CqyHV4QdPwNgQ_8cJnh9zSLOdWh35ndRiGTFVbLbQM4UGd0GtJOCyqEM1WRcIwlwY3hum0X4xBhQOIoL-ut9nGEAm5A5aUTIeds_BR-ltZRpVm46TQwFkOflxWQuflgUOdU99z_-MClXboFxp8-kuVgGCPVxsGokCJBAia9Tdg3b6quhg" />
                                </Link>
                                <div className="absolute top-2 left-2 bg-slate-900 text-white text-[10px] uppercase font-bold px-2 py-1 rounded tracking-wide shadow-sm">Best Seller</div>
                                {/* Quick Add Overlay */}
                                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-center bg-gradient-to-t from-black/20 to-transparent">
                                    <button className="w-full bg-white hover:bg-gray-50 text-slate-900 font-bold py-3 px-4 rounded-md shadow-lg text-sm transition-colors flex items-center justify-center gap-2">
                                        <span className="material-symbols-outlined text-lg">add_shopping_cart</span> Quick Add
                                    </button>
                                </div>
                                <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 hover:bg-white text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                                    <span className="material-symbols-outlined text-[20px]">favorite</span>
                                </button>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base leading-tight group-hover:text-primary transition-colors cursor-pointer">Pleated Trousers</h3>
                                <p className="text-gray-500 text-sm">Beige</p>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="font-medium text-slate-900 dark:text-white">£95.00</span>
                                </div>
                            </div>
                        </div>
                        {/* Product Card 4 */}
                        <div className="group flex flex-col gap-3">
                            <div className="relative overflow-hidden rounded-md aspect-[3/4] bg-gray-100 dark:bg-gray-800">
                                <Link href="/product/detail">
                                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer" data-alt="Floral Print Wrap Dress" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfawK92olybDZxCbH8hAscmtvLsYwvvQRQFjtLam1n-yrn0Hzxc5Zgjjr68hcf22gZ3frtucTBTH2DMGqxO09_X31PlgeglPFXcSkb-BJ-2TEBcbxE5gH5oostSfLKuuVmpbMEl59H0PImV_ayv2A3aj-3XDzKx0ccvzVWeaYmunqiBBa6fTkAxPN-3rnst1toDgACN2pLj0BZFZHyrjpMXF1qTBrNiWwbSu8_zruAsOKNFjvxhEe67vQWlbMqwLJIVBQx5iuWwk8" />
                                </Link>
                                <div className="absolute top-2 left-2 bg-primary text-white text-[10px] uppercase font-bold px-2 py-1 rounded tracking-wide shadow-sm">New</div>
                                {/* Quick Add Overlay */}
                                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-center bg-gradient-to-t from-black/20 to-transparent">
                                    <button className="w-full bg-white hover:bg-gray-50 text-slate-900 font-bold py-3 px-4 rounded-md shadow-lg text-sm transition-colors flex items-center justify-center gap-2">
                                        <span className="material-symbols-outlined text-lg">add_shopping_cart</span> Quick Add
                                    </button>
                                </div>
                                <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 hover:bg-white text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                                    <span className="material-symbols-outlined text-[20px]">favorite</span>
                                </button>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base leading-tight group-hover:text-primary transition-colors cursor-pointer">Floral Wrap Dress</h3>
                                <p className="text-gray-500 text-sm">Midnight Floral</p>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="font-medium text-slate-900 dark:text-white">£145.00</span>
                                </div>
                            </div>
                        </div>
                        {/* Product Card 5 */}
                        <div className="group flex flex-col gap-3">
                            <div className="relative overflow-hidden rounded-md aspect-[3/4] bg-gray-100 dark:bg-gray-800">
                                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="White linen summer top" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApNblzB7A1nzJZpZPWIp2v4uEeCLRt61lzRMWUk1HoHFLHA6ByT6-sz75Y7o-B6u2AGJd1KCskECbt5crJg6px0Z8v5fOKZX564V6fVjF-TUXe703mkj_EXZSRU5KNGeo8zuJvXPgE2NWlfsiZ-uXLrxEV6to71_drq5VNbJyRSTjI-VvNUmPeTSZjkr413bCxa6K7Q4lR5kxxKRQTjSSJ7D-ftO-lZyUuNJG1jdki8YhDIU9_l-kbuH9iOSo-Sicf9EurdZgQD2E" />
                                {/* Quick Add Overlay */}
                                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-center bg-gradient-to-t from-black/20 to-transparent">
                                    <button className="w-full bg-white hover:bg-gray-50 text-slate-900 font-bold py-3 px-4 rounded-md shadow-lg text-sm transition-colors flex items-center justify-center gap-2">
                                        <span className="material-symbols-outlined text-lg">add_shopping_cart</span> Quick Add
                                    </button>
                                </div>
                                <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 hover:bg-white text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                                    <span className="material-symbols-outlined text-[20px]">favorite</span>
                                </button>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base leading-tight group-hover:text-primary transition-colors cursor-pointer">Linen Summer Top</h3>
                                <p className="text-gray-500 text-sm">White</p>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="font-medium text-slate-900 dark:text-white">£75.00</span>
                                </div>
                            </div>
                        </div>
                        {/* Product Card 6 */}
                        <div className="group flex flex-col gap-3">
                            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
                                <Link href="/product/detail">
                                    <img alt="Leather ankle boots" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIxZTTCo37TK-_LJV1ZSqeUOuKgj3GIVX8_44UJat2RGPNlMkUtFV3jiX-grFjyJg6lUasl3fYliGgYfiuIs_xvFS64bvpwIobvI45ny4UIQqM3uaLf7GcgSalfGey0iy70P9_8gLo4wogbm-0uoVhOxFdQBU296P-SJ2nmLQz0HYwA7JQ-72lPBqkhrUm3HucbgMFxphhNS11SmzJZkG5AdOxSUDL61SneQzI1wVU93b4CTedZY0x417TpDlwOgnd5EohSMIq_oc" />
                                </Link>
                                {/* Quick Add Overlay */}
                                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-center bg-gradient-to-t from-black/20 to-transparent">
                                    <button className="w-full bg-white hover:bg-gray-50 text-slate-900 font-bold py-3 px-4 rounded-md shadow-lg text-sm transition-colors flex items-center justify-center gap-2">
                                        <span className="material-symbols-outlined text-lg">add_shopping_cart</span> Quick Add
                                    </button>
                                </div>
                                <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 hover:bg-white text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                                    <span className="material-symbols-outlined text-[20px]">favorite</span>
                                </button>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base leading-tight group-hover:text-primary transition-colors cursor-pointer">Classic Ankle Boot</h3>
                                <p className="text-gray-500 text-sm">Black Leather</p>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-primary font-bold">£160.00</span>
                                    <span className="text-gray-400 line-through text-xs">£220.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Load More */}
                    <div className="mt-16 flex justify-center">
                        <button className="px-8 py-3 border border-slate-900 dark:border-white text-slate-900 dark:text-white font-bold rounded-lg hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-slate-900 transition-all text-sm uppercase tracking-wide">
                            Load More Products
                        </button>
                    </div>
                </div>
            </main>

            {/* Footer Newsletter */}
            <footer className="bg-white dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 mt-10">
                <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div>
                            <h4 className="text-2xl font-black mb-2 tracking-tight text-slate-900 dark:text-white">Join the list</h4>
                            <p className="text-gray-500">Sign up for exclusive access to new drops and 10% off your first order.</p>
                        </div>
                        <form className="flex flex-col sm:flex-row gap-3">
                            <input className="flex-1 bg-background-light dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-slate-900 dark:text-white" placeholder="Enter your email" type="email" />
                            <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-3 rounded-lg font-bold hover:bg-primary dark:hover:bg-gray-200 transition-colors">Subscribe</button>
                        </form>
                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                        <div className="flex gap-6">
                            <Link className="hover:text-slate-900 dark:hover:text-white" href="#">Instagram</Link>
                            <Link className="hover:text-slate-900 dark:hover:text-white" href="#">Facebook</Link>
                            <Link className="hover:text-slate-900 dark:hover:text-white" href="#">Pinterest</Link>
                        </div>
                        <p>© 2024 TOI-N-MOI. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
