import type { Metadata } from 'next'
import './globals.css'

export const metadata = {
  title: "Blothera",
  description: "Hardcore survival, nations, and legacy. Enter the rebellion.",
  icons: {
    icon: "/images/icon.png",
  },
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
