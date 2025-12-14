'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useCart, CartItem } from './CartProvider';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function CartDrawer() {
    const { isOpen, closeCart, cart, addToCart, removeFromCart } = useCart();

    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleCheckout = () => {
        // Redirect to Stripe or Checkout URL
        // In a real app, this would create a checkout session
        alert("Redirecting to Stripe Checkout...");
        // window.location.href = "https://checkout.stripe.com/...";
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeCart}
                        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
                        aria-hidden="true"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-xl flex flex-col"
                        role="dialog"
                        aria-modal="true"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            <h2 className="text-xl font-bold font-heading uppercase tracking-wide">
                                Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})
                            </h2>
                            <button
                                onClick={closeCart}
                                className="p-2 -mr-2 text-gray-400 hover:text-black transition-colors rounded-full hover:bg-gray-100"
                                aria-label="Close cart"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="flex-1 overflow-y-auto p-6">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                                        <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                    </div>
                                    <p className="text-lg text-gray-500">Your cart is empty</p>
                                    <button
                                        onClick={closeCart}
                                        className="text-black underline underline-offset-4 hover:text-gray-600 font-medium"
                                    >
                                        Continue Shopping
                                    </button>
                                </div>
                            ) : (
                                <ul className="space-y-6">
                                    {cart.map((item) => (
                                        <li key={item.variantKey} className="flex gap-4">
                                            {/* Image */}
                                            <div className="relative w-24 aspect-[3/4] flex-shrink-0 overflow-hidden rounded-sm bg-gray-100 border border-gray-200">
                                                {item.image ? (
                                                    <Image
                                                        src={urlForImage(item.image).url()}
                                                        alt={item.title}
                                                        fill
                                                        className="object-cover object-center"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                                                        <span className="text-xs">No img</span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Details */}
                                            <div className="flex flex-1 flex-col justify-between py-1">
                                                <div>
                                                    <div className="flex justify-between items-start">
                                                        <h3 className="font-medium text-gray-900 line-clamp-2">
                                                            <Link href={`/product/${item.slug}`} onClick={closeCart} className="hover:underline">
                                                                {item.title}
                                                            </Link>
                                                        </h3>
                                                        <p className="ml-4 font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                                                    </div>
                                                    <div className="mt-1 text-sm text-gray-500">
                                                        <p>${item.price} each</p>
                                                        {(item.size || item.color) && (
                                                            <p className="mt-1 text-xs uppercase text-gray-400">
                                                                {item.size} {item.color && item.size && '|'} {item.color}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    {/* Quantity Display (ReadOnly for now) */}
                                                    <div className="text-sm text-gray-500">
                                                        Qty: {item.quantity}
                                                    </div>

                                                    <button
                                                        type="button"
                                                        onClick={() => removeFromCart(item.variantKey)}
                                                        className="text-sm font-medium text-red-600 hover:text-red-500 flex items-center gap-1"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                        <span className="underline decoration-1 underline-offset-2">Remove</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Footer */}
                        {cart.length > 0 && (
                            <div className="border-t border-gray-100 p-6 bg-gray-50/50 space-y-4">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <p>Subtotal</p>
                                        <p>${subtotal.toFixed(2)}</p>
                                    </div>
                                    <p className="text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                </div>
                                <button
                                    onClick={handleCheckout}
                                    className="w-full btn btn--primary py-4 text-base uppercase tracking-widest shadow-sm hover:shadow-md transition-all"
                                >
                                    Checkout
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
