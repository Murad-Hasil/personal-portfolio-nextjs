// src/components/data/projects.ts

/**
 * Project Type
 * ------------
 * Defines the structure of each project for maintainability and TypeScript auto-completion.
 * Keeping this in one place ensures consistency across components like Projects.tsx and Case Study pages.
 */
export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  links: {
    demo: string;
    code: string;
  };
  features: string[];
  challenges: string[];
  learnings: string[];
  longDescription?: string; // optional — used only for case study pages
}

/**
 * Portfolio Projects
 * ------------------
 * Centralized project data used to render cards and case studies.
 */
const projects: Project[] = [
  {
    slug: "ai-chatbot-demo",
    title: "AI Chatbot Demo 🤖",
    description:
      "An interactive AI chatbot built with Next.js, TypeScript, and Tailwind CSS. It connects with the Gemini 2.0 Flash API to generate real-time AI responses with a clean, responsive UI.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Gemini API",
      "Framer Motion",
    ],
    image: "/project/chatbot.png",
    links: {
      demo: "https://ai-chatbot-demo-eight.vercel.app",
      code: "https://github.com/Murad-Hasil/ai-chatbot-demo",
    },
    features: [
      "Built with Next.js 14 (App Router) for fast, server-side rendered UI.",
      "Integrated with Google Gemini 2.0 Flash API for real-time conversational AI.",
      "Includes chat bubbles, message timestamps, loading indicator, and scroll-to-bottom behavior.",
      "Fully responsive UI designed with Tailwind CSS and Framer Motion animations.",
      "Supports message history and local state for persistent user experience.",
    ],
    challenges: [
      "Managing chat message flow and asynchronous Gemini API responses without UI lag.",
      "Implementing auto-scroll and proper message alignment in responsive layouts.",
      "Ensuring clean UI design that looks consistent in both dark and light themes.",
    ],
    learnings: [
      "Improved understanding of real-time async state management in React and Next.js.",
      "Learned how to handle streaming AI responses for better UX.",
      "Gained experience integrating third-party AI APIs securely using environment variables.",
      "Learned to structure reusable components for chat messages and UI consistency.",
    ],
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "Responsive portfolio built with Next.js, TypeScript, and Tailwind CSS — featuring Framer Motion animations, dark/light mode, and SEO optimization.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "SEO"],
    image: "/project/portfolio.png",
    links: {
      demo: "https://personal-portfolio-nextjs-ebon.vercel.app/",
      code: "https://github.com/Murad-Hasil/personal-portfolio-nextjs.git",
    },
    features: [
      "Dark and light theme toggle with system preference detection.",
      "Smooth animations and transitions powered by Framer Motion.",
      "Fully responsive layout for desktop, tablet, and mobile.",
      "SEO-friendly meta tags and structured project data.",
    ],
    challenges: [
      "Balancing animations with performance optimization.",
      "Maintaining consistent theme colors across all components.",
      "Ensuring accessibility compliance (a11y) with Tailwind classes.",
    ],
    learnings: [
      "Deepened understanding of Next.js static generation and routing.",
      "Enhanced skills in building accessible and optimized UIs.",
      "Mastered deployment and continuous updates using Vercel.",
    ],
  },
  {
    slug: "ai-content-generator",
    title: "AI Content Generator 📝",
    description:
      "A content creation tool powered by Gemini 2.0 Flash that generates SEO-friendly text in different tones. Built with Next.js, TypeScript, and Tailwind CSS for smooth and responsive UX.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini API", "shadcn/ui"],
    image: "/project/ai-content-generator.png",
    links: {
      demo: "https://ai-content-generator-mu-ten.vercel.app/",
      code: "https://github.com/Murad-Hasil/ai-content-generator",
    },
    features: [
      "Generates content dynamically using Google Gemini 2.0 Flash API.",
      "Supports multiple tones — Informative, Casual, Professional, and Fun.",
      "Copy-to-clipboard functionality with toast feedback using shadcn/ui.",
      "Modern and responsive UI built with Tailwind CSS and Framer Motion animations.",
      "Reusable component structure for easy scalability.",
    ],
    challenges: [
      "Designing a clean prompt flow for Gemini API while maintaining good UX.",
      "Managing dynamic tone selection and integrating it with real-time API calls.",
      "Creating a consistent and reusable UI component system using shadcn/ui.",
    ],
    learnings: [
      "Learned how to connect Gemini API to custom UI elements in Next.js.",
      "Practiced modular component design and improved UI/UX skills.",
      "Enhanced understanding of user feedback systems (toasts, loaders, copy button).",
      "Gained deeper experience in structuring reusable frontend logic with TypeScript.",
    ],
  },
];

export default projects;
