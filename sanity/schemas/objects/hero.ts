import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'hero',
    title: 'Hero',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
        }),
        defineField({
            name: 'subheading',
            title: 'Subheading',
            type: 'text',
            rows: 2,
        }),
        defineField({
            name: 'backgroundImage',
            title: 'Background Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'cta',
            title: 'Call to Action',
            type: 'object',
            fields: [
                { name: 'text', type: 'string', title: 'Text' },
                { name: 'link', type: 'string', title: 'Link' },
            ]
        })
    ],
})
