import Hero from './sections/Hero';
import ProductGrid from './ProductGrid'; // Using existing one found in root components
import TextWithImage from './sections/TextWithImage';
import Newsletter from './sections/Newsletter';
import CollectionTabs from './sections/CollectionTabs';
import Icons from './sections/Icons';
import Logos from './sections/Logos';

const SECTION_COMPONENTS: Record<string, React.ComponentType<any>> = {
    hero: Hero,
    productGrid: ProductGrid,
    imageWithText: TextWithImage,
    newsletter: Newsletter,
    collectionTabs: CollectionTabs,
    icons: Icons,
    logos: Logos,
};

export default function PageBuilder({ pageBuilder }: { pageBuilder: any[] }) {
    if (!pageBuilder || pageBuilder.length === 0) return null;

    return (
        <>
            {pageBuilder.map((block: any) => {
                const Component = SECTION_COMPONENTS[block._type];
                if (!Component) {
                    console.warn(`No component found for block type: ${block._type}`);
                    return null;
                }

                // Apply specific prop mappings if necessary, otherwise pass all block props
                let componentProps = { ...block };
                switch (block._type) {
                    case 'hero':
                        return <Hero key={block._key} {...block} title={block.heading} subtitle={block.subheading} link={block.cta?.link} linkText={block.cta?.text} image={block.backgroundImage} />;
                    case 'productGrid':
                        return <ProductGrid key={block._key} {...block} />;
                    case 'imageWithText':
                        // Prop map: component expects 'text' & 'layout', schema has 'content' (block) & 'imagePosition'
                        // I'll need to update the component or map props here. Mapping props is safer.
                        // Wait, TextWithImage expects 'text' as string. Schema has 'content' as block array.
                        // I will modify the component to handle block content or just stringify it for now.
                        // Actually, I'll update the component file to match the new schema better or map here.
                        // Let's pass 'content' and handle in component.
                        return <TextWithImage key={block._key} {...block} text={block.content} title="" layout={block.imagePosition} />;
                    case 'newsletter':
                        return <Newsletter key={block._key} {...block} title={block.headline} description={block.placeholderText} />;
                    default:
                        return null;
                }
            })}
        </>
    );
}
