import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'siteConfig',
    title: 'Site Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Site Title',
            type: 'string',
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'mainNav',
            title: 'Main Navigation',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'label', type: 'string', title: 'Label' },
                        { name: 'link', type: 'string', title: 'Link' },
                    ],
                },
            ],
        }),
        defineField({
            name: 'colorScheme',
            title: 'Color Scheme',
            type: 'object',
            fields: [
                defineField({
                    name: 'primary',
                    title: 'Primary Color',
                    type: 'color',
                    options: { disableAlpha: true },
                }),
                defineField({
                    name: 'secondary',
                    title: 'Secondary Color',
                    type: 'color',
                    options: { disableAlpha: true },
                }),
                defineField({
                    name: 'bg',
                    title: 'Background Color',
                    type: 'color',
                    options: { disableAlpha: true },
                }),
                defineField({
                    name: 'text',
                    title: 'Text Color',
                    type: 'color',
                    options: { disableAlpha: true },
                })
            ]
        }),
        defineField({
            name: 'fonts',
            title: 'Fonts',
            type: 'object',
            fields: [
                defineField({ name: 'heading', title: 'Heading Font', type: 'string' }),
                defineField({ name: 'body', title: 'Body Font', type: 'string' }),
            ]
        }),
        defineField({
            name: 'footer',
            title: 'Footer',
            type: 'object',
            fields: [
                defineField({ name: 'copyrightText', title: 'Copyright Text', type: 'string' }),
                defineField({
                    name: 'links',
                    title: 'Footer Links',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                { name: 'label', type: 'string', title: 'Label' },
                                { name: 'link', type: 'string', title: 'Link' },
                            ],
                        }
                    ]
                })
            ]
        }),
    ],
})
