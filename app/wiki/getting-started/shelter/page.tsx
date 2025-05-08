import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Home, Hammer, Shield } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function ShelterPage() {
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
          <span className="text-gray-300">Building a Shelter</span>
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
                <li><Link href="/wiki/getting-started/resources" className="text-gray-300 hover:text-red-400 block py-1">Basic Resources</Link></li>
                <li><Link href="/wiki/getting-started/shelter" className="text-red-500 font-bold block py-1">Building a Shelter</Link></li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <h1 className="text-3xl font-bold mb-2 font-minecraft text-red-500">BUILDING A SHELTER</h1>
              <p className="text-gray-400 italic mb-6">Your first line of defense against Blothera's dangers</p>

              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 mb-4">
                  In Blothera, nightfall isn’t just inconvenient, it’s deadly. Your shelter is your safe zone. Here's how to make it count.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 font-minecraft">TYPES OF SHELTERS</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  <li><strong>Quick Dirt Hut:</strong> Fast to build, decent early protection</li>
                  <li><strong>Hillside Dugout:</strong> Easy to secure with one entrance</li>
                  <li><strong>Village House:</strong> Reinforce an existing building with extra walls and torches</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 font-minecraft">MUST-HAVE FEATURES</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  <li>Torches: place inside and around the perimeter</li>
                  <li>Door & backup blocks to seal it off</li>
                  <li>Bed: for healing and spawn setting</li>
                  <li>Chest and Furnace: storage + survival</li>
                </ul>

                <div className="my-6 bg-black/40 border border-red-900/30 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Hammer className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-white">TIP: Block the Door</h3>
                      <p className="text-gray-400">
                        Blood Zombies can break wooden doors, place a block behind it, or use fence gates or trapdoors creatively.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 font-minecraft">PREPARING FOR BLOODMOONS</h2>
                <p className="text-gray-300 mb-4">
                  If a Bloodmoon triggers, your shelter must hold out:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  <li>Reinforce with blocks (cobblestone, not wood)</li>
                  <li>Block air windows, Blood Skeletons WILL shoot through them</li>
                  <li>Place Soul Torches, these repel Blood monsters <span className="italic text-gray-400">(NOT YET IMPLEMENTED)</span></li>
                  <li>Stay quiet, monsters can hear you. Sneak or walk if you must. DO NOT SPRINT!</li>
                  <li>Iron Golems will attack Blood Monsters as they would regular monsters</li>
                </ul>

                <div className="my-6 bg-black/40 border border-gray-800 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-white">TIP: Don’t Use Wood for Walls</h3>
                      <p className="text-gray-400">
                        Fire spread is enabled. Use stone based materials to reduce the risk of your home burning down during combat or lightning storms.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mt-6">
                  A proper shelter is more than a hiding place, it’s your launchpad into the world. Build it right, and you’ll survive your first week.
                </p>
              </div>

              {/* Article Navigation */}
              <div className="mt-8 pt-6 border-t border-gray-800 flex justify-between">
                <Link href="/wiki/getting-started/resources">
                  <Button variant="outline" className="text-red-500 border-red-600 hover:bg-red-900/20 flex items-center">
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back: Basic Resources
                  </Button>
                </Link>
                <div>{/* No "Next" — this is the final page in this section for now */}</div>
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
