"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

/**
 * Hero Section
 * --------------------------------------------------
 * - The first impression area of the portfolio
 * - Features subtle animations, gradient background, and key CTAs
 * - Clean, minimal, and consistent with overall theme
 */
export default function Hero() {
  const reduceMotion = useReducedMotion();

  // Helper for staggered animation (respects user motion preference)
  const anim = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 40 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay },
        };

  return (
    <section
      className="relative flex items-center justify-center min-h-screen overflow-hidden
      bg-gradient-to-br from-gray-50 via-white to-blue-50
      dark:from-[#0f172a] dark:via-[#1e1b4b] dark:to-[#312e81] text-gray-900 dark:text-white"
    >
      {/* Subtle rotating gradient glow */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))]
        from-indigo-900 via-purple-900 to-blue-900 opacity-15 blur-xl"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 80, // slower, smoother rotation
          ease: "linear",
        }}
      />

      {/* Soft glowing shapes for background depth */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" />

      {/* Main content container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Headline */}
        <motion.h1
          {...anim(0)}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
        >
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Murad Hasil
          </span>
        </motion.h1>

        {/* Dynamic typing animation */}
        <motion.div
          {...anim(0.1)}
          className="text-xl md:text-2xl font-medium text-blue-400 mb-6 relative inline-block"
          role="status"
          aria-live="polite"
        >
          <TypeAnimation
            sequence={[
              "AI Chatbot Developer 🤖",
              2000,
              "Full-Stack Web Developer 💻",
              2000,
              "Next.js · TypeScript · Tailwind",
              2000,
              "Automation & n8n ⚡",
              2000,
              "Practical AI for businesses 🚀",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
          <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-gradient-to-r from-blue-400 to-purple-500 opacity-70 animate-pulse rounded-full" />
        </motion.div>

        {/* Subheadline */}
        <motion.p
          {...anim(0.2)}
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building modern, human-focused chat experiences and web apps — fast,
          accessible, and production-ready.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          {...anim(0.3)}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <Link href="#contact" aria-label="Contact Murad to work together">
            <Button
              size="lg"
              className="px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white shadow-lg shadow-blue-500/20"
            >
              Let’s Work Together
            </Button>
          </Link>

          <Link href="#projects" aria-label="View Murad's projects">
            <Button
              size="lg"
              variant="outline"
              className="px-8 border border-blue-500/50 text-blue-400 hover:bg-blue-950/20"
            >
              See My Work
            </Button>
          </Link>
        </motion.div>

        {/* Tech stack info */}
        <p className="text-sm text-gray-400 mb-8">
          Tech: Next.js · TypeScript · Tailwind CSS · OpenAI API · n8n
        </p>

        {/* Social links */}
        <motion.div {...anim(0.4)} className="flex justify-center gap-6">
          <SocialLink
            href="https://github.com/Murad-Hasil"
            label="GitHub — Murad Hasil"
            icon={<Github className="h-7 w-7" />}
          />
          <SocialLink
            href="https://www.linkedin.com/in/muradhasil/"
            label="LinkedIn — Murad Hasil"
            icon={<Linkedin className="h-7 w-7" />}
          />
          <SocialLink
            href="mailto:mbmuradhasil@gmail.com"
            label="Email Murad Hasil"
            icon={<Mail className="h-7 w-7" />}
          />
        </motion.div>
      </div>
    </section>
  );
}

/**
 * SocialLink
 * --------------------------------------------------
 * Reusable component for icon-based links
 * Keeps spacing, hover states, and accessibility consistent
 */
function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="text-gray-400 hover:text-white transition-transform hover:scale-110 duration-200"
    >
      {icon}
    </a>
  );
}
