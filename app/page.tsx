/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export default function Home() {
    return (
        <div className="w-full flex flex-col items-center">
            {/* Top Navigation Bar Removed (Moved to Layout) */}

            {/* Main Content Wrapper */}
            <main className="w-full flex flex-col items-center">
                {/* Hero Section */}
                <section className="w-full max-w-[1440px] px-4 lg:px-40 py-6 lg:py-10">
                    <div className="relative w-full min-h-[500px] lg:min-h-[600px] rounded-2xl overflow-hidden flex items-center bg-slate-200">
                        {/* Background Image */}
                        <div className="absolute inset-0 bg-cover bg-center transition-transform hover:scale-105 duration-[2000ms]" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDl2ba8BODvnwrkKlGrbJBQg8KQYaPt1yCkKI2Jk_agRoJUoGOi1b9gwIb9xQ228HoaP1Xh_0dWvtqiKE-UKFT911YVJ7cvqs5pJjBGI4tYVmRkcYYTmeZFohwuL9THCpoAaf9vk-9f6BR-R8NsmDAZ_CIoZdfzNcNzfEOk0pO2Th10yDagUX1ZEXut6i-81H2HTMP-OxlRDsxUhnYujRnSJZd7_E2-2-HwGpATWPX_ok3z0VQuWvvwXvlqitNeVwMIl1DzhZI7VAo')" }}>
                        </div>
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
                        {/* Hero Content */}
                        <div className="relative z-10 px-6 md:px-12 lg:px-16 max-w-2xl text-white">
                            <span className="inline-block py-1 px-3 mb-4 text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                                New Collection
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-4 tracking-tight drop-shadow-sm">
                                The Summer Edit
                            </h1>
                            <p className="text-base md:text-lg text-slate-100 font-medium mb-8 max-w-md leading-relaxed drop-shadow-sm">
                                Discover the new season effortless styles designed for the modern muse. Breathable fabrics and bold cuts await.
                            </p>
                            <div className="flex gap-4">
                                <Link href="/shop" className="bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-lg text-sm font-bold tracking-wide transition-all shadow-lg hover:shadow-primary/40 transform hover:-translate-y-0.5">
                                    Shop Collection
                                </Link>
                                <Link href="/new-arrivals" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-3.5 rounded-lg text-sm font-bold tracking-wide transition-all">
                                    View Lookbook
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Category Grid Section */}
                <section className="w-full max-w-[1440px] px-4 lg:px-40 pb-16">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-8 pt-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Shop by Category</h2>
                        <Link href="/shop" className="hidden md:flex items-center gap-1 text-sm font-bold text-primary hover:text-primary/80 transition-colors group">
                            View All Categories
                            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Category 1 */}
                        <Link href="/clothing" className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-100">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDde95q8pPfH7CoNDgrJxD_q3bIOHPRoYq0V5HnjD5KY5SSUoEOMP-KfzuMYm9gXod3opeB24P3IK6K6iZvqdwSLeOgq4_gImNmvO3zihjN3j0DwobDxIwe5mPr5t6dGwa7N6YVLfKuvzlmyRdagcItecgl5WB7QkdS6zm6pOgkBol0YI5vzkoG3BUJ3Ubh9EV2_BSgxAFs2LaIikYe09BjOwoIdf_-J4-XYGK1Bmu6sgthmh39C77XjJMaAUzKk_du37QdSZ-9XyA')" }}>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <h3 className="text-white text-xl font-bold mb-1">Dresses</h3>
                                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">Explore Collection</p>
                            </div>
                        </Link>
                        {/* Category 2 */}
                        <Link href="/clothing" className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-100">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDnHSZ5ysbi5WsYAqnVu1bbWlt584OkC0BnuTfNhTFp5wczh4JIFxMIFiqRTj-zFkHOivUHO1OnIC1Iu-wqDqSQTmQQFlV-5kRRxvXyNF-gku_PuM1NG9imgkPnFJ6zi1SsGKYnvwG7zyWjBxuTJTbZoJ74ZOilHLsFjKWR6_oLatcYleAMXlb8nteb9a8bpX0PfkOYnXJxJBJkYEAgV-ulCNFHRRShemAejI5gHRoPnJxd4st7xOpnzKCdvR_DRuey8Ur4VP4oKvU')" }}>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <h3 className="text-white text-xl font-bold mb-1">Tops</h3>
                                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">Shop Essentials</p>
                            </div>
                        </Link>
                        {/* Category 3 */}
                        <Link href="/shop" className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-100">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDtk5izEvjLqVgaWlH6yM4KBuWjdZGPjFko8rQfYd8uaPprsnI4Uf_ugI6SIg2rdtvrU_h3t4eX5ubuK_HMRMdqpaElpK6fhs4OekVriQ3w6OETMX5Cwagcdb9ldUnZxvH0gOxh8xa6b9qXLs6yNuHYuHITocCff76gjiIx1Zt-n10MqIxmgfKSMtPIl1v0aFprhGC3iY-geByeULSLgoRSOzV_AQ_yNaX-KlGBoLM8DMJiTnVuQyI8NSjaXywg5yactX6NTsX8apU')" }}>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <h3 className="text-white text-xl font-bold mb-1">Shoes</h3>
                                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">Step Up</p>
                            </div>
                        </Link>
                        {/* Category 4 */}
                        <Link href="/accessories" className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-100">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBT73e9n8GJsQTjaycXuYkucsEWOwL146PMxa9kqnlXc82l4DI5EIzhufexkmuwp6pZLIkOJIHh08WvDXsTlf-8HNUqW84GElEaSXvYbPAe3sZgtvIJQNFsfLITsbaHD39UdFK05gQgjUadR_aGQeAMieFvmL8b0kzxiIrcbje9MmRnHCG6oUojJ0w76ZnH_wtsxka1UPcmT7wiwDoLcVI1tNXvZHS8PZSOQT49LFy133fW_zxZa0sxe6CaEltvbFBDuODmX0uF7vg')" }}>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <h3 className="text-white text-xl font-bold mb-1">Accessories</h3>
                                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">Final Touches</p>
                            </div>
                        </Link>
                    </div>
                </section>

                {/* Promo Banner */}
                <section className="w-full bg-primary text-white py-4 px-4 overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                    <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left relative z-10">
                        <span className="bg-white/20 p-2 rounded-full hidden md:block">
                            <span className="material-symbols-outlined">local_shipping</span>
                        </span>
                        <p className="text-sm md:text-base font-medium">
                            <span className="font-bold">Free Shipping</span> on all orders over £150. Use code <span className="font-bold border-b border-white/40 pb-0.5">SUMMER24</span> at checkout.
                        </p>
                    </div>
                </section>

                {/* New Arrivals Section */}
                <section className="w-full max-w-[1440px] px-4 lg:px-40 py-16">
                    <div className="flex flex-col items-center mb-12 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-2">New Arrivals</h2>
                        <p className="text-slate-500 max-w-lg">
                            Be the first to wear our latest drops. Limited quantities available.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
                        {/* Product Card 1 */}
                        <div className="group flex flex-col gap-3">
                            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
                                <img alt="Woman in a black velvet dress posing" className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj8BSMzEp_HkimOse92yx2Ot1GwEKje4tNE9P-38NusNxv082Rf8WhH0klCzmFic3iLTMb9lc-m5tWbyskKjMh46pWy1BuxYA6BGT_pWXOuhi7-gFwL8u3DZK1sCNaZuB7XDWOHDUr9F_fNFwhEStuP7YSwHeGIoO9FM9nEUCK1p4nkw8UD1ZLrnrDICyG1C1l5Xguq1nh-OC_SH_vmlnhmdzzP1totYxbkeVmfl5-JkhnpkmGPwa9yczp1-nMg7QS9-GPrrIuGdU" />
                                {/* Hover Actions */}
                                <div className="absolute bottom-4 left-0 right-0 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
                                    <button className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white py-3 rounded shadow-lg text-sm font-bold hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors flex items-center justify-center gap-2">
                                        <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                                        Add to Cart
                                    </button>
                                </div>
                                <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 dark:bg-black/50 hover:bg-white dark:hover:bg-black transition-colors text-slate-900 dark:text-white opacity-0 group-hover:opacity-100">
                                    <span className="material-symbols-outlined text-[20px]">favorite</span>
                                </button>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Velvet Evening Gown</h3>
                                    <span className="text-sm font-bold text-slate-900 dark:text-white">£189.00</span>
                                </div>
                                <p className="text-xs text-secondary-text">Black / S, M, L</p>
                            </div>
                        </div>
                        {/* Product Card 2 */}
                        <div className="group flex flex-col gap-3">
                            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
                                <img alt="Model wearing a light pink casual blouse" className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWvTnhjn0rvyAckuPs8rP3IUadtmZZu1cA31fYy8cmSJWrfLOWH3RuTfpsWm3wli9wTvuOuapELV_QfTWmLunpODSNJyCAzAfJemqi46IhRpo0lW-NV3piwbgYd35Np7HA9vDjvW3dRYH1GqyXatghdcHAJGLJsLwbiMVIGWBXRLCRrl6aJ-7oGVTG0-k0tyMULt_t3cuht6nf7eycOiCoBrdKYNOwfIujcDIXGVsfflIdWn1srDJkKWYH5gnCygDuANr32DkWjKQ" />
                                {/* Hover Actions */}
                                <div className="absolute bottom-4 left-0 right-0 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
                                    <button className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white py-3 rounded shadow-lg text-sm font-bold hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors flex items-center justify-center gap-2">
                                        <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                                        Add to Cart
                                    </button>
                                </div>
                                <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 dark:bg-black/50 hover:bg-white dark:hover:bg-black transition-colors text-slate-900 dark:text-white opacity-0 group-hover:opacity-100">
                                    <span className="material-symbols-outlined text-[20px]">favorite</span>
                                </button>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Silk Blouse</h3>
                                    <span className="text-sm font-bold text-slate-900 dark:text-white">£120.00</span>
                                </div>
                                <p className="text-xs text-secondary-text">Pink / XS, S, M</p>
                            </div>
                        </div>
                        {/* Product Card 3 */}
                        <div className="group flex flex-col gap-3">
                            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
                                <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">Sale</div>
                                <img alt="Woman wearing a casual denim outfit" className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU59V6YKHQabmWVVYKjpc8py5Zs_RsWbbl3knLvdsaoKNlnhZLqF2xiL63_1wYtCiarQCvivU3N2FFwgtDlSQIERVBkkWVBSr-2fRnuhZtAefdOpgQV1vC0sjh_71N5UWcVtRCtHr4sy0o7HRfh8eOLPn1kJp2nvkVJJ12tEukgqu4EWJS8aKp0xuljRi1yzyW4jibmp-hLwXg3inILDPFh1mWYPqopcIJiD8_B9SLApSm6xIhk9K__bxoGuXcjn_EmHMEHtznL0A" />
                                {/* Hover Actions */}
                                <div className="absolute bottom-4 left-0 right-0 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
                                    <button className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white py-3 rounded shadow-lg text-sm font-bold hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors flex items-center justify-center gap-2">
                                        <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                                        Add to Cart
                                    </button>
                                </div>
                                <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 dark:bg-black/50 hover:bg-white dark:hover:bg-black transition-colors text-slate-900 dark:text-white opacity-0 group-hover:opacity-100">
                                    <span className="material-symbols-outlined text-[20px]">favorite</span>
                                </button>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Everyday Denim Jacket</h3>
                                    <div className="flex flex-col items-end">
                                        <span className="text-sm font-bold text-red-500">£85.00</span>
                                        <span className="text-xs text-slate-400 line-through">£110.00</span>
                                    </div>
                                </div>
                                <p className="text-xs text-secondary-text">Blue / M, L, XL</p>
                            </div>
                        </div>
                        {/* Product Card 4 */}
                        <div className="group flex flex-col gap-3">
                            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
                                <img alt="Minimalist beige sweater folded" className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC64HUWyC0fG_guqc1tGGzTBe-XaumMHNLpbjhpu3rTkpZKWEdtol2csw0MLefZzrzS2Lus1RvNTLBUUrWXnqzBkGzhTDpjwCZSxg8w8YaCGEB0a6BkoxMBojrFSvDb4429_SpDkuN4gCwxl3iPSc1j-jl6vwuvoCWVS8zTAq3kt_2EVU4BUSxcDe-MO6ZYpczHsWVbsVi2cUQj4N0skaHEpBNxys_yPUdM5trRNoKDjwyHBOQLoDGk0U9EPRhLzVfbFDslrHRMzBQ" />
                                {/* Hover Actions */}
                                <div className="absolute bottom-4 left-0 right-0 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
                                    <button className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white py-3 rounded shadow-lg text-sm font-bold hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors flex items-center justify-center gap-2">
                                        <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                                        Add to Cart
                                    </button>
                                </div>
                                <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 dark:bg-black/50 hover:bg-white dark:hover:bg-black transition-colors text-slate-900 dark:text-white opacity-0 group-hover:opacity-100">
                                    <span className="material-symbols-outlined text-[20px]">favorite</span>
                                </button>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Cashmere Knit</h3>
                                    <span className="text-sm font-bold text-slate-900 dark:text-white">£240.00</span>
                                </div>
                                <p className="text-xs text-secondary-text">Beige / S, M</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 flex justify-center">
                        <Link href="/new-arrivals" className="border border-slate-300 dark:border-slate-700 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white px-8 py-3 rounded-lg text-sm font-bold transition-colors">
                            View All Arrivals
                        </Link>
                    </div>
                </section>

                {/* Newsletter Section */}
                <section className="w-full bg-slate-100 py-16 px-4">
                    <div className="max-w-2xl mx-auto text-center flex flex-col gap-6">
                        <span className="material-symbols-outlined text-[40px] text-primary">mail</span>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-3xl font-extrabold text-slate-900">Join the Club</h2>
                            <p className="text-slate-600">Sign up for our newsletter and receive 10% off your first order plus exclusive access to new drops.</p>
                        </div>
                        <form className="flex flex-col sm:flex-row gap-3 mt-4">
                            <input className="flex-1 px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-primary" placeholder="Enter your email address" required type="email" />
                            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold transition-colors" type="submit">
                                Subscribe
                            </button>
                        </form>
                        <p className="text-xs text-slate-400">By subscribing you agree to our Terms & Conditions and Privacy Policy.</p>
                    </div>
                </section>

                {/* Footer */}
                <footer className="w-full bg-white border-t border-slate-200 pt-16 pb-8 px-4 lg:px-40">
                    <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                        {/* Brand Column */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2 text-slate-900">
                                <div className="size-6 bg-primary rounded flex items-center justify-center text-white">
                                    <span className="material-symbols-outlined text-[14px]">diamond</span>
                                </div>
                                <h2 className="text-lg font-bold">TOI&MOI</h2>
                            </div>
                            <p className="text-sm text-slate-500 leading-relaxed">
                                Effortless style for the modern individual. Designed in Paris, loved worldwide.
                            </p>
                            <div className="flex gap-4 mt-2">
                                <a href="#" className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">thumb_up</span></a>
                                <a href="#" className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">photo_camera</span></a>
                                <a href="#" className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">music_note</span></a>
                            </div>
                        </div>
                        {/* Link Column 1 */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">Shop</h3>
                            <div className="flex flex-col gap-2">
                                <Link href="/new-arrivals" className="text-sm text-slate-500 hover:text-primary transition-colors">New Arrivals</Link>
                                <Link href="/clothing" className="text-sm text-slate-500 hover:text-primary transition-colors">Clothing</Link>
                                <Link href="/accessories" className="text-sm text-slate-500 hover:text-primary transition-colors">Accessories</Link>
                                <Link href="/sale" className="text-sm text-slate-500 hover:text-primary transition-colors">Sale</Link>
                            </div>
                        </div>
                        {/* Link Column 2 */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">Help</h3>
                            <div className="flex flex-col gap-2">
                                <Link href="/shipping-returns" className="text-sm text-slate-500 hover:text-primary transition-colors">Shipping & Returns</Link>
                                <Link href="/faq" className="text-sm text-slate-500 hover:text-primary transition-colors">FAQ</Link>
                                <Link href="#" className="text-sm text-slate-500 hover:text-primary transition-colors">Size Guide</Link>
                                <Link href="/contact" className="text-sm text-slate-500 hover:text-primary transition-colors">Contact Us</Link>
                            </div>
                        </div>
                        {/* Link Column 3 */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">Legal</h3>
                            <div className="flex flex-col gap-2">
                                <Link href="/privacy" className="text-sm text-slate-500 hover:text-primary transition-colors">Privacy Policy</Link>
                                <Link href="/terms" className="text-sm text-slate-500 hover:text-primary transition-colors">Terms of Service</Link>
                                <Link href="/privacy" className="text-sm text-slate-500 hover:text-primary transition-colors">Cookie Policy</Link>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-slate-400">© 2024 TOI&MOI. All rights reserved.</p>
                        <div className="flex items-center gap-4">
                            {/* Payment Icons Mockup */}
                            <div className="h-6 w-10 bg-slate-200 rounded"></div>
                            <div className="h-6 w-10 bg-slate-200 rounded"></div>
                            <div className="h-6 w-10 bg-slate-200 rounded"></div>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}
