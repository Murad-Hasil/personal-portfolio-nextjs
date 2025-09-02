import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-8 text-center text-sm text-muted-foreground">
      <div className="container flex flex-col items-center gap-2">
        <p>© {new Date().getFullYear()} Murad Hasil. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}