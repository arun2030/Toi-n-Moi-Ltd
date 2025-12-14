interface NewsletterProps {
    title: string;
    description?: string;
}

export default function Newsletter({ title, description }: NewsletterProps) {
    return (
        <div className="bg-gray-50 py-24">
            <div className="max-w-xl mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
                {description && (
                    <p className="text-gray-600 mb-8">{description}</p>
                )}
                <form className="flex flex-col sm:flex-row gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors whitespace-nowrap"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
}
