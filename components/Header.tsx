"use client";

import Link from 'next/link';
import React, { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-background-light/95 backdrop-blur-sm border-b border-slate-200 transition-colors">
            <div className="px-4 lg:px-40 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Logo & Main Nav */}
                <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-start">
                    <Link href="/" className="flex items-center gap-2 text-slate-900 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                        <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                            <span className="material-symbols-outlined text-[20px]">diamond</span>
                        </div>
                        <h2 className="text-xl font-extrabold leading-tight tracking-tight">TOI&MOI</h2>
                    </Link>
                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-6">
                        <Link href="/" className="text-slate-700 hover:text-primary text-sm font-semibold transition-colors">Home</Link>
                        <Link href="/shop" className="text-slate-700 hover:text-primary text-sm font-semibold transition-colors">Shop</Link>
                        <Link href="/about" className="text-slate-700 hover:text-primary text-sm font-semibold transition-colors">About</Link>
                        <Link href="/contact" className="text-slate-700 hover:text-primary text-sm font-semibold transition-colors">Contact</Link>
                        <Link href="/login" className="text-slate-700 hover:text-primary text-sm font-semibold transition-colors">Login</Link>
                        <Link href="/register" className="text-slate-700 hover:text-primary text-sm font-semibold transition-colors">Register</Link>
                    </nav>
                    {/* Mobile Menu Icon */}
                    <button
                        className="md:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
                    </button>
                </div>
                {/* Search & Actions (Desktop) */}
                <div className="hidden md:flex flex-1 justify-end gap-6 w-full md:w-auto items-center">
                    {/* Search Bar */}
                    <div className="relative w-full max-w-xs group">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400 group-focus-within:text-primary">
                            <span className="material-symbols-outlined text-[20px]">search</span>
                        </div>
                        <input type="text" className="block w-full p-2.5 pl-10 text-sm text-slate-900 bg-white border border-slate-200 rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400 transition-all shadow-sm" placeholder="Search..." required />
                    </div>
                    {/* Action Buttons */}
                    <div className="flex gap-1">
                        <button className="p-2.5 rounded-lg hover:bg-slate-200 text-slate-700 transition-colors relative">
                            <span className="material-symbols-outlined text-[24px]">favorite</span>
                        </button>
                        <Link href="/account" className="p-2.5 rounded-lg hover:bg-slate-200 text-slate-700 transition-colors relative">
                            <span className="material-symbols-outlined text-[24px]">person</span>
                        </Link>
                        <Link href="/cart" className="p-2.5 rounded-lg hover:bg-slate-200 text-slate-700 transition-colors relative">
                            <span className="material-symbols-outlined text-[24px]">shopping_bag</span>
                            <span className="absolute top-2 right-2 size-2 bg-primary rounded-full"></span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-lg animate-in slide-in-from-top-2 duration-200">
                    <div className="flex flex-col p-4 gap-4">
                        {/* Mobile Search */}
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                                <span className="material-symbols-outlined text-[20px]">search</span>
                            </div>
                            <input type="text" className="block w-full p-3 pl-10 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400" placeholder="Search products..." />
                        </div>
                        <nav className="flex flex-col gap-2">
                            <Link href="/" className="p-3 text-slate-700 hover:bg-slate-50 hover:text-primary font-semibold rounded-lg transition-colors flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
                                <span className="material-symbols-outlined">home</span>
                                Home
                            </Link>
                            <Link href="/shop" className="p-3 text-slate-700 hover:bg-slate-50 hover:text-primary font-semibold rounded-lg transition-colors flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
                                <span className="material-symbols-outlined">storefront</span>
                                Shop
                            </Link>
                            <Link href="/about" className="p-3 text-slate-700 hover:bg-slate-50 hover:text-primary font-semibold rounded-lg transition-colors flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
                                <span className="material-symbols-outlined">info</span>
                                About
                            </Link>
                            <Link href="/contact" className="p-3 text-slate-700 hover:bg-slate-50 hover:text-primary font-semibold rounded-lg transition-colors flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
                                <span className="material-symbols-outlined">mail</span>
                                Contact
                            </Link>
                            <Link href="/login" className="p-3 text-slate-700 hover:bg-slate-50 hover:text-primary font-semibold rounded-lg transition-colors flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
                                <span className="material-symbols-outlined">login</span>
                                Login
                            </Link>
                            <Link href="/register" className="p-3 text-slate-700 hover:bg-slate-50 hover:text-primary font-semibold rounded-lg transition-colors flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
                                <span className="material-symbols-outlined">person_add</span>
                                Register
                            </Link>
                        </nav>
                        <div className="h-px bg-slate-100 my-2"></div>
                        <div className="grid grid-cols-3 gap-2">
                            <button className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-slate-50 text-slate-700 transition-colors">
                                <span className="material-symbols-outlined text-[24px]">favorite</span>
                                <span className="text-xs font-medium">Wishlist</span>
                            </button>
                            <Link href="/account" className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-slate-50 text-slate-700 transition-colors" onClick={() => setIsMenuOpen(false)}>
                                <span className="material-symbols-outlined text-[24px]">person</span>
                                <span className="text-xs font-medium">Account</span>
                            </Link>
                            <Link href="/cart" className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-slate-50 text-slate-700 transition-colors" onClick={() => setIsMenuOpen(false)}>
                                <div className="relative">
                                    <span className="material-symbols-outlined text-[24px]">shopping_bag</span>
                                    <span className="absolute -top-1 -right-1 size-2.5 bg-primary border-2 border-white rounded-full"></span>
                                </div>
                                <span className="text-xs font-medium">Cart</span>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
