import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blothera Wiki - Knowledge Base",
  description:
    "The official knowledge base for the Blothera Minecraft server. Learn about gameplay mechanics, nations, and survival strategies.",
}

export default function WikiLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
