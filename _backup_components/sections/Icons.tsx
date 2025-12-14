'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { urlForImage } from '@/sanity/lib/image';

interface IconsProps {
    title?: string;
    bg?: string;
    blocks?: Array<{
        _key: string;
        icon_name?: string; // We might need to map these names to actual SVGs or Lucide icons
        icon_alt?: any;
        title?: string;
        text?: string;
        link_text?: string;
        link_url?: string;
    }>;
    columns?: number;
    padding_top: number;
    padding_bottom: number;
}

export default function Icons(props: IconsProps) {
    const { title, bg, blocks = [], columns = 3, padding_top, padding_bottom } = props;

    return (
        <section
            className={cn("section-icons", bg)}
            style={{
                paddingTop: `${padding_top}px`,
                paddingBottom: `${padding_bottom}px`
            }}
        >
            <div className="wrapper section-padding">
                {title && <h2 className="kicker-flourished text-center mb-10 text-xl font-bold">{title}</h2>}

                <div className={cn(
                    "grid gap-8 justify-center",
                    columns === 2 && "md:grid-cols-2",
                    columns === 3 && "md:grid-cols-3",
                    columns === 4 && "md:grid-cols-4",
                    "grid-cols-1"
                )}>
                    {blocks.map((block) => (
                        <div key={block._key} className="text-center flex flex-col items-center">
                            <div className="icon__column__icon mb-4 h-12 w-12 flex items-center justify-center text-gray-400">
                                {block.icon_alt ? (
                                    <Image
                                        src={urlForImage(block.icon_alt).url()}
                                        width={48}
                                        height={48}
                                        alt={block.title || 'Icon'}
                                        className="object-contain"
                                    />
                                ) : (
                                    // Placeholder for icon mapping - using a generic circle for now or lucide if we map them
                                    <div className="border rounded-full p-2">
                                        {/* Map specific icon names here if needed, e.g. from Lucide */}
                                        <span className="text-xs">{block.icon_name || 'Icon'}</span>
                                    </div>
                                )}
                            </div>

                            <div className="icon__column__text">
                                {block.title && <p className="font-bold mb-2">{block.title}</p>}
                                {block.text && <div className="text-sm text-gray-600 mb-2">{block.text}</div>}
                                {block.link_text && block.link_url && (
                                    <a href={block.link_url} className="text-sm underline hover:text-gray-900">
                                        {block.link_text}
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
