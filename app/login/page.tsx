/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';

export default function LoginPage() {
    return (
        <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white transition-colors duration-300">
            {/* Scoped Styles for Scrollbar */}
            <style dangerouslySetInnerHTML={{
                __html: `
                ::-webkit-scrollbar {
                    width: 8px;
                }
                ::-webkit-scrollbar-track {
                    background: transparent;
                }
                ::-webkit-scrollbar-thumb {
                    background: #e3cfe7;
                    border-radius: 4px;
                }
                ::-webkit-scrollbar-thumb:hover {
                    background: #b411d4;
                }
            `}} />

            {/* Main Content Grid */}
            <main className="flex-1 w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden">
                {/* Left Column: Editorial Image */}
                <div className="relative hidden lg:flex h-full min-h-[600px] flex-col justify-end p-12 overflow-hidden bg-purple-100 dark:bg-purple-950">
                    <img
                        alt="Woman in fashionable winter coat walking down a modern street"
                        className="absolute inset-0 h-full w-full object-cover object-center opacity-90 transition-transform duration-700 hover:scale-105"
                        data-alt="Fashionable model walking in city setting"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4YNKKezzTynly6MO8chJKHVsoE6Dwa7bjhCnl1k_61KkhL65keSOWCUb_W_PaeImg7_vfPxBvgcK3GJjgtbR_kFuq517q4_b1hNF-pEmHPZk9NqHOHBO165NWAJmoXD23znpOCdfA7QakjoBt5tsKmtNr7HGsvqqxggITosEqTPRa0kNRgAUAORTKlNpMEuZS3-DEyLWMin5xdOVablYUTsIJGQykHQHXrJvRr1M_Avm22zAiHghmcaKOsyCCQ5niMdwxmOuLqTY"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent"></div>
                    <div className="relative z-10 text-white max-w-md">
                        <p className="text-sm font-semibold uppercase tracking-widest mb-2 text-primary/80">New Collection</p>
                        <h2 className="text-4xl font-bold leading-tight mb-4">Discover the new you.</h2>
                        <p className="text-white/80 text-lg">Join our community and get exclusive access to new drops and special offers.</p>
                    </div>
                </div>
                {/* Right Column: Login Form */}
                <div className="flex flex-col justify-center items-center p-6 sm:p-12 lg:p-24 w-full bg-background-light dark:bg-background-dark">
                    <div className="w-full max-w-[420px] flex flex-col gap-6">
                        {/* Header Text */}
                        <div className="flex flex-col gap-2 text-center sm:text-left">
                            <h1 className="text-slate-900 dark:text-white tracking-tight text-3xl sm:text-[32px] font-bold leading-tight">Welcome Back</h1>
                            <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">
                                Access your wishlist, order history, and personalized recommendations.
                            </p>
                        </div>
                        {/* Form */}
                        <form className="flex flex-col gap-5 mt-4" onSubmit={(e) => e.preventDefault()}>
                            {/* Email Field */}
                            <label className="flex flex-col w-full gap-2">
                                <span className="text-slate-900 dark:text-white text-sm font-medium">Email or Username</span>
                                <div className="relative">
                                    <input className="form-input flex w-full rounded-lg border border-purple-200 dark:border-purple-800 bg-white dark:bg-purple-900/10 px-4 h-12 text-slate-900 dark:text-white placeholder:text-purple-300 dark:placeholder:text-purple-700 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all" placeholder="name@example.com" type="email" />
                                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-purple-300 dark:text-purple-700 pointer-events-none text-[20px]">mail</span>
                                </div>
                            </label>
                            {/* Password Field */}
                            <label className="flex flex-col w-full gap-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-900 dark:text-white text-sm font-medium">Password</span>
                                    <a className="text-sm font-medium text-primary hover:text-purple-600 dark:hover:text-purple-300 transition-colors" href="#">Forgot Password?</a>
                                </div>
                                <div className="relative group">
                                    <input className="form-input flex w-full rounded-lg border border-purple-200 dark:border-purple-800 bg-white dark:bg-purple-900/10 px-4 h-12 pr-12 text-slate-900 dark:text-white placeholder:text-purple-300 dark:placeholder:text-purple-700 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all" placeholder="*******" type="password" />
                                    <button className="absolute right-0 top-0 h-full px-4 flex items-center justify-center text-purple-400 hover:text-primary transition-colors focus:outline-none" type="button">
                                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                                    </button>
                                </div>
                            </label>
                            {/* Submit Button */}
                            <button className="mt-2 w-full h-12 rounded-full bg-primary text-white text-base font-bold hover:bg-opacity-90 hover:shadow-lg hover:shadow-primary/30 active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2">
                                <span>Log In</span>
                                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                            </button>
                        </form>
                        {/* Divider */}
                        <div className="flex items-center gap-4 my-2">
                            <div className="h-px flex-1 bg-purple-100 dark:bg-purple-900"></div>
                            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">or continue with</span>
                            <div className="h-px flex-1 bg-purple-100 dark:bg-purple-900"></div>
                        </div>
                        {/* Social Login */}
                        <div className="grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center h-12 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-white hover:border-primary/50 dark:hover:bg-purple-900/20 transition-all gap-2 group">
                                <img alt="Google" className="w-5 h-5" data-alt="Google logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_vIMIff3slXFWEMkzZ3YgDs-x6kZn9ZXgVVgaQNpisouIcXaKnjGtc41nsTBYCT0T_60iVZJrC2xHhe7NxA0pGFpj4Q06-GaGtbYpT-DtdnVqdGu9RBUS4NuZKESjfXLPnbC6TIrED81Zrd4jfBwkM0-iYMw-zKGjniMPKzhdu5eyp-ALYFyi3rB2DXclwPOXeniLyddINqmuCdae3OeFdVLtxuOrYG2q4yqRquCPf8ohSMAp7QVTVQXVtB_aawq7UZ3fD5knaZc" />
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-200 group-hover:text-primary transition-colors">Google</span>
                            </button>
                            <button className="flex items-center justify-center h-12 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-white hover:border-primary/50 dark:hover:bg-purple-900/20 transition-all gap-2 group">
                                <span className="material-symbols-outlined text-blue-600 text-[24px]">social_leaderboard</span>
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-200 group-hover:text-primary transition-colors">Facebook</span>
                            </button>
                        </div>
                        {/* Registration Link */}
                        <div className="text-center mt-2">
                            <p className="text-slate-600 dark:text-slate-400">
                                Don&apos;t have an account?
                                <Link className="font-bold text-primary hover:text-purple-700 dark:hover:text-purple-300 hover:underline decoration-2 underline-offset-4 transition-all ml-1" href="/register">Register Now</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            {/* Simple Footer */}
            <footer className="py-6 border-t border-purple-100 dark:border-purple-900/30 text-center bg-background-light dark:bg-background-dark">
                <div className="max-w-[960px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                    <p>© 2023 toi-n-moi. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link className="hover:text-primary transition-colors" href="/privacy">Privacy Policy</Link>
                        <Link className="hover:text-primary transition-colors" href="/terms">Terms of Service</Link>
                        <Link className="hover:text-primary transition-colors" href="#">Cookie Settings</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
