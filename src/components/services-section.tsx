"use client";

import { Code, Bot, Layout } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Services() {
  const services = [
  {
    title: "Web Development",
    description:
      "I design and develop modern, responsive websites that not only look professional but also deliver fast performance and a smooth user experience.",
    icon: <Layout className="h-10 w-10 text-blue-500" />,
  },
  {
    title: "AI Chatbots",
    description:
      "I create smart AI-powered chatbots that engage customers, answer queries instantly, and save your business valuable time and resources.",
    icon: <Bot className="h-10 w-10 text-green-500" />,
  },
  {
    title: "Automation & Agents",
    description:
      "I help businesses automate repetitive tasks and build AI agents that streamline workflows, improve efficiency, and reduce operational costs.",
    icon: <Code className="h-10 w-10 text-purple-500" />,
  },
  {
    title: "UI/UX Design",
    description:
      "I craft clean, user-friendly interfaces and seamless experiences that make your digital products easy to use and visually appealing.",
    icon: <Layout className="h-10 w-10 text-pink-500" />,
  },
];

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">My Services</h2>
        <p className="text-muted-foreground text-lg">
          I provide modern web solutions and AI-driven automation to help
          businesses grow and innovate.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {services.map((service, index) => (
          <Card
            key={index}
            className="group hover:shadow-xl transition rounded-2xl"
          >
            <CardHeader className="flex flex-col items-center space-y-4">
              <div className="bg-background p-4 rounded-full shadow-md group-hover:scale-110 transition">
                {service.icon}
              </div>
              <CardTitle className="text-xl font-semibold">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
