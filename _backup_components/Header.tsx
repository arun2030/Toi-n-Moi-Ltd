'use client';

import Link from 'next/link';
import { Search, ShoppingBag } from 'lucide-react';
import { useCart } from './CartProvider';

export default function Header() {
    const { toggleCart, cart } = useCart();

    return (
        <div className="header__wrapper" style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'var(--COLOR-BG)' }}>
            <header className="theme__header" style={{ height: 'var(--header-height)' }}>
                <div className="header__desktop" style={{ display: 'flex', alignItems: 'center', height: '100%', justifyContent: 'space-between' }}>

                    {/* LEFT: Navigation */}
                    <div className="header__desktop__bar__l" style={{ flex: 1 }}>
                        <ul className="header__menu__inner" style={{ display: 'flex', gap: '20px', listStyle: 'none', paddingLeft: '20px', margin: 0 }}>
                            <li className="menu__item"><Link href="/new" className="navlink navtext" style={{ textDecoration: 'none', color: 'var(--COLOR-TEXT)' }}>NEW ARRIVALS</Link></li>
                            <li className="menu__item"><Link href="/clothing" className="navlink navtext" style={{ textDecoration: 'none', color: 'var(--COLOR-TEXT)' }}>CLOTHING</Link></li>
                            <li className="menu__item"><Link href="/brands" className="navlink navtext" style={{ textDecoration: 'none', color: 'var(--COLOR-TEXT)' }}>BRANDS</Link></li>
                        </ul>
                    </div>

                    {/* CENTER: Logo */}
                    <div className="header__desktop__bar__c" style={{ flex: 0, padding: '0 20px' }}>
                        <Link href="/" className="header__logo__link">
                            <img src="/assets/logo.png" alt="Toi 'n' Moi" className="header__logo-image logo__img" style={{ maxHeight: '40px', display: 'block' }} />
                        </Link>
                    </div>

                    {/* RIGHT: Icons */}
                    <div className="header__desktop__bar__r" style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', paddingRight: '20px' }}>
                        <div className="header__desktop__buttons" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                            <button className="navlink" style={{ color: 'var(--COLOR-TEXT)', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
                                <Search size={20} />
                            </button>
                            <button className="navlink relative" onClick={toggleCart} style={{ color: 'var(--COLOR-TEXT)', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
                                <ShoppingBag size={20} />
                                {cart.length > 0 && (
                                    <span className="absolute -top-3 -right-3 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                                        {cart.length}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>

                </div>
            </header>
        </div>
    );
}
