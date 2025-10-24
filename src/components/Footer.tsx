"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, MessageCircle, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Footer() {
  const year = new Date().getFullYear();
  const [showButton, setShowButton] = useState(false);

  // Show button only after scrolling down
  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t bg-muted/40 py-10 text-sm text-muted-foreground">
      <div className="container mx-auto flex flex-col items-center gap-6 text-center">
        {/* Logo + Name */}
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-90 transition"
        >
          <Image
            src="/logo/logo.png"
            alt="Murad Hasil Logo"
            width={32}
            height={32}
            className="rounded-md"
          />
          <span className="font-semibold text-foreground text-base">
            Murad Hasil
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          <Link
            href="/"
            aria-label="Navigate to Home section"
            prefetch={false}
            className="hover:text-foreground transition"
          >
            Home
          </Link>
          <a
            href="#about"
            aria-label="Navigate to About section"
            className="hover:text-foreground transition"
          >
            About
          </a>
          <a
            href="#projects"
            aria-label="Navigate to Projects section"
            className="hover:text-foreground transition"
          >
            Projects
          </a>
          <a
            href="#services"
            aria-label="Navigate to Services section"
            className="hover:text-foreground transition"
          >
            Services
          </a>
          <a
            href="#contact"
            aria-label="Navigate to Contact section"
            className="hover:text-foreground transition"
          >
            Contact
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-5">
          <a
            href="https://github.com/Murad-Hasil"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="GitHub"
            className="hover:text-foreground transition"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/muradhasil/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="LinkedIn"
            className="hover:text-foreground transition"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://wa.me/923142241393"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="WhatsApp"
            className="hover:text-foreground transition"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-border" />

        {/* Copyright */}
        <p className="text-xs text-muted-foreground">
          © {year} Murad Hasil. All rights reserved.
        </p>
      </div>

      {/* Scroll-to-Top Button with Animation */}
      <AnimatePresence>
        {showButton && (
          <motion.button
            key="scroll-button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 rounded-full bg-background/80 backdrop-blur-sm shadow-md border p-3 text-foreground hover:bg-accent hover:text-accent-foreground transition"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
