import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { FeatureShowcase } from "@/components/FeatureShowcase";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <FeatureShowcase />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
