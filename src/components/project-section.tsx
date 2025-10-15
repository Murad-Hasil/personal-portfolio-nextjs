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
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 overflow-x-clip">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src={project.image}
                  alt={`Preview of ${project.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Title */}
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                >
                  <h3 className="text-xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                </a>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mt-3 flex-1 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex gap-2 mt-4 flex-wrap">
                  {project.tags.map((tag: string, i: number) => (
                    <span
                      key={i}
                      className="text-xs font-medium bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md border border-gray-200 dark:border-gray-700"
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
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium hover:underline"
                  >
                    Live Demo <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href={project.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-gray-700 dark:text-gray-300 font-medium hover:underline"
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
