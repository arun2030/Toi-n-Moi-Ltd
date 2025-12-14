/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';

export default function RegisterPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display antialiased text-text-main dark:text-gray-100 min-h-screen flex flex-col">
            {/* Main Content Area */}
            <div className="flex-1 flex flex-col lg:flex-row">
                {/* Left: Form Section */}
                <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-surface-light dark:bg-background-dark lg:w-1/2">
                    <div className="mx-auto w-full max-w-sm lg:w-96">
                        {/* Heading */}
                        <div className="text-center lg:text-left mb-10">
                            <h2 className="text-4xl font-extrabold text-text-main dark:text-white tracking-tight mb-3">Create Account</h2>
                            <p className="text-text-muted dark:text-gray-400 text-base">Sign up to track orders, save your wishlist, and get exclusive offers.</p>
                        </div>
                        {/* Form */}
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            {/* Full Name */}
                            <div>
                                <label className="block text-sm font-semibold text-text-main dark:text-gray-200 mb-2" htmlFor="name">Full Name</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="material-symbols-outlined text-text-muted text-xl">person</span>
                                    </div>
                                    <input className="block w-full pl-10 pr-3 py-3 border border-border-color dark:border-gray-700 rounded-lg bg-background-light dark:bg-surface-dark text-text-main dark:text-white placeholder-text-muted/70 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" id="name" name="name" placeholder="Enter your full name" type="text" />
                                </div>
                            </div>
                            {/* Email */}
                            <div>
                                <label className="block text-sm font-semibold text-text-main dark:text-gray-200 mb-2" htmlFor="email">Email Address</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="material-symbols-outlined text-text-muted text-xl">mail</span>
                                    </div>
                                    <input className="block w-full pl-10 pr-3 py-3 border border-border-color dark:border-gray-700 rounded-lg bg-background-light dark:bg-surface-dark text-text-main dark:text-white placeholder-text-muted/70 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" id="email" name="email" placeholder="Enter your email address" type="email" />
                                </div>
                            </div>
                            {/* Password Group */}
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <label className="block text-sm font-semibold text-text-main dark:text-gray-200 mb-2" htmlFor="password">Password</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <span className="material-symbols-outlined text-text-muted text-xl">lock</span>
                                        </div>
                                        <input className="block w-full pl-10 pr-3 py-3 border border-border-color dark:border-gray-700 rounded-lg bg-background-light dark:bg-surface-dark text-text-main dark:text-white placeholder-text-muted/70 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" id="password" name="password" placeholder="••••••••" type="password" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-text-main dark:text-gray-200 mb-2" htmlFor="password_confirmation">Confirm Password</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <span className="material-symbols-outlined text-text-muted text-xl">lock_reset</span>
                                        </div>
                                        <input className="block w-full pl-10 pr-3 py-3 border border-border-color dark:border-gray-700 rounded-lg bg-background-light dark:bg-surface-dark text-text-main dark:text-white placeholder-text-muted/70 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" id="password_confirmation" name="password_confirmation" placeholder="••••••••" type="password" />
                                    </div>
                                </div>
                            </div>
                            {/* Terms */}
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded cursor-pointer" id="terms" name="terms" type="checkbox" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label className="font-medium text-text-main dark:text-gray-300" htmlFor="terms">I agree to the <Link className="text-primary hover:text-primary-hover underline decoration-dashed" href="/terms">Terms of Service</Link> and <Link className="text-primary hover:text-primary-hover underline decoration-dashed" href="/privacy">Privacy Policy</Link></label>
                                </div>
                            </div>
                            {/* Submit Button */}
                            <div>
                                <button className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200" type="submit">
                                    Create Account
                                </button>
                            </div>
                        </form>
                        {/* Divider */}
                        <div className="mt-8">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-border-color dark:border-gray-700"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-surface-light dark:bg-background-dark text-text-muted">Or continue with</span>
                                </div>
                            </div>
                            <div className="mt-6 grid grid-cols-2 gap-3">
                                <button className="w-full inline-flex justify-center py-2.5 px-4 border border-border-color dark:border-gray-700 rounded-lg shadow-sm bg-white dark:bg-surface-dark text-sm font-medium text-text-main dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" type="button">
                                    <span className="sr-only">Sign up with Google</span>
                                    <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24">
                                        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="#EA4335"></path>
                                    </svg>
                                </button>
                                <button className="w-full inline-flex justify-center py-2.5 px-4 border border-border-color dark:border-gray-700 rounded-lg shadow-sm bg-white dark:bg-surface-dark text-sm font-medium text-text-main dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" type="button">
                                    <span className="sr-only">Sign up with Facebook</span>
                                    <svg aria-hidden="true" class="h-5 w-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                                        <path clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right: Image Section */}
                <div className="hidden lg:block relative w-0 flex-1 overflow-hidden">
                    <div className="absolute inset-0 h-full w-full bg-cover bg-center" data-alt="Stylish sneakers and modern fashion aesthetic with pastel pink lighting" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDSwtI1bI0Wm_W2jNAtJ1VmOw0VsAzJYkXj456d1_174wYOu-ib4EokoZP6KTGnEGkt2a-M-grCsjEacoGjsPG7Yh83ubl2sbi8u3UKXM0ptEAZJthWT4SjVxeIuhMzen7EEIjJwETZNxRCXL8Q0-cMndujL7aZDGX6_vV03hMaE1wrMgVSut58S2s3rRCr3eput_iSbGRWEr2aE_fyqc8St4K26y6O9M8QzQ-pLRmSu7N0dtakGxuamHMtmT2n_Pyj8EwA2PcosGE')" }}>
                        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex flex-col justify-end p-16">
                            <h3 className="text-white text-3xl font-bold mb-2">Join the Club</h3>
                            <p className="text-white/90 text-lg">Experience personalized shopping, exclusive drops, and early access to sales.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
