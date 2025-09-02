"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/40">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Profile Image with hover effect */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative group">
              <Image
                src="/profile.jpg"
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
              passionate <span className="text-blue-500">Web Developer</span> 
              and <span className="text-purple-500">AI Enthusiast</span>.  
              I love creating clean, modern, and scalable digital solutions that 
              not only look good but also solve real problems. With a focus on 
              <span className="font-semibold"> performance, responsiveness, and user experience</span>, 
              I turn ideas into impactful web applications.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              When I’m not coding, I explore new technologies, work on 
              automation projects, and continuously learn to stay ahead in 
              this fast-paced tech world. My goal is to help businesses and 
              individuals grow with reliable and smart digital solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition"
              >
                Hire Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-blue-500 text-blue-500 rounded-xl hover:bg-blue-500 hover:text-white transition"
              >
                View Projects
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
