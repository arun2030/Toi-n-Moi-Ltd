'use client';

import { useServerInsertedHTML } from 'next/navigation';

export default function ThemeRegistry({ config }: { config: any }) {
    useServerInsertedHTML(() => {
        const primary = config?.colorScheme?.primary?.hex || '#000000';
        const secondary = config?.colorScheme?.secondary?.hex || '#888888';
        const bg = config?.colorScheme?.bg?.hex || '#ffffff';

        return (
            <style dangerouslySetInnerHTML={{
                __html: `
          :root {
            --primary: ${primary};
            --secondary: ${secondary};
            --bg: ${bg};
            --background: ${bg};
            --foreground: ${primary}; /* Assuming primary is text color */
          }
        `
            }} />
        );
    });

    return null;
}
