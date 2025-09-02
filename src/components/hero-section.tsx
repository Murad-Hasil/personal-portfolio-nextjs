"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
        >
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Murad Hasil
          </span>
        </motion.h1>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl md:text-2xl font-medium text-blue-500 mb-6 relative inline-block"
        >
          <TypeAnimation
            sequence={[
              "Web Developer 💻",
              2000,
              "AI Enthusiast 🤖",
              2000,
              "Freelancer 🌍",
              2000,
              "Automation Expert ⚡",
              2000,
              "Problem Solver 🧩",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />

          {/* Animated underline */}
          <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse rounded-full"></span>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          I create modern websites, AI-powered chatbots & automation tools to
          help businesses grow.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Link href="#contact">
            <Button size="lg" className="px-8">
              Hire Me
            </Button>
          </Link>
          <Link href="#projects">
            <Button size="lg" variant="outline" className="px-8">
              View Projects
            </Button>
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="flex justify-center gap-6"
        >
          <a
            href="https://github.com/Murad-Hasil"
            target="_blank"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-foreground transition"
          >
            <Github className="h-7 w-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/murad-hasil-9044582b9/"
            target="_blank"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-foreground transition"
          >
            <Linkedin className="h-7 w-7" />
          </a>
          <a
            href="mailto:mbmuradhasil@gmail.com"
            aria-label="Email"
            className="text-muted-foreground hover:text-foreground transition"
          >
            <Mail className="h-7 w-7" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
