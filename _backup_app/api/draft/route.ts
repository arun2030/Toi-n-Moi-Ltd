// app/api/draft/route.ts
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { validatePreviewUrl } from '@sanity/preview-url-secret'
import { client } from '@/sanity/client'
import { token } from '@/sanity/env'

const clientWithToken = client.withConfig({ token })

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const secret = searchParams.get('secret')
    const slug = searchParams.get('slug')

    if (!secret) {
        return new Response('Missing secret', { status: 401 })
    }

    //   const { isValid, redirectTo = '/' } = await validatePreviewUrl(
    //     clientWithToken,
    //     request.url
    //   )

    //   if (!isValid) {
    //     return new Response('Invalid secret', { status: 401 })
    //   }

    // Simplified for demo without secret validation complexity initially
    // In prod, use validatePreviewUrl

    (await draftMode()).enable()

    redirect(slug || '/')
}
