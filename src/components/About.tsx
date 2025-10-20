"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/40">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* ===== Profile Image Section ===== */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative group w-[240px] h-[240px] md:w-[300px] md:h-[300px]">
              <Image
                src="/profile/profile.png"
                alt="Murad Hasil"
                fill
                priority
                sizes="(max-width: 768px) 240px, (max-width: 1024px) 300px, 300px"
                className="rounded-2xl shadow-lg object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Subtle glow overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/25 to-purple-500/25 opacity-0 group-hover:opacity-100 transition duration-300 blur-lg"></div>
            </div>
          </motion.div>

          {/* ===== Text Content Section ===== */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 
              bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
            >
              About Me
            </h2>

            {/* Intro */}
            <p className="text-muted-foreground leading-relaxed mb-6">
              I’m <span className="font-semibold">Murad Hasil</span>, an{" "}
              <span className="text-blue-500 font-semibold">
                AI Chatbot Developer
              </span>{" "}
              and{" "}
              <span className="text-purple-500 font-semibold">
                Full-Stack Web Developer
              </span>
              . I build interactive web apps and conversational AI systems that
              feel modern, human, and fast.
            </p>

            {/* Background */}
            <p className="text-muted-foreground leading-relaxed mb-6">
              I work with{" "}
              <span className="font-semibold">
                Next.js, TypeScript, and Tailwind CSS
              </span>
              , integrating <span className="font-semibold">OpenAI APIs</span>{" "}
              to create real-time, intelligent tools. I’m also advancing my
              skills through the{" "}
              <span className="font-semibold">GIAIC program</span> — focused on
              AI-driven and cloud-native development.
            </p>

            {/* Vision */}
            <p className="text-muted-foreground leading-relaxed mb-8">
              My goal is to design clean, scalable solutions that merge
              usability with intelligence — making technology more personal and
              accessible.
            </p>

            {/* ===== Quick Stats ===== */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mb-8">
              {[
                { value: "20+", label: "Projects" },
                { value: "15+", label: "Technologies" },
                { value: "20 mo", label: "Learning" },
                { value: "∞", label: "Curiosity" },
              ].map((item, i) => (
                <div key={i}>
                  <p className="text-2xl font-bold">{item.value}</p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>

            {/* ===== Action Buttons ===== */}
            <div className="flex flex-wrap gap-4">
              <a href="#contact">
                <Button size="lg" className="px-6">
                  Hire Me
                </Button>
              </a>
              <a href="#projects">
                <Button size="lg" variant="outline" className="px-6">
                  View Projects
                </Button>
              </a>
              <a href="/resume/Murad-Hasil-Resume.pdf" download>
                <Button
                  size="lg"
                  variant="secondary"
                  className="px-6 flex items-center gap-2"
                >
                  <FileDown className="h-4 w-4" />
                  Resume
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
