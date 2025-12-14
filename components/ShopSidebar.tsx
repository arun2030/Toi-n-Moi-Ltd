"use client";

import React, { useState } from 'react';

export default function ShopSidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <aside className="w-full lg:w-64 flex-shrink-0">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-4">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-between p-4 bg-white dark:bg-gray-800 border border-slate-200 rounded-lg shadow-sm"
                >
                    <span className="font-bold">Filters & Sort</span>
                    <span className="material-symbols-outlined">{isOpen ? 'expand_less' : 'tune'}</span>
                </button>
            </div>

            {/* Filter Content - Hidden on mobile unless open */}
            <div className={`flex-col gap-4 ${isOpen ? 'flex' : 'hidden lg:flex'}`}>
                <div className="hidden lg:flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg">Filters</h3>
                    <button className="text-sm text-primary font-medium">Clear All</button>
                </div>

                {/* Accordion 1: Category */}
                <details className="group bg-white dark:bg-gray-800 rounded-xl border border-[#d0d4e7] dark:border-gray-700 overflow-hidden" open>
                    <summary className="flex cursor-pointer items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                        <span className="font-bold text-sm text-text-main dark:text-white">Category</span>
                        <span className="material-symbols-outlined text-text-muted transition-transform group-open:rotate-180">keyboard_arrow_down</span>
                    </summary>
                    <div className="px-4 pb-4 pt-0 flex flex-col gap-2">
                        <label className="flex items-center gap-3 cursor-pointer group/item">
                            <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary/20 w-4 h-4" />
                            <span className="text-sm text-text-muted dark:text-gray-300 group-hover/item:text-primary transition-colors">Dresses (42)</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group/item">
                            <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary/20 w-4 h-4" />
                            <span className="text-sm text-text-muted dark:text-gray-300 group-hover/item:text-primary transition-colors">Tops & Blouses (38)</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group/item">
                            <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary/20 w-4 h-4" />
                            <span className="text-sm text-text-muted dark:text-gray-300 group-hover/item:text-primary transition-colors">Pants (15)</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group/item">
                            <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary/20 w-4 h-4" />
                            <span className="text-sm text-text-muted dark:text-gray-300 group-hover/item:text-primary transition-colors">Outerwear (29)</span>
                        </label>
                    </div>
                </details>

                {/* Accordion 2: Price */}
                <details className="group bg-white dark:bg-gray-800 rounded-xl border border-[#d0d4e7] dark:border-gray-700 overflow-hidden">
                    <summary className="flex cursor-pointer items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                        <span className="font-bold text-sm text-text-main dark:text-white">Price</span>
                        <span className="material-symbols-outlined text-text-muted transition-transform group-open:rotate-180">keyboard_arrow_down</span>
                    </summary>
                    <div className="px-4 pb-4 pt-0">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="relative w-full">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-xs">$</span>
                                <input type="number" placeholder="Min" className="w-full pl-6 pr-2 py-1.5 text-sm border border-gray-200 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700" />
                            </div>
                            <span className="text-text-muted">-</span>
                            <div className="relative w-full">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-xs">$</span>
                                <input type="number" placeholder="Max" className="w-full pl-6 pr-2 py-1.5 text-sm border border-gray-200 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700" />
                            </div>
                        </div>
                        <button className="w-full py-1.5 text-xs font-bold text-primary bg-primary/10 rounded hover:bg-primary/20 transition-colors">Apply</button>
                    </div>
                </details>

                {/* Accordion 3: Color */}
                <details className="group bg-white dark:bg-gray-800 rounded-xl border border-[#d0d4e7] dark:border-gray-700 overflow-hidden">
                    <summary className="flex cursor-pointer items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                        <span className="font-bold text-sm text-text-main dark:text-white">Color</span>
                        <span className="material-symbols-outlined text-text-muted transition-transform group-open:rotate-180">keyboard_arrow_down</span>
                    </summary>
                    <div className="px-4 pb-4 pt-0 grid grid-cols-5 gap-2">
                        <button aria-label="Black" className="w-8 h-8 rounded-full bg-black border border-gray-200 hover:ring-2 ring-primary ring-offset-2 transition-all"></button>
                        <button aria-label="White" className="w-8 h-8 rounded-full bg-white border border-gray-300 hover:ring-2 ring-primary ring-offset-2 transition-all"></button>
                        <button aria-label="Navy" className="w-8 h-8 rounded-full bg-blue-800 border border-gray-200 hover:ring-2 ring-primary ring-offset-2 transition-all"></button>
                        <button aria-label="Red" className="w-8 h-8 rounded-full bg-red-700 border border-gray-200 hover:ring-2 ring-primary ring-offset-2 transition-all"></button>
                        <button aria-label="Beige" className="w-8 h-8 rounded-full bg-orange-300 border border-gray-200 hover:ring-2 ring-primary ring-offset-2 transition-all"></button>
                        <button aria-label="Green" className="w-8 h-8 rounded-full bg-green-700 border border-gray-200 hover:ring-2 ring-primary ring-offset-2 transition-all"></button>
                    </div>
                </details>

                {/* Accordion 4: Size */}
                <details className="group bg-white dark:bg-gray-800 rounded-xl border border-[#d0d4e7] dark:border-gray-700 overflow-hidden">
                    <summary className="flex cursor-pointer items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                        <span className="font-bold text-sm text-text-main dark:text-white">Size</span>
                        <span className="material-symbols-outlined text-text-muted transition-transform group-open:rotate-180">keyboard_arrow_down</span>
                    </summary>
                    <div className="px-4 pb-4 pt-0 flex flex-wrap gap-2">
                        <button className="px-3 py-1 border border-gray-200 dark:border-gray-600 rounded text-sm hover:border-primary hover:text-primary transition-colors">XS</button>
                        <button className="px-3 py-1 border border-primary bg-primary text-white rounded text-sm font-medium">S</button>
                        <button className="px-3 py-1 border border-gray-200 dark:border-gray-600 rounded text-sm hover:border-primary hover:text-primary transition-colors">M</button>
                        <button className="px-3 py-1 border border-gray-200 dark:border-gray-600 rounded text-sm hover:border-primary hover:text-primary transition-colors">L</button>
                        <button className="px-3 py-1 border border-gray-200 dark:border-gray-600 rounded text-sm hover:border-primary hover:text-primary transition-colors">XL</button>
                    </div>
                </details>
            </div>
        </aside>
    );
}
