import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "World Ape - Gaming Platform on World Chain",
  description: "The #1 gaming platform on World Chain. Play free games, earn real tokens, and compete for weekly WLD prizes. Daily claims, multiple games, and 20 WLD distributed every week.",
  keywords: ["World Ape", "World Chain", "WLD", "APE", "crypto gaming", "play to earn"],
  openGraph: {
    title: "World Ape - Gaming Platform on World Chain",
    description: "Play free games, earn real tokens, and compete for weekly WLD prizes.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#1a1a2e",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} ${jetbrainsMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
