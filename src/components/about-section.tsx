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
          
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative group">
              <Image
                src="/profile/profile.png"
                alt="Murad Hasil"
                width={300}
                height={300}
                className="rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition duration-300 blur-xl"></div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              About Me
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Hi, I’m <span className="font-semibold">Murad Hasil</span>, a 
              <span className="text-blue-500"> Web Developer</span> and 
              <span className="text-purple-500"> AI Enthusiast</span>.  
              I build modern, scalable web solutions that combine clean design 
              with real business impact.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I focus on <span className="font-semibold">performance, responsiveness, and user experience</span>. 
              Beyond coding, I explore new technologies, work on automation, and 
              continuously learn to stay ahead in this fast-moving tech world.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mb-8">
              <div>
                <p className="text-2xl font-bold">20+</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div>
                <p className="text-2xl font-bold">15+</p>
                <p className="text-sm text-muted-foreground">Technologies</p>
              </div>
              <div>
                <p className="text-2xl font-bold">20 mo</p>
                <p className="text-sm text-muted-foreground">Learning</p>
              </div>
              <div>
                <p className="text-2xl font-bold">∞</p>
                <p className="text-sm text-muted-foreground">Curiosity</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#contact">
                <Button size="lg" className="px-6">Hire Me</Button>
              </a>
              <a href="#projects">
                <Button size="lg" variant="outline" className="px-6">View Projects</Button>
              </a>
              <a href="/resume/Murad-Hasil-Resume.pdf" download>
                <Button size="lg" variant="secondary" className="px-6 flex items-center gap-2">
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
