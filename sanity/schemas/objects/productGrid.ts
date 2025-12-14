import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'productGrid',
    title: 'Product Grid',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'collection',
            title: 'Collection',
            description: 'Select products manually for now (Categories not implemented yet)',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'product' }] }],
        }),
        defineField({
            name: 'layout',
            title: 'Layout',
            type: 'string',
            options: {
                list: [
                    { title: 'Grid 3-col', value: 'grid' },
                    { title: 'Carousel', value: 'carousel' },
                ],
            },
            initialValue: 'grid',
        })
    ],
})
