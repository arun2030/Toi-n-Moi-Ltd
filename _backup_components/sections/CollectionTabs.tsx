'use client';

import { useState } from 'react';
import ProductGrid from '../ProductGrid';
import { cn } from '@/lib/utils';

// Simplified representation of what Sanity returns
interface CollectionTabsProps {
    title?: string;
    bg?: string;
    tabs?: Array<{
        _key: string;
        title: string;
        collection: {
            title: string;
            slug: { current: string };
            products: any[];
        };
    }>;
    limit?: number;
    padding_top: number;
    padding_bottom: number;
}

export default function CollectionTabs(props: CollectionTabsProps) {
    const { title, bg, tabs = [], limit = 6, padding_top, padding_bottom } = props;
    const [activeTab, setActiveTab] = useState(0);

    // If no tabs, return nothing
    if (!tabs?.length) return null;

    const currentTab = tabs[activeTab];

    return (
        <section
            className={cn("collection-tabs", bg)}
            style={{
                paddingTop: `${padding_top}px`,
                paddingBottom: `${padding_bottom}px`
            }}
        >
            <div className="wrapper section-padding title-center">
                {title && <h2 className="kicker-flourished mb-8 text-2xl font-bold">{title}</h2>}

                {/* Tabs Navigation */}
                <div className="tab__scroll flex justify-center mb-8">
                    <div className="tabs tabs--center tabs--pill flex gap-4 overflow-x-auto">
                        {tabs.map((tab, idx) => (
                            <button
                                key={tab._key}
                                onClick={() => setActiveTab(idx)}
                                className={cn(
                                    "tab-link px-4 py-2 rounded-full transition-all text-sm uppercase tracking-widest",
                                    activeTab === idx
                                        ? "bg-black text-white hover:bg-neutral-800"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                )}
                            >
                                {tab.title || tab.collection?.title || 'Collection'}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="tab-content animate-in fade-in duration-500">
                    {/* Reusing ProductGrid component logic here, but simpler */}
                    {currentTab?.collection?.products ? (
                        <ProductGrid
                            collection={currentTab.collection.products}
                            layout="grid" // Enforce grid for tabs
                            limit={limit}
                        />
                    ) : (
                        <div className="text-center py-10 text-gray-500">No collection selected</div>
                    )}
                </div>
            </div>
        </section>
    );
}
