/**
 * Centralized Tailwind class utilities for consistent layout and typography.
 * Keeps your UI maintainable, readable, and easy to update later.
 */

export const sectionStyles = {
  base: "mb-10",
  title: "text-2xl font-semibold mb-3",
  list: "list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed",
};

export const projectPageStyles = {
  main: "max-w-4xl mx-auto px-6 py-16",
  header: "text-center mb-12",
  title: "text-4xl font-bold mb-3",
  description: "text-gray-600 dark:text-gray-300 text-lg leading-relaxed",
  imageWrapper:
    "relative w-full h-80 rounded-2xl overflow-hidden shadow-md mb-12",
  tagsWrapper: "flex flex-wrap gap-2 mb-10",
  tag: "bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full border border-gray-200",
  linksWrapper: "flex flex-wrap gap-4 mt-10",
  liveBtn:
    "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition",
  codeBtn:
    "border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition",
};
