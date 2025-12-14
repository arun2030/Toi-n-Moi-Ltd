'use client';

import React, { useState } from 'react';
import { searchProducts, createPosPayment } from '../actions/pos';
import { QRCodeSVG } from 'qrcode.react';

interface Product {
    _id: string;
    title: string;
    price: number;
    sku: string;
    imageUrl?: string;
    stockLevel?: number;
}

interface CartItem extends Product {
    quantity: number;
}

export default function PosPage() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<Product[]>([]);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [loading, setLoading] = useState(false);
    const [paymentUrl, setPaymentUrl] = useState<string | null>(null);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const data = await searchProducts(query);
        setResults(data);
        setLoading(false);
    };

    const addToCart = (product: Product) => {
        setCart((prev) => {
            const existing = prev.find((p) => p._id === product._id);
            if (existing) {
                return prev.map((p) =>
                    p._id === product._id ? { ...p, quantity: p.quantity + 1 } : p
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const updateQuantity = (id: string, delta: number) => {
        setCart((prev) =>
            prev.map((item) => {
                if (item._id === id) {
                    return { ...item, quantity: Math.max(0, item.quantity + delta) };
                }
                return item;
            }).filter((item) => item.quantity > 0)
        );
    };

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const generatePayment = async () => {
        if (cart.length === 0) return;
        setLoading(true);
        try {
            const { url } = await createPosPayment(cart);
            if (url) {
                setPaymentUrl(url);
            }
        } catch (error) {
            alert('Error generating payment link');
        } finally {
            setLoading(false);
        }
    };

    const clearPayment = () => {
        setPaymentUrl(null);
        setCart([]);
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900 text-slate-900 dark:text-white font-sans p-6">
            <header className="mb-6 flex justify-between items-center">
                <h1 className="text-3xl font-bold text-primary">Toi & Moi POS</h1>
                <div className="text-sm font-medium bg-white dark:bg-slate-800 px-4 py-2 rounded shadow">
                    Staff Mode
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[calc(100vh-150px)]">
                {/* Left: Search & Results */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                    <form onSubmit={handleSearch} className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Search by product name or SKU..."
                            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
                            disabled={loading}
                        >
                            {loading ? 'Searching...' : 'Search'}
                        </button>
                    </form>

                    <div className="flex-1 overflow-y-auto bg-white dark:bg-slate-800 rounded-lg shadow-sm p-4">
                        {results.length === 0 ? (
                            <p className="text-center text-gray-500 mt-10">No products found. Try searching.</p>
                        ) : (
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {results.map((product) => (
                                    <div
                                        key={product._id}
                                        className="border border-gray-200 dark:border-slate-700 rounded-lg p-3 hover:shadow-md transition-shadow cursor-pointer bg-gray-50 dark:bg-slate-900/50"
                                        onClick={() => addToCart(product)}
                                    >
                                        <div className="aspect-square bg-white dark:bg-slate-700 rounded mb-2 overflow-hidden flex items-center justify-center">
                                            {product.imageUrl ? (
                                                <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover" />
                                            ) : (
                                                <span className="material-symbols-outlined text-4xl text-gray-300">image</span>
                                            )}
                                        </div>
                                        <h3 className="font-bold text-sm truncate">{product.title}</h3>
                                        <p className="text-xs text-gray-500 mb-2">{product.sku}</p>
                                        <p className="text-primary font-bold">£{product.price.toFixed(2)}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Right: Cart & Payment */}
                <div className="lg:col-span-5 flex flex-col bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
                    <div className="p-4 border-b border-gray-200 dark:border-slate-700 bg-gray-100 dark:bg-slate-900/50">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <span className="material-symbols-outlined">shopping_cart</span> Current Cart
                        </h2>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {cart.length === 0 ? (
                            <div className="h-full flex flex-col items-center justify-center text-gray-400">
                                <span className="material-symbols-outlined text-6xl mb-2">production_quantity_limits</span>
                                <p>Cart is empty</p>
                            </div>
                        ) : (
                            cart.map((item) => (
                                <div key={item._id} className="flex justify-between items-center p-3 border border-gray-100 dark:border-slate-700 rounded-lg bg-gray-50 dark:bg-slate-900">
                                    <div className="flex-1">
                                        <h4 className="font-bold text-sm">{item.title}</h4>
                                        <p className="text-xs text-gray-500">£{item.price.toFixed(2)} x {item.quantity}</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button onClick={() => updateQuantity(item._id, -1)} className="w-8 h-8 rounded-full bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 flex items-center justify-center font-bold text-gray-600 dark:text-white">-</button>
                                        <span className="font-mono font-bold w-4 text-center">{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item._id, 1)} className="w-8 h-8 rounded-full bg-primary text-white hover:bg-blue-700 flex items-center justify-center font-bold">+</button>
                                    </div>
                                    <div className="ml-4 font-bold w-16 text-right">
                                        £{(item.price * item.quantity).toFixed(2)}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="p-6 bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700">
                        <div className="flex justify-between items-end mb-6">
                            <span className="text-gray-500 font-medium">Total</span>
                            <span className="text-4xl font-bold text-primary">£{total.toFixed(2)}</span>
                        </div>

                        <button
                            onClick={generatePayment}
                            disabled={cart.length === 0 || loading}
                            className={`w-full py-4 rounded-xl font-bold text-lg uppercase tracking-wide shadow-lg transition-all flex items-center justify-center gap-2 ${cart.length === 0 || loading
                                    ? 'bg-gray-300 dark:bg-slate-700 text-gray-500 cursor-not-allowed'
                                    : 'bg-primary hover:bg-blue-700 text-white hover:shadow-xl transform active:scale-[0.98]'
                                }`}
                        >
                            {loading ? (
                                <span className="material-symbols-outlined animate-spin">refresh</span>
                            ) : (
                                <span className="material-symbols-outlined">qr_code_2</span>
                            )}
                            Generate Payment Link
                        </button>
                    </div>
                </div>
            </div>

            {/* Payment Modal Overlay */}
            {paymentUrl && (
                <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-md w-full p-8 text-center animate-in fade-in zoom-in duration-300">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Scan to Pay</h2>
                        <p className="text-gray-500 mb-8">Ask customer to scan with their camera</p>

                        <div className="bg-white p-4 rounded-xl border border-gray-200 inline-block mb-8">
                            <QRCodeSVG value={paymentUrl} size={250} />
                        </div>

                        <div className="flex flex-col gap-3">
                            <p className="font-mono text-xs text-gray-400 break-all px-4">{paymentUrl}</p>
                            <button
                                onClick={clearPayment}
                                className="w-full py-3 bg-gray-200 dark:bg-slate-800 text-gray-800 dark:text-white font-bold rounded-lg hover:bg-gray-300 dark:hover:bg-slate-700 transition-colors"
                            >
                                Done / New Order
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
