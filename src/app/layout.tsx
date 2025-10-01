import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EightyThree Apps - App Portfolio & Tech Blog",
  description: "Modern web applications and mobile apps portfolio. Discover innovative solutions and read about the latest in web development.",
  keywords: ["web development", "mobile apps", "portfolio", "tech blog", "React", "Next.js"],
  authors: [{ name: "EightyThree Apps" }],
  openGraph: {
    title: "EightyThree Apps - App Portfolio & Tech Blog",
    description: "Modern web applications and mobile apps portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <div className="fixed top-20 right-4 z-40">
          <ThemeToggle />
        </div>
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
