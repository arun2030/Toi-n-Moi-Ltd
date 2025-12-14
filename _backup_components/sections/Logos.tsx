'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { urlForImage } from '@/sanity/lib/image';

interface LogosProps {
    title?: string;
    bg?: string;
    enable_marquee?: boolean;
    blocks?: Array<{
        _key: string;
        image: any;
        link?: string;
        width?: number;
    }>;
    padding_top: number;
    padding_bottom: number;
}

export default function Logos(props: LogosProps) {
    const { title, bg, enable_marquee, blocks = [], padding_top, padding_bottom } = props;

    if (!blocks.length) return null;

    // Marquee logic is complex to replicate 1:1 without keyframes/CSS, using a simple flex list for now.
    // OR using a marquee library. For now, a scrolling flex container.

    return (
        <section
            className={cn("section-logos", bg)}
            style={{
                paddingTop: `${padding_top}px`,
                paddingBottom: `${padding_bottom}px`
            }}
        >
            <div className="wrapper section-padding">
                {title && <h2 className="kicker-flourished text-center mb-8 text-xl font-bold">{title}</h2>}

                <div className="logo-bar__wrapper overflow-hidden">
                    <div
                        className={cn(
                            "flex items-center gap-12",
                            // If marquee is desired, we can add animation classes here
                            enable_marquee ? "animate-marquee whitespace-nowrap" : "flex-wrap justify-center"
                        )}
                    >
                        {/* If marquee, duplication might be needed for seamless loop */}
                        {blocks.map((block) => (
                            <div key={block._key} className="logo-bar__item shrink-0">
                                <a
                                    href={block.link || '#'}
                                    className={cn("block hover:opacity-80 transition-opacity", !block.link && "pointer-events-none")}
                                >
                                    {block.image && (
                                        <Image
                                            src={urlForImage(block.image).url()}
                                            alt="Brand Logo"
                                            width={block.width || 140}
                                            height={80}
                                            className="object-contain h-auto w-auto max-h-[80px]"
                                            style={{ width: block.width ? `${block.width}px` : '140px' }}
                                        />
                                    )}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
