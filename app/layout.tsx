import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Script from "next/script"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Prasad Thite | DevOps Lead | Portfolio",
  description:
    "DevOps Lead with 7+ years of experience in CI/CD, Automation, Cloud, and Infrastructure Management.",
  keywords: [
    "DevOps Lead",
    "DevOps Engineer",
    "Automation Engineer",
    "Cloud Engineer",
    "CI/CD",
    "Automation",
    "Cloud",
    "Infrastructure Management",
    "Pune",
    "prasad thite",
    "prasad thite website",
    "prasad thite devops lead"
  ],
  generator: "v0.app",
  openGraph: {
    title: "Prasad Thite | DevOps Lead",
    description:
      "DevOps Lead with 7+ years of experience in CI/CD, Automation, Cloud, and Infrastructure Management.",
    type: "website",
    locale: "en_US",
    url: "https://nikitesh.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prasad Thite | DevOps Lead",
    description:
      "DevOps Lead with 7+ years of experience in CI/CD, Automation, Cloud, and Infrastructure Management.",
  },
  alternates: {
    canonical: "https://nikitesh.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-L3XQRP3SR9" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-L3XQRP3SR9', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Prasad Thite",
              url: "https://nikiteshbhadade.com",
              jobTitle: "Sr. Software Engineer",
              email: "prasad.thite@outlook.com",
              telephone: "+919518377512",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pune",
                addressCountry: "IN",
              },
              sameAs: ["https://www.linkedin.com/in/prasad-thite/", "https://github.com/prasad-thite"],
              knowsAbout: ["React.js", "JavaScript", "SASS", "HTML5", "CSS3", "Web Accessibility", "WCAG AA"],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
