import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deep Mendha | AI/ML Portfolio & Notes",
  description: "Knowledge-first AI/ML blog and portfolio system documenting real-world problem solving.",
  openGraph: {
    title: "Deep Mendha",
    description: "AI/ML developer documenting logic, failures, and system architecture.",
    url: "https://deepmendha.example.com", // Replace with final deployed domain
    siteName: "Deep Mendha Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Mendha | AI/ML",
    description: "Bridging the gap between raw data and tangible business value.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col max-w-4xl mx-auto px-6">
        <header className="w-full flex items-center justify-between py-8 border-b border-zinc-200 dark:border-zinc-800">
          <Link href="/" className="font-semibold text-lg tracking-tight hover:text-accent-navy transition-colors">
            Deep Mendha
          </Link>
          <nav className="flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <Link href="/blog" className="hover:text-foreground transition-colors">Notes</Link>
            <Link href="/projects" className="hover:text-foreground transition-colors">Projects</Link>
          </nav>
        </header>

        <main className="flex-1 py-12">
          {children}
        </main>

        <footer className="w-full py-8 border-t border-zinc-200 dark:border-zinc-800 text-sm text-center text-zinc-500">
          <p>© {new Date().getFullYear()} Deep Mendha. Built with Next.js.</p>
        </footer>
      </body>
    </html>
  );
}
