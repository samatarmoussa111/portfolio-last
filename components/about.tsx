"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const timeline = [
  {
    year: "2024",
    events: [
      "Fell in love with data science — it just made sense to combine my math background and coding skills.",
      "Started crafting data-driven solutions, bridging logic and creativity.",
    ],
  },
  {
    year: "2023",
    events: [
      "Moved to the U.S. and took a bold step: launched my SaaS business.",
      "Built tools that empower people, solving problems I care deeply about.",
    ],
  },
  {
    year: "2020",
    events: [
      "Discovered the world of programming and dove in headfirst, armed with curiosity and a stack of online courses.",
      "Spent countless nights juggling teaching and coding, slowly turning a passion into expertise.",
    ],
  },
  {
    year: "2019",
    events: [
      "Became a university math professor, sharing my love for numbers with future problem-solvers.",
      "Learned the power of patience and the art of explaining the unexplainable.",
    ],
  },
  {
    year: "2016",
    events: [
      "Began my studies in Mathematical Research at the University of Besançon, immersing myself in the foundations of advanced mathematics.",
      "Discovered a passion for unraveling complex problems and the potential of math to solve real-world challenges.",
    ],
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container px-4 md:px-20">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Hi, I&apos;m Samatar Barkadleh
                </h2>
                <p className="text-muted-foreground">
                  Hi, I&apos;m Samatar Barkadleh. Math taught me how to solve
                  problems, coding taught me how to build solutions. Along the
                  way, I&apos;ve been a teacher, a lifelong learner, and now, a
                  creator—transforming ideas into SaaS products and data-driven
                  insights.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 shrink-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative w-24 h-24 overflow-hidden rounded-xl border-2 border-primary/20"
                >
                  <Image
                    src="/photo_portfolio_combined.png"
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div className="flex gap-2">
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="space-y-4 container px-6 font-mono">
              <h3 className="text-lg font-semibold">
                Here&apos;s a timeline of what I&apos;ve been up to:
              </h3>
              <div className="space-y-8">
                {timeline.map((period) => (
                  <motion.div
                    key={period.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l border-primary/20"
                  >
                    <div className="absolute left-0 flex items-center justify-center w-8 h-8 -translate-x-1/2 bg-muted rounded-full border border-primary/20">
                      <span className="text-sm font-bold text-primary">
                        {period.year}
                      </span>
                    </div>
                    <ul className="space-y-4">
                      {period.events.map((event, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="text-sm text-muted-foreground"
                        >
                          {event}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
