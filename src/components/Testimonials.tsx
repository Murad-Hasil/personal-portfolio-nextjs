"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ali Khan",
      role: "Startup Founder",
      feedback:
        "Working with Murad was an absolute pleasure. He delivered a fast, responsive website that exceeded our expectations.",
      image: "/testimonials/ali.png",
    },
    {
      name: "Sarah Ahmed",
      role: "Business Owner",
      feedback:
        "Professional, reliable, and creative. Murad transformed our idea into a working solution on time and with great attention to detail.",
      image: "/testimonials/sarah.webp",
    },
    {
      name: "John Doe",
      role: "Freelance Client",
      feedback:
        "His skills in AI and Web Development are impressive. He always goes the extra mile to ensure client satisfaction.",
      image: "/testimonials/john.webp",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          What Clients Say
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="p-6 rounded-2xl shadow-lg bg-muted/50 text-center hover:shadow-xl transition"
            >
              <Quote className="h-8 w-8 text-blue-500 mx-auto mb-4" />
              <p className="text-muted-foreground mb-6 italic">“{t.feedback}”</p>
              <div className="flex flex-col items-center">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full object-cover border-2 border-blue-500 mb-3"
                />
                <h4 className="font-semibold text-foreground">{t.name}</h4>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
