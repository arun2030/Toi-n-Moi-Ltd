import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import clsx from 'clsx';
// import { PortableText } from '@portabletext/react'; // Ensure installed if used

interface TextWithImageProps {
    title: string;
    text: any; // Block content
    image?: any;
    layout?: 'left' | 'right';
}

export default function TextWithImage({ title, text, image, layout = 'left' }: TextWithImageProps) {
    return (
        <div className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={clsx(
                    "flex flex-col lg:flex-row items-center gap-12 lg:gap-24",
                    layout === 'right' && "lg:flex-row-reverse"
                )}>
                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 relative aspect-[4/5] bg-gray-100">
                        {image && (
                            <Image
                                src={urlForImage(image).url()}
                                alt={title || 'Image'}
                                fill
                                className="object-cover"
                            />
                        )}
                    </div>

                    {/* Text Side */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        {title && <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>}
                        <div className="prose prose-lg text-gray-600">
                            {/* Simple fallback if not using PortableText yet, or if string passed */}
                            {typeof text === 'string' ? <p>{text}</p> : <div className="text-gray-500">[Rich Text Content]</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
