'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { presentationTool } from '@sanity/presentation'
import { colorInput } from '@sanity/color-input'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schema'

export default defineConfig({
    basePath: '/studio',
    projectId,
    dataset,
    // Add and edit the content schema in the './sanity/schema' folder
    schema,
    plugins: [
        structureTool({
            structure: (S) =>
                S.list()
                    .title('Content')
                    .items([
                        // Singleton for Site Settings
                        S.listItem()
                            .title('Site Settings')
                            .id('siteConfig')
                            .child(
                                S.document()
                                    .schemaType('siteConfig')
                                    .documentId('siteConfig')
                            ),
                        // Regular document types
                        S.documentTypeListItem('product').title('Products'),
                        S.documentTypeListItem('supplier').title('Suppliers'),
                        S.documentTypeListItem('page').title('Pages'),
                    ]),
        }),
        // Vision is a tool that lets you query your content with GROQ in the studio
        // https://www.sanity.io/docs/the-vision-plugin
        visionTool({ defaultApiVersion: apiVersion }),
        // @ts-ignore
        presentationTool({
            previewUrl: {
                draftMode: {
                    enable: '/api/draft',
                },
            },
        }),
        colorInput(),
    ],
})
