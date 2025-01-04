"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Twitter } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
          <p className="max-w-[700px] text-muted-foreground">
            Have a question or want to work together? Feel free to reach out.
          </p>
        </div>
        <div className="mx-auto max-w-lg mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="grid gap-4">
              <Input placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Textarea placeholder="Message" className="min-h-[150px]" />
            </div>
            <Button className="w-full">Send Message</Button>
            <div className="flex justify-center gap-4 mt-8">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

