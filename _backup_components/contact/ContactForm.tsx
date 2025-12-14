'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function ContactForm() {
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    const onSubmit = async (event: any) => {
        event.preventDefault();
        setLoading(true);
        setResult("Sending....");

        const formData = new FormData(event.target);

        // Using environment variable for security
        formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                event.target.reset();
            } else {
                console.error("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            setResult("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="section-padding bg-white">
            <div className="wrapper wrapper--narrow">
                <div className="text-center mb-10">
                    <h2 className="kicker-flourished text-3xl font-bold mb-4">Contact us</h2>
                    <p className="text-gray-600">Have a question? We'd love to hear from you.</p>
                </div>

                <form onSubmit={onSubmit} className="max-w-xl mx-auto space-y-6">
                    <input type="hidden" name="subject" value="New Submission from Web3Forms" />

                    <div className="float__wrapper">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            className="w-full border border-gray-300 px-4 py-3 rounded-none focus:outline-none focus:border-black transition-colors"
                            placeholder="Full Name"
                        />
                    </div>

                    <div className="float__wrapper">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            className="w-full border border-gray-300 px-4 py-3 rounded-none focus:outline-none focus:border-black transition-colors"
                            placeholder="Email"
                        />
                    </div>

                    <div className="float__wrapper">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            required
                            rows={8}
                            className="w-full border border-gray-300 px-4 py-3 rounded-none focus:outline-none focus:border-black transition-colors"
                            placeholder="Message"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={cn(
                            "btn btn--full btn--primary uppercase tracking-widest w-full py-4 transition-all",
                            loading ? "opacity-75" : "hover:bg-gray-900"
                        )}
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>

                    {result && (
                        <p className={cn(
                            "text-center text-sm font-medium mt-4",
                            result.includes("Success") ? "text-green-600" : "text-red-600"
                        )}>
                            {result}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}
