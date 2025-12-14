import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image';

interface HeroProps {
    title: string;
    subtitle?: string;
    image?: any;
    link?: string;
    linkText?: string;
}

export default function Hero({ title, subtitle, image, link, linkText }: HeroProps) {
    return (
        <div className="relative h-[60vh] flex items-center justify-center bg-gray-900 overflow-hidden">
            {image && (
                <div className="absolute inset-0 z-0">
                    <Image
                        src={urlForImage(image).url()}
                        alt={title}
                        fill
                        className="object-cover opacity-60"
                    />
                </div>
            )}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-wider">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                )}
                {link && linkText && (
                    <Link
                        href={link}
                        className="inline-block bg-white text-black px-8 py-3 font-medium hover:bg-gray-100 transition-colors uppercase tracking-widest text-sm"
                    >
                        {linkText}
                    </Link>
                )}
            </div>
        </div>
    );
}
