import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"

export const metadata: Metadata = {
  title: {
    default: "SpelVlam Blog - Jouw Bron voor Gaming Nieuws en Reviews",
    template: "%s | SpelVlam Blog",
  },
  description:
    "Ontdek de fascinerende wereld van bordspellen en digitale games. Leer nieuwe strategieën, ontwikkel je vaardigheden en vind je volgende favoriete spel.",
  keywords: [
    "bordspellen",
    "digitale games",
    "gaming",
    "Nederland",
    "reviews",
    "strategieën",
    "spelletjes",
    "board games",
    "gaming community",
    "spel reviews",
    "gaming nieuws",
  ],
  authors: [{ name: "SpelVlam Blog Team", url: "https://spelvlamblog.com/over-ons" }],
  creator: "SpelVlam Blog",
  publisher: "SpelVlam Blog",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://spelvlamblog.com"),
  alternates: {
    canonical: "/",
    languages: {
      "nl-NL": "/",
    },
  },
  openGraph: {
    title: "SpelVlam Blog - Jouw Bron voor Gaming Nieuws en Reviews",
    description: "Ontdek de fascinerende wereld van bordspellen en digitale games.",
    url: "https://spelvlamblog.com",
    siteName: "SpelVlam Blog",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SpelVlam Blog - Gaming Community Nederland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SpelVlam Blog - Jouw Bron voor Gaming Nieuws en Reviews",
    description: "Ontdek de fascinerende wereld van bordspellen en digitale games.",
    creator: "@spelvlamblog",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6366f1" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
