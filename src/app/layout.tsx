import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Footer } from "@/app/components/Footer";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { AdminAwareNavbar } from "@/app/components/AdminAwareNavbar";
import { getSiteBaseUrl } from "@/lib/blog/site-base-url";

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
  description:
    "Professional web and software development rooted in Denver and Northern Colorado, serving teams nationwide.",
  metadataBase: new URL(getSiteBaseUrl()),
  keywords: [
    "web development",
    "software development",
    "custom software",
    "web design",
    "app development",
    "Denver",
    "Northern Colorado",
    "Fort Collins",
    "Boulder",
    "Greeley",
    "Loveland",
    "Longmont",
    "Windsor",
    "Colorado",
    "Colorado Springs",
    "Aurora",
    "Lakewood",
    "Thornton",
    "Westminster",
    "Arvada",
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
    description:
      "Professional web and software development rooted in Denver and Northern Colorado, serving teams nationwide.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BitWerks | Custom Web & Software Development',
    description:
      "Professional web and software development rooted in Denver and Northern Colorado, serving teams nationwide.",
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
        <meta name="google-site-verification" content="cClHOsSgAwv7YWedNJ0b56X9X7JcKoSK-fJkPwf1PWE" />
      </head>
      <body className={cn(outfit.className, "min-h-screen bg-background antialiased")}>
        <ThemeProvider>
          <AdminAwareNavbar />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
