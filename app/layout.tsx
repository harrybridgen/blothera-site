import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: "Blothera",
    template: "%s | Blothera",
  },
  description: "Blothera is a brutal, living world built on trust and survival.",
  generator: "Hand Crafted. Shaped by fire.",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
