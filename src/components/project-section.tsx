"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import projects from "@/components/data/projects";
import { ArrowUpRight, Github } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 overflow-x-clip">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-3 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex gap-2 mt-4 flex-wrap">
                  {project.tags.map((tag: string, i: number) => (
                    <span
                      key={i}
                      className="text-xs font-medium bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-6">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium hover:underline"
                  >
                    Live Demo <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href={project.links.code}
                    target="_blank"
                    className="inline-flex items-center gap-1 text-gray-600 dark:text-gray-300 font-medium hover:underline"
                  >
                    <Github className="h-4 w-4" /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
