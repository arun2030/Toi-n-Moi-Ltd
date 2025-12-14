import { type SchemaTypeDefinition } from 'sanity'
import siteConfig from './schemas/documents/siteConfig'
import page from './schemas/documents/page'
import hero from './schemas/objects/hero'
import productGrid from './schemas/objects/productGrid'
import imageWithText from './schemas/objects/imageWithText'
import newsletter from './schemas/objects/newsletter'
import collectionTabs from './schemas/objects/collectionTabs'
import icons from './schemas/objects/icons'
import logos from './schemas/objects/logos'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        siteConfig,
        page,
        hero,
        productGrid,
        imageWithText,
        newsletter,
        collectionTabs,
        icons,
        logos,
        // Supplier Type
        {
            name: 'supplier',
            title: 'Supplier',
            type: 'document',
            fields: [
                {
                    name: 'name',
                    title: 'Name',
                    type: 'string',
                },
                {
                    name: 'contactEmail',
                    title: 'Contact Email',
                    type: 'string',
                },
            ],
        },
        // Product Type
        {
            name: 'product',
            title: 'Product',
            type: 'document',
            fields: [
                {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                },
                {
                    name: 'slug',
                    title: 'Slug',
                    type: 'slug',
                    options: {
                        source: 'title',
                        maxLength: 96,
                    },
                },
                {
                    name: 'price',
                    title: 'Price',
                    type: 'number',
                },
                {
                    name: 'description',
                    title: 'Description',
                    type: 'text',
                },
                {
                    name: 'mainImage',
                    title: 'Main Image',
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                },
                {
                    name: 'images',
                    title: 'Images',
                    type: 'array',
                    of: [{ type: 'image' }],
                    options: {
                        hotspot: true,
                    },
                },
                {
                    name: 'sku',
                    title: 'SKU',
                    type: 'string',
                },
                {
                    name: 'stockLevel',
                    title: 'Stock Level',
                    type: 'number',
                },
                {
                    name: 'supplier',
                    title: 'Supplier',
                    type: 'reference',
                    to: { type: 'supplier' },
                },
                {
                    name: 'stripePriceId',
                    title: 'Stripe Price ID',
                    type: 'string',
                },
                {
                    name: 'collection',
                    title: 'Collection',
                    type: 'reference',
                    to: [{ type: 'collection' }],
                }
            ],
        },
        // Collection Type
        {
            name: 'collection',
            title: 'Collection',
            type: 'document',
            fields: [
                { name: 'title', type: 'string', title: 'Title' },
                { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } },
                { name: 'products', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }] }
            ]
        }
    ],
}
