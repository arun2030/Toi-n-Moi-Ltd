import Link from 'next/link';
import React from 'react';

export default function ShopPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#1e1121] text-[#190e1b] dark:text-gray-100 font-display">
            <h1 className="text-4xl font-bold mb-4">Shop</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">This page is currently being updated.</p>
            <div className="mt-8 flex gap-4">
                <Link href="/clothing" className="text-[#b017cf] hover:underline">Clothing</Link>
                <Link href="/accessories" className="text-[#b017cf] hover:underline">Accessories</Link>
                <Link href="/sale" className="text-[#b017cf] hover:underline">Sale</Link>
            </div>
        </div>
    );
}
