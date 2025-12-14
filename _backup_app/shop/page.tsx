import { client } from "@/sanity/client";
import ProductCard from "@/components/ProductCard";

// Fetch from Sanity
async function getProducts() {
    return await client.fetch(`
    *[_type == "product"] {
      _id,
      title,
      price,
      "compareAtPrice": compareAtPrice, 
      "slug": slug.current,
      "imageUrl": images[0].asset->url,
      "available": stock > 0
    }
  `);
}

export default async function ShopPage() {
    const products = await getProducts();

    return (
        <div className="collection-content min-h-screen bg-white">
            {/* HEADER SECTION */}
            <div className="collection__hero py-12 border-b border-gray-100">
                <div className="hero__content__wrapper text-center max-w-4xl mx-auto px-6">
                    <h1 className="hero__title text-4xl md:text-5xl font-light uppercase tracking-wide mb-4">
                        Shop All
                    </h1>
                    <div className="hero__description text-gray-500 max-w-2xl mx-auto">
                        <p>Explore our curated collection of timeless pieces.</p>
                    </div>
                </div>
            </div>

            {/* TOOLBAR */}
            <div className="collection__nav sticky top-0 z-40 bg-white border-b border-gray-200 px-6 py-3 flex justify-between items-center">
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:opacity-70">
                    <span className="text-lg">≡</span> Filter
                </button>
                <span className="text-xs text-gray-400">{products.length} Items</span>
            </div>

            {/* PRODUCT GRID */}
            <div className="wrapper section-padding px-4 py-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-12">
                    {products.map((product: any) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
