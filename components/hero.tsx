"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-screen pt-16 flex items-center justify-center overflow-hidden bg-background"
    >
      <div className="container px-4 md:px-20">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-4"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              Maching learning models
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl max-w-[600px]">
              I create predictive models to solve a particular business problem
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="min-w-[150px]">
                <Link href="#projects">Hire Me</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="min-w-[150px]"
              >
                <Link href="#contact"> View My Work</Link>
              </Button>
            </div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] lg:h-[600px] w-full rounded-lg overflow-hidden"
          >
            <Image
              src="/data-science-lifecycle.svg"
              alt="Data Science Project Lifecycle"
              fill
              className="object-contain rounded-lg"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
