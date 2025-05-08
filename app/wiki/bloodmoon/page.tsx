import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Home, Moon, AlertTriangle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export default function BloodmoonPage() {
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
          <Link href="/wiki" className="hover:text-red-400">
            Wiki
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-300">Bloodmoon</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4 sticky top-20">
              <h3 className="font-minecraft text-lg mb-4 pb-2 border-b border-gray-800">BLOODMOON</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/wiki/bloodmoon" className="text-red-500 font-bold block py-1">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link href="/wiki/bloodmoon/cycle" className="text-gray-300 hover:text-red-400 block py-1">
                    Bloodmoon Cycle
                  </Link>
                </li>
                <li>
                  <Link href="/wiki/bloodmoon/monsters" className="text-gray-300 hover:text-red-400 block py-1">
                    Special Monsters
                  </Link>
                </li>
                <li>
                  <Link href="/wiki/bloodmoon/defense" className="text-gray-300 hover:text-red-400 block py-1">
                    Defense Strategies
                  </Link>
                </li>
              </ul>

              <h3 className="font-minecraft text-lg mt-6 mb-4 pb-2 border-b border-gray-800">RELATED TOPICS</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/wiki/getting-started" className="text-gray-300 hover:text-red-400 block py-1">
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link href="/wiki/nations-system/defense" className="text-gray-300 hover:text-red-400 block py-1">
                    Nation Defense
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <h1 className="text-3xl font-bold mb-2 font-minecraft text-red-500">BLOODMOON</h1>
              <p className="text-gray-400 italic mb-6">When night falls and death rises</p>

              <div className="prose prose-invert max-w-none">
                <div className="relative h-64 w-full mb-8 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
                  <Image
                    src="/images/bloodmoon.png"
                    alt="Bloodmoon rising over Blothera"
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-gray-300 mb-4">
                  The Bloodmoon is a special event in Blothera that occurs periodically, turning the night into a deadly
                  challenge for all players. During a Bloodmoon, the sky turns crimson, monsters become more numerous
                  and powerful, and the world itself seems to turn against you.
                </p>

                <div className="my-8 bg-black/40 border border-red-900/30 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-white">WARNING: PREPARE OR PERISH</h3>
                      <p className="text-gray-400">
                        The Bloodmoon is not a random event, it follows a cycle. Prepare in advance or face certain
                        death. Even experienced players can fall during a Bloodmoon if they're caught unprepared.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 font-minecraft">BLOODMOON BASICS</h2>

                <p className="text-gray-300 mb-4">
                  The Bloodmoon is more than just a visual effect, it fundamentally changes the game mechanics for its
                  duration. Understanding these changes is crucial for survival.
                </p>

                <h3 className="text-xl font-bold mt-6 mb-3">Cycle and Timing</h3>
                <p className="text-gray-300 mb-4">
                  The Bloodmoon occurs on average every 12 in-game days. The exact timing is random, so it is possible
                  for 2 Bloodmoons to occur in a row, or for several weeks to pass without one. Players should always be on the lookout for signs of an impending Bloodmoon.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  <li>To be edited</li>
                  <li>To be edited</li>
                  <li>To be edited</li>
                </ul>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Duration:</h4>
                    <p className="text-gray-300">
                      To be edited
                    </p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Server Announcement:</h4>
                    <p className="text-gray-300">
                      The server broadcasts a message to all players when a Bloodmoon begins:
                      <span className="block mt-2 text-red-500 font-bold">
                        "The blood moon rises..."
                      </span>
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-bold mt-6 mb-3">Monster Changes</h3>
                <p className="text-gray-300 mb-4">During a Bloodmoon, monsters undergo significant changes:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  <li>To be edited</li>
                  <li>To be edited</li>
                  <li>To be edited</li>
                  <li>To be edited</li>
                  <li>To be edited</li>
                </ul>

                <h3 className="text-xl font-bold mt-6 mb-3">Special Monsters</h3>
                <p className="text-gray-300 mb-4">
                  The Bloodmoon brings forth special monster variants not seen during normal nights:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2 text-red-500">Blood Creepers</h4>
                    <p className="text-gray-300 mb-2">
                    To be edited
                    </p>
                    <p className="text-gray-400 text-sm">
                      <strong>Danger Level:</strong> Extreme
                    </p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2 text-red-500">Wraiths</h4>
                    <p className="text-gray-300 mb-2">
                    To be edited
                    </p>
                    <p className="text-gray-400 text-sm">
                      <strong>Danger Level:</strong> High
                    </p>
                  </div>
                </div>

                <div className="my-8 bg-black/40 border border-gray-800 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Moon className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-white">SURVIVAL STRATEGIES</h3>
                      <p className="text-gray-400">
                        The best strategy for surviving a Bloodmoon depends on your equipment and experience level:
                      </p>
                      <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                        <li>To be edited</li>
                        <li>To be edited</li>
                        <li>To be edited</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 font-minecraft">REWARDS AND CONSEQUENCES</h2>
                <p className="text-gray-300 mb-4">
                  Surviving a Bloodmoon is not just about making it to morning - there are both rewards and
                  consequences:
                </p>

                <h3 className="text-xl font-bold mt-6 mb-3">Rewards</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  <li>To be edited</li>
                  <li>To be edited</li>
                  <li>To be edited</li>
                </ul>

                <h3 className="text-xl font-bold mt-6 mb-3">Consequences</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  <li>To be edited</li>
                  <li>To be edited</li>
                  <li>To be edited</li>
                </ul>

                <p className="text-gray-300 mt-6">
                  For more detailed information on specific aspects of the Bloodmoon, check out the related articles in
                  the sidebar.
                </p>
              </div>

              {/* Article Navigation */}
              <div className="mt-8 pt-6 border-t border-gray-800 flex justify-between">
                <Link href="/wiki">
                  <Button
                    variant="outline"
                    className="text-red-500 border-red-600 hover:bg-red-900/20 flex items-center"
                  >
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back to Wiki
                  </Button>
                </Link>
                <Link href="/wiki/bloodmoon/cycle">
                  <Button
                    variant="outline"
                    className="text-red-500 border-red-600 hover:bg-red-900/20 flex items-center"
                  >
                    Next: Bloodmoon Cycle
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </article>

            {/* Last Updated Info */}
            <div className="mt-4 text-sm text-gray-500 text-right">Last updated: May 5, 2025</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
