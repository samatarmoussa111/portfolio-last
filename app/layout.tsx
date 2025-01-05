import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";
import { Navigation } from "@/components/navigation";
import { Poppins } from "next/font/google";
import { Footer } from "@/components/footer";
import "./globals.css";

// Font files can be colocated inside of `app`

const fontMono = GeistMono;

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
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
          "min-h-screen bg-background antialiased",
          fontMono.variable,
          poppins.className
        )}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
