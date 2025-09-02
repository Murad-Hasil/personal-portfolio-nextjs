"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, MessageCircle } from "lucide-react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("https://formspree.io/f/xblagrld", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-semibold">Contact</h2>
      <p className="mt-2 text-muted-foreground">
        Tell me about your project—I&apos;ll reply within 24 hours.
      </p>

      <Card className="mt-6 rounded-3xl">
        <CardHeader>
          <CardTitle>Start a conversation</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
            <Input
              name="name"
              placeholder="Your Name"
              required
              className="rounded-2xl sm:col-span-2"
            />
            <Input
              name="email"
              placeholder="Your Email"
              type="email"
              required
              className="rounded-2xl"
            />
            <Input
              name="subject"
              placeholder="Subject"
              required
              className="rounded-2xl"
            />
            <Textarea
              name="message"
              placeholder="Share a few details..."
              className="rounded-2xl sm:col-span-2"
              rows={6}
              required
            />
            <div className="sm:col-span-2">
              <Button
                type="submit"
                disabled={status === "loading"}
                className="rounded-2xl w-full"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>

          {/* Status messages */}
          {status === "success" && (
            <p className="mt-4 text-green-600 text-sm">✅ Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="mt-4 text-red-600 text-sm">❌ Something went wrong. Try again.</p>
          )}

          {/* Direct email */}
          <p className="mt-6 text-sm text-muted-foreground">
            Or email directly:{" "}
            <a
              href="mailto:mbmuradhasil@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              mbmuradhasil@gmail.com
            </a>
          </p>

          {/* Social links */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/Murad-Hasil"
              target="_blank"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-foreground transition"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/murad-hasil-9044582b9/"
              target="_blank"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground transition"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://wa.me/923142241393"
              target="_blank"
              aria-label="WhatsApp"
              className="text-muted-foreground hover:text-foreground transition"
            >
              <MessageCircle className="h-6 w-6" />
            </a>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}