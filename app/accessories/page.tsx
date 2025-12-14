/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function AccessoriesPage() {
    const [priceRange, setPriceRange] = useState(500);

    return (
        <div className="font-display bg-[#f6f6f8] dark:bg-[#101622] text-slate-900 dark:text-white overflow-x-hidden flex flex-col min-h-screen">
            {/* Scoped Styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
                /* Custom styles if needed */
            `}} />

            {/* TopNavBar */}
            <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 dark:bg-[#101622]/90 dark:border-slate-800 backdrop-blur-md">
                <div className="px-6 lg:px-12 py-3 flex items-center justify-between gap-4">
                    {/* Left: Logo & Nav */}
                    <div className="flex items-center gap-8">
                        {/* Mobile Menu Icon (Visible on small screens) */}
                        <button className="lg:hidden text-slate-900 dark:text-white">
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                        <Link className="flex items-center gap-3 group" href="/">
                            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                                <span className="material-symbols-outlined text-[20px]">diamond</span>
                            </div>
                            <h2 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight">Toi-n-Moi</h2>
                        </Link>
                        <nav className="hidden lg:flex items-center gap-8">
                            <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors" href="/products">Shop</Link>
                            <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors" href="/new-arrivals">New Arrivals</Link>
                            <Link className="text-primary text-sm font-bold transition-colors" href="/accessories">Accessories</Link>
                            <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors" href="/clothing">Clothing</Link>
                        </nav>
                    </div>
                    {/* Right: Search & Actions */}
                    <div className="flex items-center gap-4 lg:gap-6">
                        {/* Search Bar (Hidden on mobile, visible on desktop) */}
                        <div className="hidden md:flex relative w-64 h-10">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                                <span className="material-symbols-outlined text-[20px]">search</span>
                            </div>
                            <input className="w-full h-full pl-10 pr-4 bg-slate-100 dark:bg-slate-800 border-none rounded-full text-sm focus:ring-2 focus:ring-primary placeholder:text-slate-400 dark:text-white transition-all" placeholder="Search accessories..." type="text" />
                        </div>
                        {/* Action Buttons */}
                        <div className="flex items-center gap-2">
                            <button className="md:hidden p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                                <span className="material-symbols-outlined text-[22px]">search</span>
                            </button>
                            <Link href="/account" className="p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                                <span className="material-symbols-outlined text-[22px]">person</span>
                            </Link>
                            <Link href="/cart" className="p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full relative transition-colors">
                                <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
                                <span className="absolute top-1 right-0.5 size-2 bg-primary rounded-full ring-2 ring-white dark:ring-[#101622]"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content Wrapper */}
            <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-6">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-6">
                    <Link className="hover:text-primary transition-colors" href="/">Home</Link>
                    <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                    <Link className="hover:text-primary transition-colors" href="/products">Shop</Link>
                    <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                    <span className="font-semibold text-slate-900 dark:text-white">Accessories</span>
                </nav>

                {/* Hero Section */}
                <div className="relative w-full rounded-2xl overflow-hidden mb-10 group">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
                    <div className="h-[280px] md:h-[360px] w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Close up of luxury silk scarf texture in soft lighting" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDXXXhhV9VLVrszkbQ0sIdjVIK4dVSe_s_lwY_4eVDEGlU2HLpJ5vJb5bWEVHPUO0LGQVIBIdDdRsp6ThjuzfX-tpM713C-lrmGlO9qwp8vpdV3mO6Y720xaXe5oWGu2gCM0e4m85tOmemDQ64A4pV6vDNGvGXRzJ2766EJVGE3jxXT7BnTlGnu3wXpH6V9xpEjo6qLd3BXdYOwv2Cl1ZZZEX3Zki6p3dgS-L_s5hlwKL0r2fscdec1pV7MYaM_L81zYajX_Ggx7bk")' }}>
                    </div>
                    <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-16 max-w-2xl">
                        <span className="text-primary bg-white/90 backdrop-blur dark:bg-slate-900/90 text-xs font-bold uppercase tracking-widest px-3 py-1 w-fit rounded mb-4">Featured Collection</span>
                        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight mb-4 drop-shadow-sm">
                            Finishing Touches
                        </h1>
                        <p className="text-slate-100 text-base md:text-lg font-medium max-w-md drop-shadow-sm mb-6">
                            Elevate your daily look with our hand-picked selection of artisan belts, scarves, and jewelry.
                        </p>
                    </div>
                </div>

                {/* Layout Container */}
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Sidebar Filters (Sticky on Desktop) */}
                    <aside className="w-full lg:w-64 flex-shrink-0 lg:sticky lg:top-24 h-fit">
                        <div className="flex items-center justify-between mb-4 lg:hidden">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Filters</h2>
                            <button className="flex items-center gap-2 text-sm font-bold text-primary">
                                <span className="material-symbols-outlined">filter_list</span> Show Filters
                            </button>
                        </div>
                        <div className="hidden lg:flex flex-col gap-8 pr-4">
                            {/* Category Filter */}
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center justify-between cursor-pointer">
                                    Category
                                    <span className="material-symbols-outlined text-slate-400">remove</span>
                                </h3>
                                <div className="flex flex-col gap-2.5">
                                    <label className="flex items-center gap-3 group cursor-pointer">
                                        <input defaultChecked className="rounded border-slate-300 text-primary focus:ring-primary/20 bg-slate-50 dark:bg-slate-800 dark:border-slate-700" type="checkbox" />
                                        <span className="text-slate-600 dark:text-slate-300 text-sm group-hover:text-primary transition-colors">All Accessories</span>
                                    </label>
                                    <label className="flex items-center gap-3 group cursor-pointer">
                                        <input className="rounded border-slate-300 text-primary focus:ring-primary/20 bg-slate-50 dark:bg-slate-800 dark:border-slate-700" type="checkbox" />
                                        <span className="text-slate-600 dark:text-slate-300 text-sm group-hover:text-primary transition-colors">Jewelry</span>
                                    </label>
                                    <label className="flex items-center gap-3 group cursor-pointer">
                                        <input className="rounded border-slate-300 text-primary focus:ring-primary/20 bg-slate-50 dark:bg-slate-800 dark:border-slate-700" type="checkbox" />
                                        <span className="text-slate-600 dark:text-slate-300 text-sm group-hover:text-primary transition-colors">Scarves &amp; Wraps</span>
                                    </label>
                                    <label className="flex items-center gap-3 group cursor-pointer">
                                        <input className="rounded border-slate-300 text-primary focus:ring-primary/20 bg-slate-50 dark:bg-slate-800 dark:border-slate-700" type="checkbox" />
                                        <span className="text-slate-600 dark:text-slate-300 text-sm group-hover:text-primary transition-colors">Belts</span>
                                    </label>
                                    <label className="flex items-center gap-3 group cursor-pointer">
                                        <input className="rounded border-slate-300 text-primary focus:ring-primary/20 bg-slate-50 dark:bg-slate-800 dark:border-slate-700" type="checkbox" />
                                        <span className="text-slate-600 dark:text-slate-300 text-sm group-hover:text-primary transition-colors">Hats</span>
                                    </label>
                                </div>
                            </div>
                            <div className="h-px bg-slate-200 dark:bg-slate-800"></div>
                            {/* Price Filter */}
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center justify-between cursor-pointer">
                                    Price Range
                                    <span className="material-symbols-outlined text-slate-400">remove</span>
                                </h3>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="relative flex-1">
                                        <span className="absolute left-3 top-2.5 text-slate-400 text-xs">£</span>
                                        <input className="w-full pl-6 pr-2 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded focus:ring-1 focus:ring-primary focus:border-primary text-slate-900 dark:text-white" type="number" defaultValue="0" />
                                    </div>
                                    <span className="text-slate-400">-</span>
                                    <div className="relative flex-1">
                                        <span className="absolute left-3 top-2.5 text-slate-400 text-xs">£</span>
                                        <input className="w-full pl-6 pr-2 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded focus:ring-1 focus:ring-primary focus:border-primary text-slate-900 dark:text-white" type="number" value={priceRange} onChange={(e) => setPriceRange(Number(e.target.value))} />
                                    </div>
                                </div>
                                <input className="w-full h-1 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary" type="range" min="0" max="500" value={priceRange} onChange={(e) => setPriceRange(Number(e.target.value))} />
                            </div>
                            <div className="h-px bg-slate-200 dark:bg-slate-800"></div>
                            {/* Material Filter */}
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center justify-between cursor-pointer">
                                    Material
                                    <span className="material-symbols-outlined text-slate-400">remove</span>
                                </h3>
                                <div className="flex flex-col gap-2.5">
                                    <label className="flex items-center gap-3 group cursor-pointer">
                                        <input className="rounded border-slate-300 text-primary focus:ring-primary/20 bg-slate-50 dark:bg-slate-800 dark:border-slate-700" type="checkbox" />
                                        <span className="text-slate-600 dark:text-slate-300 text-sm group-hover:text-primary transition-colors">Leather</span>
                                    </label>
                                    <label className="flex items-center gap-3 group cursor-pointer">
                                        <input className="rounded border-slate-300 text-primary focus:ring-primary/20 bg-slate-50 dark:bg-slate-800 dark:border-slate-700" type="checkbox" />
                                        <span className="text-slate-600 dark:text-slate-300 text-sm group-hover:text-primary transition-colors">Silk</span>
                                    </label>
                                    <label className="flex items-center gap-3 group cursor-pointer">
                                        <input className="rounded border-slate-300 text-primary focus:ring-primary/20 bg-slate-50 dark:bg-slate-800 dark:border-slate-700" type="checkbox" />
                                        <span className="text-slate-600 dark:text-slate-300 text-sm group-hover:text-primary transition-colors">Gold Plated</span>
                                    </label>
                                </div>
                            </div>
                            <div className="h-px bg-slate-200 dark:bg-slate-800"></div>
                            {/* Color Filter */}
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center justify-between cursor-pointer">
                                    Color
                                    <span className="material-symbols-outlined text-slate-400">remove</span>
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    <button className="size-6 rounded-full bg-black ring-2 ring-offset-2 ring-slate-300 dark:ring-slate-700 ring-offset-[#f6f6f8] dark:ring-offset-[#101622]"></button>
                                    <button className="size-6 rounded-full bg-[#8B4513]"></button> {/* Brown */}
                                    <button className="size-6 rounded-full bg-[#E5E5E5] border border-slate-300"></button> {/* White/Silver */}
                                    <button className="size-6 rounded-full bg-[#FFD700]"></button> {/* Gold */}
                                    <button className="size-6 rounded-full bg-primary"></button> {/* Blue */}
                                    <button className="size-6 rounded-full bg-[#2E8B57]"></button> {/* Green */}
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Product Grid Area */}
                    <div className="flex-1">
                        {/* Toolbar */}
                        <div className="flex flex-wrap items-center justify-between mb-6 pb-4 border-b border-slate-200 dark:border-slate-800 gap-4">
                            <p className="text-slate-500 dark:text-slate-400 font-medium text-sm"><span className="text-slate-900 dark:text-white font-bold">45</span> Items found</p>
                            <div className="flex items-center gap-4">
                                <label className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                                    Sort by:
                                    <select className="form-select border-none bg-transparent py-0 pl-2 pr-8 text-sm font-bold text-slate-900 dark:text-white focus:ring-0 cursor-pointer">
                                        <option>Newest Arrivals</option>
                                        <option>Price: Low to High</option>
                                        <option>Price: High to Low</option>
                                        <option>Best Selling</option>
                                    </select>
                                </label>
                            </div>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-x-6 gap-y-10">
                            {/* Product Card 1 */}
                            <div className="group flex flex-col">
                                <div className="relative aspect-[3/4] bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden mb-4">
                                    <span className="absolute top-3 left-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider z-10">New</span>
                                    <button className="absolute top-3 right-3 p-2 bg-white/80 dark:bg-slate-900/80 rounded-full text-slate-400 hover:text-red-500 transition-colors z-10 opacity-0 group-hover:opacity-100">
                                        <span className="material-symbols-outlined text-[18px] fill-current">favorite</span>
                                    </button>
                                    <Link href="/product/detail" className="absolute inset-0 z-0">
                                        <img alt="Silver Chain" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Modern silver chain necklace on light background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq75atY6Zf7dbM3CAWw1huHj0QIfALx3Bji-2KrWCg6xz9ECDhu-8zj93WASIRvLFeQBvGi4TlBrwWW0YEROXKnqGoY8DITJ15pXX9fyX7cPBfroZP5KY9C05WgdGr6mzasOWqxSuyDYBPJabnZJEqeObAqtOEfR6Zn62BLHY7Wr9C5pGgFE6N7TRSM28ISuIlq-cb8P7PlB3VKOCCKCgSfqMUwVznftCfBNQJOUnZ0Ri-sFHgj_Otg-9mNcr-zvASB5DvfbmbFtE" />
                                    </Link>
                                    {/* Hover Action Overlay */}
                                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <button className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-3 rounded text-sm shadow-lg transition-colors flex items-center justify-center gap-2">
                                            <span className="material-symbols-outlined text-[18px]">shopping_cart</span> Add to Cart
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wide font-semibold">Minimalist</h3>
                                    <Link className="text-base font-bold text-slate-900 dark:text-white hover:text-primary transition-colors" href="/product/detail">Sterling Silver Chain</Link>
                                    <span className="text-primary font-bold">£125.00</span>
                                </div>
                            </div>
                            {/* Product Card 2 */}
                            <div className="group flex flex-col">
                                <div className="relative aspect-[3/4] bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden mb-4">
                                    <button className="absolute top-3 right-3 p-2 bg-white/80 dark:bg-slate-900/80 rounded-full text-slate-400 hover:text-red-500 transition-colors z-10 opacity-0 group-hover:opacity-100">
                                        <span className="material-symbols-outlined text-[18px] fill-current">favorite</span>
                                    </button>
                                    <Link href="/product/detail" className="absolute inset-0 z-0">
                                        <img alt="White Sneakers" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Pair of white minimalist sneakers on a pedestal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-63LQ5sOG_zF1W9YMDrhBq0kSajmTkkjrBDI5AnFl3vgd9wk5krWdB9RD4XFjBK0lPigT3EIXPhoqyI5JIYELreqYrN1lV3_0JYrjR4FtLu2cGD0QU3tc5gpvIsOqBD1ZdhWgcHvYQr01q9QoKbpguep6xYa8QVPUqg-JDL9JHYcotWDIooNnLvtGXvZY73TDyRMlwxiDsS2iCuJxSGw_a3qicBKauKhL0wTN_cx89g-fsKhwsBJ6H0LhS6xsh5W1-kl9p2YlWR8" />
                                    </Link>
                                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <button className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-3 rounded text-sm shadow-lg transition-colors flex items-center justify-center gap-2">
                                            <span className="material-symbols-outlined text-[18px]">shopping_cart</span> Add to Cart
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wide font-semibold">Urban Step</h3>
                                    <Link className="text-base font-bold text-slate-900 dark:text-white hover:text-primary transition-colors" href="/product/detail">Court Sneakers</Link>
                                    <span className="text-primary font-bold">£89.00</span>
                                </div>
                            </div>
                            {/* Product Card 3 */}
                            <div className="group flex flex-col">
                                <div className="relative aspect-[3/4] bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden mb-4">
                                    <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider z-10">-20%</span>
                                    <button className="absolute top-3 right-3 p-2 bg-white/80 dark:bg-slate-900/80 rounded-full text-slate-400 hover:text-red-500 transition-colors z-10 opacity-0 group-hover:opacity-100">
                                        <span className="material-symbols-outlined text-[18px] fill-current">favorite</span>
                                    </button>
                                    <Link href="/product/detail" className="absolute inset-0 z-0">
                                        <img alt="Leather Bag" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Luxury leather brown bag isolated on neutral background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdJDvnbP16Cvtd3M_fSGiavz0-z3iKb0K6_SPzd5BAH7cY9Tn_nf4BLqVGp48Xzp_ho64qJy5Cz1GpuNi1dBbEpumsK4eBHnrfwClIOouUidi6W8F37JLvfZAqH4KdrZqJhhhrlW_MY_DQ64pe7aVyEUP3AGyhlw3nnnhuQHbFCjyKFMP-pV2a-mRy4hvhE6p6IXpxJWvf9YlEUbh_UkDjsRpw8LrqQUZBNluMK_QZHtiy2qNgNPNMbJCFdXrEdh-JwYedd_Nknqc" />
                                    </Link>
                                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <button className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-3 rounded text-sm shadow-lg transition-colors flex items-center justify-center gap-2">
                                            <span className="material-symbols-outlined text-[18px]">shopping_cart</span> Add to Cart
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wide font-semibold">Heritage</h3>
                                    <Link className="text-base font-bold text-slate-900 dark:text-white hover:text-primary transition-colors" href="/product/detail">Classic Leather Satchel</Link>
                                    <div className="flex items-center gap-2">
                                        <span className="text-primary font-bold">£215.00</span>
                                        <span className="text-slate-400 text-sm line-through">£268.00</span>
                                    </div>
                                </div>
                            </div>
                            {/* Product Card 4 */}
                            <div className="group flex flex-col">
                                <div className="relative aspect-[3/4] bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden mb-4">
                                    <button className="absolute top-3 right-3 p-2 bg-white/80 dark:bg-slate-900/80 rounded-full text-slate-400 hover:text-red-500 transition-colors z-10 opacity-0 group-hover:opacity-100">
                                        <span className="material-symbols-outlined text-[18px] fill-current">favorite</span>
                                    </button>
                                    <Link href="/product/detail" className="absolute inset-0 z-0">
                                        <img alt="Gold Watch" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Elegant gold wristwatch with mesh band" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDONG8BszYM11zOabO_qdTNisdycHco2tg16IqoAjcP_GHh4zKggmvPiHsRSF8zblHXAe6fht44IKKrMoaij-sIaffUxTymX7SHC56GM6XBcyuWMQvrer-zbcM80akEZnHfKzbxUWadCy5Y9BggdKQvcJcuuQI81a4MGqcyEl8GO0rpU_XrOj92pllpRuT4ABcwyL9HZWrymriddJUbgTSfYVH9d1OdPs9CkHPMEFJ4ksLR6zN1diOXI1XOv203300c7GJB43US4-s" />
                                    </Link>
                                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <button className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-3 rounded text-sm shadow-lg transition-colors flex items-center justify-center gap-2">
                                            <span className="material-symbols-outlined text-[18px]">shopping_cart</span> Add to Cart
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wide font-semibold">Timeless</h3>
                                    <Link className="text-base font-bold text-slate-900 dark:text-white hover:text-primary transition-colors" href="/product/detail">Mesh Gold Watch</Link>
                                    <span className="text-primary font-bold">£195.00</span>
                                </div>
                            </div>
                            {/* Product Card 5 */}
                            <div className="group flex flex-col">
                                <div className="relative aspect-[3/4] bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden mb-4">
                                    <button className="absolute top-3 right-3 p-2 bg-white/80 dark:bg-slate-900/80 rounded-full text-slate-400 hover:text-red-500 transition-colors z-10 opacity-0 group-hover:opacity-100">
                                        <span className="material-symbols-outlined text-[18px] fill-current">favorite</span>
                                    </button>
                                    <img alt="Sunglasses" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Stylish sunglasses with tortoiseshell frame" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlIp1jkptgTkYVPlQr4okDvD9YhIzj0LhiEN29Wo0FFGNhIrGzqc6BS14tfmlx6Y21aixAAZO-O_WyefDvFRmeTY9FgK9w5CXSmpMToN3_q8sKsAXZ7mOCVdy2ZRylHKdN0P1PVT_zFCK8dllGcmGOYFgA1W_9VDzJV1x1TFho--d93urBr18K68B-0kMaY24zCOT-_b72FuMb_xt5bOZF-NfYG_71cLRjX7C4SWFK9antJUFPKWOQh60PXiyicjudtVGPsUpCDls" />
                                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <button className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-3 rounded text-sm shadow-lg transition-colors flex items-center justify-center gap-2">
                                            <span className="material-symbols-outlined text-[18px]">shopping_cart</span> Add to Cart
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wide font-semibold">Sunny</h3>
                                    <Link className="text-base font-bold text-slate-900 dark:text-white hover:text-primary transition-colors" href="#">Tortoise Cat-Eye Sunglasses</Link>
                                    <span className="text-primary font-bold">£140.00</span>
                                </div>
                            </div>
                            {/* Product Card 6 */}
                            <div className="group flex flex-col">
                                <div className="relative aspect-[3/4] bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden mb-4">
                                    <span className="absolute top-3 left-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] font-bold px-2 py-1 uppercase tracking-wider z-10">Best Seller</span>
                                    <button className="absolute top-3 right-3 p-2 bg-white/80 dark:bg-slate-900/80 rounded-full text-slate-400 hover:text-red-500 transition-colors z-10 opacity-0 group-hover:opacity-100">
                                        <span className="material-symbols-outlined text-[18px] fill-current">favorite</span>
                                    </button>
                                    <img alt="Silk Scarf" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Textured silk scarf draped elegantly" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_sQO6YeYv4-e22d4SJCdqr63c4NSAyo8UVd9xbkfStHmT4Fcua1kJtgCpCdqIMQhQzX7vXdLaJRcq0Ydn8qcFaPPF5h6Hjps2gpvOLFM9zO1lKNYeiuR5my2INZ1KBU76pLF5O4N_PnowE5ZrocaUFgZfnVbo-H9DVwXhuU2XoeciHHq8h_FH5UIoztGaRE4wYV_h3fBkWr3YKPq1boDTnvJVhyyA1TngBfmCFe0ewSItG0SZ69qqn2DlYo9Np3qO59xE9ItJ1Uc" />
                                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <button className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-3 rounded text-sm shadow-lg transition-colors flex items-center justify-center gap-2">
                                            <span className="material-symbols-outlined text-[18px]">shopping_cart</span> Add to Cart
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wide font-semibold">Luxe</h3>
                                    <Link className="text-base font-bold text-slate-900 dark:text-white hover:text-primary transition-colors" href="#">Printed Silk Scarf</Link>
                                    <span className="text-primary font-bold">£180.00</span>
                                </div>
                            </div>
                        </div>

                        {/* Load More / Pagination */}
                        <div className="mt-16 flex flex-col items-center gap-4">
                            <span className="text-sm text-slate-500 dark:text-slate-400">Showing 6 of 45 items</span>
                            <div className="w-48 h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                <div className="w-1/4 h-full bg-primary rounded-full"></div>
                            </div>
                            <button className="mt-4 px-8 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-primary dark:hover:border-primary text-slate-900 dark:text-white font-bold rounded shadow-sm hover:shadow transition-all">
                                Load More Products
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/* Simple Footer */}
            <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark mt-auto">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="size-6 bg-slate-200 dark:bg-slate-800 rounded flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-[16px]">diamond</span>
                        </div>
                        <span className="font-bold text-slate-700 dark:text-slate-300">Toi-n-Moi</span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">© 2024 Toi-n-Moi. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="sr-only">Instagram</span><span className="material-symbols-outlined">photo_camera</span></a>
                        <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="sr-only">Twitter</span><span className="material-symbols-outlined">flutter_dash</span></a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
