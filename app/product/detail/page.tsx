/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export default function ProductDetailPage() {
    return (
        <div className="w-full bg-background-light dark:bg-background-dark text-[#1b0d10] dark:text-gray-100 font-display transition-colors duration-300">
            {/* Scoped Styles for Carousel and Scrollbar */}
            <style dangerouslySetInnerHTML={{
                __html: `
                ::-webkit-scrollbar {
                    width: 8px;
                }
                ::-webkit-scrollbar-track {
                    background: transparent;
                }
                ::-webkit-scrollbar-thumb {
                    background: #e5e7eb;
                    border-radius: 4px;
                }
                ::-webkit-scrollbar-thumb:hover {
                    background: #d1d5db;
                }
                .dark ::-webkit-scrollbar-thumb {
                    background: #374151;
                }
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .symbol-filled {
                    font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
                }
                .carousel-nav-btn {
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                .carousel-container:hover .carousel-nav-btn {
                    opacity: 1;
                }
                input[name="carousel"] {
                    display: none;
                }
                .carousel-slide {
                    display: none;
                    opacity: 0;
                    transition: opacity 0.5s ease-in-out;
                }
                #slide1:checked ~ .carousel-container .carousel-inner .slide-1,
                #slide2:checked ~ .carousel-container .carousel-inner .slide-2,
                #slide3:checked ~ .carousel-container .carousel-inner .slide-3,
                #slide4:checked ~ .carousel-container .carousel-inner .slide-4,
                #slide5:checked ~ .carousel-container .carousel-inner .slide-5 {
                    display: block;
                    opacity: 1;
                }
                #slide1:checked ~ .carousel-container .thumbnails label[for="slide1"],
                #slide2:checked ~ .carousel-container .thumbnails label[for="slide2"],
                #slide3:checked ~ .carousel-container .thumbnails label[for="slide3"],
                #slide4:checked ~ .carousel-container .thumbnails label[for="slide4"],
                #slide5:checked ~ .carousel-container .thumbnails label[for="slide5"] {
                    border-color: #d41132;
                    opacity: 1;
                }
                /* Navigation Buttons Logic */
                #slide1:checked ~ .carousel-container .slide-1-next, 
                #slide1:checked ~ .carousel-container .slide-1-prev { display: flex; }
                #slide2:checked ~ .carousel-container .slide-2-next, 
                #slide2:checked ~ .carousel-container .slide-2-prev { display: flex; }
                #slide3:checked ~ .carousel-container .slide-3-next, 
                #slide3:checked ~ .carousel-container .slide-3-prev { display: flex; }
                #slide4:checked ~ .carousel-container .slide-4-next, 
                #slide4:checked ~ .carousel-container .slide-4-prev { display: flex; }
                #slide5:checked ~ .carousel-container .slide-5-next, 
                #slide5:checked ~ .carousel-container .slide-5-prev { display: flex; }
            `}} />

            {/* Main Content */}
            <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-8 lg:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                    <div className="lg:col-span-7">
                        <div className="sticky top-28 flex flex-col gap-4">
                            {/* Carousel Inputs */}
                            <input defaultChecked id="slide1" name="carousel" type="radio" />
                            <input id="slide2" name="carousel" type="radio" />
                            <input id="slide3" name="carousel" type="radio" />
                            <input id="slide4" name="carousel" type="radio" />
                            <input id="slide5" name="carousel" type="radio" />

                            <div className="carousel-container relative w-full aspect-[3/4] sm:aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden group">
                                <div className="carousel-inner w-full h-full relative">
                                    <div className="carousel-slide slide-1 w-full h-full absolute top-0 left-0">
                                        <div className="w-full h-full bg-cover bg-center cursor-zoom-in" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBt310sulxDC-8yrm8bCWOUEEfau_JAVIcnBRCOb0eOFqKxDounQubrlQHLc7AmL1ZDnmWiBf7hj-7Jz79WWdHHwjA6zPdVSTBKSuh-JVWAWyPKdeeo37oa0-xV-Sv4bxb4otcZhOzNmuMdg1O100MElvRC1im8nWQcbXb3JWh0aMWWv-sKGv3OTzpNVuj3mxt98MtljYIvG46fRdyJMrem5v9lMCp7E6uxEKNntVUzDnuYhZfvM0Dfxw9grOUyWneeToQ-TKqV_vQ')" }}></div>
                                    </div>
                                    <div className="carousel-slide slide-2 w-full h-full absolute top-0 left-0">
                                        <div className="w-full h-full bg-cover bg-center cursor-zoom-in" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSYqL4EchNTPIUpaus5X4hwnrmYSCZY3gqoIS3UBtr6y-JBB0kwWWizMHQrcze0jaAAglHPAytZUNyQFSKAwKhzeEQORzo6e039xintn_Yfdii5eCgEDcgUmVfvnBOuyNKGKSJEkM6_kRD2sfCEkzZkN5N-UNZLXgh8g7VwSksQsExUhQWtOcpLp2OovPTiYZeWyJ75cGdey8_qavLfhC7trE5r9Z26g2_TATGIrxQzYHRp-LnL4nsCZbbVSkf0OkbkG9yNUSVZdU')" }}></div>
                                    </div>
                                    <div className="carousel-slide slide-3 w-full h-full absolute top-0 left-0">
                                        <div className="w-full h-full bg-cover bg-top cursor-zoom-in" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCUhfCr-UDYoR6NLnNsDZFtVyt-2qgInfCJXhmBXp_xSQB5sohmJb1n_6s_-RMYqBFxL331zkJxLgCSlTgk0Ve4GETN-qFwrjr9J0wEsfnVFjiMn4ubv6A-zP1ZTRB3C6gPg4vF806JbOS9a3EuBcB7GxjfIgOfa1Jv1UjjIA51yv22MzDgaXyjmQQVBYdZtw7SgCRpEjKpr_G9hF6g-ljaEEbLm8an3tHrIEhRLhtotJhpoDAiK6Pvyzv1EgBXNXkEMpEA9NzLTXk')" }}></div>
                                    </div>
                                    <div className="carousel-slide slide-4 w-full h-full absolute top-0 left-0">
                                        <div className="w-full h-full bg-cover bg-center cursor-zoom-in" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-RwXf_OfFBdSa4uE7uo_a8UbW5wKtiyxqdl3dCCnaGOqFA6Ws_FHVPTdQ10jdO9dvCxFp4Jw6zBlMme8QMPI1x2sR6fPNOEWKUL9Io8OUpXYhbDt8p-GCSWlSWBtm91p89ATyv1XcYErMYbAYCXFA4tn6BrA2tIIn-blB3jF1f8bmL0WolJ1CrW7CGmobD-3OgA72lerdWmhDnSGRGoZLRuH4imWsbFcNM16_EUheefn2MLqKwOp9fYXDbrwICf_qjLEyK66HMR4')" }}></div>
                                    </div>
                                    <div className="carousel-slide slide-5 w-full h-full absolute top-0 left-0">
                                        <div className="w-full h-full bg-cover bg-center cursor-zoom-in" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCNnQPeW8memx-LVR-Rvjb4uPVFQhlVDoHILNn-J56uMUiZRmlsDDU6RELwPlcO0l2IEvaKrtrOmbT8Tbal2TTy2whNbGeNUkzSIT3V1HwBDymBNm1iIzLZQJCRgE2e7htW-UjAIpfVYgOyzOyGPwYjcg7pGBgGX60ewvD2NpaxqwXLBE0kQrXtU5AZvqwwptgQF8iHki8_4XwBWgVGDbc33nSIBv-oQsJGSRuiJl6d3rVl0KUOLQNoApn7HRW-ON-ZxZewroRBGHg')" }}></div>
                                    </div>
                                </div>
                                <div className="carousel-nav-btn absolute top-1/2 left-4 -translate-y-1/2 flex justify-between w-[calc(100%-2rem)] pointer-events-none z-10">
                                    <label className="pointer-events-auto w-10 h-10 rounded-full bg-white/80 hover:bg-white text-gray-800 flex items-center justify-center shadow-md cursor-pointer transition-transform hover:scale-110 slide-1-prev absolute left-0" htmlFor="slide5"><span className="material-symbols-outlined">chevron_left</span></label>
                                    <label className="pointer-events-auto w-10 h-10 rounded-full bg-white/80 hover:bg-white text-gray-800 flex items-center justify-center shadow-md cursor-pointer transition-transform hover:scale-110 slide-2-prev absolute left-0 hidden" htmlFor="slide1"><span className="material-symbols-outlined">chevron_left</span></label>
                                    <label className="pointer-events-auto w-10 h-10 rounded-full bg-white/80 hover:bg-white text-gray-800 flex items-center justify-center shadow-md cursor-pointer transition-transform hover:scale-110 slide-3-prev absolute left-0 hidden" htmlFor="slide2"><span className="material-symbols-outlined">chevron_left</span></label>
                                    <label className="pointer-events-auto w-10 h-10 rounded-full bg-white/80 hover:bg-white text-gray-800 flex items-center justify-center shadow-md cursor-pointer transition-transform hover:scale-110 slide-4-prev absolute left-0 hidden" htmlFor="slide3"><span className="material-symbols-outlined">chevron_left</span></label>
                                    <label className="pointer-events-auto w-10 h-10 rounded-full bg-white/80 hover:bg-white text-gray-800 flex items-center justify-center shadow-md cursor-pointer transition-transform hover:scale-110 slide-5-prev absolute left-0 hidden" htmlFor="slide4"><span className="material-symbols-outlined">chevron_left</span></label>
                                    <label className="pointer-events-auto w-10 h-10 rounded-full bg-white/80 hover:bg-white text-gray-800 flex items-center justify-center shadow-md cursor-pointer transition-transform hover:scale-110 slide-1-next absolute right-0" htmlFor="slide2"><span className="material-symbols-outlined">chevron_right</span></label>
                                    <label className="pointer-events-auto w-10 h-10 rounded-full bg-white/80 hover:bg-white text-gray-800 flex items-center justify-center shadow-md cursor-pointer transition-transform hover:scale-110 slide-2-next absolute right-0 hidden" htmlFor="slide3"><span className="material-symbols-outlined">chevron_right</span></label>
                                    <label className="pointer-events-auto w-10 h-10 rounded-full bg-white/80 hover:bg-white text-gray-800 flex items-center justify-center shadow-md cursor-pointer transition-transform hover:scale-110 slide-3-next absolute right-0 hidden" htmlFor="slide4"><span className="material-symbols-outlined">chevron_right</span></label>
                                    <label className="pointer-events-auto w-10 h-10 rounded-full bg-white/80 hover:bg-white text-gray-800 flex items-center justify-center shadow-md cursor-pointer transition-transform hover:scale-110 slide-4-next absolute right-0 hidden" htmlFor="slide5"><span className="material-symbols-outlined">chevron_right</span></label>
                                    <label className="pointer-events-auto w-10 h-10 rounded-full bg-white/80 hover:bg-white text-gray-800 flex items-center justify-center shadow-md cursor-pointer transition-transform hover:scale-110 slide-5-next absolute right-0 hidden" htmlFor="slide1"><span className="material-symbols-outlined">chevron_right</span></label>
                                </div>
                                <div className="absolute bottom-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px]">zoom_in</span> Click to zoom
                                </div>
                            </div>

                            {/* Thumbnails */}
                            <div className="thumbnails flex gap-3 overflow-x-auto pb-2 no-scrollbar px-1">
                                <label className="cursor-pointer w-20 aspect-[3/4] rounded-md overflow-hidden border-2 border-transparent hover:border-gray-300 transition-all opacity-70 hover:opacity-100" htmlFor="slide1">
                                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBt310sulxDC-8yrm8bCWOUEEfau_JAVIcnBRCOb0eOFqKxDounQubrlQHLc7AmL1ZDnmWiBf7hj-7Jz79WWdHHwjA6zPdVSTBKSuh-JVWAWyPKdeeo37oa0-xV-Sv4bxb4otcZhOzNmuMdg1O100MElvRC1im8nWQcbXb3JWh0aMWWv-sKGv3OTzpNVuj3mxt98MtljYIvG46fRdyJMrem5v9lMCp7E6uxEKNntVUzDnuYhZfvM0Dfxw9grOUyWneeToQ-TKqV_vQ')" }}></div>
                                </label>
                                <label className="cursor-pointer w-20 aspect-[3/4] rounded-md overflow-hidden border-2 border-transparent hover:border-gray-300 transition-all opacity-70 hover:opacity-100" htmlFor="slide2">
                                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSYqL4EchNTPIUpaus5X4hwnrmYSCZY3gqoIS3UBtr6y-JBB0kwWWizMHQrcze0jaAAglHPAytZUNyQFSKAwKhzeEQORzo6e039xintn_Yfdii5eCgEDcgUmVfvnBOuyNKGKSJEkM6_kRD2sfCEkzZkN5N-UNZLXgh8g7VwSksQsExUhQWtOcpLp2OovPTiYZeWyJ75cGdey8_qavLfhC7trE5r9Z26g2_TATGIrxQzYHRp-LnL4nsCZbbVSkf0OkbkG9yNUSVZdU')" }}></div>
                                </label>
                                <label className="cursor-pointer w-20 aspect-[3/4] rounded-md overflow-hidden border-2 border-transparent hover:border-gray-300 transition-all opacity-70 hover:opacity-100" htmlFor="slide3">
                                    <div className="w-full h-full bg-cover bg-top" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCUhfCr-UDYoR6NLnNsDZFtVyt-2qgInfCJXhmBXp_xSQB5sohmJb1n_6s_-RMYqBFxL331zkJxLgCSlTgk0Ve4GETN-qFwrjr9J0wEsfnVFjiMn4ubv6A-zP1ZTRB3C6gPg4vF806JbOS9a3EuBcB7GxjfIgOfa1Jv1UjjIA51yv22MzDgaXyjmQQVBYdZtw7SgCRpEjKpr_G9hF6g-ljaEEbLm8an3tHrIEhRLhtotJhpoDAiK6Pvyzv1EgBXNXkEMpEA9NzLTXk')" }}></div>
                                </label>
                                <label className="cursor-pointer w-20 aspect-[3/4] rounded-md overflow-hidden border-2 border-transparent hover:border-gray-300 transition-all opacity-70 hover:opacity-100" htmlFor="slide4">
                                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-RwXf_OfFBdSa4uE7uo_a8UbW5wKtiyxqdl3dCCnaGOqFA6Ws_FHVPTdQ10jdO9dvCxFp4Jw6zBlMme8QMPI1x2sR6fPNOEWKUL9Io8OUpXYhbDt8p-GCSWlSWBtm91p89ATyv1XcYErMYbAYCXFA4tn6BrA2tIIn-blB3jF1f8bmL0WolJ1CrW7CGmobD-3OgA72lerdWmhDnSGRGoZLRuH4imWsbFcNM16_EUheefn2MLqKwOp9fYXDbrwICf_qjLEyK66HMR4')" }}></div>
                                </label>
                                <label className="cursor-pointer w-20 aspect-[3/4] rounded-md overflow-hidden border-2 border-transparent hover:border-gray-300 transition-all opacity-70 hover:opacity-100" htmlFor="slide5">
                                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCNnQPeW8memx-LVR-Rvjb4uPVFQhlVDoHILNn-J56uMUiZRmlsDDU6RELwPlcO0l2IEvaKrtrOmbT8Tbal2TTy2whNbGeNUkzSIT3V1HwBDymBNm1iIzLZQJCRgE2e7htW-UjAIpfVYgOyzOyGPwYjcg7pGBgGX60ewvD2NpaxqwXLBE0kQrXtU5AZvqwwptgQF8iHki8_4XwBWgVGDbc33nSIBv-oQsJGSRuiJl6d3rVl0KUOLQNoApn7HRW-ON-ZxZewroRBGHg')" }}></div>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Product Details Side */}
                    <div className="lg:col-span-5 relative">
                        <div className="sticky top-28 flex flex-col gap-6">
                            <nav className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                                <Link className="hover:text-primary transition-colors" href="/">Home</Link>
                                <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                                <Link className="hover:text-primary transition-colors" href="/shop">Clothing</Link>
                                <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                                <Link className="hover:text-primary transition-colors" href="/shop">Dresses</Link>
                                <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                                <span className="text-[#1b0d10] dark:text-white">Maxi</span>
                            </nav>
                            <div className="border-b border-[#f3e7e9] dark:border-[#3a2024] pb-6">
                                <div className="flex justify-between items-start gap-4">
                                    <h1 className="text-3xl lg:text-4xl font-extrabold text-[#1b0d10] dark:text-white leading-tight">The Bohemian Maxi Dress</h1>
                                    <button className="text-gray-400 hover:text-primary transition-colors p-1">
                                        <span className="material-symbols-outlined">favorite</span>
                                    </button>
                                </div>
                                <div className="flex items-center gap-3 mt-4">
                                    <span className="text-2xl font-bold text-primary">£120.00</span>
                                    <span className="text-sm text-gray-500 line-through">£185.00</span>
                                    <span className="text-xs font-bold text-white bg-primary px-2 py-0.5 rounded">SAVE 35%</span>
                                </div>
                                <p className="mt-4 text-base text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                                    Flowing silhouette with floral print. Featuring a V-neckline, long sleeves with elastic cuffs, and a ruffled hem. Perfect for your next getaway.
                                </p>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <div className="flex justify-between mb-3">
                                        <span className="text-sm font-bold uppercase tracking-wider text-[#1b0d10] dark:text-gray-200">Color</span>
                                        <span className="text-sm text-gray-500">Red Pattern</span>
                                    </div>
                                    <div className="flex gap-3">
                                        <button aria-label="Select Red Pattern" className="w-10 h-10 rounded-full bg-[#d41132] border-2 border-white ring-2 ring-primary focus:outline-none"></button>
                                        <button aria-label="Select Blue Pattern" className="w-10 h-10 rounded-full bg-[#1e3a8a] border-2 border-transparent hover:border-white ring-2 ring-transparent hover:ring-gray-300 focus:outline-none transition-all"></button>
                                        <button aria-label="Select Green Pattern" className="w-10 h-10 rounded-full bg-[#10b981] border-2 border-transparent hover:border-white ring-2 ring-transparent hover:ring-gray-300 focus:outline-none transition-all"></button>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-3">
                                        <span className="text-sm font-bold uppercase tracking-wider text-[#1b0d10] dark:text-gray-200">Size</span>
                                        <Link className="text-xs font-medium underline text-gray-500 hover:text-primary" href="/size-guide">Size Guide</Link>
                                    </div>
                                    <div className="grid grid-cols-4 gap-2">
                                        <button className="h-12 border border-[#f3e7e9] dark:border-[#3a2024] rounded-lg text-sm font-bold text-gray-400 cursor-not-allowed bg-gray-50 dark:bg-transparent" disabled>XS</button>
                                        <button className="h-12 border border-[#f3e7e9] dark:border-[#3a2024] rounded-lg text-sm font-bold text-[#1b0d10] dark:text-white hover:border-primary dark:hover:border-primary transition-colors">S</button>
                                        <button className="h-12 border-2 border-primary rounded-lg text-sm font-bold text-primary bg-primary/5">M</button>
                                        <button className="h-12 border border-[#f3e7e9] dark:border-[#3a2024] rounded-lg text-sm font-bold text-[#1b0d10] dark:text-white hover:border-primary dark:hover:border-primary transition-colors">L</button>
                                    </div>
                                </div>
                                <div className="pt-4">
                                    <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-100 dark:border-amber-900/30 rounded-lg p-3 mb-4 flex flex-col gap-2">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
                                                <span className="material-symbols-outlined text-[20px] symbol-filled">warning</span>
                                                <span className="text-sm font-bold">Limited Stock</span>
                                            </div>
                                            <span className="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/40 px-2 py-0.5 rounded">Only 3 left</span>
                                        </div>
                                        <div className="w-full bg-amber-100 dark:bg-amber-900/20 rounded-full h-1.5">
                                            <div className="bg-amber-500 h-1.5 rounded-full w-[20%]"></div>
                                        </div>
                                        <p className="text-xs text-amber-600 dark:text-amber-400/80">
                                            Hurry! This item is selling fast.
                                        </p>
                                    </div>
                                    <button className="w-full bg-primary hover:bg-[#b00e29] text-white h-14 rounded-lg font-bold text-base uppercase tracking-widest transition-all transform active:scale-[0.98] flex items-center justify-center gap-3 shadow-lg shadow-primary/20">
                                        <span className="material-symbols-outlined">shopping_bag</span>
                                        Add to Cart
                                    </button>
                                    <div className="flex items-center justify-center gap-2 mt-3 text-xs text-gray-500">
                                        <span className="material-symbols-outlined text-[16px] text-green-600">check_circle</span>
                                        <span>Ready to ship immediately</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 border-t border-[#f3e7e9] dark:border-[#3a2024]">
                                <details className="group py-4 border-b border-[#f3e7e9] dark:border-[#3a2024] cursor-pointer">
                                    <summary className="flex items-center justify-between font-bold text-sm uppercase tracking-wide text-[#1b0d10] dark:text-gray-200 list-none">
                                        Description
                                        <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                                    </summary>
                                    <div className="pt-3 text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                                        <p>Embrace the free-spirited vibe with our Bohemian Maxi Dress. Crafted from lightweight viscose, this dress moves with you.</p>
                                        <ul className="list-disc list-inside mt-2 space-y-1">
                                            <li>V-neckline with tie detail</li>
                                            <li>Elasticated waist for comfort</li>
                                            <li>Tiered skirt design</li>
                                            <li>Model is 5'9" and wears size S</li>
                                        </ul>
                                    </div>
                                </details>
                                <details className="group py-4 border-b border-[#f3e7e9] dark:border-[#3a2024] cursor-pointer">
                                    <summary className="flex items-center justify-between font-bold text-sm uppercase tracking-wide text-[#1b0d10] dark:text-gray-200 list-none">
                                        Composition & Care
                                        <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                                    </summary>
                                    <div className="pt-3 text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                                        <p>100% Viscose (LENZING™ ECOVERO™).</p>
                                        <p className="mt-2">Machine wash cold gentle cycle. Do not bleach. Line dry. Cool iron if needed.</p>
                                    </div>
                                </details>
                                <details className="group py-4 border-b border-[#f3e7e9] dark:border-[#3a2024] cursor-pointer">
                                    <summary className="flex items-center justify-between font-bold text-sm uppercase tracking-wide text-[#1b0d10] dark:text-gray-200 list-none">
                                        Shipping & Returns
                                        <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                                    </summary>
                                    <div className="pt-3 text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                                        <p>Free standard shipping on orders over £150. Returns accepted within 30 days of purchase. Items must be unworn and with original tags.</p>
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reviews Section */}
                <section className="mt-16 lg:mt-24 pt-10 border-t border-[#f3e7e9] dark:border-[#3a2024]">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
                        <div className="lg:w-1/3">
                            <h3 className="text-2xl font-bold text-[#1b0d10] dark:text-white mb-6">Customer Reviews</h3>
                            <div className="flex items-end gap-4 mb-4">
                                <span className="text-6xl font-bold text-[#1b0d10] dark:text-white leading-none">4.8</span>
                                <div className="mb-2">
                                    <div className="flex text-primary text-xl gap-0.5">
                                        <span className="material-symbols-outlined symbol-filled">star</span>
                                        <span className="material-symbols-outlined symbol-filled">star</span>
                                        <span className="material-symbols-outlined symbol-filled">star</span>
                                        <span className="material-symbols-outlined symbol-filled">star</span>
                                        <span className="material-symbols-outlined symbol-filled">star_half</span>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-1">Based on 128 reviews</p>
                                </div>
                            </div>
                            <div className="space-y-3 mb-8">
                                {/* Rating Bars */}
                                <div className="flex items-center gap-3 text-sm">
                                    <span className="w-3 text-right text-gray-600 dark:text-gray-400">5</span>
                                    <span className="material-symbols-outlined text-xs text-primary symbol-filled">star</span>
                                    <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary w-[80%]"></div>
                                    </div>
                                    <span className="w-8 text-right text-gray-500">80%</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <span className="w-3 text-right text-gray-600 dark:text-gray-400">4</span>
                                    <span className="material-symbols-outlined text-xs text-primary symbol-filled">star</span>
                                    <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary w-[15%]"></div>
                                    </div>
                                    <span className="w-8 text-right text-gray-500">15%</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <span className="w-3 text-right text-gray-600 dark:text-gray-400">3</span>
                                    <span className="material-symbols-outlined text-xs text-primary symbol-filled">star</span>
                                    <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary w-[3%]"></div>
                                    </div>
                                    <span className="w-8 text-right text-gray-500">3%</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <span className="w-3 text-right text-gray-600 dark:text-gray-400">2</span>
                                    <span className="material-symbols-outlined text-xs text-primary symbol-filled">star</span>
                                    <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary w-[1%]"></div>
                                    </div>
                                    <span className="w-8 text-right text-gray-500">1%</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <span className="w-3 text-right text-gray-600 dark:text-gray-400">1</span>
                                    <span className="material-symbols-outlined text-xs text-primary symbol-filled">star</span>
                                    <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary w-[1%]"></div>
                                    </div>
                                    <span className="w-8 text-right text-gray-500">1%</span>
                                </div>
                            </div>
                            <button className="w-full bg-[#1b0d10] hover:bg-[#381c22] dark:bg-white dark:hover:bg-gray-200 text-white dark:text-[#1b0d10] h-12 rounded-lg font-bold uppercase tracking-wider text-sm transition-colors flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined text-[18px]">edit</span>
                                Write a Review
                            </button>
                        </div>
                        <div className="lg:w-2/3">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-[#f3e7e9] dark:border-[#3a2024] pb-4">
                                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
                                    <span className="text-sm font-bold text-[#1b0d10] dark:text-gray-200 whitespace-nowrap">Filter:</span>
                                    <button className="px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-600 text-xs font-bold hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-colors whitespace-nowrap text-gray-600 dark:text-gray-400">With Images (24)</button>
                                    <button className="px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-600 text-xs font-bold hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-colors whitespace-nowrap text-gray-600 dark:text-gray-400">Verified Buyers</button>
                                    <button className="px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-600 text-xs font-bold hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-colors whitespace-nowrap text-gray-600 dark:text-gray-400">5 Stars</button>
                                </div>
                            </div>
                            {/* Reviews List */}
                            <div className="space-y-8">
                                <div className="border-b border-[#f3e7e9] dark:border-[#3a2024] pb-8 last:border-0 animate-fade-in">
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">SJ</div>
                                            <div>
                                                <h5 className="text-sm font-bold text-[#1b0d10] dark:text-white">Sarah Jenkins</h5>
                                                <div className="flex items-center gap-2">
                                                    <div className="flex text-primary text-[14px]">
                                                        <span className="material-symbols-outlined symbol-filled">star</span>
                                                        <span className="material-symbols-outlined symbol-filled">star</span>
                                                        <span className="material-symbols-outlined symbol-filled">star</span>
                                                        <span className="material-symbols-outlined symbol-filled">star</span>
                                                        <span className="material-symbols-outlined symbol-filled">star</span>
                                                    </div>
                                                    <span className="text-xs text-gray-400">2 days ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="font-bold text-[#1b0d10] dark:text-white mt-2 mb-1">Absolutely stunning dress!</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">The fabric is so soft and the fit is perfect. I wore it to a wedding and got so many compliments. Highly recommend sizing down if you are in between sizes as it's quite flowy.</p>
                                </div>
                                <div className="border-b border-[#f3e7e9] dark:border-[#3a2024] pb-8 last:border-0">
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center justify-center font-bold text-sm">MD</div>
                                            <div>
                                                <h5 className="text-sm font-bold text-[#1b0d10] dark:text-white">Maria D.</h5>
                                                <div className="flex items-center gap-2">
                                                    <div className="flex text-primary text-[14px]">
                                                        <span className="material-symbols-outlined symbol-filled">star</span>
                                                        <span className="material-symbols-outlined symbol-filled">star</span>
                                                        <span className="material-symbols-outlined symbol-filled">star</span>
                                                        <span className="material-symbols-outlined symbol-filled">star</span>
                                                        <span className="material-symbols-outlined text-gray-300">star</span>
                                                    </div>
                                                    <span className="text-xs text-gray-400">1 week ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="font-bold text-[#1b0d10] dark:text-white mt-2 mb-1">Great summer dress</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">Love the pattern and the cut. It is a bit longer than I expected (I'm 5'4"), so I might need to get it hemmed or wear high wedges. Quality is great for the price.</p>
                                </div>
                                <div className="border-b border-[#f3e7e9] dark:border-[#3a2024] pb-8 last:border-0 pl-16">
                                    {/* Placeholder for reply or additional structure - omitted for brevity */}
                                    {/* Actually I should check if I missed anything important */}
                                </div>
                            </div>
                            <button className="w-full mt-8 py-3.5 border border-[#f3e7e9] dark:border-[#3a2024] text-sm font-bold uppercase tracking-wider text-[#1b0d10] dark:text-white hover:bg-gray-50 dark:hover:bg-[#3a2024] transition-colors rounded-lg flex items-center justify-center gap-2 group">
                                Load More Reviews
                                <span className="material-symbols-outlined group-hover:translate-y-0.5 transition-transform">expand_more</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Related Products */}
                <section className="mt-20 lg:mt-32 border-t border-[#f3e7e9] dark:border-[#3a2024] pt-12">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl font-bold text-[#1b0d10] dark:text-white">Related Products</h3>
                        <div className="flex gap-2">
                            <button className="w-10 h-10 rounded-full border border-[#f3e7e9] dark:border-[#3a2024] flex items-center justify-center hover:bg-[#f3e7e9] dark:hover:bg-[#3a2024] transition-colors">
                                <span className="material-symbols-outlined">arrow_back</span>
                            </button>
                            <button className="w-10 h-10 rounded-full border border-[#f3e7e9] dark:border-[#3a2024] flex items-center justify-center hover:bg-[#f3e7e9] dark:hover:bg-[#3a2024] transition-colors">
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                    {/* Related Products Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
                        <Link href="/product/detail" className="group cursor-pointer">
                            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
                                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Floral dress in field" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCUhfCr-UDYoR6NLnNsDZFtVyt-2qgInfCJXhmBXp_xSQB5sohmJb1n_6s_-RMYqBFxL331zkJxLgCSlTgk0Ve4GETN-qFwrjr9J0wEsfnVFjiMn4ubv6A-zP1ZTRB3C6gPg4vF806JbOS9a3EuBcB7GxjfIgOfa1Jv1UjjIA51yv22MzDgaXyjmQQVBYdZtw7SgCRpEjKpr_G9hF6g-ljaEEbLm8an3tHrIEhRLhtotJhpoDAiK6Pvyzv1EgBXNXkEMpEA9NzLTXk')" }}></div>
                                <button className="absolute bottom-3 right-3 w-8 h-8 bg-white dark:bg-background-dark rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                    <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                                </button>
                            </div>
                            <div className="mt-3">
                                <h4 className="text-sm font-medium text-[#1b0d10] dark:text-gray-200 truncate">Garden Party Midi</h4>
                                <p className="text-sm font-bold text-[#1b0d10] dark:text-white mt-1">£110.00</p>
                            </div>
                        </Link>
                        <Link href="/product/detail" className="group cursor-pointer">
                            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
                                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Floral dress side view" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCNnQPeW8memx-LVR-Rvjb4uPVFQhlVDoHILNn-J56uMUiZRmlsDDU6RELwPlcO0l2IEvaKrtrOmbT8Tbal2TTy2whNbGeNUkzSIT3V1HwBDymBNm1iIzLZQJCRgE2e7htW-UjAIpfVYgOyzOyGPwYjcg7pGBgGX60ewvD2NpaxqwXLBE0kQrXtU5AZvqwwptgQF8iHki8_4XwBWgVGDbc33nSIBv-oQsJGSRuiJl6d3rVl0KUOLQNoApn7HRW-ON-ZxZewroRBGHg')" }}></div>
                                <div className="absolute top-2 left-2 bg-[#d41132] text-white text-[10px] font-bold px-2 py-1 rounded">SALE</div>
                                <button className="absolute bottom-3 right-3 w-8 h-8 bg-white dark:bg-background-dark rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                    <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                                </button>
                            </div>
                            <div className="mt-3">
                                <h4 className="text-sm font-medium text-[#1b0d10] dark:text-gray-200 truncate">Summer Breeze Tunic</h4>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-sm font-bold text-primary">£85.00</span>
                                    <span className="text-xs text-gray-500 line-through">£110.00</span>
                                </div>
                            </div>
                        </Link>
                        <Link href="/product/detail" className="group cursor-pointer">
                            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
                                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Floral dress back view" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-RwXf_OfFBdSa4uE7uo_a8UbW5wKtiyxqdl3dCCnaGOqFA6Ws_FHVPTdQ10jdO9dvCxFp4Jw6zBlMme8QMPI1x2sR6fPNOEWKUL9Io8OUpXYhbDt8p-GCSWlSWBtm91p89ATyv1XcYErMYbAYCXFA4tn6BrA2tIIn-blB3jF1f8bmL0WolJ1CrW7CGmobD-3OgA72lerdWmhDnSGRGoZLRuH4imWsbFcNM16_EUheefn2MLqKwOp9fYXDbrwICf_qjLEyK66HMR4')" }}></div>
                                <button className="absolute bottom-3 right-3 w-8 h-8 bg-white dark:bg-background-dark rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                    <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                                </button>
                            </div>
                            <div className="mt-3">
                                <h4 className="text-sm font-medium text-[#1b0d10] dark:text-gray-200 truncate">Evening Silk Slip</h4>
                                <p className="text-sm font-bold text-[#1b0d10] dark:text-white mt-1">£145.00</p>
                            </div>
                        </Link>
                        <Link href="/product/detail" className="group cursor-pointer">
                            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
                                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Main dress image" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBt310sulxDC-8yrm8bCWOUEEfau_JAVIcnBRCOb0eOFqKxDounQubrlQHLc7AmL1ZDnmWiBf7hj-7Jz79WWdHHwjA6zPdVSTBKSuh-JVWAWyPKdeeo37oa0-xV-Sv4bxb4otcZhOzNmuMdg1O100MElvRC1im8nWQcbXb3JWh0aMWWv-sKGv3OTzpNVuj3mxt98MtljYIvG46fRdyJMrem5v9lMCp7E6uxEKNntVUzDnuYhZfvM0Dfxw9grOUyWneeToQ-TKqV_vQ')" }}></div>
                                <div className="absolute top-2 left-2 bg-[#1b0d10] dark:bg-white dark:text-[#1b0d10] text-white text-[10px] font-bold px-2 py-1 rounded">BESTSELLER</div>
                                <button className="absolute bottom-3 right-3 w-8 h-8 bg-white dark:bg-background-dark rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                    <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                                </button>
                            </div>
                            <div className="mt-3">
                                <h4 className="text-sm font-medium text-[#1b0d10] dark:text-gray-200 truncate">Boho Chic Wrap</h4>
                                <p className="text-sm font-bold text-[#1b0d10] dark:text-white mt-1">£130.00</p>
                            </div>
                        </Link>
                    </div>
                </section>
            </main>

            {/* Footer (Reused from Shop Page for consistency) */}
            <footer className="bg-white dark:bg-[#15192b] border-t border-[#e7e9f3] dark:border-gray-800 pt-16 pb-8">
                <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                        {/* Brand Column */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2 text-primary mb-2">
                                <span className="material-symbols-outlined text-[24px] filled">diamond</span>
                                <span className="text-xl font-bold text-text-main dark:text-white">Toi & Moi</span>
                            </div>
                            <p className="text-text-muted text-sm leading-relaxed">
                                Curated fashion for the modern individual. Quality, sustainability, and timeless style.
                            </p>
                        </div>
                        {/* Links Column 1 */}
                        <div>
                            <h4 className="font-bold text-text-main dark:text-white mb-4">Shop</h4>
                            <ul className="flex flex-col gap-2 text-sm text-text-muted dark:text-gray-400">
                                <li><Link href="/new-arrivals" className="hover:text-primary transition-colors">New Arrivals</Link></li>
                                <li><Link href="/clothing" className="hover:text-primary transition-colors">Dresses</Link></li>
                            </ul>
                        </div>
                        {/* Links Column 2 */}
                        <div>
                            <h4 className="font-bold text-text-main dark:text-white mb-4">Support</h4>
                            <ul className="flex flex-col gap-2 text-sm text-text-muted dark:text-gray-400">
                                <li><Link href="/shipping-returns" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
                                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-[#e7e9f3] dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted">
                        <p>© 2024 Toi & Moi. All rights reserved.</p>
                        <div className="flex gap-6">
                            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
