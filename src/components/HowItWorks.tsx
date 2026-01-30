import Image from "next/image";

const steps = [
    {
        number: "01",
        title: "Create Your Master Profile",
        description: "Add all your experience, skills, education, and achievements once. This becomes your career database that our AI uses to build tailored resumes.",
        image: "/step-1-profile.jpg",
    },
    {
        number: "02",
        title: "Paste the Job Description",
        description: "Copy and paste any job posting. Our AI instantly analyzes requirements, keywords, and qualifications needed for the role.",
        image: "/step-2-job-analysis.jpg",
    },
    {
        number: "03",
        title: "Get Your Tailored Resume",
        description: "In seconds, receive a perfectly optimized resume that highlights relevant experience and matches job requirements. Download as PDF and apply!",
        image: "/step-3-preview.jpg",
    },
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-20 lg:py-28 bg-paper">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                        How It Works
                    </h2>
                    <p className="text-lg text-muted">
                        Get from job posting to tailored resume in three simple steps.
                        No more hours spent customizing each application.
                    </p>
                </div>

                {/* Steps */}
                <div className="space-y-20 lg:space-y-32">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                                } items-center gap-12 lg:gap-20`}
                        >
                            {/* Content */}
                            <div className="flex-1">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-5xl font-bold gradient-text" style={{ fontFamily: 'var(--font-serif)' }}>{step.number}</span>
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                                    {step.title}
                                </h3>
                                <p className="text-lg text-muted leading-relaxed">
                                    {step.description}
                                </p>
                            </div>

                            {/* Image */}
                            <div className="flex-1 w-full">
                                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E0E0E0]">
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
                                            src={step.image}
                                            alt={step.title}
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
