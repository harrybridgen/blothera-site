import { AlertTriangle, ChevronLeft } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function UnderConstructionPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center">
        <div className="bg-red-900/20 p-5 rounded-full mb-6">
          <AlertTriangle className="h-12 w-12 text-red-500" />
        </div>
        <h1 className="text-4xl font-bold font-minecraft text-red-500 mb-4">UNDER CONSTRUCTION</h1>
        <p className="text-gray-300 max-w-xl mb-6">
          This page isn’t quite ready yet. We’re still building it behind the scenes.
        </p>
        <p className="text-gray-500 italic mb-8">
          Check back soon for more updates. The world of Blothera is always growing.
        </p>

        <Link href="/wiki">
          <Button
            variant="outline"
            className="text-red-500 border-red-600 hover:bg-red-900/20 flex items-center"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Wiki
          </Button>
        </Link>
      </main>

      <Footer />
    </div>
  )
}
