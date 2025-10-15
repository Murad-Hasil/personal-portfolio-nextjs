// src/components/data/projects.ts

const projects = [
  {
    title: "AI Chatbot Demo 🤖",
    description:
      "An interactive AI chatbot built with Next.js, TypeScript, and Tailwind CSS. It connects with the Gemini 2.0 Flash API to generate real-time AI responses with a clean, responsive UI.",
    tags: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Gemini API",
      "Framer Motion",
    ],
    image: "/chatbot-og-image.png",
    links: {
      demo: "https://ai-chatbot-demo-eight.vercel.app",
      code: "https://github.com/Murad-Hasil/ai-chatbot-demo",
    },
  },
  {
    title: "Portfolio Website",
    description:
      "Responsive portfolio built with Next.js, TypeScript, and Tailwind CSS — featuring Framer Motion animations, dark/light mode, and SEO optimization.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "SEO"],
    image: "/portfoliosc.png",
    links: {
      demo: "https://portfolio-nextjs-woad-gamma.vercel.app",
      code: "https://github.com/Murad-Hasil/personal-portfolio-nextjs.git",
    },
  },
  {
    title: "Task Manager App",
    description:
      "Full-stack task manager with authentication, cloud storage, and real-time updates — built for productivity and collaboration.",
    tags: ["Next.js", "MongoDB", "TypeScript"],
    image: "/project/projects.png",
    links: {
      demo: "https://demo-taskmanager.com",
      code: "https://github.com/your-repo/task-manager",
    },
  },
];

export default projects;
