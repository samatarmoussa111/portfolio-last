"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const projects = [
  {
    title: "Math Learning Platform",
    description:
      "An interactive platform for learning advanced mathematics through visualization and practice.",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Data Analytics Dashboard",
    description:
      "A comprehensive dashboard for visualizing and analyzing large datasets with machine learning insights.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container px-4 md:px-20">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="max-w-[700px] text-muted-foreground">
            Explore some of my recent work combining mathematics, software
            development, and data science.
          </p>
        </div>
        <div className="grid gap-8 mt-12 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2">{project.title}</CardTitle>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="outline">Learn More</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
