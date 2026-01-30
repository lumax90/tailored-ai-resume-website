import Image from "next/image";
import Link from "next/link";

const showcaseFeatures = [
    {
        title: "AI Cover Letter Generator",
        description: "Generate personalized, professional cover letters tailored to each job application. Our AI crafts compelling narratives that highlight your relevant experience and match the company's tone.",
        image: "/feature-cover-letter.jpg",
        features: ["Job-specific personalization", "Multiple tone options", "One-click download"],
    },
    {
        title: "Interview Prep Assistant",
        description: "Get AI-generated interview questions based on the job description and your resume. Practice with role-specific behavioral and technical questions, complete with expert tips.",
        image: "/feature-interview-prep.jpg",
        features: ["Behavioral & technical questions", "STAR method guidance", "Personalized tips"],
    },
];

export function FeatureShowcase() {
    return (
        <section className="py-20 lg:py-28 bg-paper">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                        Beyond Just Resumes
                    </h2>
                    <p className="text-lg text-muted">
                        Complete your job application toolkit with AI-powered cover letters and interview preparation.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="space-y-16">
                    {showcaseFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                                } items-center gap-12 lg:gap-16`}
                        >
                            {/* Content */}
                            <div className="flex-1">
                                <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                                    {feature.title}
                                </h3>
                                <p className="text-lg text-muted leading-relaxed mb-6">
                                    {feature.description}
                                </p>

                                {/* Feature bullets */}
                                <ul className="space-y-3 mb-8">
                                    {feature.features.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-[#15803D] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-muted">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="https://app.tailoredairesume.com/auth"
                                    className="btn-primary inline-flex"
                                >
                                    Try It Now
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                            </div>

                            {/* Image */}
                            <div className="flex-1 w-full">
                                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E0E0E0]">
                                    {/* Browser chrome */}
                                    <div className="bg-[#F5F5F5] px-4 py-2.5 flex items-center gap-2 border-b border-[#E0E0E0]">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-[#27CA40]" />
                                        </div>
                                        <div className="flex-1 text-center">
                                            <span className="text-xs text-muted">app.tailoredairesume.com</span>
                                        </div>
                                    </div>

                                    {/* Screenshot */}
                                    <div className="relative aspect-[16/10] bg-[#F9F9F7]">
                                        <Image
                                            src={feature.image}
                                            alt={feature.title}
                                            fill
                                            className="object-cover object-top"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
