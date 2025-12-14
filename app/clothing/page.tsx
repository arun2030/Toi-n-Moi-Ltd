/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';

export default function ClothingPage() {
    return (
        <div className="bg-[#f8f6f8] dark:bg-[#1e1121] font-display text-[#190e1b] dark:text-white antialiased min-h-screen flex flex-col">
            {/* Scoped Styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}} />

            {/* TopNavBar - using consistent layout */}
            <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f1e7f3] dark:border-b-gray-800 bg-[#fbf8fc]/95 dark:bg-[#1e1121]/95 backdrop-blur-sm px-6 py-4 md:px-10">
                <Link className="flex items-center gap-4 text-[#190e1b] dark:text-white" href="/">
                    <div className="size-8 text-primary">
                        <span className="material-symbols-outlined text-3xl">diamond</span>
                    </div>
                    <h2 className="text-[#190e1b] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] hidden sm:block">Toi-n-Moi</h2>
                </Link>
                {/* Desktop Nav Links */}
                <div className="hidden md:flex flex-1 justify-center gap-8">
                    <Link className="text-[#190e1b] dark:text-gray-200 hover:text-primary transition-colors text-sm font-bold leading-normal" href="/new-arrivals">New In</Link>
                    <Link className="text-primary text-sm font-bold leading-normal" href="/clothing">Clothing</Link>
                    <Link className="text-[#190e1b] dark:text-gray-200 hover:text-primary transition-colors text-sm font-bold leading-normal" href="/accessories">Accessories</Link>
                    <Link className="text-[#190e1b] dark:text-gray-200 hover:text-primary transition-colors text-sm font-bold leading-normal" href="/blog">Editorial</Link>
                </div>
                {/* Action Icons */}
                <div className="flex items-center justify-end gap-2 md:gap-4">
                    <button className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-[#f1e7f3] dark:hover:bg-gray-800 text-[#190e1b] dark:text-white transition-colors">
                        <span className="material-symbols-outlined group-hover:text-primary">search</span>
                    </button>
                    <Link href="/cart" className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-[#f1e7f3] dark:hover:bg-gray-800 text-[#190e1b] dark:text-white transition-colors relative">
                        <span className="material-symbols-outlined group-hover:text-primary">shopping_bag</span>
                        <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary ring-2 ring-white dark:ring-[#1e1121]"></span>
                    </Link>
                    <Link href="/account" className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-[#f1e7f3] dark:hover:bg-gray-800 text-[#190e1b] dark:text-white transition-colors">
                        <span className="material-symbols-outlined group-hover:text-primary">person</span>
                    </Link>
                </div>
            </header>

            {/* Main Content Layout */}
            <div className="layout-container flex grow flex-col">
                <div className="flex flex-1 justify-center py-5 px-4 md:px-8 lg:px-12 xl:px-20">
                    <div className="layout-content-container flex w-full max-w-[1440px] flex-col">
                        {/* Breadcrumbs */}
                        <div className="flex flex-wrap gap-2 px-4 py-2">
                            <Link className="text-[#8b4e97] hover:underline text-sm font-medium leading-normal" href="/">Home</Link>
                            <span className="text-[#e3d0e7] text-sm font-medium leading-normal">/</span>
                            <span className="text-[#190e1b] dark:text-white text-sm font-medium leading-normal">Clothing</span>
                        </div>
                        {/* Page Header & Sort */}
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-4 py-6">
                            <div className="flex flex-col gap-2">
                                <h1 className="text-[#190e1b] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">Women&apos;s Clothing</h1>
                                <p className="text-[#8b4e97] text-lg font-normal leading-normal">Discover our latest collection of essentials.</p>
                            </div>
                            {/* Sort Dropdown */}
                            <div className="flex items-center gap-3">
                                <span className="text-[#190e1b] dark:text-white text-sm font-bold whitespace-nowrap">Sort by:</span>
                                <div className="relative w-48">
                                    <select className="appearance-none w-full cursor-pointer rounded border border-[#e3d0e7] dark:border-gray-700 bg-[#fbf8fc] dark:bg-gray-800 py-3 pl-4 pr-10 text-sm font-medium text-[#190e1b] dark:text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                                        <option value="newest">Newest</option>
                                        <option value="price-low">Price: Low to High</option>
                                        <option value="price-high">Price: High to Low</option>
                                        <option value="bestsellers">Bestsellers</option>
                                    </select>
                                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#8b4e97] pointer-events-none">expand_more</span>
                                </div>
                            </div>
                        </div>

                        {/* Content Grid: Sidebar + Products */}
                        <div className="flex flex-col lg:flex-row gap-8 px-4 mt-6">
                            {/* Sidebar Filters */}
                            <aside className="w-full lg:w-64 flex-shrink-0">
                                <div className="lg:sticky lg:top-24 space-y-8">
                                    {/* Categories Filter */}
                                    <div className="flex flex-col gap-4">
                                        <h3 className="text-[#190e1b] dark:text-white text-base font-bold uppercase tracking-wider">Category</h3>
                                        <div className="flex flex-col gap-2">
                                            <label className="group flex cursor-pointer items-center gap-3">
                                                <input defaultChecked className="h-5 w-5 rounded border-[#e3d0e7] dark:border-gray-700 border-2 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 focus:border-primary focus:outline-none transition-all" type="checkbox" />
                                                <span className="text-[#190e1b] dark:text-gray-300 text-sm group-hover:text-primary transition-colors">Dresses (42)</span>
                                            </label>
                                            <label className="group flex cursor-pointer items-center gap-3">
                                                <input className="h-5 w-5 rounded border-[#e3d0e7] dark:border-gray-700 border-2 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 focus:border-primary focus:outline-none transition-all" type="checkbox" />
                                                <span className="text-[#190e1b] dark:text-gray-300 text-sm group-hover:text-primary transition-colors">Tops (28)</span>
                                            </label>
                                            <label className="group flex cursor-pointer items-center gap-3">
                                                <input className="h-5 w-5 rounded border-[#e3d0e7] dark:border-gray-700 border-2 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 focus:border-primary focus:outline-none transition-all" type="checkbox" />
                                                <span className="text-[#190e1b] dark:text-gray-300 text-sm group-hover:text-primary transition-colors">Pants &amp; Skirts (15)</span>
                                            </label>
                                            <label className="group flex cursor-pointer items-center gap-3">
                                                <input className="h-5 w-5 rounded border-[#e3d0e7] dark:border-gray-700 border-2 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 focus:border-primary focus:outline-none transition-all" type="checkbox" />
                                                <span className="text-[#190e1b] dark:text-gray-300 text-sm group-hover:text-primary transition-colors">Outerwear (10)</span>
                                            </label>
                                        </div>
                                    </div>
                                    <hr className="border-[#f1e7f3] dark:border-gray-800" />
                                    {/* Size Filter */}
                                    <div className="flex flex-col gap-4">
                                        <h3 className="text-[#190e1b] dark:text-white text-base font-bold uppercase tracking-wider">Size</h3>
                                        <div className="flex flex-wrap gap-2">
                                            <button className="h-10 w-10 rounded border border-[#e3d0e7] dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium text-[#190e1b] dark:text-white hover:border-primary hover:text-primary focus:bg-primary focus:text-white focus:border-primary transition-colors">XS</button>
                                            <button className="h-10 w-10 rounded border border-primary bg-primary text-sm font-medium text-white transition-colors">S</button>
                                            <button className="h-10 w-10 rounded border border-[#e3d0e7] dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium text-[#190e1b] dark:text-white hover:border-primary hover:text-primary focus:bg-primary focus:text-white focus:border-primary transition-colors">M</button>
                                            <button className="h-10 w-10 rounded border border-[#e3d0e7] dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium text-[#190e1b] dark:text-white hover:border-primary hover:text-primary focus:bg-primary focus:text-white focus:border-primary transition-colors">L</button>
                                            <button className="h-10 w-10 rounded border border-[#e3d0e7] dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium text-[#190e1b] dark:text-white hover:border-primary hover:text-primary focus:bg-primary focus:text-white focus:border-primary transition-colors">XL</button>
                                        </div>
                                    </div>
                                    <hr className="border-[#f1e7f3] dark:border-gray-800" />
                                    {/* Color Filter */}
                                    <div className="flex flex-col gap-4">
                                        <h3 className="text-[#190e1b] dark:text-white text-base font-bold uppercase tracking-wider">Color</h3>
                                        <div className="flex flex-wrap gap-3">
                                            <button className="h-8 w-8 rounded-full bg-black ring-2 ring-offset-2 ring-transparent focus:ring-primary"></button>
                                            <button className="h-8 w-8 rounded-full bg-white border border-gray-200 ring-2 ring-offset-2 ring-transparent focus:ring-primary"></button>
                                            <button className="h-8 w-8 rounded-full bg-[#d4a5a5] ring-2 ring-offset-2 ring-transparent focus:ring-primary"></button>
                                            <button className="h-8 w-8 rounded-full bg-[#8b4e97] ring-2 ring-offset-2 ring-primary"></button>
                                            <button className="h-8 w-8 rounded-full bg-[#5a7d5a] ring-2 ring-offset-2 ring-transparent focus:ring-primary"></button>
                                            <button className="h-8 w-8 rounded-full bg-[#2a4d69] ring-2 ring-offset-2 ring-transparent focus:ring-primary"></button>
                                        </div>
                                    </div>
                                    <hr className="border-[#f1e7f3] dark:border-gray-800" />
                                    {/* Price Filter */}
                                    <div className="flex flex-col gap-4">
                                        <h3 className="text-[#190e1b] dark:text-white text-base font-bold uppercase tracking-wider">Price</h3>
                                        <div className="flex flex-col gap-2">
                                            <label className="group flex cursor-pointer items-center gap-3">
                                                <input className="h-5 w-5 rounded border-[#e3d0e7] dark:border-gray-700 border-2 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 focus:border-primary focus:outline-none transition-all" type="checkbox" />
                                                <span className="text-[#190e1b] dark:text-gray-300 text-sm group-hover:text-primary transition-colors">Under £50</span>
                                            </label>
                                            <label className="group flex cursor-pointer items-center gap-3">
                                                <input defaultChecked className="h-5 w-5 rounded border-[#e3d0e7] dark:border-gray-700 border-2 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 focus:border-primary focus:outline-none transition-all" type="checkbox" />
                                                <span className="text-[#190e1b] dark:text-gray-300 text-sm group-hover:text-primary transition-colors">£50 - £100</span>
                                            </label>
                                            <label className="group flex cursor-pointer items-center gap-3">
                                                <input className="h-5 w-5 rounded border-[#e3d0e7] dark:border-gray-700 border-2 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 focus:border-primary focus:outline-none transition-all" type="checkbox" />
                                                <span className="text-[#190e1b] dark:text-gray-300 text-sm group-hover:text-primary transition-colors">£100 - £200</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </aside>

                            {/* Product Grid */}
                            <main className="flex-1">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-6 gap-y-10">
                                    {/* Product Card 1 */}
                                    <div className="group flex flex-col gap-4 cursor-pointer">
                                        <div className="relative overflow-hidden rounded bg-gray-100 aspect-[3/4]">
                                            <Link href="/product/detail">
                                                <img alt="Woman wearing a long silk dress" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer" data-alt="Elegant silk evening dress in beige" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPAmfpVCdGFwYCejiICv-J_Vg9DMeZZmwDxN8mQQLbcAgu0IGNImEZVX-qMf3ML8KsU7JuMz8wwYtjI6wN425ENuv_kYXSDp7ClS1q31aADzroLhS_5ab_QHKPWqWKGLg9WVVbGlituTmQMdeBjt8Gcq6qbyHBj6jr9EKFQprp7pdeU0lk0cFa6hkJrfA5n4yDn_Xm1pZjMeMZ-PkQGRDcDSRXb7xQeDZcDy8KXexypnlNTXzfilIL8l4qA-CQDmhyObyd0DFBUIw" />
                                            </Link>
                                            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2.5 py-1 text-xs font-bold text-[#190e1b] uppercase tracking-wider rounded-sm">New</div>
                                            <button className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-primary/90">
                                                <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                                            </button>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-base font-bold text-[#190e1b] dark:text-white group-hover:text-primary transition-colors">Silk Evening Gown</h3>
                                            <p className="text-sm font-medium text-[#8b4e97]">£245.00</p>
                                        </div>
                                    </div>
                                    {/* Product Card 2 */}
                                    <div className="group flex flex-col gap-4 cursor-pointer">
                                        <div className="relative overflow-hidden rounded bg-gray-100 aspect-[3/4]">
                                            <Link href="/product/detail">
                                                <img alt="Woman in floral summer dress" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer" data-alt="Bright yellow floral summer dress" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-8hVT7yI2rfdTGxWvBkija6ECijBIgUX4ad-4SpSKUfnyV96Xc7S4BfMik5qS8XBR3RBB7lKETeGvg-MRSuGiThNFv3_1x_BKR4Sb_3d3jSh1vdGIRWwpLWJOu5TL-FvNCS93PSBQcvBue_xV1kWTuwOwBBcOFLyU1CGWfw_-TDeCJdJCky5jX0FnYZu8ZrjQdvQn-XUOcXsKw6EJoGgO9EZdUMLgO5lXEuioq5ZIZtLBScxYpMY5QgyPQXnlWOteQDj-DHJS4Vo" />
                                            </Link>
                                            <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur px-2.5 py-1 text-xs font-bold text-white uppercase tracking-wider rounded-sm">Sale</div>
                                            <button className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-primary/90">
                                                <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                                            </button>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-base font-bold text-[#190e1b] dark:text-white group-hover:text-primary transition-colors">Floral Summer Dress</h3>
                                            <div className="flex items-center gap-2">
                                                <p className="text-sm font-bold text-[#b017cf]">£89.00</p>
                                                <p className="text-xs font-medium text-gray-400 line-through">£120.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Product Card 3 */}
                                    <div className="group flex flex-col gap-4 cursor-pointer">
                                        <div className="relative overflow-hidden rounded bg-gray-100 aspect-[3/4]">
                                            <Link href="/product/detail">
                                                <img alt="Woman in dark velvet dress" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer" data-alt="Mysterious black velvet midi dress" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-1IubL1jHBmAXGDv9jFY419ignckDbipjqV3AdV8ur4ccj04U6IkG2rtF8C1FBA1c2yHw5ECuDZ1StFLve6ELPee8S3DCK6EyMR_XSygPiMjKul1MMmyGn8f3_fgl_H1Z4aVOG6NYLDVNffVM2CUuN_gDixkmclJozRFk7KfJS7VzEf0EASskBfwGcajzQFDyyxTvPhV4HvmqiPbR_DkJxJ5IEym9v_orekWoA4Zs-xED_ZJ8CAiJK1CDjJ_R1W5zhbYwm_Nkvuk" />
                                            </Link>
                                            <button className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-primary/90">
                                                <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                                            </button>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-base font-bold text-[#190e1b] dark:text-white group-hover:text-primary transition-colors">Velvet Midi Dress</h3>
                                            <p className="text-sm font-medium text-[#8b4e97]">£180.00</p>
                                        </div>
                                    </div>
                                    {/* Product Card 4 */}
                                    <div className="group flex flex-col gap-4 cursor-pointer">
                                        <div className="relative overflow-hidden rounded bg-gray-100 aspect-[3/4]">
                                            <Link href="/product/detail">
                                                <img alt="White linen clothes on a rack" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer" data-alt="Classic white linen button-up shirt" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9Eok_4F3j0B80R8ldvNXIELfJkkQ_EuxlToLKxwCIFnRtOSGBetw2CSEwmmOgcluGlvlhpCRde8uwaaYc9H89CgRqYKAHsR41dYEmkV1ggrBoYvTyI51vC1Al9MSci5jHZ_7ZkbM8rq6-VDb32W1ZVqhRirFAPFnN6HotDA78wN2QZDNg9Qf58nBgZJNz73SmfI9XxIR3BcRS1ZY0uh7HZAmT-GbKuj3kUUkojgxo_Y6tFnwX_jwqTWvuAOLzOdHfBUTh9OsL4N0" />
                                            </Link>
                                            <button className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-primary/90">
                                                <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                                            </button>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-base font-bold text-[#190e1b] dark:text-white group-hover:text-primary transition-colors">Classic Linen Shirt</h3>
                                            <p className="text-sm font-medium text-[#8b4e97]">£95.00</p>
                                        </div>
                                    </div>
                                    {/* Product Card 5 */}
                                    <div className="group flex flex-col gap-4 cursor-pointer">
                                        <div className="relative overflow-hidden rounded bg-gray-100 aspect-[3/4]">
                                            <Link href="/product/detail">
                                                <img alt="Woman in pink coat" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer" data-alt="Soft pink wool oversized coat" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEWEBXB5MGuT3vl3fV-ZrvtwAgzAU5mi3o2RDo0Oqxn4CtWAGrflE3gESvaCTrebNUznsh3Oz_pXnNpWhyrLEEZ-EEEuPPDID1ETY4vA4Ll2gyaZ48-bDk6nCH9ZUZaFaHGJ06zVzLM_SHfeV4mH2FxZtD2dKLwb3Z5OCBWFEjLGWIQE2xVxU2BU38ScG3YFhH2bSoOVPzAZE0VHkvHlbINiMl2tcXBLunP7hpjnhhoU5ZIwRHQqqkxrjAwfhODQnuLgDVJuh6zfM" />
                                            </Link>
                                            <button className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-primary/90">
                                                <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                                            </button>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-base font-bold text-[#190e1b] dark:text-white group-hover:text-primary transition-colors">Wool Oversized Coat</h3>
                                            <p className="text-sm font-medium text-[#8b4e97]">£320.00</p>
                                        </div>
                                    </div>
                                    {/* Product Card 6 */}
                                    <div className="group flex flex-col gap-4 cursor-pointer">
                                        <div className="relative overflow-hidden rounded bg-gray-100 aspect-[3/4]">
                                            <Link href="/product/detail">
                                                <img alt="Woman in patterned skirt" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer" data-alt="Geometric pattern pleated midi skirt" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXutrmvKpavBQahZOkKLhLHLaKStZ5M7Y-Zdc1aOx64ZGPkd6PPXQco_qLLLk8ab11nnDXKhMj5-RRAwookorDLTScV4pTfyrQtek97yxKaVoH0WI_qbQn32ZOhhOS9eUlLlDixgLaIbpFNRxSGZDKQfuJa7rEZxs_f_oiy9k28Fhbx5lYzqKzw3GSq6b5bRF-OcUXb8U6dSknEoz1CQA36xczZm2kcxZVXtXr6TBOF4FursRLvTVOZf74NLOdsCAprRZPLPvL-s0" />
                                            </Link>
                                            <button className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-primary/90">
                                                <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                                            </button>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-base font-bold text-[#190e1b] dark:text-white group-hover:text-primary transition-colors">Pleated Midi Skirt</h3>
                                            <p className="text-sm font-medium text-[#8b4e97]">£110.00</p>
                                        </div>
                                    </div>
                                    {/* Product Card 7 */}
                                    <div className="group flex flex-col gap-4 cursor-pointer">
                                        <div className="relative overflow-hidden rounded bg-gray-100 aspect-[3/4]">
                                            <Link href="/product/detail">
                                                <img alt="Fashion model in beige sweater" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer" data-alt="Cozy beige knit turtleneck sweater" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmMiSI1bscxoOwpu68VcD4YGdj-MptncealI_GlWbEbPhJ6qj2V1E23dcEKNS-yA14SvVsKXvUKKqA0wUVu910eN45thF71kS-7uNsewR5eztM88ns9hayRgsLZ9CqecrXCK-Eh23Q0mvnzvwaBJZTqzTkFJ3Ot2hR7Z4OhgQo-1rMqxxqhPGXIYZRm5xSWVe9reC5RmL4V0zNW3uChmAkG5p76xsAiTbsxgjRcYfiV-c85YOI_Mt95L0XOtPdsKoUXCCNoS7R2Ag" />
                                            </Link>
                                            <button className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-primary/90">
                                                <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                                            </button>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-base font-bold text-[#190e1b] dark:text-white group-hover:text-primary transition-colors">Knit Turtleneck</h3>
                                            <p className="text-sm font-medium text-[#8b4e97]">£140.00</p>
                                        </div>
                                    </div>
                                    {/* Product Card 8 */}
                                    <div className="group flex flex-col gap-4 cursor-pointer">
                                        <div className="relative overflow-hidden rounded bg-gray-100 aspect-[3/4]">
                                            <Link href="/product/detail">
                                                <img alt="Woman in white bridal dress" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer" data-alt="Simple modern white wedding dress" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyAxJZWIO8ANOsohinQtq_fQS8swttMyQpcnIw0JWm7WRtHUa0lzHWo6owMVNbV17-i3-HdwAW49rjTD6TfcBhmrWY5S3Bpm3f0iwbihG5bWUxIgmUT9UYeot_Sg-R3pH08mvPhy_yfmgbk5C8WgL5PzCV1dFoEsFK0DqYULAMDSImB0aVbcLeVJkB73hKgjv96j9Zpd8DQVFD20BaN_aaj06Qq3SqTeGq4ZFf7mv9Y3Vw4wAzusCvhhthMk3RyfSNy7nPvhEj3FU" />
                                            </Link>
                                            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2.5 py-1 text-xs font-bold text-[#190e1b] uppercase tracking-wider rounded-sm">Limited</div>
                                            <button className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-primary/90">
                                                <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                                            </button>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-base font-bold text-[#190e1b] dark:text-white group-hover:text-primary transition-colors">Modern Bridal Dress</h3>
                                            <p className="text-sm font-medium text-[#8b4e97]">£550.00</p>
                                        </div>
                                    </div>
                                    {/* Product Card 9 */}
                                    <div className="group flex flex-col gap-4 cursor-pointer">
                                        <div className="relative overflow-hidden rounded bg-gray-100 aspect-[3/4]">
                                            <Link href="/product/detail">
                                                <img alt="Woman in denim jacket" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer" data-alt="Classic blue denim oversized jacket" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpXQ4YoFxag5cSJZ0fCUiVOdYR-yIcfABILPeLSqdmxHXK_ZooWgJ-IXBqtqGka1GSM3wBsFfWMB7DuVsSVsvbf168i9K2h5VlKO10SLkC9VHaG9dolPCYHA7mIOBuE2fiH4fe433OpxhTtbhI_6SpwTSre1M3H1FUHp7mnUw_QX90r1ffgoye2iIQUqYhFaL8J6w_OVsQ0LnKkKE0uYgmv6zZLS5EaPW7h4UxlgVKz2vmadqikkLnGXM0QHeIMWHbz-YDTeMxes0" />
                                            </Link>
                                            <button className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-primary/90">
                                                <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                                            </button>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-base font-bold text-[#190e1b] dark:text-white group-hover:text-primary transition-colors">Oversized Denim Jacket</h3>
                                            <p className="text-sm font-medium text-[#8b4e97]">£130.00</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Load More Button */}
                                <div className="mt-16 flex justify-center pb-20">
                                    <button className="flex items-center gap-2 rounded bg-[#f1e7f3] dark:bg-gray-800 px-8 py-3 text-sm font-bold uppercase tracking-widest text-[#190e1b] dark:text-white transition-all hover:bg-primary hover:text-white">
                                        Load More
                                        <span className="material-symbols-outlined text-[18px]">expand_more</span>
                                    </button>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
                {/* Footer */}
                <footer className="bg-[#fbf8fc] dark:bg-background-dark border-t border-[#f1e7f3] dark:border-gray-800 pt-16 pb-8">
                    <div className="layout-container flex flex-col items-center px-6 md:px-10">
                        <div className="flex w-full max-w-[1440px] flex-col md:flex-row justify-between gap-12">
                            {/* Newsletter */}
                            <div className="flex flex-col gap-4 max-w-md">
                                <h4 className="text-xl font-bold text-[#190e1b] dark:text-white">Join the Club</h4>
                                <p className="text-sm text-[#8b4e97]">Subscribe to receive updates, access to exclusive deals, and more.</p>
                                <div className="flex gap-2">
                                    <input className="w-full rounded border border-[#e3d0e7] dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2.5 text-sm text-[#190e1b] dark:text-white placeholder:text-[#e3d0e7] focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Enter your email address" type="email" />
                                    <button className="whitespace-nowrap rounded bg-[#190e1b] dark:bg-white px-6 py-2.5 text-sm font-bold text-white dark:text-slate-900 transition-colors hover:bg-primary dark:hover:bg-gray-200">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                            {/* Footer Links */}
                            <div className="flex flex-wrap gap-12 md:gap-24">
                                <div className="flex flex-col gap-3">
                                    <h5 className="text-sm font-bold uppercase tracking-widest text-[#190e1b] dark:text-white">Shop</h5>
                                    <Link className="text-sm text-[#8b4e97] hover:text-primary" href="/new-arrivals">New Arrivals</Link>
                                    <Link className="text-sm text-[#8b4e97] hover:text-primary" href="/clothing">Clothing</Link>
                                    <Link className="text-sm text-[#8b4e97] hover:text-primary" href="/accessories">Accessories</Link>
                                    <Link className="text-sm text-[#8b4e97] hover:text-primary" href="/sale">Sale</Link>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h5 className="text-sm font-bold uppercase tracking-widest text-[#190e1b] dark:text-white">Support</h5>
                                    <Link className="text-sm text-[#8b4e97] hover:text-primary" href="/contact">Contact Us</Link>
                                    <Link className="text-sm text-[#8b4e97] hover:text-primary" href="/shipping">Shipping &amp; Returns</Link>
                                    <Link className="text-sm text-[#8b4e97] hover:text-primary" href="/size-guide">Size Guide</Link>
                                    <Link className="text-sm text-[#8b4e97] hover:text-primary" href="/faq">FAQ</Link>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h5 className="text-sm font-bold uppercase tracking-widest text-[#190e1b] dark:text-white">Social</h5>
                                    <div className="flex gap-4">
                                        <a className="text-[#8b4e97] hover:text-primary transition-colors" href="#">
                                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                                        </a>
                                        <a className="text-[#8b4e97] hover:text-primary transition-colors" href="#">
                                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-16 border-t border-[#e3d0e7] dark:border-gray-800 w-full pt-8 text-center md:text-left">
                            <p className="text-xs text-[#8b4e97]">© 2024 TOI-N-MOI. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
