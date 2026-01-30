"use client";

import { useState } from "react";
import Link from "next/link";

const plans = [
    {
        name: "Starter",
        description: "Perfect for active job seekers",
        monthlyPrice: "$6.95",
        annualPrice: "$4.95",
        annualSavings: "Save $24/yr",
        credits: "15 + 5 Bonus CVs",
        features: [
            "All CV Templates",
            "PDF Export",
            "ATS Score Checker",
            "Email Support",
        ],
        popular: false,
        cta: "Get Started",
    },
    {
        name: "Pro",
        description: "For serious career advancement",
        monthlyPrice: "$17.95",
        annualPrice: "$14.95",
        annualSavings: "Save $36/yr",
        credits: "50 + 20 Bonus CVs",
        features: [
            "All CV Templates",
            "PDF Export",
            "ATS Score Checker",
            "Cover Letter Generator",
            "Interview Prep AI",
            "Priority Email Support",
        ],
        popular: true,
        cta: "Get Started",
    },
    {
        name: "Unlimited",
        description: "Maximum power for professionals",
        monthlyPrice: "$44.95",
        annualPrice: "$39.95",
        annualSavings: "Save $60/yr",
        credits: "Unlimited CVs",
        features: [
            "All CV Templates",
            "PDF Export",
            "ATS Score Checker",
            "Cover Letter Generator",
            "Interview Prep AI",
            "Job Application Tracker",
            "Priority Support",
            "Early Access to Features",
        ],
        popular: false,
        cta: "Get Started",
    },
];

export function Pricing() {
    const [isAnnual, setIsAnnual] = useState(true);

    return (
        <section id="pricing" className="py-20 lg:py-28 bg-paper">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-lg text-muted mb-8">
                        Choose the plan that fits your job search needs. No hidden fees, cancel anytime.
                    </p>

                    {/* Billing Toggle */}
                    <div className="inline-flex items-center gap-4 bg-surface p-1.5 rounded-xl border border-[#E0E0E0]">
                        <button
                            onClick={() => setIsAnnual(false)}
                            className={`px-6 py-2.5 rounded-lg font-medium transition-all ${!isAnnual
                                    ? "bg-[#F9F9F7] text-primary shadow-sm"
                                    : "text-muted hover:text-primary"
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setIsAnnual(true)}
                            className={`px-6 py-2.5 rounded-lg font-medium transition-all flex items-center gap-2 ${isAnnual
                                    ? "bg-[#F9F9F7] text-primary shadow-sm"
                                    : "text-muted hover:text-primary"
                                }`}
                        >
                            Annual
                            <span className="text-xs bg-[#DCFCE7] text-[#15803D] px-2 py-0.5 rounded-full font-semibold">
                                Save 20%
                            </span>
                        </button>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-2xl p-8 ${plan.popular
                                    ? "gradient-bg text-white scale-105 shadow-2xl"
                                    : "bg-surface border border-[#E0E0E0] shadow-sm"
                                }`}
                            style={plan.popular ? { boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)' } : {}}
                        >
                            {/* Popular badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="bg-[#F59E0B] text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
                                        ⭐ Most Popular
                                    </span>
                                </div>
                            )}

                            {/* Plan header */}
                            <div className="mb-6">
                                <h3 className={`text-xl font-bold mb-1 ${plan.popular ? "text-white" : "text-primary"}`} style={{ fontFamily: 'var(--font-serif)' }}>
                                    {plan.name}
                                </h3>
                                <p className={`text-sm ${plan.popular ? "text-indigo-100" : "text-muted"}`}>
                                    {plan.description}
                                </p>
                            </div>

                            {/* Price */}
                            <div className="mb-6">
                                <div className="flex items-baseline gap-1">
                                    <span className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-primary"}`} style={{ fontFamily: 'var(--font-serif)' }}>
                                        {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                                    </span>
                                    <span className={plan.popular ? "text-indigo-100" : "text-muted"}>/month</span>
                                </div>
                                {isAnnual && (
                                    <p className={`text-sm mt-1 ${plan.popular ? "text-green-300" : "text-[#15803D]"}`}>
                                        {plan.annualSavings}
                                    </p>
                                )}
                            </div>

                            {/* Credits */}
                            <div className={`inline-block px-3 py-1.5 rounded-lg text-sm font-medium mb-6 ${plan.popular
                                    ? "bg-white/20 text-white"
                                    : "bg-[#F0EFFC] text-[#6366F1]"
                                }`}>
                                {plan.credits}
                            </div>

                            {/* Features */}
                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <svg
                                            className={`w-5 h-5 flex-shrink-0 ${plan.popular ? "text-green-300" : "text-[#15803D]"}`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className={plan.popular ? "text-indigo-100" : "text-muted"}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <Link
                                href="https://app.tailoredairesume.com/auth"
                                className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all ${plan.popular
                                        ? "bg-white text-[#6366F1] hover:bg-gray-100"
                                        : "btn-primary"
                                    }`}
                            >
                                {plan.cta}
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Money-back guarantee */}
                <div className="text-center mt-12">
                    <p className="text-muted flex items-center justify-center gap-2">
                        <svg className="w-5 h-5 text-[#15803D]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        7-day money-back guarantee • Cancel anytime • No hidden fees
                    </p>
                </div>
            </div>
        </section>
    );
}
