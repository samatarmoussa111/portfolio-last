"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Github } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Math Learning Platform",
    description:
      "An interactive platform for learning advanced mathematics through visualization and practice.",
    tags: ["Next.js", "Three.js", "WebGL", "TypeScript"],
    link: "https://math-platform.example.com",
    github: "https://github.com/example/math-platform",
    gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
    gradientHover: "from-blue-500/30 via-cyan-500/30 to-teal-500/30",
  },
  {
    title: "Data Analytics Dashboard",
    description:
      "A comprehensive dashboard for visualizing and analyzing large datasets with machine learning insights.",
    tags: ["React", "D3.js", "Python", "TensorFlow"],
    link: "https://analytics-dashboard.example.com",
    github: "https://github.com/example/analytics-dashboard",
    gradient: "from-purple-500/20 via-pink-500/20 to-red-500/20",
    gradientHover: "from-purple-500/30 via-pink-500/30 to-red-500/30",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container px-4 md:px-20">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="max-w-[700px] text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Explore some of my recent work combining mathematics, software
            development, and data science.
          </motion.p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative  rounded-3xl border  p-8 transition-all duration-300 hover:shadow-lg lg:p-10"
    >
      {/* Animated gradient background */}
      <motion.div
        className={`absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r ${project.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`}
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Spotlight effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              ${project.gradientHover},
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
          <p className="text-muted-foreground">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-background/50 backdrop-blur-sm"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Button asChild variant="outline" className="group/button">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Visit Project
              <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              <span className="sr-only">View source on GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
