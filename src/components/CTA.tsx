import Link from "next/link";

export function CTA() {
    return (
        <section className="py-20 lg:py-28 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 gradient-bg" />

            {/* Pattern overlay */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
                    Ready to Land Your Dream Job?
                </h2>
                <p className="text-lg sm:text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
                    Join 10,000+ professionals who are getting more interviews with AI-tailored resumes.
                    Start your journey today.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="https://app.tailoredairesume.com/auth"
                        className="bg-white text-[#6366F1] font-semibold px-8 py-4 rounded-xl text-lg hover:bg-gray-100 transition-colors shadow-xl w-full sm:w-auto flex items-center justify-center gap-2"
                    >
                        Get Started Now
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                    <Link
                        href="#pricing"
                        className="text-white font-semibold px-8 py-4 rounded-xl text-lg border-2 border-white/30 hover:bg-white/10 transition-colors w-full sm:w-auto text-center"
                    >
                        View Pricing
                    </Link>
                </div>

                {/* Trust badges */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-indigo-100">
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>7-day money-back guarantee</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Starting at $4.95/month</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Cancel anytime</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
