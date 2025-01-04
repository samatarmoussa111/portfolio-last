import type { Metadata } from "next";
import { Montserrat as FontSans } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = GeistMono;

export const metadata: Metadata = {
  title: "Portfolio - Math, Code, and Data",
  description:
    "Personal portfolio showcasing mathematics, software development, and data science work",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontMono.variable
        )}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
