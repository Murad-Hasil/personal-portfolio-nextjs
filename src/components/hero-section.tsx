"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  // animation props helper (respects reduced motion)
  const anim = (delay = 0) =>
    reduceMotion
      ? {}
      : { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 + delay } };

  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Headline */}
        <motion.h1 {...anim(0)} className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Murad Hasil
          </span>
        </motion.h1>

        {/* Typing Animation */}
        <motion.div {...anim(0.1)} className="text-xl md:text-2xl font-medium text-blue-500 mb-6 relative inline-block" role="status" aria-live="polite">
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
          <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse rounded-full"></span>
        </motion.div>

        {/* Subheadline */}
        <motion.p {...anim(0.2)} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Building modern, human-focused chat experiences and web apps — fast, accessible, and production-ready.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div {...anim(0.3)} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="#contact" aria-label="Contact Murad to work together">
            <Button size="lg" className="px-8" aria-label="Let's work together">
              Let’s Work Together
            </Button>
          </Link>
          <Link href="#projects" aria-label="View Murad's projects">
            <Button size="lg" variant="outline" className="px-8" aria-label="See my work">
              See My Work
            </Button>
          </Link>
        </motion.div>

        {/* Tech micro line */}
        <div className="mt-2 text-sm text-slate-500 mb-6">
          Tech: Next.js · TypeScript · Tailwind CSS · OpenAI API · n8n
        </div>

        {/* Social Links */}
        <motion.div {...anim(0.4)} className="flex justify-center gap-6">
          <a
            href="https://github.com/Murad-Hasil"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub — Murad Hasil"
            className="text-muted-foreground hover:text-foreground transition"
          >
            <Github className="h-7 w-7" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/muradhasil/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn — Murad Hasil"
            className="text-muted-foreground hover:text-foreground transition"
          >
            <Linkedin className="h-7 w-7" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:mbmuradhasil@gmail.com" aria-label="Email Murad Hasil" className="text-muted-foreground hover:text-foreground transition">
            <Mail className="h-7 w-7" />
            <span className="sr-only">Email</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
