"use client";

import { motion } from "framer-motion";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

// Sample blog data
const articles = [
  {
    id: 1,
    title: "Understanding Complex Analysis in Modern Mathematics",
    subtitle:
      "A deep dive into the fascinating world of complex numbers and their applications in modern mathematics",
    category: "Mathematics",
    date: "2024-01-15",
    slug: "understanding-complex-analysis",
  },
  {
    id: 2,
    title: "Building Scalable Systems with Next.js and React",
    subtitle:
      "Learn how to architect large-scale applications using Next.js App Router and React Server Components",
    category: "Development",
    date: "2024-01-10",
    slug: "building-scalable-systems",
  },
  {
    id: 3,
    title: "Machine Learning: From Theory to Practice",
    subtitle:
      "Practical implementation of machine learning algorithms and their real-world applications",
    category: "Data Science",
    date: "2024-01-05",
    slug: "machine-learning-theory-practice",
  },
  {
    id: 4,
    title: "The Future of Web Development",
    subtitle:
      "Exploring emerging trends and technologies shaping the future of web development",
    category: "Development",
    date: "2024-01-01",
    slug: "future-web-development",
  },
  {
    id: 5,
    title: "Advanced Statistical Methods in Data Analysis",
    subtitle:
      "Deep dive into statistical techniques for complex data analysis and interpretation",
    category: "Data Science",
    date: "2023-12-28",
    slug: "advanced-statistical-methods",
  },
  {
    id: 6,
    title: "Linear Algebra and Its Applications",
    subtitle:
      "Understanding the fundamental concepts of linear algebra and their practical uses",
    category: "Mathematics",
    date: "2023-12-25",
    slug: "linear-algebra-applications",
  },
];

const categoryColors = {
  Mathematics: "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20",
  Development: "bg-green-500/10 text-green-500 hover:bg-green-500/20",
  "Data Science": "bg-purple-500/10 text-purple-500 hover:bg-purple-500/20",
} as const;

export function BlogList() {
  return (
    <div className="container px-4 md:px-20">
      <div className="flex flex-col items-center space-y-4 text-center mb-12">
        <motion.h1
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Latest Articles
        </motion.h1>
        <motion.p
          className="max-w-[700px] text-muted-foreground md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Exploring mathematics, software development, and data science through
          in-depth articles and tutorials.
        </motion.p>
      </div>

      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {articles.map((article, index) => (
          <motion.article
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col space-y-4"
          >
            <Link href={`/blog/${article.slug}`} className="space-y-4">
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
              <div className="relative space-y-2 p-6 rounded-2xl border bg-card">
                <div className="flex items-center justify-between">
                  <Badge
                    variant="secondary"
                    className={`${
                      categoryColors[
                        article.category as keyof typeof categoryColors
                      ]
                    } transition-colors`}
                  >
                    {article.category}
                  </Badge>
                  <time className="text-sm text-muted-foreground">
                    {format(new Date(article.date), "MMM dd, yyyy")}
                  </time>
                </div>
                <div className="space-y-2">
                  <h2 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground line-clamp-2">
                    {article.subtitle}
                  </p>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}
