/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';

export default function BlogPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white transition-colors duration-200">
            {/* Scoped Styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .material-symbols-outlined {
                    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
                }
            `}} />

            <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
                {/* TopNavBar */}
                <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-gray-200 dark:border-b-gray-800 bg-white/95 dark:bg-background-dark/95 backdrop-blur-sm px-4 lg:px-10 py-3">
                    <div className="flex items-center gap-4 lg:gap-8">
                        <Link className="flex items-center gap-4 text-slate-900 dark:text-white" href="/">
                            <div className="size-8 text-primary">
                                <span className="material-symbols-outlined text-3xl">diamond</span>
                            </div>
                            <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] hidden sm:block">Toi-n-Moi</h2>
                        </Link>
                        <nav className="hidden md:flex items-center gap-6 lg:gap-9">
                            <Link className="text-slate-900 dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="/products">Shop</Link>
                            <Link className="text-slate-900 dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="/new-arrivals">New Arrivals</Link>
                            <Link className="text-primary text-sm font-bold leading-normal" href="/blog">The Edit</Link>
                            <Link className="text-slate-900 dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="/sale">Sale</Link>
                        </nav>
                    </div>
                    <div className="flex flex-1 justify-end gap-4 lg:gap-8">
                        <label className="hidden sm:flex flex-col min-w-40 h-10 max-w-64">
                            <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-gray-100 dark:bg-gray-800">
                                <div className="text-gray-500 flex border-none items-center justify-center pl-4 rounded-l-lg border-r-0">
                                    <span className="material-symbols-outlined text-[20px]">search</span>
                                </div>
                                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-transparent focus:border-none h-full placeholder:text-gray-500 px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal" placeholder="Search articles..." defaultValue="" />
                            </div>
                        </label>
                        <div className="flex gap-2">
                            <Link href="/cart" className="flex items-center justify-center overflow-hidden rounded-lg size-10 bg-gray-100 dark:bg-gray-800 text-slate-900 dark:text-white hover:bg-primary/10 transition-colors">
                                <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
                            </Link>
                            <Link href="/account" className="flex items-center justify-center overflow-hidden rounded-lg size-10 bg-gray-100 dark:bg-gray-800 text-slate-900 dark:text-white hover:bg-primary/10 transition-colors">
                                <span className="material-symbols-outlined text-[20px]">account_circle</span>
                            </Link>
                        </div>
                    </div>
                </header>

                <main className="layout-container flex h-full grow flex-col">
                    <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-8">
                        <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
                            {/* Page Heading & Subheading */}
                            <section className="flex flex-wrap justify-between gap-3 px-4 pb-4">
                                <div className="flex min-w-72 flex-col gap-3">
                                    <h1 className="text-slate-900 dark:text-white text-5xl font-black leading-tight tracking-[-0.033em]">The Edit</h1>
                                    <p className="text-gray-500 text-lg font-normal leading-normal max-w-xl">
                                        Daily inspiration, styling tips, and brand stories curated for the modern muse.
                                    </p>
                                </div>
                            </section>
                            {/* Filter Chips */}
                            <section className="flex gap-3 px-4 pb-8 flex-wrap">
                                <button className="group flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-5 transition-all">
                                    <p className="text-sm font-bold leading-normal">All Stories</p>
                                </button>
                                <button className="group flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 px-5 hover:bg-primary/20 transition-all">
                                    <p className="text-slate-900 dark:text-gray-200 text-sm font-medium leading-normal">Trends</p>
                                </button>
                                <button className="group flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 px-5 hover:bg-primary/20 transition-all">
                                    <p className="text-slate-900 dark:text-gray-200 text-sm font-medium leading-normal">Styling Tips</p>
                                </button>
                                <button className="group flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 px-5 hover:bg-primary/20 transition-all">
                                    <p className="text-slate-900 dark:text-gray-200 text-sm font-medium leading-normal">Brand News</p>
                                </button>
                                <button className="group flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 px-5 hover:bg-primary/20 transition-all">
                                    <p className="text-slate-900 dark:text-gray-200 text-sm font-medium leading-normal">Interviews</p>
                                </button>
                            </section>
                            {/* Hero Article */}
                            <section className="px-4 pb-12">
                                <div className="relative w-full rounded-xl overflow-hidden group cursor-pointer shadow-lg">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity group-hover:from-black/90"></div>
                                    {/* Hero Image */}
                                    <div className="h-[500px] w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Woman in fashionable outfit posing in urban setting" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDtAHSyInrXlVuPjT0irzuk4gU2yJI3SfmU9WIZGdiqqoZaqdGPbcjyLesfW8vsiWRsBBCwp0466eMPJ3zZIKYJ_G1mGnrmxABcij-bY7jdjnhrC8kQ2q9lhldLzYSbZldAVIxS7A6yMi_EUJ_rJK84_5wPPWihozuk08hdJX5b7GvHWYqXF3NBiOIktAXuqOllO2utOxJjaFEGNuCjfIvaS6lkoZk7JE-cmJ2FyNexf6UCZlG3h0Qthv6pwNY36aOHuhA16jVzqxE")' }}>
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 z-20 flex flex-col items-start gap-4 max-w-3xl">
                                        <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Editor&apos;s Pick</span>
                                        <div className="flex flex-col gap-2">
                                            <h2 className="text-white text-3xl md:text-5xl font-black leading-tight tracking-tight">
                                                Summer 2024: Behind the Scenes
                                            </h2>
                                            <p className="text-gray-200 text-base md:text-lg font-normal leading-normal max-w-xl">
                                                Discover the inspiration behind our vibrant new collection and learn how to wear the season&apos;s hottest color palette with confidence.
                                            </p>
                                        </div>
                                        <button className="mt-2 flex items-center gap-2 text-white font-bold text-sm tracking-wide hover:underline decoration-2 underline-offset-4">
                                            Read the Story <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                                        </button>
                                    </div>
                                </div>
                            </section>
                            {/* Blog Grid */}
                            <section className="px-4 pb-16">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">Latest Stories</h3>
                                    <Link className="text-primary text-sm font-bold hover:underline" href="#">View Archive</Link>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {/* Card 1 */}
                                    <article className="flex flex-col gap-4 group cursor-pointer">
                                        <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                                            <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Oversized blazer styling with accessories" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA-COtVC2juNQ_BlLDxc81sUQFQzvqfM4r1LtfUr5oS_94vmtVYPV26mQTQCNEZS_eoxRNB2T0C1tNYzwQf6pqzodJt_iOGGNiXeuZwR5cLTMek3_8J3eP_Ygpw8X7PE4jQXqWQCmr-Eh0aQw3-ewJXGbQ0qK8NLvTR2d4AaaBpGvNCzlgVZe57XuWYmf_jbZnKmSEuCf0YGQ5gzDdFa_h1qA1rboKQBuwC-gUZaJ0o82z6mP4UKBK3TfIbEjg-aMUGnLPrdxQVCLs")' }}></div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center gap-3">
                                                <span className="text-primary text-xs font-bold uppercase tracking-wider">Styling Tips</span>
                                                <span className="text-gray-400 text-xs">•</span>
                                                <span className="text-gray-500 text-xs">May 12, 2024</span>
                                            </div>
                                            <h4 className="text-slate-900 dark:text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                                                5 Ways to Style the Oversized Blazer
                                            </h4>
                                            <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                                                From office chic to weekend casual, master the art of the oversized silhouette with these simple layering tricks.
                                            </p>
                                            <Link className="inline-flex items-center text-slate-900 dark:text-white text-sm font-bold mt-1 group-hover:translate-x-1 transition-transform" href="#">
                                                Read More <span className="material-symbols-outlined text-[16px] ml-1">arrow_forward</span>
                                            </Link>
                                        </div>
                                    </article>
                                    {/* Card 2 */}
                                    <article className="flex flex-col gap-4 group cursor-pointer">
                                        <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                                            <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Fashion designer sketching in studio" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBasgiRUrnV5WU9MSatHkQvGpvo0E7EHr_6FstcQPXD4sRNYlRNs66j6KejuafsOhpnfwVUjy15nWLrhmj4gEi4jqLrs2viyQ8NrEDaRcQG09M-LQDWhxU9L298rYI2Zi1eYmlWtUlKNrfEViKa9B14mPIlId7sYst74m66A_scJZ1O9vm54Q0NMBt52v90b41hMIpb3ElkfDT-rI92CGT3lF8Nm3zqFq-UpG17-ezhpRgZlF2NZSBgo2lQeHhV5Oda9FisiNnn2JI")' }}></div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center gap-3">
                                                <span className="text-primary text-xs font-bold uppercase tracking-wider">Interviews</span>
                                                <span className="text-gray-400 text-xs">•</span>
                                                <span className="text-gray-500 text-xs">May 08, 2024</span>
                                            </div>
                                            <h4 className="text-slate-900 dark:text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                                                Meet the Designer: Our Exclusive Interview
                                            </h4>
                                            <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                                                We sat down with our lead designer to talk about sustainability, future trends, and what inspires the Toi-n-Moi aesthetic.
                                            </p>
                                            <Link className="inline-flex items-center text-slate-900 dark:text-white text-sm font-bold mt-1 group-hover:translate-x-1 transition-transform" href="#">
                                                Read More <span className="material-symbols-outlined text-[16px] ml-1">arrow_forward</span>
                                            </Link>
                                        </div>
                                    </article>
                                    {/* Card 3 */}
                                    <article className="flex flex-col gap-4 group cursor-pointer">
                                        <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                                            <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Purple fabric textures and violet fashion items" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCQGCHeMg465_JEOFOmcyVNvRRAvwJ4UCp4aeo7T-KbLlD_mMP46OgqRwyoN2kIOjdoph7XCdphTjXrcIvzEgaqYl-19cP6PT99sbJP8ZfeUKs6QdXNYM5XgerdDfwjpy62ZLt25vjz3jBUFd_axpRk6tUG7_N8c30eHplAVoc2o2bfYSAdbEiSn21Y-klP0_4-XL4iS3gM14GmCzBBEeimeBoqZltzKXgousra9BSNIIqev-TOp6IBdMVPXi9W6bZCOrdbPpM1fD0")' }}></div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center gap-3">
                                                <span className="text-primary text-xs font-bold uppercase tracking-wider">Trends</span>
                                                <span className="text-gray-400 text-xs">•</span>
                                                <span className="text-gray-500 text-xs">May 02, 2024</span>
                                            </div>
                                            <h4 className="text-slate-900 dark:text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                                                The Color Purple: Why it&apos;s the shade of the season
                                            </h4>
                                            <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                                                Bold, royal, and unapologetic. Here is why purple is taking over the runways and our wardrobes this spring.
                                            </p>
                                            <Link className="inline-flex items-center text-slate-900 dark:text-white text-sm font-bold mt-1 group-hover:translate-x-1 transition-transform" href="#">
                                                Read More <span className="material-symbols-outlined text-[16px] ml-1">arrow_forward</span>
                                            </Link>
                                        </div>
                                    </article>
                                    {/* Card 4 */}
                                    <article className="flex flex-col gap-4 group cursor-pointer">
                                        <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                                            <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Minimalist wardrobe essentials on rack" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDjY4o1ee75xlGyjRz1fFjNmbWxNpH5tmQlrIOfd7fxCeCQMCGERnhmNCW0FTsQ2htL4sPGZPSEzyxW8lJ33VSMSrjDcOwF_6dEIY3SGoSHMp9PxeLdVdHw46GAmI_D_LUicn8Fb2IvlyL494sef5d2Qo0YLIHFLl9TwKAiqps9GkBHkjAwqwmoSvpBA-gi-wKBDOhKDRwFP-Jfjm7al7gCmt_A6TIXNYLU_YVlSfcEvatWwSjkhsK7ehsS6wwS8odLzAtg33Zm32U")' }}></div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center gap-3">
                                                <span className="text-primary text-xs font-bold uppercase tracking-wider">Capsule Wardrobe</span>
                                                <span className="text-gray-400 text-xs">•</span>
                                                <span className="text-gray-500 text-xs">April 28, 2024</span>
                                            </div>
                                            <h4 className="text-slate-900 dark:text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                                                10 Essentials Every Woman Needs
                                            </h4>
                                            <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                                                Building a capsule wardrobe starts here. These foundational pieces will serve you for years to come.
                                            </p>
                                            <Link className="inline-flex items-center text-slate-900 dark:text-white text-sm font-bold mt-1 group-hover:translate-x-1 transition-transform" href="#">
                                                Read More <span className="material-symbols-outlined text-[16px] ml-1">arrow_forward</span>
                                            </Link>
                                        </div>
                                    </article>
                                    {/* Card 5 */}
                                    <article className="flex flex-col gap-4 group cursor-pointer">
                                        <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                                            <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Eco-friendly packaging and green fabrics" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJ2xzYp2m5YvMxyOtKjRNy0330vV4qHw2--fA03HoMjiR5AIcecmBQL3QfnPovj8UnD_YoZnXJerMWdf6BHgLBOogMhJ5k-3KHtwDRH1makxF0qfHCOtRYc0U2-3N4SgKW-Xxi3bcVc74-RkUCizXUTKaeMJzyBZTH-HOb7FmsPm27xKTKBwWS7BbjQmNWW8UUH2pMF5NVlApL0Oadg9TckU1O_gWIch75O8k_wSOKr-yoRpd2R1mQDcd1rrHAYfPVtr35h3rDgTc")' }}></div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center gap-3">
                                                <span className="text-primary text-xs font-bold uppercase tracking-wider">Brand News</span>
                                                <span className="text-gray-400 text-xs">•</span>
                                                <span className="text-gray-500 text-xs">April 20, 2024</span>
                                            </div>
                                            <h4 className="text-slate-900 dark:text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                                                Our Commitment to Sustainability
                                            </h4>
                                            <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                                                We&apos;re going 100% plastic-free by 2025. Read about our roadmap to a greener future.
                                            </p>
                                            <Link className="inline-flex items-center text-slate-900 dark:text-white text-sm font-bold mt-1 group-hover:translate-x-1 transition-transform" href="#">
                                                Read More <span className="material-symbols-outlined text-[16px] ml-1">arrow_forward</span>
                                            </Link>
                                        </div>
                                    </article>
                                    {/* Card 6 */}
                                    <article className="flex flex-col gap-4 group cursor-pointer">
                                        <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                                            <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Models walking down a fashion runway" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBaUSQ-9VQTP3ZV1zWCDFAaezhN97wTmiKorPFmphelx7ZS0apvuJhVUJDtSb6reWw7w8q9aI-HLuAd1etTlyCuajZ93jKeEifFOnTFdB5MLzPVtJYxKGGIjgeJjUYlB23VKjkZvZbIs_nrrEYjSIK-j03GMMy93yXLyv5fuBLMJPhNzXkzaKCcXs-_rDZ5c_OzYkUoIlcQ-b2ksKgQIw7zck9Uq3rqDwr9ZuU3vT-xFxin7YUh-SE0VH9JbBIFweIZIhrPxrpiNSI")' }}></div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center gap-3">
                                                <span className="text-primary text-xs font-bold uppercase tracking-wider">Events</span>
                                                <span className="text-gray-400 text-xs">•</span>
                                                <span className="text-gray-500 text-xs">April 15, 2024</span>
                                            </div>
                                            <h4 className="text-slate-900 dark:text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                                                Runway Report: Highlights from Paris
                                            </h4>
                                            <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                                                The most memorable moments from Paris Fashion Week and how they will influence street style this year.
                                            </p>
                                            <Link className="inline-flex items-center text-slate-900 dark:text-white text-sm font-bold mt-1 group-hover:translate-x-1 transition-transform" href="#">
                                                Read More <span className="material-symbols-outlined text-[16px] ml-1">arrow_forward</span>
                                            </Link>
                                        </div>
                                    </article>
                                </div>
                            </section>
                            {/* Newsletter / Shop Integration */}
                            <section className="px-4 pb-12">
                                <div className="rounded-xl bg-gradient-to-br from-gray-100 to-white dark:from-[#2d1b33] dark:to-[#1e1121] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-sm border border-white/50 dark:border-white/5">
                                    <div className="flex-1 flex flex-col gap-4 items-center md:items-start text-center md:text-left">
                                        <h3 className="text-slate-900 dark:text-white text-3xl font-black tracking-tight">Don&apos;t Miss a Trend</h3>
                                        <p className="text-gray-500 text-base max-w-md">
                                            Get daily styling tips, early access to sales, and exclusive brand stories delivered straight to your inbox.
                                        </p>
                                    </div>
                                    <div className="flex-1 w-full max-w-md">
                                        <form className="flex flex-col gap-3">
                                            <div className="flex items-center bg-white dark:bg-[#3d2545] rounded-lg p-1 shadow-sm focus-within:ring-2 focus-within:ring-primary/50 transition-all">
                                                <input className="flex-1 border-none bg-transparent focus:ring-0 text-slate-900 dark:text-white placeholder:text-gray-500 px-4 py-2" placeholder="Enter your email address" required type="email" />
                                                <button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-md px-6 py-2.5 transition-colors" type="submit">
                                                    Subscribe
                                                </button>
                                            </div>
                                            <p className="text-xs text-gray-500 text-center md:text-left pl-1">
                                                By subscribing you agree to our <Link className="underline hover:text-primary" href="/privacy">Privacy Policy</Link>.
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="bg-white dark:bg-[#150c18] border-t border-gray-200 dark:border-[#2d1b33] pt-16 pb-8 px-4 lg:px-40">
                    <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
                        <div className="flex flex-col md:flex-row justify-between gap-10">
                            <div className="flex flex-col gap-4 max-w-xs">
                                <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                                    <div className="size-6 text-primary">
                                        <span className="material-symbols-outlined text-3xl">diamond</span>
                                    </div>
                                    <span className="text-lg font-bold tracking-tight">Toi-n-Moi</span>
                                </div>
                                <p className="text-gray-500 text-sm">
                                    Curated fashion for the modern individual. We believe in style that speaks before you do.
                                </p>
                                <div className="flex gap-4 mt-2">
                                    {/* Social Icons Placeholders */}
                                    <a className="text-gray-500 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
                                    <a className="text-gray-500 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">photo_camera</span></a>
                                    <a className="text-gray-500 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
                                <div className="flex flex-col gap-3">
                                    <h5 className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider">Shop</h5>
                                    <Link className="text-gray-500 hover:text-primary text-sm transition-colors" href="/new-arrivals">New Arrivals</Link>
                                    <Link className="text-gray-500 hover:text-primary text-sm transition-colors" href="/clothing">Clothing</Link>
                                    <Link className="text-gray-500 hover:text-primary text-sm transition-colors" href="/accessories">Accessories</Link>
                                    <Link className="text-gray-500 hover:text-primary text-sm transition-colors" href="/sale">Sale</Link>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h5 className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider">Company</h5>
                                    <Link className="text-gray-500 hover:text-primary text-sm transition-colors" href="/about">About Us</Link>
                                    <Link className="text-gray-500 hover:text-primary text-sm transition-colors" href="/careers">Careers</Link>
                                    <Link className="text-gray-500 hover:text-primary text-sm transition-colors" href="/press">Press</Link>
                                    <Link className="text-gray-500 hover:text-primary text-sm transition-colors" href="/sustainability">Sustainability</Link>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h5 className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider">Support</h5>
                                    <Link className="text-gray-500 hover:text-primary text-sm transition-colors" href="/contact">Contact Us</Link>
                                    <Link className="text-gray-500 hover:text-primary text-sm transition-colors" href="/shipping">Shipping</Link>
                                    <Link className="text-gray-500 hover:text-primary text-sm transition-colors" href="/returns">Returns</Link>
                                    <Link className="text-gray-500 hover:text-primary text-sm transition-colors" href="/faq">FAQ</Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-200 dark:border-[#2d1b33]">
                            <p className="text-gray-500 text-xs">© 2024 Toi-n-Moi Inc. All rights reserved.</p>
                            <div className="flex gap-6">
                                <Link className="text-gray-500 hover:text-primary text-xs transition-colors" href="/privacy">Privacy Policy</Link>
                                <Link className="text-gray-500 hover:text-primary text-xs transition-colors" href="/terms">Terms of Service</Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
