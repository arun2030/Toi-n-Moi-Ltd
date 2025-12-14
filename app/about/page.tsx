/* eslint-disable @next/next/no-img-element */
'use client';

export default function AboutPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-text-main dark:text-white transition-colors duration-200">
            {/* Scoped Styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .material-symbols-outlined {
                    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
                }
            `}} />

            <div className="layout-container flex h-full grow flex-col">
                <div className="px-5 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-[1024px] flex-1">
                        <div className="@container mb-12">
                            <div className="flex flex-col gap-6 py-10 @[480px]:gap-8 @[864px]:flex-row items-center">
                                <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-1/2 shadow-lg" data-alt="Elegant fashion model in pink dress looking away" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA1VNHFs3FqgH77l9m-BWX6T58BnwUg-bBs4bAqzlpMGG2pTp1nGA3xi-haIMsVcVhbpE-P5ZTx57kmsJwDjJg0Wz3_Ln4dAamOpfmzRT9qDFjAqI_28MPb_CGXPOEBDhW5B-QZc3roAEGcumUT2zQxFVU0u2Oa2GsPysMcpBZ6D7ydXJSfb3R6YQV3KRjrc_Hr8cF0xiewocAg028qJSFJinabEOtbe7Xj42qHL8-7lG3qneaocU8UtXl6Fj9T7N3qKmeZT7geBBo")' }}></div>
                                <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center @[864px]:w-1/2 @[864px]:pl-10">
                                    <div className="flex flex-col gap-4 text-left">
                                        <span className="text-primary font-bold uppercase tracking-widest text-sm">Our Essence</span>
                                        <h1 className="text-text-main dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                                            Crafting Elegance for You &amp; Me
                                        </h1>
                                        <h2 className="text-text-muted dark:text-gray-300 text-base font-normal leading-relaxed @[480px]:text-lg">
                                            We believe in fashion that tells a story. Discover the origins of toi &amp; moi and our journey to sustainable luxury. Every piece is a conversation between the artisan and the wearer.
                                        </h2>
                                    </div>
                                    <div className="flex gap-4">
                                        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary hover:bg-primary/90 transition-colors text-white text-base font-bold leading-normal tracking-[0.015em] shadow-md shadow-primary/20">
                                            <span className="truncate">Explore Our Story</span>
                                        </button>
                                        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-transparent border border-primary text-primary hover:bg-primary/5 transition-colors text-base font-bold leading-normal tracking-[0.015em]">
                                            <span className="truncate">View Collection</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-12 px-4 md:px-16 text-center border-t border-surface-light dark:border-gray-800">
                            <span className="material-symbols-outlined text-4xl text-primary mb-4">format_quote</span>
                            <p className="text-text-main dark:text-white text-xl md:text-2xl font-medium leading-relaxed italic max-w-3xl mx-auto">
                                &quot;Welcome to the world of toi &amp; moi. Born from a desire to bridge the gap between high-end couture and everyday wear, we create pieces that celebrate individuality and connection.&quot;
                            </p>
                            <div className="mt-6 flex flex-col items-center">
                                <div className="size-12 rounded-full bg-cover bg-center mb-2" data-alt="Portrait of the founder" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB7EUPrZi1NWW55yw67SLePsy-21i9N_tXPbdlm0CPVQ2lfWq53q2al0uA7LPpgeIyUksCS7COlKys0RWC8GpxokPfo9tslORhuHUXRJhwVtijroTKS0Gw9v7ZyioazDycnK_EqauzaXWj1tWkbzCHKd28i1-Sacq81YNuX65C7x7GPyx_3J6vbHZmo2aficeVOclnEtlCmidszBv1xXZEi8ygOybNYs5rrmOwORl6uZg4c_kBbBr7eeQPIKapRNkVu1ypT-nFChOg")' }}></div>
                                <span className="font-bold text-sm text-text-main dark:text-white">Sophie Leclarc</span>
                                <span className="text-xs text-text-muted uppercase tracking-wide">Founder &amp; Creative Director</span>
                            </div>
                        </div>
                        <div className="py-16 @container">
                            <div className="flex flex-col gap-10">
                                <div className="flex flex-col gap-4 text-center items-center">
                                    <h2 className="text-text-main dark:text-white tracking-tight text-3xl font-bold leading-tight @[480px]:text-4xl">
                                        Our Core Values
                                    </h2>
                                    <p className="text-text-muted dark:text-gray-400 text-base font-normal leading-normal max-w-[600px]">
                                        Fashion with a conscience. We are committed to authenticity, quality, and inclusivity in every stitch.
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="flex flex-col items-center text-center gap-4 rounded-xl border border-surface-light dark:border-gray-800 bg-white dark:bg-[#2d1b26] p-8 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined text-[28px]">verified</span>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-text-main dark:text-white text-lg font-bold leading-tight">Authenticity</h3>
                                            <p className="text-text-muted dark:text-gray-400 text-sm font-normal leading-relaxed">
                                                Staying true to our roots and design philosophy. We don&apos;t chase trends; we create timeless style.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center text-center gap-4 rounded-xl border border-surface-light dark:border-gray-800 bg-white dark:bg-[#2d1b26] p-8 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined text-[28px]">diamond</span>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-text-main dark:text-white text-lg font-bold leading-tight">Quality</h3>
                                            <p className="text-text-muted dark:text-gray-400 text-sm font-normal leading-relaxed">
                                                Materials that last a lifetime, not just a season. Meticulously sourced fabrics for the perfect fit.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center text-center gap-4 rounded-xl border border-surface-light dark:border-gray-800 bg-white dark:bg-[#2d1b26] p-8 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined text-[28px]">diversity_1</span>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-text-main dark:text-white text-lg font-bold leading-tight">Inclusivity</h3>
                                            <p className="text-text-muted dark:text-gray-400 text-sm font-normal leading-relaxed">
                                                Fashion designed for every body and every story. Celebrating diversity in every campaign.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-12 bg-white dark:bg-[#2d1b26]/30 rounded-2xl p-6 md:p-10 my-8">
                            <h2 className="text-text-main dark:text-white text-3xl font-bold leading-tight mb-8 text-center">Our Journey</h2>
                            <div className="grid grid-cols-[40px_1fr] gap-x-4 max-w-2xl mx-auto">
                                <div className="flex flex-col items-center gap-1 pt-2">
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 border-2 border-white shadow-md z-10" data-alt="Sketch of first design" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC9xbbDF_yGFRjk12opIMtAo2NqALvJU8LMrJ9-3i9NZEVyzPtaxAQ7dXe0mPQ_9O427bI-kLxQ7m9MpAsdKk-DcB11so3v1_YuRHcwM2XXwN5oTGCfAdiuVT4DUDgASICUAmH_OU1Xu37l9UZ3iKani2Ca6ofBDVstgv67xbFP4HdvhHmcC7m4hqpaKpelKBRwSOe2ErCvjJQrhvD0gwShhhsIkrL65r6Hn9axudpC2_j0QN7pTd_qPjsYmZ3ByCPs4mJ7wUFRIG4")' }}></div>
                                    <div className="w-[2px] bg-surface-light dark:bg-[#2d1b26] h-full grow"></div>
                                </div>
                                <div className="flex flex-1 flex-col pb-8 pt-2 pl-4">
                                    <p className="text-primary font-bold text-sm">2015</p>
                                    <p className="text-text-main dark:text-white text-lg font-bold leading-tight">The Spark in Paris</p>
                                    <p className="text-text-muted dark:text-gray-400 text-sm font-normal mt-1">
                                        An idea born in a small atelier in Le Marais, sketching the first lines of what would become a movement.
                                    </p>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <div className="w-[2px] bg-surface-light dark:bg-[#2d1b26] h-4"></div>
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 border-2 border-white shadow-md z-10" data-alt="Fashion runway show" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAafkjP5IZnQdZtbEVDeIrROdSq9Lr-DPcD49oI907T2qWzxTnv69IfQ3hJcwHrgGGXfUdfDe7EMub1axxTPVqjZXOVAzLuWYuqeM8WyuTTdosfh1-V48JkoX4qsfxsKYYzJ6JI9M8-axEqZRi5HM09ItJlNtWjy2HrAHC5DOiXDgLbZyIRhuqlSEB4WwSI-M7CFZtD6f2V067WD6ng0UuXjuDOiJN0aM1lrZqUC-2-ioeEHgnVy3_z-AUbjJcWOjLuptB1ZIFSwe4")' }}></div>
                                    <div className="w-[2px] bg-surface-light dark:bg-[#2d1b26] h-full grow"></div>
                                </div>
                                <div className="flex flex-1 flex-col pb-8 pl-4">
                                    <p className="text-primary font-bold text-sm">2018</p>
                                    <p className="text-text-main dark:text-white text-lg font-bold leading-tight">First Collection Launch</p>
                                    <p className="text-text-muted dark:text-gray-400 text-sm font-normal mt-1">
                                        New York City welcomed our debut collection with open arms, featuring our signature minimalist coats.
                                    </p>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <div className="w-[2px] bg-surface-light dark:bg-[#2d1b26] h-4"></div>
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 border-2 border-white shadow-md z-10" data-alt="Green leaf texture" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDtA2wBwIYRSX0lrbl1prSItNYvm7pEOMMYRJOBKWjlqzk19lTGQNypF5KJ83dgSCUilpIwUuRYleHr_jWgr5_6ksGgPcPbm9UG5DJEeq7j-jJOSlrLe7iQ3GXYgPEGFdRcPf4XyifTYxMOixorMxyB5LuMZfNVzBoai8RkTC6Lch8XLMmxRd-9yyGubLjYdBFrWEv6PK_7Z6kwTeetoh28_HaWH_pKeY18Ygf7iLfinvQyevtz471E6GcOzE8K1CAt9HA35nCxYaI")' }}></div>
                                    <div className="w-[2px] bg-surface-light dark:bg-[#2d1b26] h-full grow"></div>
                                </div>
                                <div className="flex flex-1 flex-col pb-8 pl-4">
                                    <p className="text-primary font-bold text-sm">2020</p>
                                    <p className="text-text-main dark:text-white text-lg font-bold leading-tight">The Sustainable Shift</p>
                                    <p className="text-text-muted dark:text-gray-400 text-sm font-normal mt-1">
                                        We committed to 100% eco-friendly packaging and ethically sourced cotton for all basics.
                                    </p>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <div className="w-[2px] bg-surface-light dark:bg-[#2d1b26] h-4"></div>
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 border-2 border-white shadow-md z-10" data-alt="Globe illustration" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDzURhlTWZSX0gKkpm2NrF1BbB1SVeIVY3sOsCnCyToNXvTApRrvz42HqESRPJJst4hC4hpA9omZJ1WYJuaSI55ijGjUW9KPc5nGEunXur1nSvL7fjfmAeW4uJYT8KEmMKsxhLeH5ujm-dJLqYvUmw850y2ESQAAc5emG1J4jwFALlFgDONhPKIHKyklVoJY6aWUUQUrRWSz3_Icdl88KPfheelXT3PiDh6oO2tgrbEoPdr2-n2FpeOcw1WOtvG1eVrLfdcWwjl2y4")' }}></div>
                                    <div className="w-[2px] bg-surface-light dark:bg-[#2d1b26] h-2 grow"></div>
                                </div>
                                <div className="flex flex-1 flex-col pl-4">
                                    <p className="text-primary font-bold text-sm">2023</p>
                                    <p className="text-text-main dark:text-white text-lg font-bold leading-tight">Global Expansion</p>
                                    <p className="text-text-muted dark:text-gray-400 text-sm font-normal mt-1">
                                        Opening flagship stores in Tokyo and London, bringing toi &amp; moi to a worldwide audience.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="py-12">
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-surface-light dark:border-gray-800 pb-4">
                                    <div>
                                        <h2 className="text-text-main dark:text-white text-3xl font-bold leading-tight mb-2">Meet the Makers</h2>
                                        <p className="text-text-muted dark:text-gray-400">The creative minds behind the brand.</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    <div className="group flex flex-col gap-3">
                                        <div className="overflow-hidden rounded-lg aspect-[3/4]">
                                            <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Portrait of fashion designer woman" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAjdj1T8VppyCD-tS8ZxRTgE5IVOQu0Ppc3ohjKqboN524EGKKhTMw4mCr0Cmayz8zfauwtyXH2rWGH4Z307GJx1YNoc9XJFEG_2l7lm1i0JGhN-WpH253oyafkNtany2X02r2YhGQ69QtMiukTlCIO4bU1AUL1d4ABdbMGNH7Tnsh3ZGS4LTkJ4R3lWy4Ald5plznl04AV2IpkZZsxwuGu7ydAvnJIkBbRFv7fzS28mxkC6E4v05hFAVgVgBvRSVCjYgxY-G1Gs3M")' }}></div>
                                        </div>
                                        <div>
                                            <h3 className="text-text-main dark:text-white font-bold text-base">Elena Rossi</h3>
                                            <p className="text-text-muted dark:text-gray-400 text-sm">Head of Design</p>
                                        </div>
                                    </div>
                                    <div className="group flex flex-col gap-3">
                                        <div className="overflow-hidden rounded-lg aspect-[3/4]">
                                            <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Portrait of operations manager man" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAHsnKYHIzLVv_1Vd-0URksSRXEEbCwUIVhskkxeWWy2gr-obeS-zjUBGQQjmm9T90WLwilumEJFcmk9yPWpjmjd54WM-c5qNsWPmSPGCoueh9Ju7c90UHMQ3a9Nmdi7H2mDinB01eoKygx3lBPGDsOXrPtMWzU6mRjUkhJJuohPYlfgXANs2c2N5_lvZa2ztg5REn8ydybfPnusjSGbC11yR6wzsjKVR6faQjlUJB7uOKtcjIiGLCOr80RyntQmu9cXg8du1Fse2I")' }}></div>
                                        </div>
                                        <div>
                                            <h3 className="text-text-main dark:text-white font-bold text-base">David Chen</h3>
                                            <p className="text-text-muted dark:text-gray-400 text-sm">Operations Lead</p>
                                        </div>
                                    </div>
                                    <div className="group flex flex-col gap-3">
                                        <div className="overflow-hidden rounded-lg aspect-[3/4]">
                                            <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Portrait of creative director woman" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD1prpkVH5JOfp79QkPrB7bGi8t4hACcL_JJcbtIvj2GNtiaM5g7-2O1BqdQLecQO6b8Y84iIyCIC3QrHAdcFHPqzYQ3S7b3AWzGrJ_adUC0G6_-oWTmqDHN0L9ReJRU_uzpdpAYbBs6NnVl8m--pNi98W161X9VU0uex-dS8re6qHcWhtBwWEgKmRQnaG3J08di-jEn9Gdvpun-GUXq3lrhxXnXRsp-5Vx87CE-uCZ2XXRsOIUhRqG7jfDVsRdZbyGtz6y2jrA4Oc")' }}></div>
                                        </div>
                                        <div>
                                            <h3 className="text-text-main dark:text-white font-bold text-base">Sarah Johnson</h3>
                                            <p className="text-text-muted dark:text-gray-400 text-sm">Sustainability Dir.</p>
                                        </div>
                                    </div>
                                    <div className="group flex flex-col gap-3">
                                        <div className="overflow-hidden rounded-lg aspect-[3/4]">
                                            <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Portrait of marketing specialist man" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBxIKqtk-SWqU3Kg4Z1Q7AXwnCF27DGDZhZOO3eox42ntr4kv2ys6h9J0FU7_gC3RdIcWMaw5hZxFI5X3fRDjMH0Dp3F9eQKPoGjWhdzWJu0cCtENwLN96yKN9I85Z_pbMgIh2WursGS__mR3MGG7-2bwDpXrAE6awq5sDQPoMsEcPZI3oPYEkSFcP598-pHW6aVI4xGKIpojNO0VltIa7XtvvLZdFjhW9nxW1ZwUlNYS2uqWSnsdrnuNr9ZnbGOVqlnfhwWdN4JOw")' }}></div>
                                        </div>
                                        <div>
                                            <h3 className="text-text-main dark:text-white font-bold text-base">Marc Dupont</h3>
                                            <p className="text-text-muted dark:text-gray-400 text-sm">Brand Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-16 border-t border-surface-light dark:border-gray-800">
                            <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                                <div className="flex-1 flex flex-col gap-6">
                                    <div className="flex flex-col gap-4">
                                        <span className="text-primary font-bold uppercase tracking-widest text-sm">Careers</span>
                                        <h2 className="text-text-main dark:text-white text-3xl font-bold leading-tight md:text-4xl">
                                            Create Beauty With Us
                                        </h2>
                                        <p className="text-text-muted dark:text-gray-400 text-lg leading-relaxed">
                                            At toi &amp; moi, we are more than a brand; we are a collective of dreamers, creators, and innovators.
                                            We believe that a great workplace is one where creativity thrives and individuality is celebrated.
                                        </p>
                                        <p className="text-text-main dark:text-gray-300 text-base leading-relaxed">
                                            Join a team that values sustainability, inclusivity, and the art of fashion. We offer competitive benefits,
                                            a creative studio environment in the heart of Paris, and the opportunity to shape the future of retail.
                                        </p>
                                    </div>
                                    <div className="flex gap-4 pt-2">
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary">check_circle</span>
                                            <span className="text-text-main dark:text-white font-medium">Remote Friendly</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary">check_circle</span>
                                            <span className="text-text-main dark:text-white font-medium">Health &amp; Wellness</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary">check_circle</span>
                                            <span className="text-text-main dark:text-white font-medium">Creative Freedom</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 w-full">
                                    <div className="w-full aspect-[4/3] bg-cover bg-center rounded-xl shadow-lg" data-alt="Behind the scenes at a fashion show" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAafkjP5IZnQdZtbEVDeIrROdSq9Lr-DPcD49oI907T2qWzxTnv69IfQ3hJcwHrgGGXfUdfDe7EMub1axxTPVqjZXOVAzLuWYuqeM8WyuTTdosfh1-V48JkoX4qsfxsKYYzJ6JI9M8-axEqZRi5HM09ItJlNtWjy2HrAHC5DOiXDgLbZyIRhuqlSEB4WwSI-M7CFZtD6f2V067WD6ng0UuXjuDOiJN0aM1lrZqUC-2-ioeEHgnVy3_z-AUbjJcWOjLuptB1ZIFSwe4")' }}>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-8">
                                <h3 className="text-text-main dark:text-white text-2xl font-bold">Open Positions</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <a className="group flex flex-col gap-4 rounded-xl border border-surface-light dark:border-gray-800 bg-white dark:bg-[#2d1b26] p-6 transition-all hover:border-primary/50 hover:shadow-lg" href="#">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <span className="inline-block px-2 py-1 rounded bg-surface-light dark:bg-gray-800 text-xs font-bold text-primary mb-2">Design</span>
                                                <h4 className="text-text-main dark:text-white text-xl font-bold group-hover:text-primary transition-colors">Senior Fashion Designer</h4>
                                                <p className="text-text-muted dark:text-gray-400 text-sm">Paris, France · Full-time</p>
                                            </div>
                                            <span className="material-symbols-outlined text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
                                        </div>
                                    </a>
                                    <a className="group flex flex-col gap-4 rounded-xl border border-surface-light dark:border-gray-800 bg-white dark:bg-[#2d1b26] p-6 transition-all hover:border-primary/50 hover:shadow-lg" href="#">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <span className="inline-block px-2 py-1 rounded bg-surface-light dark:bg-gray-800 text-xs font-bold text-primary mb-2">Digital</span>
                                                <h4 className="text-text-main dark:text-white text-xl font-bold group-hover:text-primary transition-colors">E-commerce Manager</h4>
                                                <p className="text-text-muted dark:text-gray-400 text-sm">Remote / NY · Full-time</p>
                                            </div>
                                            <span className="material-symbols-outlined text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
                                        </div>
                                    </a>
                                    <a className="group flex flex-col gap-4 rounded-xl border border-surface-light dark:border-gray-800 bg-white dark:bg-[#2d1b26] p-6 transition-all hover:border-primary/50 hover:shadow-lg" href="#">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <span className="inline-block px-2 py-1 rounded bg-surface-light dark:bg-gray-800 text-xs font-bold text-primary mb-2">Operations</span>
                                                <h4 className="text-text-main dark:text-white text-xl font-bold group-hover:text-primary transition-colors">Supply Chain Analyst</h4>
                                                <p className="text-text-muted dark:text-gray-400 text-sm">London, UK · Full-time</p>
                                            </div>
                                            <span className="material-symbols-outlined text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
                                        </div>
                                    </a>
                                    <a className="group flex flex-col gap-4 rounded-xl border border-surface-light dark:border-gray-800 bg-white dark:bg-[#2d1b26] p-6 transition-all hover:border-primary/50 hover:shadow-lg" href="#">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <span className="inline-block px-2 py-1 rounded bg-surface-light dark:bg-gray-800 text-xs font-bold text-primary mb-2">Marketing</span>
                                                <h4 className="text-text-main dark:text-white text-xl font-bold group-hover:text-primary transition-colors">Social Media Specialist</h4>
                                                <p className="text-text-muted dark:text-gray-400 text-sm">Paris, France · Contract</p>
                                            </div>
                                            <span className="material-symbols-outlined text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="mt-4 text-center">
                                    <button className="text-primary font-bold hover:underline">View all 12 open positions</button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 mb-8 bg-surface-light dark:bg-[#2d1b26] rounded-xl p-10 md:p-16 text-center">
                            <h2 className="text-text-main dark:text-white text-2xl md:text-3xl font-bold mb-4">Join the toi &amp; moi Community</h2>
                            <p className="text-text-muted dark:text-gray-300 mb-8 max-w-lg mx-auto">Stay inspired. Sign up for our newsletter to receive stories, style tips, and exclusive offers.</p>
                            <form className="flex flex-col md:flex-row gap-3 max-w-md mx-auto">
                                <input className="flex-1 rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-3 bg-white dark:bg-background-dark text-text-main dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Enter your email" type="email" />
                                <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-colors" type="button">Subscribe</button>
                            </form>
                            <div className="mt-10 flex justify-center gap-6 text-text-muted">
                                <a className="hover:text-primary transition-colors" href="#">Instagram</a>
                                <a className="hover:text-primary transition-colors" href="#">Pinterest</a>
                                <a className="hover:text-primary transition-colors" href="#">Twitter</a>
                            </div>
                            <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-600 text-sm text-text-muted">
                                © 2023 toi &amp; moi. All rights reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
