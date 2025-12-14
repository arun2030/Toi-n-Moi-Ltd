import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/contact/ContactForm';
import FAQ from '@/components/sections/FAQ';
import Icons from '@/components/sections/Icons';
import { client } from '@/sanity/client';

export const metadata = {
    title: 'Contact Us',
    description: 'Get in touch with us regarding your order or any other questions.',
};

async function getContactPageData() {
    // We could fetch dynamic data here if we had a "contact" page document in Sanity.
    // For now we assume a static structure or fetch generic site config.
    return {};
}

export default async function ContactPage() {
    // Using static props to match the template.json
    const heroProps = {
        title: "Contact us",
        subtitle: "Introducing",
        image: null,
        _type: 'hero',
        _key: 'hero-contact'
    };

    const iconsProps = {
        title: "",
        bg: "palette--light bg--accent", // Light accent background
        columns: 3,
        padding_top: 36,
        padding_bottom: 36,
        blocks: [
            { _key: '1', title: 'Free returns', text: 'Returns within 30 days receive a full refund.', icon_name: 'icon-basket-return' },
            { _key: '2', title: 'Worldwide shipping', text: 'Ship anywhere, rates available at checkout.', icon_name: 'icon-shipment-world' },
            { _key: '3', title: '24/7 support', text: 'Call us anytime at 1(800) 555-1234.', icon_name: 'icon-phone' }
        ]
    };

    return (
        <div className="page-contact">
            {/* 1. Hero */}
            <Hero {...heroProps} />

            {/* 2. Form */}
            <div className="bg-white">
                <ContactForm />
            </div>

            {/* 3. FAQ */}
            <div className="bg-gray-50">
                <FAQ />
            </div>

            {/* 4. Icons */}
            <Icons {...iconsProps} />
        </div>
    );
}
