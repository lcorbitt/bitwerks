import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";

const outfit = Outfit({ 
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '600', '700'],
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: {
    default: "BitWerks | Custom Web & Software Development",
    template: "%s | BitWerks",
  },
  description: "Professional grade web and software development tailored to your business needs. Serving businesses nationwide from Denver, CO.",
  metadataBase: new URL('https://bitwerks.dev'),
  keywords: [
    "web development",
    "software development",
    "custom software",
    "web design",
    "app development",
    "Denver",
    "Fort Collins",
    "Boulder",
    "Colorado Springs",
    "Aurora",
    "Thornton",
    "Westminster",
    "Arvada",
    "Lakewood",
    "Thornton",
    "Colorado",
    "nationwide",
    "small business",
    "startup",
    "white label partnerships",
  ],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/logo-light.png', type: 'image/png' },
    ],
    shortcut: '/logo-light.png',
    apple: '/logo-light.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'BitWerks',
    title: 'BitWerks | Custom Web & Software Development',
    description: 'Professional grade web and software development serving businesses nationwide from Denver, CO.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BitWerks | Custom Web & Software Development',
    description: 'Professional grade web and software development serving businesses nationwide from Denver, CO.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        <link rel="icon" type="image/png" href="/logo-light.png" />
        <link rel="shortcut icon" type="image/png" href="/logo-light.png" />
        <link rel="apple-touch-icon" href="/logo-light.png" />
      </head>
      <body className={cn(outfit.className, "min-h-screen bg-background antialiased")}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
