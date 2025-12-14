import { client } from '@/sanity/client';
import { notFound } from 'next/navigation';
import PageBuilder from '@/components/PageBuilder';

export const revalidate = 60; // Revalidate every minute

async function getPage(slug: string) {
    // Query to fetch page and expand product refs in productGrid
    const query = `*[_type == "page" && slug.current == $slug][0] {
    title,
    pageBuilder[] {
        ...,
        _type == 'productGrid' => {
            ...,
            collection[]-> {
                _id,
                title,
                price,
                slug,
                images
            }
        }
    }
  }`;
    return client.fetch(query, { slug });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const page = await getPage(slug);

    if (!page) {
        notFound();
    }

    return (
        <div>
            <PageBuilder pageBuilder={page.pageBuilder} />
        </div>
    );
}
