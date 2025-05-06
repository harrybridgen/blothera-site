import type { Metadata } from 'next'
import './globals.css'
import MusicToggle from "@/components/music-toggle"

export const metadata = {
  title: "Blothera",
  description: "Hardcore survival, nations, and legacy. Enter the rebellion.",
  icons: {
    icon: "/icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>
        {children}
        <MusicToggle />
      </body>
    </html>
  )
}