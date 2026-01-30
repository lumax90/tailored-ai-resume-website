import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tailoredairesume.com"),
  title: {
    default: "TailoredAIResume - AI-Powered Resume Builder | Land Your Dream Job",
    template: "%s | TailoredAIResume",
  },
  description:
    "Create job-targeted resumes in seconds with AI. Beat ATS systems, get more interviews, and land your dream job. Tailored resumes, cover letters & interview prep.",
  keywords: [
    "AI resume builder",
    "tailored resume",
    "ATS resume",
    "CV builder",
    "resume generator",
    "job application",
    "cover letter generator",
    "interview prep",
  ],
  authors: [{ name: "TailoredAIResume" }],
  creator: "TailoredAIResume",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tailoredairesume.com",
    siteName: "TailoredAIResume",
    title: "TailoredAIResume - AI-Powered Resume Builder",
    description:
      "Create job-targeted resumes in seconds with AI. Beat ATS systems and land more interviews.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TailoredAIResume - AI Resume Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TailoredAIResume - AI-Powered Resume Builder",
    description: "Create job-targeted resumes in seconds with AI.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
