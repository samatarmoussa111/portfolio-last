"use client";

import { motion } from "framer-motion";
import { Brain, Code, Database } from "lucide-react";

const skillCategories = [
  {
    title: "Mathematics",
    icon: Brain,
    skills: [
      "Mathematical Analysis",
      "Linear Algebra",
      "Probability Theory",
      "Complex Analysis",
    ],
  },
  {
    title: "Software Development",
    icon: Code,
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "GraphQL",
      "REST APIs",
    ],
  },
  {
    title: "Data Science",
    icon: Database,
    skills: [
      "Python",
      "pandas",
      "scikit-learn",
      "PyTorch",
      "Data Visualization",
      "Statistical Analysis",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/50">
      <div className="container px-4 md:px-20">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Skills & Expertise
          </h2>
          <p className="max-w-[700px] text-muted-foreground">
            A comprehensive overview of my technical skills and areas of
            expertise.
          </p>
        </div>
        <div className="grid gap-8 mt-12 md:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl" />
              <div className="relative space-y-6 bg-background/50 backdrop-blur-sm p-6 rounded-2xl border">
                <div className="flex items-center gap-4">
                  <category.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.2 + skillIndex * 0.1,
                      }}
                      viewport={{ once: true }}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
