"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import projects from "@/components/data/projects";
import { ArrowUpRight, Github, BookOpen } from "lucide-react";
import type { Project } from "@/components/data/projects";

/**
 * Projects Section
 * -----------------
 * Displays all portfolio projects from /data/projects.ts
 * Each project card includes image, title, description, tags, and quick links.
 * Subtle motion, gradients, and consistent spacing for a clean professional look.
 */
export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        {/* ===== Section Heading ===== */}
        <h2 className="text-4xl font-bold text-center mb-12">
          My{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        {/* ===== Projects Grid ===== */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 overflow-x-clip">
          {projects.map((project: Project, index) => {
            const { title, description, tags, image, slug, links } = project;

            return (
              <motion.div
                key={slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="
                  group relative flex flex-col rounded-2xl overflow-hidden
                  bg-white dark:bg-gray-900
                  border border-gray-100 dark:border-gray-800
                  shadow-md hover:shadow-2xl
                  transition-all duration-300
                "
              >
                {/* ===== Gradient Glow on Hover ===== */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-2xl" />
                </div>

                {/* ===== Project Image ===== */}
                <div className="relative h-44 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={image}
                    alt={title ? `Preview of ${title}` : "Project image"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0} // Only first image preloads for performance
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* ===== Content ===== */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Title */}
                  <a
                    href={links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <h3
                      className="
                        text-lg font-semibold tracking-tight
                        bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent
                        hover:underline
                      "
                    >
                      {title}
                    </h3>
                  </a>

                  {/* Description */}
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 flex-1 leading-relaxed">
                    {description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {tags.map((tag, i) => (
                      <span
                        key={i}
                        className="
                          text-xs font-medium
                          px-2.5 py-1 rounded-full
                          bg-gray-100 dark:bg-gray-800/60
                          border border-gray-200 dark:border-gray-700
                          text-gray-700 dark:text-gray-300
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* ===== Links ===== */}
                  <div className="flex flex-wrap gap-4 mt-5">
                    {links.demo && (
                      <a
                        href={links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live demo of ${title}`}
                        className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium hover:underline"
                      >
                        Live Demo <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}

                    {links.code && (
                      <a
                        href={links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View source code of ${title}`}
                        className="inline-flex items-center gap-1 text-gray-700 dark:text-gray-300 font-medium hover:underline"
                      >
                        <Github className="h-4 w-4" /> Code
                      </a>
                    )}

                    <Link
                      href={`/projects/${slug}`}
                      className="inline-flex items-center gap-1 text-purple-600 dark:text-purple-400 font-medium hover:underline"
                    >
                      <BookOpen className="h-4 w-4" /> Case Study
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
