import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Home } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function BasicResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-red-400 flex items-center">
            <Home className="h-4 w-4 mr-1" />
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/wiki" className="hover:text-red-400">Wiki</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/wiki/getting-started" className="hover:text-red-400">Getting Started</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-300">Basic Resources</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4 sticky top-20">
              <h3 className="font-minecraft text-lg mb-4 pb-2 border-b border-gray-800">GETTING STARTED</h3>
              <ul className="space-y-2">
                <li><Link href="/wiki/getting-started" className="text-gray-300 hover:text-red-400 block py-1">Overview</Link></li>
                <li><Link href="/wiki/getting-started/first-night" className="text-gray-300 hover:text-red-400 block py-1">First Night Survival</Link></li>
                <li><Link href="/wiki/getting-started/health-system" className="text-gray-300 hover:text-red-400 block py-1">Health System</Link></li>
                <li><Link href="/wiki/getting-started/resources" className="text-red-500 font-bold block py-1">Basic Resources</Link></li>
                <li><Link href="/wiki/getting-started/shelter" className="text-gray-300 hover:text-red-400 block py-1">Building a Shelter</Link></li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <h1 className="text-3xl font-bold mb-2 font-minecraft text-red-500">BASIC RESOURCES</h1>
              <p className="text-gray-400 italic mb-6">Essential items for early survival</p>

              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 mb-4">
                  In Blothera, gathering the right resources early can mean the difference between survival and a quick death. Here's what to prioritize:
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 font-minecraft">ESSENTIAL GATHERING</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
                  <li><strong>Quests:</strong> Complete the early game quests for starter materials and unlocks.</li>
                  <li><strong>Wood:</strong> The foundation of all tools and shelters. Chop trees immediately.</li>
                  <li><strong>Stone:</strong> Upgrade to stone tools quickly for durability and damage.</li>
                  <li><strong>Coal:</strong> For torches and smelting, found near surface stone cliffs.</li>
                  <li><strong>Iron Nuggets:</strong> Use them to craft early-game chainmail armor.</li>
                  <li><strong>Wool:</strong> Needed for crafting beds and string.</li>
                  <li><strong>Food:</strong> Meat, bread, or stew, keep your hunger bar full.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 font-minecraft">RECIPE UNLOCKS</h2>
                <p className="text-gray-300 mb-4">
                  Blothera uses recipe unlocks tied to progression:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
                  <li>Iron Ingot = Unlocks Chainmail Armor recipes (made using nuggets)</li>
                  <li>Wool = Unlocks String crafting</li>
                  <li>Gold Apple = Unlocks Enchanted Golden Apple recipe</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 font-minecraft">QUICK CRAFT CHECKLIST</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
                  <li>Crafting Table</li>
                  <li>Stone Pickaxe, Axe, and Sword</li>
                  <li>Furnace (for food and early ores)</li>
                  <li>Bed (for respawn and healing)</li>
                  <li>Torches (for light and exploration)</li>
                </ul>

                <p className="text-gray-300 mt-6">
                  These are the fundamentals that lead you toward stable early-game progression. Don’t skip them.
                </p>
              </div>

              {/* Article Navigation */}
              <div className="mt-8 pt-6 border-t border-gray-800 flex justify-between">
                <Link href="/wiki/getting-started/health-system">
                  <Button variant="outline" className="text-red-500 border-red-600 hover:bg-red-900/20 flex items-center">
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back: Health System
                  </Button>
                </Link>
                <Link href="/wiki/getting-started/shelter">
                  <Button variant="outline" className="text-red-500 border-red-600 hover:bg-red-900/20 flex items-center">
                    Next: Building a Shelter
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </article>

            <div className="mt-4 text-sm text-gray-500 text-right">Last updated: May 8, 2025</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
