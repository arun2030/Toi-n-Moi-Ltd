import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'newsletter',
    title: 'Newsletter',
    type: 'object',
    fields: [
        defineField({
            name: 'headline',
            title: 'Headline',
            type: 'string',
        }),
        defineField({
            name: 'placeholderText',
            title: 'Placeholder Text',
            type: 'string',
        }),
    ],
})
