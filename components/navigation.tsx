"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-lg font-bold">
          Samatar Barkadleh
        </Link>
        <nav className="hidden md:flex gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium transition-colors hover:text-primary"
            >
              {link.label}
              <motion.span
                className="absolute left-0 top-full h-px w-full bg-primary"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
            </Link>
          ))}
        </nav>
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.span
            className="h-0.5 w-6 bg-foreground"
            animate={{ rotateZ: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
          />
          <motion.span
            className="h-0.5 w-6 bg-foreground"
            animate={{ opacity: isOpen ? 0 : 1 }}
          />
          <motion.span
            className="h-0.5 w-6 bg-foreground"
            animate={{ rotateZ: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
          />
        </button>
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-background/80 backdrop-blur-md border-b md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <nav className="container flex flex-col py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}
