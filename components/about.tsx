"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const timeline = [
  {
    year: "2023",
    events: [
      "Building a new startup, this time it's going to be a big one",
      "Started writing blogs as a daily habit. Won the nobel prize for literature",
      "My brother went on to pursue a career in music, he's now a famous singer",
    ],
  },
  {
    year: "2022",
    events: [
      "Bought a new M2 chip macbook pro wow this is crazy!",
      "Broke the ship as soon as I got it, had to buy a new one",
      "Bought a new M2 chip macbook pro and started living on the streets",
    ],
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container px-6 md:px-6">
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
                  Hey! I&apos;m{" "}
                  <span className="text-primary">Tyler Durden</span> and
                  I&apos;m a full stack soap engineer.
                </h2>
                <p className="text-muted-foreground">
                  I&apos;ve been obsessed with technology ever since I was a
                  kid. When I wasn&apos;t taking apart my family&apos;s computer
                  (sorry mom), I was teaching myself how to code. Fast forward a
                  few years, and now I&apos;m a full-fledged code ninja with an
                  insatiable thirst for creating beautiful websites and
                  functional applications.
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
                    src="/placeholder.svg"
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
