"use client";

import { motion } from "framer-motion";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Twitter,
  Linkedin,
  LinkIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface BlogPostProps {
  post: {
    title: string;
    subtitle: string;
    category: string;
    date: string;
    author: {
      name: string;
      image: string;
      role: string;
    };
    content: string;
    relatedPosts: {
      title: string;
      subtitle: string;
      category: string;
      slug: string;
    }[];
  };
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container px-4 md:px-20">
        {/* Back to blog link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/posts"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all articles
          </Link>
        </motion.div>

        {/* Article header */}
        <motion.header
          className="max-w-3xl mx-auto mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Badge
            variant="secondary"
            className="mb-4 bg-primary/10 text-primary hover:bg-primary/20"
          >
            {post.category}
          </Badge>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            {post.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-6">{post.subtitle}</p>
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="relative w-10 h-10 overflow-hidden rounded-full">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-sm text-left">
                <p className="font-medium">{post.author.name}</p>
                <p className="text-muted-foreground">{post.author.role}</p>
              </div>
            </div>
            <Separator orientation="vertical" className="h-8" />
            <time className="text-sm text-muted-foreground">
              {format(new Date(post.date), "MMMM dd, yyyy")}
            </time>
          </div>
        </motion.header>

        {/* Article content */}
        <motion.article
          className="prose prose-gray dark:prose-invert max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Share buttons */}
        <motion.div
          className="max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Separator className="mb-6" />
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Share this article</p>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Twitter className="w-4 h-4" />
                <span className="sr-only">Share on Twitter</span>
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="w-4 h-4" />
                <span className="sr-only">Share on LinkedIn</span>
              </Button>
              <Button variant="outline" size="icon">
                <LinkIcon className="w-4 h-4" />
                <span className="sr-only">Copy link</span>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Related posts */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold tracking-tighter mb-6">
            Related Articles
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {post.relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="block group"
              >
                <Card className="h-full transition-colors hover:border-primary">
                  <div className="p-6">
                    <Badge
                      variant="secondary"
                      className="mb-2 bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {relatedPost.category}
                    </Badge>
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {relatedPost.subtitle}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Navigation buttons */}
        <motion.div
          className="max-w-3xl mx-auto mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Separator className="mb-6" />
          <div className="flex justify-between">
            <Button variant="ghost" className="group">
              <ChevronLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Previous Article
            </Button>
            <Button variant="ghost" className="group">
              Next Article
              <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
