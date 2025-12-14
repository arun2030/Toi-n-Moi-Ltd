/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';

export default function SalePage() {
    return (
        <div className="bg-[#f8f6f8] dark:bg-[#1e1121] text-[#190e1b] dark:text-gray-100 font-display min-h-screen flex flex-col">
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-[#f1e7f3] dark:border-gray-800 bg-[#fbf8fc]/95 dark:bg-[#1e1121]/95 backdrop-blur-sm px-10 py-3">
                <div className="flex items-center gap-8">
                    <Link className="flex items-center gap-4 text-[#190e1b] dark:text-white" href="/">
                        <div className="size-8 text-primary">
                            <span className="material-symbols-outlined text-[32px]">diamond</span>
                        </div>
                        <h2 className="text-[#190e1b] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">TOI N MOI</h2>
                    </Link>
                    <nav className="hidden md:flex items-center gap-9">
                        <Link className="text-[#190e1b] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="/new-arrivals">New In</Link>
                        <Link className="text-[#190e1b] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="/clothing">Clothing</Link>
                        <Link className="text-primary text-sm font-bold leading-normal" href="/sale">Sale</Link>
                        <Link className="text-[#190e1b] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="/accessories">Accessories</Link>
                        <Link className="text-[#190e1b] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="/blog">Edits</Link>
                    </nav>
                </div>
                <div className="flex flex-1 justify-end gap-6 items-center">
                    <label className="hidden lg:flex flex-col min-w-40 !h-10 max-w-64">
                        <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                            <div className="text-[#8b4e97] flex border-none bg-[#f1e7f3] dark:bg-gray-800 items-center justify-center pl-4 rounded-l-lg border-r-0">
                                <span className="material-symbols-outlined text-[24px]">search</span>
                            </div>
                            <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#190e1b] dark:text-white focus:outline-0 focus:ring-0 border-none bg-[#f1e7f3] dark:bg-gray-800 focus:border-none h-full placeholder:text-[#8b4e97] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal" placeholder="Search" />
                        </div>
                    </label>
                    <div className="flex gap-2">
                        <Link href="/login" className="hidden sm:flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-[#fbf8fc] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                            <span className="truncate">Login</span>
                        </Link>
                        <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#f1e7f3] dark:bg-gray-800 text-[#190e1b] dark:text-white hover:bg-[#eaddf0] dark:hover:bg-gray-700 transition-colors gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 lg:hidden">
                            <span className="material-symbols-outlined text-[#190e1b] dark:text-white text-[20px]">search</span>
                        </button>
                        <Link href="/account" className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#f1e7f3] dark:bg-gray-800 text-[#190e1b] dark:text-white hover:bg-[#eaddf0] dark:hover:bg-gray-700 transition-colors gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                            <span className="material-symbols-outlined text-[#190e1b] dark:text-white text-[20px]">person</span>
                        </Link>
                        <Link href="/cart" className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#f1e7f3] dark:bg-gray-800 text-[#190e1b] dark:text-white hover:bg-[#eaddf0] dark:hover:bg-gray-700 transition-colors gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 relative">
                            <span className="material-symbols-outlined text-[#190e1b] dark:text-white text-[20px]">shopping_bag</span>
                            <div className="absolute top-1 right-1 size-2 bg-primary rounded-full"></div>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex flex-col flex-1">
                {/* Hero Section */}
                <div className="w-full bg-[#fbf8fc] dark:bg-[#1e1121]">
                    <div className="@container">
                        <div className="p-0 sm:p-4 md:p-6 lg:px-10">
                            <div className="flex min-h-[360px] md:min-h-[420px] lg:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-none sm:rounded-xl items-center justify-center p-6 relative overflow-hidden group" data-alt="Abstract vibrant gradient background with fashion model silhouette overlay" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB1grOP3BXWqnixudgJaE1-O-_KQ1q9O6bTE_7tWK_rmwfPoOAwuzr_adzZabpbB7HJeUfAdczzQ-TlXH1zEvMSdalBu42HQJBkAq2lWagb8OOLlmy5b4e_cfLjojwIJkUb3bTSdNIJNdczadRzGIlan2s5dCT9Lp4ZxNYUFdompSKCJUwCD2OlRPh0RFKgfi7a7X-bubDAYIY8nQl8LeNnZ2KglJRze31ZvD9iXxI0kflfuR5HOKmv3l6ZTiKCrrOczEvs6rBNRno")' }}>
                                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
                                <div className="flex flex-col gap-4 text-center z-10 max-w-2xl">
                                    <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider w-fit mx-auto animate-pulse">Limited Time Only</span>
                                    <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-black leading-tight tracking-[-0.033em] drop-shadow-lg">
                                        END OF SEASON SALE
                                    </h1>
                                    <h2 className="text-white text-base md:text-lg lg:text-xl font-medium leading-normal drop-shadow-md max-w-lg mx-auto">
                                        Refresh your wardrobe with up to <span className="font-bold text-[#f1e7f3]">70% Off</span> our Summer Edit. Styles are moving fast.
                                    </h2>
                                </div>
                                <button className="z-10 flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary hover:bg-[#9a14b5] transition-all transform hover:scale-105 text-white text-base font-bold leading-normal tracking-[0.015em] shadow-xl">
                                    <span>Shop Now</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="layout-container px-4 sm:px-6 lg:px-10 py-8 flex flex-col lg:flex-row gap-8 max-w-[1600px] mx-auto w-full">
                    {/* Sidebar Filters */}
                    <aside className="hidden lg:flex w-64 flex-col gap-8 sticky top-24 h-fit shrink-0">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-[#190e1b] dark:text-white">Filters</h3>
                            <button className="text-xs font-medium text-[#8b4e97] hover:text-primary">Clear All</button>
                        </div>
                        <div className="flex flex-col gap-6">
                            {/* Category Filter */}
                            <div className="flex flex-col gap-3">
                                <h4 className="text-sm font-semibold text-[#190e1b] dark:text-white">Category</h4>
                                <div className="flex flex-col gap-2">
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input defaultChecked className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/20" type="checkbox" />
                                        <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-primary transition-colors">All Sale</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/20" type="checkbox" />
                                        <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-primary transition-colors">Dresses</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/20" type="checkbox" />
                                        <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-primary transition-colors">Tops</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/20" type="checkbox" />
                                        <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-primary transition-colors">Bottoms</span>
                                    </label>
                                </div>
                            </div>
                            {/* Price Range */}
                            <div className="flex flex-col gap-3">
                                <h4 className="text-sm font-semibold text-[#190e1b] dark:text-white">Price</h4>
                                <div className="flex flex-col gap-2">
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/20" type="checkbox" />
                                        <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-primary transition-colors">Under £50</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/20" type="checkbox" />
                                        <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-primary transition-colors">£50 - £100</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/20" type="checkbox" />
                                        <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-primary transition-colors">£100+</span>
                                    </label>
                                </div>
                            </div>
                            {/* Size */}
                            <div className="flex flex-col gap-3">
                                <h4 className="text-sm font-semibold text-[#190e1b] dark:text-white">Size</h4>
                                <div className="grid grid-cols-4 gap-2">
                                    <button className="h-9 w-full rounded border border-gray-200 dark:border-gray-700 text-xs font-medium hover:border-primary hover:text-primary transition-colors text-gray-600 dark:text-gray-300">XS</button>
                                    <button className="h-9 w-full rounded border border-primary bg-primary/10 text-primary text-xs font-bold transition-colors">S</button>
                                    <button className="h-9 w-full rounded border border-gray-200 dark:border-gray-700 text-xs font-medium hover:border-primary hover:text-primary transition-colors text-gray-600 dark:text-gray-300">M</button>
                                    <button className="h-9 w-full rounded border border-gray-200 dark:border-gray-700 text-xs font-medium hover:border-primary hover:text-primary transition-colors text-gray-600 dark:text-gray-300">L</button>
                                    <button className="h-9 w-full rounded border border-gray-200 dark:border-gray-700 text-xs font-medium hover:border-primary hover:text-primary transition-colors text-gray-600 dark:text-gray-300">XL</button>
                                </div>
                            </div>
                            {/* Discount Level */}
                            <div className="flex flex-col gap-3">
                                <h4 className="text-sm font-semibold text-[#190e1b] dark:text-white">Discount</h4>
                                <div className="flex flex-col gap-2">
                                    <label className="flex items-center gap-4 rounded-lg border border-solid border-[#e3d0e7] dark:border-gray-700 p-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                        <input className="h-4 w-4 border-2 border-[#e3d0e7] text-primary focus:ring-0 checked:border-primary" name="discount" type="radio" />
                                        <div className="flex grow flex-col"><p className="text-[#190e1b] dark:text-white text-sm font-medium leading-normal">50% or more</p></div>
                                    </label>
                                    <label className="flex items-center gap-4 rounded-lg border border-solid border-[#e3d0e7] dark:border-gray-700 p-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                        <input className="h-4 w-4 border-2 border-[#e3d0e7] text-primary focus:ring-0 checked:border-primary" name="discount" type="radio" />
                                        <div className="flex grow flex-col"><p className="text-[#190e1b] dark:text-white text-sm font-medium leading-normal">30% or more</p></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Product Grid Section */}
                    <div className="flex flex-col flex-1 gap-6">
                        {/* Chips Navigation (Mobile/Tablet Friendly) */}
                        <div className="flex gap-3 pb-2 overflow-x-auto no-scrollbar scroll-smooth">
                            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white pl-5 pr-5 shadow-sm transition-transform active:scale-95">
                                <p className="text-sm font-bold leading-normal">All Sale</p>
                            </button>
                            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-gray-800 border border-[#e3d0e7] dark:border-gray-700 hover:border-primary hover:text-primary pl-5 pr-5 transition-colors">
                                <p className="text-[#190e1b] dark:text-white text-sm font-medium leading-normal">Dresses</p>
                            </button>
                            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-gray-800 border border-[#e3d0e7] dark:border-gray-700 hover:border-primary hover:text-primary pl-5 pr-5 transition-colors">
                                <p className="text-[#190e1b] dark:text-white text-sm font-medium leading-normal">Tops</p>
                            </button>
                            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-gray-800 border border-[#e3d0e7] dark:border-gray-700 hover:border-primary hover:text-primary pl-5 pr-5 transition-colors">
                                <p className="text-[#190e1b] dark:text-white text-sm font-medium leading-normal">Bottoms</p>
                            </button>
                            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-gray-800 border border-[#e3d0e7] dark:border-gray-700 hover:border-primary hover:text-primary pl-5 pr-5 transition-colors">
                                <p className="text-[#190e1b] dark:text-white text-sm font-medium leading-normal">Accessories</p>
                            </button>
                        </div>
                        {/* Filter Bar (Mobile) & Sort */}
                        <div className="flex items-center justify-between py-2">
                            <p className="text-sm text-[#8b4e97] dark:text-gray-400 font-medium">Showing 128 results</p>
                            <div className="flex gap-2">
                                <button className="lg:hidden flex items-center gap-2 text-sm font-bold text-[#190e1b] dark:text-white bg-white dark:bg-gray-800 border border-[#e3d0e7] dark:border-gray-700 px-4 py-2 rounded-lg">
                                    <span className="material-symbols-outlined text-[18px]">filter_list</span>
                                    Filter
                                </button>
                                <div className="relative group">
                                    <button className="flex items-center gap-2 text-sm font-bold text-[#190e1b] dark:text-white bg-white dark:bg-gray-800 border border-[#e3d0e7] dark:border-gray-700 px-4 py-2 rounded-lg hover:border-primary transition-colors">
                                        Sort by: Recommended
                                        <span className="material-symbols-outlined text-[18px]">expand_more</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Products Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
                            {/* Product Card 1 */}
                            <div className="group flex flex-col gap-3 relative">
                                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100">
                                    <div className="absolute top-3 left-3 z-10 bg-primary text-white text-xs font-bold px-2 py-1 rounded">-30%</div>
                                    <div className="absolute top-3 right-3 z-10 bg-white/80 p-1.5 rounded-full text-gray-400 hover:text-red-500 cursor-pointer backdrop-blur-sm transition-colors">
                                        <span className="material-symbols-outlined text-[20px] block">favorite</span>
                                    </div>
                                    <Link href="/product/detail">
                                        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer" data-alt="Woman wearing floral midi dress in summer setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgpcoqEoUiT2DhT04HknJih7XdVFSts0JNeWvIn6dmF3xEE5sE75sEHLIK4tkCw5WzeIx2Zd3QnWv3u9Ohr4Bma5H-cyqDkQ62CZ2DFNIXeyNj2UCF4HGMf6koqVPSPctQM-5i_6aNTcJQk35_HweI0DOowt8ROQIqNWJsQzYw03vUh2K95niuUETn4NO4mL_2O97Ut_zw8U6SyCxxo8DjgHQoM2WCmCX4p3sVnpGue57gdxgdvmpUXwTvDQn18YkMTQpigPHj2iA" />
                                    </Link>
                                    <button className="absolute bottom-4 left-4 right-4 bg-white text-[#190e1b] font-bold py-3 rounded-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 hover:bg-primary hover:text-white">
                                        <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                                        Quick Add
                                    </button>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Link href="/product/detail" className="text-[#190e1b] dark:text-white font-medium text-base truncate hover:text-primary transition-colors">Floral Midi Summer Dress</Link>
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-400 line-through text-sm">£120.00</span>
                                        <span className="text-primary font-bold text-lg">£84.00</span>
                                    </div>
                                    <div className="flex gap-1 mt-1">
                                        <div className="size-3 rounded-full bg-[#E5D0C6] border border-gray-200"></div>
                                        <div className="size-3 rounded-full bg-[#3B3A38] border border-gray-200"></div>
                                    </div>
                                </div>
                            </div>
                            {/* Product Card 2 */}
                            <div className="group flex flex-col gap-3 relative">
                                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100">
                                    <div className="absolute top-3 left-3 z-10 bg-black text-white text-xs font-bold px-2 py-1 rounded">HOT</div>
                                    <div className="absolute top-3 right-3 z-10 bg-white/80 p-1.5 rounded-full text-gray-400 hover:text-red-500 cursor-pointer backdrop-blur-sm transition-colors">
                                        <span className="material-symbols-outlined text-[20px] block">favorite</span>
                                    </div>
                                    <Link href="/product/detail">
                                        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer" data-alt="Oversized beige blazer on model" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB832uc9-gq7zYRzZkQm6Qb9enHgX3W4o0wWjM7s-cY9x9hu21q4funCJ5YbHETMdQIysNwElN8JlfDyT-BU6fZJA4M6LlS9obTZ1y3apTLbL2IdzfrgfvfCPlpNIF8GpIIfySodIWTFMyQzXTtLEt8uf007QN3c8v7tGrlfjxp85n86b0duodieMRDKD21KXla6zRI5CvgHwUWCPbry8tI_FhkVZxYPWy2AyGgj5wjGU3cE53EOSQ8uCcB_CzqZSh8Ydt8eLkPqZg" />
                                    </Link>
                                    <div className="absolute bottom-16 left-3 bg-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded border border-red-200 opacity-90">Low Stock</div>
                                    <button className="absolute bottom-4 left-4 right-4 bg-white text-[#190e1b] font-bold py-3 rounded-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 hover:bg-primary hover:text-white">
                                        <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                                        Quick Add
                                    </button>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Link href="/product/detail" className="text-[#190e1b] dark:text-white font-medium text-base truncate hover:text-primary transition-colors">Oversized Structured Blazer</Link>
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-400 line-through text-sm">£150.00</span>
                                        <span className="text-primary font-bold text-lg">£75.00</span>
                                        <span className="text-xs text-green-600 font-bold bg-green-100 px-1 rounded">-50%</span>
                                    </div>
                                    <div className="text-xs text-gray-500">2 colors</div>
                                </div>
                            </div>
                            {/* Product Card 3 */}
                            <div className="group flex flex-col gap-3 relative">
                                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100">
                                    <div className="absolute top-3 left-3 z-10 bg-primary text-white text-xs font-bold px-2 py-1 rounded">-33%</div>
                                    <div className="absolute top-3 right-3 z-10 bg-white/80 p-1.5 rounded-full text-gray-400 hover:text-red-500 cursor-pointer backdrop-blur-sm transition-colors">
                                        <span className="material-symbols-outlined text-[20px] block">favorite</span>
                                    </div>
                                    <Link href="/product/detail">
                                        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer" data-alt="Blue leather strappy sandals product shot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBufCAB44yd_3CZnWlSxy_n7t_TCDBun3Z3iyZ20D_2f0QWkMVrJV0Kl4AzzPH-dteUy-f8tX0pp_znWn4letJ-ur1M_7FgCt9BXV9W3ASHQzklba1qzw55ghTKdrJioovq_WIzad4pGDH4NP7l2GvgHq4U0Luia3PvbzIRglOv6S76qsWURLg0tlPhugpUIo1N6rvZgzpqxv6gbgsjyNH-TFLAfn6VGHhMua2PvhRVnfx9CiI0hYpSnCV1T7D4vMu8TOWOtuQ2oqI" />
                                    </Link>
                                    <button className="absolute bottom-4 left-4 right-4 bg-white text-[#190e1b] font-bold py-3 rounded-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 hover:bg-primary hover:text-white">
                                        <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                                        Quick Add
                                    </button>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Link href="/product/detail" className="text-[#190e1b] dark:text-white font-medium text-base truncate hover:text-primary transition-colors">Strappy Leather Sandals</Link>
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-400 line-through text-sm">£90.00</span>
                                        <span className="text-primary font-bold text-lg">£60.00</span>
                                    </div>
                                    <div className="flex gap-1 mt-1">
                                        <div className="size-3 rounded-full bg-[#1A73E8] border border-gray-200"></div>
                                    </div>
                                </div>
                            </div>
                            {/* Product Card 4 */}
                            <div className="group flex flex-col gap-3 relative">
                                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100">
                                    <div className="absolute top-3 left-3 z-10 bg-primary text-white text-xs font-bold px-2 py-1 rounded">-40%</div>
                                    <div className="absolute top-3 right-3 z-10 bg-white/80 p-1.5 rounded-full text-gray-400 hover:text-red-500 cursor-pointer backdrop-blur-sm transition-colors">
                                        <span className="material-symbols-outlined text-[20px] block">favorite</span>
                                    </div>
                                    <Link href="/product/detail">
                                        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer" data-alt="White linen wide leg trousers" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHpgWYrN2AyKQ3FR4pWCNsVByoOikTuVbJEFnvzRlHvprGe_uBG5woygWjaxI0sqGw2KSoqzwxvE8TlgUqj_zMBLwyyzp0_y8i-ZWoaY7ryAo18oItY_I5X4nYmYLOz9VU_8Ka13PbkNORlauPQ3BZYFeJ8k7d1vF1uwE2D36qGQXYC1-iMLhTQm9T5OZ86bBtLj_0Otkur2-L182JCU3iwF-4xHJn8cxR7GJiE1Qg4Zx6L2FxI-KWMSPbZoyvgXHD9hfJwb4SF5k" />
                                    </Link>
                                    <button className="absolute bottom-4 left-4 right-4 bg-white text-[#190e1b] font-bold py-3 rounded-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 hover:bg-primary hover:text-white">
                                        <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                                        Quick Add
                                    </button>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Link href="/product/detail" className="text-[#190e1b] dark:text-white font-medium text-base truncate hover:text-primary transition-colors">Linen Wide Leg Trousers</Link>
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-400 line-through text-sm">£110.00</span>
                                        <span className="text-primary font-bold text-lg">£66.00</span>
                                    </div>
                                    <div className="flex gap-1 mt-1">
                                        <div className="size-3 rounded-full bg-[#FFFFFF] border border-gray-200"></div>
                                        <div className="size-3 rounded-full bg-[#D2B48C] border border-gray-200"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center mt-12 mb-8">
                            <button className="px-8 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-[#190e1b] dark:text-white font-bold rounded-lg hover:border-primary hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-sm">
                                Load More
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white dark:bg-[#1e1121] border-t border-[#e3d0e7] dark:border-gray-800 pt-16 pb-8">
                <div className="layout-container px-10 max-w-[1200px] mx-auto flex flex-col gap-12">
                    <div className="flex flex-col md:flex-row justify-between gap-12">
                        <div className="flex flex-col gap-4 max-w-sm">
                            <div className="flex items-center gap-2 text-[#190e1b] dark:text-white">
                                <div className="size-6 text-primary">
                                    <span className="material-symbols-outlined text-[24px]">diamond</span>
                                </div>
                                <h2 className="text-[#190e1b] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">TOI N MOI</h2>
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Join our newsletter and be the first to know about new collections and exclusive offers.
                            </p>
                            <form className="flex gap-2">
                                <input className="flex-1 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 text-sm focus:border-primary focus:ring-0" placeholder="Your email address" type="email" />
                                <button className="bg-primary text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">Subscribe</button>
                            </form>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
                            <div className="flex flex-col gap-4">
                                <h4 className="font-bold text-sm uppercase tracking-wide text-[#190e1b] dark:text-white">Shop</h4>
                                <Link className="text-sm text-gray-500 hover:text-primary transition-colors" href="/new-arrivals">New In</Link>
                                <Link className="text-sm text-gray-500 hover:text-primary transition-colors" href="/clothing">Clothing</Link>
                                <Link className="text-sm text-gray-500 hover:text-primary transition-colors" href="/accessories">Accessories</Link>
                                <Link className="text-sm text-gray-500 hover:text-primary transition-colors" href="/sale">Sale</Link>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h4 className="font-bold text-sm uppercase tracking-wide text-[#190e1b] dark:text-white">Help</h4>
                                <Link className="text-sm text-gray-500 hover:text-primary transition-colors" href="/shipping">Shipping</Link>
                                <Link className="text-sm text-gray-500 hover:text-primary transition-colors" href="/returns">Returns</Link>
                                <Link className="text-sm text-gray-500 hover:text-primary transition-colors" href="/size-guide">Sizing</Link>
                                <Link className="text-sm text-gray-500 hover:text-primary transition-colors" href="/contact">Contact Us</Link>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h4 className="font-bold text-sm uppercase tracking-wide text-[#190e1b] dark:text-white">Social</h4>
                                <a className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">Instagram</a>
                                <a className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">TikTok</a>
                                <a className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">Pinterest</a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-xs text-gray-400">© 2024 TOI N MOI. All rights reserved.</p>
                        <div className="flex gap-4">
                            <Link className="text-xs text-gray-400 hover:text-primary" href="/privacy">Privacy Policy</Link>
                            <Link className="text-xs text-gray-400 hover:text-primary" href="/terms">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
