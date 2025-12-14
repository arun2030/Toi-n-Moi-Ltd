import type { Metadata } from "next";
import "./globals.css";
// import Header from "@/components/Header"; // Replacing with new Header that takes props
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./css-variables.css";
import "./styles/shopify.css";
import { client } from "@/sanity/client";
import { VisualEditing } from "next-sanity/visual-editing";
import { draftMode } from "next/headers";
import ThemeRegistry from "@/components/ThemeRegistry";
import { CartProvider } from "@/components/CartProvider";

export const metadata: Metadata = {
  title: "Toi 'n' Moi",
  description: "Headless E-commerce Store",
};

export const revalidate = 60; // Check for config updates every minute

async function getSiteConfig() {
  return client.fetch(`*[_type == "siteConfig"][0]`);
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const config = await getSiteConfig();
  const draft = await draftMode();

  return (
    <html lang="en" className="no-js" suppressHydrationWarning>
      <head>
        {/* Import Shopify Theme CSS for legacy support */}
        <link rel="stylesheet" href="/assets/theme.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.className = document.documentElement.className.replace('no-js', 'js');`,
          }}
        />
      </head>
      {/* Added font-body and merged classes */}
      <body className="antialiased font-body transition-colors duration-500 template-index">
        <ThemeRegistry config={config} />
        <CartProvider>

          {/* FORCE THE HEADER TO APPEAR AT THE TOP */}
          <div className="z-50 relative bg-white">
            <Header />
          </div>

          <main id="MainContent" className="main-content min-h-screen">{children}</main>

          <Footer />

        </CartProvider>
        {draft.isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}
