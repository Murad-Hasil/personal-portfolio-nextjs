"use client";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu, Github, Linkedin, MessageCircle } from "lucide-react";

const nav = [
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur dark:bg-black/50">
      <div className="container flex h-16 items-center justify-between">
        <Link href="#" className="font-semibold tracking-tight">
          Murad Hasil
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {i.label}
            </a>
          ))}
          <div className="flex items-center gap-2">
            <Link
              href="https://github.com/Murad-Hasil"
              target="_blank"
              aria-label="GitHub"
            >
              <Button variant="outline" className="rounded-2xl" size="icon">
                <Github className="h-4 w-4" />
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/murad-hasil-9044582b9/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <Button variant="outline" className="rounded-2xl" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

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
          {nav.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="text-base"
              onClick={() => {
                const activeEl = document.activeElement as HTMLElement | null;
                activeEl?.blur();
              }}
            >
              {i.label}
            </a>
          ))}
          <a href="#contact">
            <Button className="w-full rounded-2xl">
              <MessageCircle className="mr-2 h-4 w-4" />
              Hire Me
            </Button>
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}