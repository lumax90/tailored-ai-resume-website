"use client";

import Link from "next/link";
import { useState } from "react";

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 gradient-bg rounded-[10px] flex items-center justify-center text-white font-bold text-sm tracking-tight" style={{ boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)' }}>
                            TAR
                        </div>
                        <div className="hidden sm:block">
                            <span className="text-lg font-bold text-primary" style={{ fontFamily: 'var(--font-serif)' }}>TailoredAI</span>
                            <span className="text-xs text-muted block -mt-1">Resume Builder</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="#features" className="text-muted hover:text-primary transition-colors font-medium">
                            Features
                        </Link>
                        <Link href="#how-it-works" className="text-muted hover:text-primary transition-colors font-medium">
                            How It Works
                        </Link>
                        <Link href="#pricing" className="text-muted hover:text-primary transition-colors font-medium">
                            Pricing
                        </Link>
                        <Link href="#testimonials" className="text-muted hover:text-primary transition-colors font-medium">
                            Reviews
                        </Link>
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link
                            href="https://app.tailoredairesume.com/auth"
                            className="text-muted hover:text-primary font-medium px-4 py-2"
                        >
                            Sign In
                        </Link>
                        <Link
                            href="https://app.tailoredairesume.com/auth"
                            className="btn-primary text-sm px-5 py-2.5"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-[#E0E0E0]">
                        <div className="flex flex-col gap-4">
                            <Link href="#features" className="text-muted hover:text-primary font-medium">Features</Link>
                            <Link href="#how-it-works" className="text-muted hover:text-primary font-medium">How It Works</Link>
                            <Link href="#pricing" className="text-muted hover:text-primary font-medium">Pricing</Link>
                            <Link href="#testimonials" className="text-muted hover:text-primary font-medium">Reviews</Link>
                            <hr className="border-[#E0E0E0]" />
                            <Link href="https://app.tailoredairesume.com/auth" className="text-muted font-medium">Sign In</Link>
                            <Link href="https://app.tailoredairesume.com/auth" className="btn-primary text-center">Get Started</Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
