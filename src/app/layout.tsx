import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { PerformanceMonitor } from "@/components/performance-monitor";

const outfit = Outfit({ 
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: "BitWerks | Custom Web & Software Development",
  description: "Professional web and software development tailored to your business needs.",
  metadataBase: new URL('https://bitwerks.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={cn(outfit.className, "min-h-screen bg-background antialiased")}>
        <ThemeProvider>
          <PerformanceMonitor />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
