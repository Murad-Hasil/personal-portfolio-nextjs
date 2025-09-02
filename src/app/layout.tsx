import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Murad Hasil – AI Chatbot Developer",
  description: "AI chatbots for websites & workflows • Next.js, Chainlit, n8n",
  openGraph: {
    title: "AI Chatbot Developer – Portfolio",
    description: "Web chatbots, automations, and custom UIs.",
    type: "website",
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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="container py-8 md:py-12">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}