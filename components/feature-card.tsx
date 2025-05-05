import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-red-500/50 transition-colors hover:bg-gray-800/80">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 font-minecraft">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}
