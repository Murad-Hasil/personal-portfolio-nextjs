"use client";

import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu, Github, Linkedin, MessageCircle, FileDown } from "lucide-react";

// Navigation links stored separately for easy editing or reuse
const navItems = [
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

/**
 * Navbar
 * - Stays fixed on top of the page
 * - Shows logo + gradient name linking to homepage
 * - Includes navigation, theme toggle, and social/resume buttons
 * - Responsive: adapts to both desktop and mobile
 */
export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur dark:bg-black/40">
      <div className="container flex h-16 items-center justify-between">
        
        {/* --- Logo + Name --- */}
        <Link href="/" className="flex items-center gap-2 group">
          {/* Logo (auto scales well with text) */}
          <Image
            src="/logo/logo.png"
            alt="Murad Hasil Logo"
            width={36}
            height={36}
            className="rounded-full transition-transform duration-300 group-hover:scale-105"
            priority
          />

          {/* Gradient name, consistent with Hero section */}
          <span className="font-semibold text-lg tracking-tight bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
            Murad Hasil
          </span>
        </Link>

        {/* --- Desktop Navigation --- */}
        <nav className="hidden md:flex items-center gap-6">
          {/* Menu items */}
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}

          {/* Quick action buttons */}
          <div className="flex items-center gap-2">
            {/* Resume button */}
            <Link href="/resume/Murad-Hasil-Resume.pdf" download>
              <Button
                variant="default"
                className="rounded-2xl flex items-center gap-2"
              >
                <FileDown className="h-4 w-4" />
                Resume
              </Button>
            </Link>

            {/* GitHub */}
            <Link
              href="https://github.com/Murad-Hasil"
              target="_blank"
              aria-label="GitHub"
            >
              <Button
                variant="outline"
                size="icon"
                className="rounded-2xl"
              >
                <Github className="h-4 w-4" />
              </Button>
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/muradhasil/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <Button
                variant="outline"
                size="icon"
                className="rounded-2xl"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            </Link>

            {/* Theme toggle */}
            <ThemeToggle />
          </div>
        </nav>

        {/* --- Mobile Navigation --- */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

/**
 * MobileMenu
 * - Uses shadcn/ui Sheet for a clean slide-out effect
 * - Mirrors main navigation + action buttons
 */
function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-2xl"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-72">
        <div className="mt-6 flex flex-col gap-4">
          {/* Navigation links */}
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => {
                const activeEl = document.activeElement as HTMLElement | null;
                activeEl?.blur(); // closes sheet when link clicked
              }}
            >
              {item.label}
            </a>
          ))}

          {/* Resume download */}
          <Link href="/resume/Murad-Hasil-Resume.pdf" download>
            <Button className="w-full rounded-2xl flex items-center justify-center gap-2">
              <FileDown className="h-4 w-4" />
              Download Resume
            </Button>
          </Link>

          {/* Hire me */}
          <a href="#contact">
            <Button className="w-full rounded-2xl flex items-center justify-center gap-2">
              <MessageCircle className="h-4 w-4" />
              Hire Me
            </Button>
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
