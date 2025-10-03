import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Murad Hasil – AI Chatbot & Web Developer",
  description:
    "Portfolio of Murad Hasil – AI Chatbot Developer and Web Developer. I build custom AI chatbots, automation workflows (Chainlit, n8n) and modern web solutions using Next.js, TypeScript, and Tailwind CSS.",
  keywords: [
    "AI Chatbot Developer",
    "Next.js Developer",
    "Web Developer Portfolio",
    "Chainlit Chatbot",
    "n8n Automations",
    "TypeScript Tailwind Developer",
    "Custom Chatbot UI",
    "Pakistan Web Developer",
  ],
  authors: [{ name: "Murad Hasil", url: "https://muradhasil.vercel.app" }],
  creator: "Murad Hasil",
  publisher: "Murad Hasil",
  metadataBase: new URL("https://muradhasil.vercel.app"),

  verification: {
    google: "E5rLgnTe6S889iIIgJlb2ZV6Ky85G9Qltahds6W-vy0",
  },

  openGraph: {
    title: "Murad Hasil – AI Chatbot & Web Developer",
    description:
      "Explore my portfolio showcasing AI chatbots, automation workflows, and modern web solutions. Built with Next.js, Chainlit, n8n, and Tailwind CSS.",
    url: "https://muradhasil.vercel.app",
    siteName: "Murad Hasil Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Murad Hasil – AI Chatbot & Web Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Murad Hasil – AI Chatbot & Web Developer",
    description:
      "AI chatbots, automation workflows, and scalable web apps using Next.js, Chainlit, n8n, and Tailwind CSS.",
    creator: "@mbmuradhasil",
    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icons/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/icons/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

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
      </body>
    </html>
  );
}
