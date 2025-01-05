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
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    category: "Math",
    title: "Understanding Complex Analysis",
    summary:
      "A deep dive into the fascinating world of complex analysis and its applications.",
  },
  {
    category: "Data Science",
    title: "Machine Learning in Practice",
    summary:
      "Real-world applications of machine learning algorithms and their implementation.",
  },
  {
    category: "SaaS",
    title: "Building Scalable Applications",
    summary:
      "Best practices for creating scalable and maintainable SaaS applications.",
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-24">
      <div className="container px-4 md:px-20">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Latest Articles
          </h2>
          <p className="max-w-[700px] text-muted-foreground">
            Insights and thoughts on mathematics, data science, and software
            development.
          </p>
        </div>
        <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card>
                <CardHeader>
                  <Badge className="w-fit">{post.category}</Badge>
                  <CardTitle className="mt-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.summary}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <Link href="/posts">
            <Button size="lg" variant="outline" className="group">
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
