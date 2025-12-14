import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'logos',
    title: 'Logo List',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            initialValue: 'Brands',
        }),
        defineField({
            name: 'bg',
            title: 'Background',
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
            name: 'enable_marquee',
            title: 'Enable Marquee',
            type: 'boolean',
            initialValue: true,
        }),
        defineField({
            name: 'blocks',
            title: 'Logos',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'image',
                            title: 'Logo Image',
                            type: 'image',
                            options: { hotspot: true },
                        }),
                        defineField({
                            name: 'link',
                            title: 'Link',
                            type: 'string',
                        }),
                        defineField({
                            name: 'width',
                            title: 'Width',
                            type: 'number',
                            initialValue: 140
                        }),
                    ]
                }
            ],
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
