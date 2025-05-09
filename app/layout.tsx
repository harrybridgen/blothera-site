import type { Metadata } from 'next'
import './globals.css'
import MusicToggle from "@/components/music-toggle"

export const metadata = {
  title: "Blothera - Minecraft Survival With Meaning",
  description:
    "Blothera is a hardcore Minecraft server with no kits, no cash shops, and no shortcuts. Nations, bloodmoons, and real survival, earn your place in the world.",
  metadataBase: new URL("https://blothera.com"),
  openGraph: {
    title: "Blothera - Minecraft Survival With Meaning",
    description:
      "Blothera is a hardcore Minecraft world built around consequences. No griefing. No resets. Only legacy.",
    url: "https://blothera.com",
    siteName: "Blothera",
    type: "website",
  },
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
        <link rel="canonical" href="https://www.blothera.com/" />
      </body>
    </html>
  )
}