"use client";

import { motion } from "framer-motion";
import { Code, Bot, Layout, Palette } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Modern, responsive websites optimized for speed, SEO, and user experience — built with clean code and scalable architecture.",
      icon: <Layout className="h-10 w-10 text-blue-500" />,
    },
    {
      title: "AI Chatbots",
      description:
        "Custom AI-powered chatbots that handle real-time queries, improve customer support, and save valuable business time.",
      icon: <Bot className="h-10 w-10 text-green-500" />,
    },
    {
      title: "Automation & Agents",
      description:
        "Streamline workflows with automation and AI agents that reduce repetitive tasks and boost business efficiency.",
      icon: <Code className="h-10 w-10 text-purple-500" />,
    },
    {
      title: "UI/UX Design",
      description:
        "Clean, user-friendly interfaces designed to provide intuitive experiences and visually appealing layouts.",
      icon: <Palette className="h-10 w-10 text-pink-500" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto text-center mb-12 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          My Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto"
        >
          From crafting fast and responsive websites to building AI solutions
          and automations — I help businesses grow smarter and faster.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Card className="group hover:shadow-xl transition rounded-2xl border-border">
              <CardHeader className="flex flex-col items-center space-y-4">
                <div className="bg-background p-4 rounded-full shadow-md group-hover:scale-110 transition">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-center">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Animated CTA under services */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center text-muted-foreground mt-12 text-lg"
      >
        Interested in any of these services? Scroll down to{" "}
        <span className="font-semibold text-blue-500">get in touch</span>.
      </motion.p>
    </section>
  );
}
