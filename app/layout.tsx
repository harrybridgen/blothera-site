import type { Metadata } from 'next'
import './globals.css'
import MusicToggle from '@/components/music-toggle'

export const metadata: Metadata = {
  title: 'Blothera - Minecraft Survival With Meaning',
  description:
    'Blothera is a hardcore Minecraft server with no kits, no cash shops, and no shortcuts. Nations, bloodmoons, and real survival, earn your place in the world.',
  metadataBase: new URL('https://blothera.com'),
  openGraph: {
    title: 'Blothera - Minecraft Survival With Meaning',
    description:
      'Blothera is a hardcore Minecraft world built around consequences. No griefing. No resets. Only legacy.',
    url: 'https://blothera.com',
    siteName: 'Blothera',
    type: 'website',
  },
  icons: {
    icon: '/icon.png',
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
        <title>Blothera</title>
        <meta
          name="description"
          content="Blothera is a hardcore Minecraft server with no kits, no cash shops, and no shortcuts. Nations, bloodmoons, and real survival, earn your place in the world."
        />
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://blothera.com/" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Blothera',
              url: 'https://blothera.com',
              logo: 'https://blothera.com/icon.png',
            }),
          }}
        />
      </head>
      <body>
        {children}
        <MusicToggle />
      </body>
    </html>
  )
}
