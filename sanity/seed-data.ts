import { createClient } from 'next-sanity'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const token = process.env.SANITY_API_TOKEN
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-12-13'

if (!token) {
    console.error('Missing SANITY_API_TOKEN in .env.local')
    process.exit(1)
}

const client = createClient({
    projectId,
    dataset,
    token,
    apiVersion,
    useCdn: false,
})

const SETTINGS = {
    // Colors from settings_data.json
    colors: {
        primary: "#d2815f",
        secondary: "#748cab",
        bg: "#ffffff",
        text: "#424242"
    },
    // Fonts parsed from handles "libre_baskerville_n4" -> "Libre Baskerville", "poppins_n4" -> "Poppins"
    fonts: {
        heading: "Libre Baskerville",
        body: "Poppins"
    }
}

async function seed() {
    console.log('Seeding siteConfig with Shopify settings...')

    const doc = {
        _id: 'siteConfig',
        _type: 'siteConfig',
        title: "Toi 'n' Moi",
        colorScheme: {
            primary: { _type: 'color', hex: SETTINGS.colors.primary, alpha: 1 },
            secondary: { _type: 'color', hex: SETTINGS.colors.secondary, alpha: 1 },
            bg: { _type: 'color', hex: SETTINGS.colors.bg, alpha: 1 },
            text: { _type: 'color', hex: SETTINGS.colors.text, alpha: 1 },
        },
        fonts: {
            heading: SETTINGS.fonts.heading,
            body: SETTINGS.fonts.body,
        },
        mainNav: [
            { _key: '1', label: 'Shop', link: '/shop' },
            { _key: '2', label: 'About', link: '/about' },
        ],
        footer: {
            copyrightText: '© 2024 Toi \'n\' Moi',
            links: []
        }
    }

    await client.createOrReplace(doc)
    console.log('✅ Site Config updated!')
}

seed().catch((err) => {
    console.error('Seed failed:', err)
    process.exit(1)
})
