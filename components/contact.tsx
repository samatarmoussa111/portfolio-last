"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
} from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="container px-4 md:px-20">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get in Touch
          </h2>
          <p className="max-w-[700px] text-muted-foreground">
            Have a question or want to work together? Feel free to reach out
            through the form or using my contact information.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Information Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Mail className="h-5 w-5 text-primary" />
                      Email
                    </h3>
                    <a
                      href="mailto:tyler@example.com"
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      tyler@example.com
                      <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Phone className="h-5 w-5 text-primary" />
                      Phone
                    </h3>
                    <a
                      href="tel:+1234567890"
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      +1 (234) 567-890
                      <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      Address
                    </h3>
                    <p className="text-muted-foreground">
                      123 Code Street
                      <br />
                      Tech City, TC 12345
                      <br />
                      United States
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Social Media</h3>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </a>
                      <a
                        href="#"
                        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                      <a
                        href="#"
                        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Send a Message</h3>
                    <p className="text-sm text-muted-foreground">
                      Fill out the form below and I&apos;ll get back to you as
                      soon as possible.
                    </p>
                  </div>
                  <div className="grid gap-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Input
                          placeholder="First name"
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Input
                          placeholder="Last name"
                          className="bg-background"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Input
                        type="email"
                        placeholder="Email"
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        type="tel"
                        placeholder="Phone (optional)"
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Textarea
                        placeholder="Your message"
                        className="min-h-[150px] bg-background"
                      />
                    </div>
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
