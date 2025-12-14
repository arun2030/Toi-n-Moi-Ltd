'use client';

import { useState } from 'react';
import { searchProducts, createPaymentLink, type CartItem } from '@/app/actions/pos';
import { QRCodeSVG } from 'qrcode.react';
import { Search, Loader2, Trash2, Plus, Minus } from 'lucide-react';
import Image from 'next/image';

interface Product {
    _id: string;
    title: string;
    price: number;
    sku: string;
    imageUrl?: string;
}

export default function POSPage() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<Product[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [paymentUrl, setPaymentUrl] = useState<string | null>(null);
    const [isGenerating, setIsGenerating] = useState(false);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSearching(true);
        try {
            const products = await searchProducts(query);
            setResults(products);
        } catch (err) {
            console.error(err);
        } finally {
            setIsSearching(false);
        }
    };

    const addToCart = (product: Product) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product._id);
            if (existing) {
                return prev.map((item) =>
                    item.id === product._id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [
                ...prev,
                {
                    id: product._id,
                    title: product.title,
                    price: product.price,
                    quantity: 1,
                    imageUrl: product.imageUrl,
                },
            ];
        });
    };

    const removeFromCart = (id: string) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const updateQuantity = (id: string, delta: number) => {
        setCart((prev) =>
            prev.map((item) => {
                if (item.id === id) {
                    const newQty = Math.max(1, item.quantity + delta);
                    return { ...item, quantity: newQty };
                }
                return item;
            })
        );
    };

    const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleCheckout = async () => {
        setIsGenerating(true);
        try {
            const result = await createPaymentLink(cart);
            setPaymentUrl(result.url);
        } catch (err) {
            alert('Failed to generate payment link');
            console.error(err);
        } finally {
            setIsGenerating(false);
        }
    };

    const clearCheckout = () => {
        setPaymentUrl(null);
        setCart([]);
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
            {/* Left Panel: Search & Products */}
            <div className="w-full md:w-2/3 p-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-full flex flex-col">
                    <h1 className="text-2xl font-bold mb-6 text-gray-900">POS Search</h1>

                    <form onSubmit={handleSearch} className="relative mb-8">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search products by name or SKU..."
                            className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <button
                            type="submit"
                            disabled={isSearching}
                            className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 disabled:opacity-50"
                        >
                            {isSearching ? 'Searching...' : 'Search'}
                        </button>
                    </form>

                    <div className="flex-1 overflow-y-auto">
                        {results.length === 0 && !isSearching && (
                            <div className="text-center text-gray-400 mt-10">Start searching to see products</div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {results.map((product) => (
                                <div key={product._id} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer" onClick={() => addToCart(product)}>
                                    <div className="aspect-square bg-gray-100 rounded-md mb-3 relative overflow-hidden">
                                        {product.imageUrl ? (
                                            <Image src={product.imageUrl} alt={product.title} fill className="object-cover" />
                                        ) : null}
                                    </div>
                                    <h3 className="font-medium text-gray-900 line-clamp-1">{product.title}</h3>
                                    <div className="flex justify-between items-center mt-2">
                                        <p className="text-gray-500 text-sm">{product.sku}</p>
                                        <p className="font-bold text-black">${product.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Panel: Cart & Checkout */}
            <div className="w-full md:w-1/3 p-6 bg-white border-l border-gray-200">
                <div className="h-full flex flex-col">
                    <h2 className="text-xl font-bold mb-6">Current Sale</h2>

                    {/* Cart Items */}
                    <div className="flex-1 overflow-y-auto space-y-4 mb-6">
                        {cart.length === 0 && (
                            <div className="text-center text-gray-400 py-10">Cart is empty</div>
                        )}
                        {cart.map((item) => (
                            <div key={item.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                                <div className="flex-1">
                                    <h4 className="font-medium text-gray-900">{item.title}</h4>
                                    <p className="text-sm text-gray-500">${item.price} x {item.quantity}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:bg-white rounded"><Minus size={16} /></button>
                                    <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:bg-white rounded"><Plus size={16} /></button>
                                </div>
                                <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 p-2"><Trash2 size={18} /></button>
                            </div>
                        ))}
                    </div>

                    {/* Totals */}
                    <div className="border-t border-gray-100 pt-6 mt-auto">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-gray-500">Total</span>
                            <span className="text-3xl font-bold">${cartTotal.toFixed(2)}</span>
                        </div>

                        {!paymentUrl ? (
                            <button
                                onClick={handleCheckout}
                                disabled={cart.length === 0 || isGenerating}
                                className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isGenerating && <Loader2 className="animate-spin" />}
                                Generate Payment Link
                            </button>
                        ) : (
                            <div className="flex flex-col items-center animate-in fade-in zoom-in duration-300">
                                <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-black mb-6">
                                    <QRCodeSVG value={paymentUrl} size={200} />
                                </div>
                                <p className="text-center text-sm text-gray-500 mb-6">
                                    Scan to pay via Apple Pay / Google Pay<br />
                                    <a href={paymentUrl} target="_blank" className="text-blue-500 underline">Open Link directly</a>
                                </p>
                                <button
                                    onClick={clearCheckout}
                                    className="w-full bg-gray-100 text-gray-900 py-3 rounded-lg font-medium hover:bg-gray-200"
                                >
                                    New Sale
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
