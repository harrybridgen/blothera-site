import { Button } from "@/components/ui/button"
import { Search, Book, Shield, Skull, Map, Users, FileText } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

export default function WikiPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-red-900/20 to-black/80">
          <div className="absolute inset-0 bg-[url('/images/bloodmoon.png')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mb-6 text-center">
            <Image
              src="/images/blothera-logo.png"
              alt="BLOTHERA"
              width={550}
              height={200}
              className="mx-auto mb-7"
              priority
            />
            <h1 className="text-4xl font-minecraft">WIKI (!UNDER CONSTRUCTION!)</h1>
          </div>
          <p className="mx-auto mb-8 max-w-2xl text-lg md:text-xl text-gray-300 text-center">
            Your guide to surviving and thriving in the harsh world of Blothera. Knowledge is power.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="search"
                className="block w-full p-4 pl-10 text-sm bg-gray-900/80 border border-gray-700 rounded-lg focus:ring-red-500 focus:border-red-500"
                placeholder="Search the wiki..."
              />
              <button
                type="submit"
                className="absolute right-2.5 bottom-2.5 bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-800 font-medium rounded-lg text-sm px-4 py-2"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Wiki Categories */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center font-minecraft text-red-500">KNOWLEDGE BASE</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Getting Started */}
            <Link href="/wiki/getting-started" className="block">
              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 hover:border-red-500/30 transition-all h-full">
                <div className="bg-red-900/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Book className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-minecraft">GETTING STARTED</h3>
                <p className="text-gray-300 mb-4">
                  New to Blothera? Learn the basics of survival, health mechanics, and how to establish yourself in this
                  unforgiving world.
                </p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• First Night Survival</li>
                  <li>• Health System</li>
                  <li>• Basic Resources</li>
                </ul>
              </div>
            </Link>

            {/* Nations System */}
            <Link href="/wiki/nations-system" className="block">
              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 hover:border-red-500/30 transition-all h-full">
                <div className="bg-red-900/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-minecraft">NATIONS SYSTEM</h3>
                <p className="text-gray-300 mb-4">
                  Detailed information about forming nations, territory management, diplomacy, and warfare mechanics.
                </p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Nation Formation</li>
                  <li>• Territory Claims</li>
                  <li>• Diplomatic Relations</li>
                </ul>
              </div>
            </Link>

            {/* Bloodmoon */}
            <Link href="/wiki/bloodmoon" className="block">
              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 hover:border-red-500/30 transition-all h-full">
                <div className="bg-red-900/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Skull className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-minecraft">BLOODMOON</h3>
                <p className="text-gray-300 mb-4">
                  Everything you need to know about the Bloodmoon event, its mechanics, and strategies for survival.
                </p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Bloodmoon Cycle</li>
                  <li>• Special Monsters</li>
                  <li>• Defense Strategies</li>
                </ul>
              </div>
            </Link>

            {/* World Map */}
            <Link href="/wiki/world-map" className="block">
              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 hover:border-red-500/30 transition-all h-full">
                <div className="bg-red-900/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Map className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-minecraft">WORLD MAP</h3>
                <p className="text-gray-300 mb-4">
                  Explore the geography of Blothera, including known settlements, resources, and points of interest.
                </p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Major Settlements</li>
                  <li>• Resource Locations</li>
                  <li>• Dangerous Areas</li>
                </ul>
              </div>
            </Link>

            {/* Community */}
            <Link href="/wiki/community" className="block">
              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 hover:border-red-500/30 transition-all h-full">
                <div className="bg-red-900/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-minecraft">COMMUNITY</h3>
                <p className="text-gray-300 mb-4">
                  Information about the Blothera community, events, and how to get involved beyond just playing.
                </p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Discord Integration</li>
                  <li>• Community Events</li>
                  <li>• Player Contributions</li>
                </ul>
              </div>
            </Link>

            {/* Server Rules */}
            <Link href="/rules" className="block">
              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 hover:border-red-500/30 transition-all h-full">
                <div className="bg-red-900/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-minecraft">SERVER RULES</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive guide to server rules, conduct expectations, and consequences for violations.
                </p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Core Conduct</li>
                  <li>• Villager Conduct</li>
                  <li>• Farming Conduct</li>
                </ul>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center font-minecraft text-red-500">RECENT UPDATES</h2>

          <div className="max-w-4xl mx-auto bg-gray-900/30 border border-gray-800 rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="space-y-6">
                <div className="border-b border-gray-800 pb-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">Bloodmoon Mechanics Updated</h3>
                    <span className="text-xs text-gray-500">3 days ago</span>
                  </div>
                  <p className="text-gray-400 mb-4">
                    The Bloodmoon article has been updated with new information about special monster spawns and their
                    abilities.
                  </p>
                  <Link href="/wiki/bloodmoon">
                    <Button variant="outline" className="text-red-500 border-red-600 hover:bg-red-900/20">
                      Read More
                    </Button>
                  </Link>
                </div>

                <div className="border-b border-gray-800 pb-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">New Nation Formation Guide</h3>
                    <span className="text-xs text-gray-500">1 week ago</span>
                  </div>
                  <p className="text-gray-400 mb-4">
                    A comprehensive guide on how to form a nation has been added, including the quest to retrieve the
                    Nation Crown from the End.
                  </p>
                  <Link href="/wiki/nations-system/formation">
                    <Button variant="outline" className="text-red-500 border-red-600 hover:bg-red-900/20">
                      Read More
                    </Button>
                  </Link>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">World Map Updated</h3>
                    <span className="text-xs text-gray-500">2 weeks ago</span>
                  </div>
                  <p className="text-gray-400 mb-4">
                    The world map has been updated with new settlements and resource locations discovered by players.
                  </p>
                  <Link href="/wiki/world-map">
                    <Button variant="outline" className="text-red-500 border-red-600 hover:bg-red-900/20">
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contribute Section */}
      <section className="py-16 bg-gradient-to-b from-black to-red-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">CONTRIBUTE TO THE WIKI</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Knowledge is power. Help your fellow players by contributing to the Blothera Wiki.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-minecraft">
            JOIN THE WIKI TEAM
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
