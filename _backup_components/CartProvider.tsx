'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import CartDrawer from './CartDrawer';

// Enhanced Cart Item for Variants
export type CartItem = {
    id: string;
    title: string;
    price: number;
    image?: any;
    quantity: number;
    slug?: string;
    size?: string;
    color?: string;
    stripePriceId?: string;
    variantKey: string; // Unique identifier: id + size + color
};

type CartContextType = {
    isOpen: boolean;
    openCart: () => void;
    closeCart: () => void;
    toggleCart: () => void;
    cart: CartItem[];
    addToCart: (item: Omit<CartItem, 'variantKey'>) => void;
    removeFromCart: (variantKey: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [cart, setCart] = useState<CartItem[]>([]);

    // Hydrate from local storage on mount
    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            try {
                setCart(JSON.parse(storedCart));
            } catch (e) {
                console.error("Failed to parse cart", e);
            }
        }
    }, []);

    // Persist to local storage
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);
    const toggleCart = () => setIsOpen((prev) => !prev);

    const addToCart = (item: Omit<CartItem, 'variantKey'>) => {
        const variantKey = `${item.id}-${item.size || ''}-${item.color || ''}`;

        setCart((prevCart) => {
            const existingItem = prevCart.find((i) => i.variantKey === variantKey);
            if (existingItem) {
                return prevCart.map((i) =>
                    i.variantKey === variantKey
                        ? { ...i, quantity: i.quantity + item.quantity }
                        : i
                );
            }
            return [...prevCart, { ...item, variantKey }];
        });
        openCart();
    };

    const removeFromCart = (variantKey: string) => {
        setCart((prevCart) => prevCart.filter((item) => item.variantKey !== variantKey));
    };

    const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{ isOpen, openCart, closeCart, toggleCart, cart, addToCart, removeFromCart }}>
            {children}
            <CartDrawer />
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
