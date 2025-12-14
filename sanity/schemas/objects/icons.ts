import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'icons',
    title: 'Icon Columns',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Heading',
            type: 'string',
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
            name: 'blocks',
            title: 'Icons',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'icon_name',
                            title: 'Icon Name',
                            type: 'string',
                            description: 'e.g., icon-leaf, icon-basket-return',
                        }),
                        defineField({
                            name: 'icon_alt',
                            title: 'Custom Icon Image',
                            type: 'image',
                        }),
                        defineField({
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                        }),
                        defineField({
                            name: 'text',
                            title: 'Text',
                            type: 'text', // using plain text for simplicity or array<block>
                        }),
                        defineField({
                            name: 'link_text',
                            title: 'Link Text',
                            type: 'string',
                        }),
                        defineField({
                            name: 'link_url',
                            title: 'Link URL',
                            type: 'string',
                        }),
                    ]
                }
            ],
        }),
        defineField({
            name: 'columns',
            title: 'Columns',
            type: 'number',
            initialValue: 3,
            options: {
                list: [
                    { title: '2', value: 2 },
                    { title: '3', value: 3 },
                    { title: '4', value: 4 },
                ]
            }
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
