import Image from "next/image";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-paper">
            {/* Floating shapes */}
            <div className="absolute top-32 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
            <div className="absolute top-48 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-[#F0EFFC] text-[#6366F1] px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
                        <span className="w-2 h-2 bg-[#15803D] rounded-full animate-pulse" />
                        AI-Powered Resume Builder
                    </div>

                    {/* Headline - Using Playfair Display */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up stagger-1" style={{ fontFamily: 'var(--font-serif)' }}>
                        Create{" "}
                        <span className="gradient-text">Job-Targeted Resumes</span>
                        <br />
                        in Seconds
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-8 animate-fade-in-up stagger-2">
                        Our AI analyzes job descriptions and tailors your resume to beat ATS systems.
                        Get more interviews and land your dream job faster.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up stagger-3">
                        <Link
                            href="https://app.tailoredairesume.com/auth"
                            className="btn-primary text-lg px-8 py-4 w-full sm:w-auto"
                        >
                            Get Started Now
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto"
                        >
                            See How It Works
                        </Link>
                    </div>

                    {/* Trust indicators */}
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted animate-fade-in-up stagger-4">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-[#15803D]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            7-day money-back guarantee
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-[#15803D]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            ATS-optimized resumes
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-[#15803D]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Cancel anytime
                        </div>
                    </div>
                </div>

                {/* App Screenshot */}
                <div className="relative max-w-5xl mx-auto hero-glow">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E0E0E0]">
                        {/* Browser chrome */}
                        <div className="bg-[#F5F5F5] px-4 py-3 flex items-center gap-2 border-b border-[#E0E0E0]">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                                <div className="w-3 h-3 rounded-full bg-[#27CA40]" />
                            </div>
                            <div className="flex-1 text-center">
                                <span className="text-xs text-muted bg-white px-4 py-1 rounded-md border border-[#E0E0E0]">app.tailoredairesume.com</span>
                            </div>
                        </div>

                        {/* Screenshot */}
                        <div className="relative aspect-[16/10] bg-[#F9F9F7]">
                            <Image
                                src="/app-screenshot.png"
                                alt="TailoredAIResume Dashboard"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                        </div>
                    </div>

                    {/* Floating badges */}
                    <div className="absolute -left-4 top-1/4 bg-surface rounded-xl shadow-lg p-4 hidden lg:block animate-float border border-[#E0E0E0]">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#DCFCE7] rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-[#15803D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-semibold text-primary">ATS Score: 94%</p>
                                <p className="text-xs text-muted">Optimized for success</p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute -right-4 bottom-1/4 bg-surface rounded-xl shadow-lg p-4 hidden lg:block animate-float border border-[#E0E0E0]" style={{ animationDelay: '0.5s' }}>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#F0EFFC] rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-[#6366F1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-semibold text-primary">AI-Tailored</p>
                                <p className="text-xs text-muted">In under 30 seconds</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
