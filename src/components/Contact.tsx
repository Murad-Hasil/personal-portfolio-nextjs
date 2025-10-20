"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, MessageCircle, Mail, MapPin } from "lucide-react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // Handles the form submission using Formspree
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
    <section id="contact" className="py-20 bg-muted/40">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            Get in Touch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Let’s build something great together — share your project details and I’ll respond within 24 hours.
          </motion.p>
        </div>

        {/* Two-column layout: Info (left) + Form (right) */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Info Card - Slight Glass Effect */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="rounded-3xl backdrop-blur-md bg-background/60 border border-border shadow-sm hover:shadow-md transition">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Contact Details</CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-500" />
                  <a
                    href="mailto:mbmuradhasil@gmail.com"
                    className="text-muted-foreground hover:text-foreground transition"
                  >
                    mbmuradhasil@gmail.com
                  </a>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-green-500" />
                  <p className="text-muted-foreground">Karachi, Pakistan</p>
                </div>

                {/* Social Links */}
                <div className="flex gap-5 pt-4">
                  <a
                    href="https://github.com/Murad-Hasil"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-muted-foreground hover:text-foreground transition"
                  >
                    <Github className="h-6 w-6" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/muradhasil/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-muted-foreground hover:text-foreground transition"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>

                  <a
                    href="https://wa.me/923142241393"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="text-muted-foreground hover:text-foreground transition"
                  >
                    <MessageCircle className="h-6 w-6" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="rounded-3xl hover:shadow-lg transition">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-center">
                  Start a Conversation
                </CardTitle>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    required
                    className="rounded-2xl"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
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
                    rows={6}
                    required
                    className="rounded-2xl"
                  />

                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="rounded-2xl w-full"
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </Button>
                </form>

                {/* Status messages */}
                {status === "success" && (
                  <p className="mt-4 text-green-600 text-sm text-center">
                    ✅ Message sent successfully!
                  </p>
                )}
                {status === "error" && (
                  <p className="mt-4 text-red-600 text-sm text-center">
                    ❌ Something went wrong. Try again.
                  </p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
