import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'pageBuilder',
            title: 'Page Builder',
            type: 'array',
            of: [
                { type: 'hero' },
                { type: 'productGrid' },
                { type: 'imageWithText' },
                { type: 'newsletter' },
                { type: 'collectionTabs' },
                { type: 'icons' },
                { type: 'logos' },
            ],
        }),
    ],
})
