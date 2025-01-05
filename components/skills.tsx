"use client";

import { motion, useInView } from "framer-motion";
import { Brain, Code, Database } from "lucide-react";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Mathematics",
    icon: Brain,
    skills: [
      "Mathematical Analysis",
      "Linear Algebra",
      "Probability Theory",
      "Complex Analysis",
      "Differential Equations",
    ],
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    delay: 0,
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
    gradient: "from-purple-500 via-pink-500 to-red-500",
    delay: 0.2,
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
    gradient: "from-amber-500 via-orange-500 to-red-500",
    delay: 0.4,
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-white/10" />
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            className={`absolute bg-gradient-to-r ${category.gradient} opacity-10 blur-3xl`}
            style={{
              top: `${(index + 1) * 25}%`,
              left: `${(index + 1) * 20}%`,
              width: "30rem",
              height: "20rem",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: index * 2,
            }}
          />
        ))}
      </div>

      <div className="container px-4 md:px-20">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            className="max-w-[700px] text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            A comprehensive overview of my technical skills and areas of
            expertise.
          </motion.p>
        </div>

        <div className="grid gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCategory({
  category,
}: {
  category: (typeof skillCategories)[number];
  index: number;
}) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: category.delay }}
      className="relative group"
    >
      <div className="relative space-y-4 p-8 rounded-3xl border bg-gradient-to-r from-background via-background to-background">
        {/* Animated border */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-background via-background to-background p-[1px]">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="relative">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div
              className={`p-2 rounded-xl bg-gradient-to-br ${category.gradient} opacity-80`}
            >
              <category.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold">{category.title}</h3>
          </div>

          {/* Skills */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{
                  duration: 0.5,
                  delay: category.delay + skillIndex * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                className="relative group/skill"
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 via-primary/5 to-transparent opacity-0 group-hover/skill:opacity-100 transition-opacity" />
                <div className="relative p-4 rounded-lg border bg-background/50 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-1 h-1 rounded-full bg-gradient-to-r ${category.gradient}`}
                    />
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Add this CSS to your globals.css
