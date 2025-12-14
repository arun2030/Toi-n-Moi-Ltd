import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'collectionTabs',
    title: 'Collection Tabs',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            initialValue: 'Featured Collections',
        }),
        defineField({
            name: 'bg',
            title: 'Background Color',
            type: 'string',
            options: {
                list: [
                    { title: 'Default', value: 'palette--light bg--neutral' },
                    { title: 'Light', value: 'palette--light bg--accent' },
                    { title: 'Dark', value: 'palette--dark bg--invert' },
                ],
            },
            initialValue: 'palette--light bg--neutral',
        }),
        defineField({
            name: 'tabs',
            title: 'Collection Tabs',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'title',
                            title: 'Tab Title',
                            type: 'string',
                        }),
                        defineField({
                            name: 'collection',
                            title: 'Collection',
                            type: 'reference',
                            to: [{ type: 'collection' }], // Assumes you have a collection type, else string
                        }),
                    ]
                }
            ],
        }),
        defineField({
            name: 'limit',
            title: 'Product Limit',
            type: 'number',
            initialValue: 6
        }),
        defineField({
            name: 'padding_top',
            title: 'Padding Top',
            type: 'number',
            initialValue: 36,
        }),
        defineField({
            name: 'padding_bottom',
            title: 'Padding Bottom',
            type: 'number',
            initialValue: 36,
        }),
    ],
})
