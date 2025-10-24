import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

// ---------- SITE METADATA ----------
export const metadata: Metadata = {
  title: "Murad Hasil – AI Chatbot & Full-Stack Web Developer",
  description:
    "Portfolio of Murad Hasil — AI Chatbot Developer and Web Developer skilled in building OpenAI-powered chatbots, automation workflows (n8n), and modern web applications using Next.js, TypeScript, and Tailwind CSS.",
  keywords: [
    "AI Chatbot Developer",
    "OpenAI Developer",
    "Next.js Developer",
    "Web Developer Portfolio",
    "n8n Automation",
    "TypeScript Developer",
    "Tailwind CSS Developer",
    "Full-Stack Web Developer",
    "Pakistan Developer",
  ],
  authors: [
    {
      name: "Murad Hasil",
      url: "https://personal-portfolio-nextjs-ebon.vercel.app/",
    },
  ],
  creator: "Murad Hasil",
  publisher: "Murad Hasil",
  metadataBase: new URL("https://personal-portfolio-nextjs-ebon.vercel.app/"),
  alternates: {
    canonical: "https://personal-portfolio-nextjs-ebon.vercel.app/",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "E5rLgnTe6S889iIIgJlb2ZV6Ky85G9Qltahds6W-vy0",
  },
  openGraph: {
    title: "Murad Hasil – AI Chatbot & Full-Stack Web Developer",
    description:
      "Explore my portfolio showcasing AI chatbots, workflow automation, and modern web applications. Built with OpenAI APIs, Next.js, n8n, and Tailwind CSS.",
    url: "https://personal-portfolio-nextjs-ebon.vercel.app/",
    siteName: "Murad Hasil Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Murad Hasil – AI Chatbot & Web Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Murad Hasil – AI Chatbot & Full-Stack Web Developer",
    description:
      "AI chatbots, automation workflows, and scalable web apps built with OpenAI APIs, Next.js, and n8n.",
    creator: "@mbmuradhasil",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-24x24.png", sizes: "24x24", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/icons/favicon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/icons/favicon-256x256.png", sizes: "256x256", type: "image/png" },
      { url: "/icons/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  // Optional: for PWA support
  manifest: "/site.webmanifest",
};

// Next.js 15+ viewport configuration
export const viewport: Viewport = {
  themeColor: "#0f172a",
};

// ---------- ROOT LAYOUT ----------
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main className="container py-8 md:py-12">{children}</main>
          <Footer />
        </ThemeProvider>

        {/* Structured Data (JSON-LD) for SEO */}
        <Script
          id="ld-json-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Murad Hasil",
              jobTitle: "AI Chatbot & Web Developer",
              description:
                "AI Chatbot & Web Developer skilled in building conversational AI, workflow automation, and modern web apps using Next.js, TypeScript, and Tailwind CSS.",
              image: "https://personal-portfolio-nextjs-ebon.vercel.app/og-image.png",
              url: "https://personal-portfolio-nextjs-ebon.vercel.app/",
              sameAs: [
                "https://github.com/Murad-Hasil",
                "https://www.linkedin.com/in/muradhasil/",
              ],
              email: "mailto:mbmuradhasil@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Karachi",
                addressRegion: "Sindh",
                addressCountry: "Pakistan",
              },
              knowsAbout: [
                "AI Chatbots",
                "OpenAI API",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Workflow Automation",
                "n8n",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Governor Initiative for AI, Web3 & Metaverse (GIAIC)",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
