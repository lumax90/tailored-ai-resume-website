import Image from "next/image";

const testimonials = [
    {
        quote: "Customizing my resume from scratch for every job application was a nightmare. Now I just paste the job posting, and 30 seconds later it's done. It really shouldn't be this simple.",
        author: "Marcus Chen",
        role: "Software Developer",
        rating: 5,
        avatar: "/avatar-marcus.png",
    },
    {
        quote: "It's not a miracle worker, but it does save you from the tedious task of rewriting your resume for every single job posting. Good value for the price.",
        author: "Laura Becker",
        role: "Marketing Specialist",
        rating: 4,
        avatar: "/avatar-laura.png",
    },
    {
        quote: "I'd been job hunting for 3 months with zero callbacks. After trying TailoredAI, I got 4 interview invites in the first week. The ATS optimization actually works.",
        author: "David Okonkwo",
        role: "Recent Graduate",
        rating: 5,
        avatar: "/avatar-david.png",
    },
    {
        quote: "I was making a career change and had no idea how to present my old experience. The AI showed me exactly which skills to highlight. Game changer.",
        author: "Sophie Andersen",
        role: "Career Changer",
        rating: 5,
        avatar: "/avatar-sophie.png",
    },
    {
        quote: "Writing cover letters was my most hated task. Now I get a professional letter in 2 minutes. It genuinely saves me hours every week.",
        author: "Michael Torres",
        role: "Sales Representative",
        rating: 5,
        avatar: "/avatar-michael.png",
    },
    {
        quote: "For $5 a month, the amount of work it does is surprising. Instead of spending an hour on each application, I'm done in 5 minutes. Do the math.",
        author: "Nina Johansson",
        role: "Fresh Graduate",
        rating: 5,
        avatar: "/avatar-nina.png",
    },
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-20 lg:py-28 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                        What Our Users Say
                    </h2>
                    <p className="text-lg text-muted">
                        Real feedback from real job seekers. No PR speak, just honest reviews.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-paper rounded-2xl p-6 shadow-md border border-[#E0E0E0] hover:shadow-lg transition-shadow"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <svg
                                        key={i}
                                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-[#F59E0B]' : 'text-gray-300'}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-muted mb-6 leading-relaxed">"{testimonial.quote}"</p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.author}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold text-primary">{testimonial.author}</p>
                                    <p className="text-sm text-muted">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Stats */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <p className="text-3xl font-bold gradient-text" style={{ fontFamily: 'var(--font-serif)' }}>10,000+</p>
                        <p className="text-muted">Resumes Created</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold gradient-text" style={{ fontFamily: 'var(--font-serif)' }}>30 sec</p>
                        <p className="text-muted">Average Creation Time</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold gradient-text" style={{ fontFamily: 'var(--font-serif)' }}>3x</p>
                        <p className="text-muted">More Callbacks</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold gradient-text" style={{ fontFamily: 'var(--font-serif)' }}>$4.95</p>
                        <p className="text-muted">Starting Price</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
