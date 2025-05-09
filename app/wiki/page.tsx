import { Button } from '@/components/ui/button'
import { Search, Book, Shield, Skull, TrendingUp, Users, FileText } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import WikiSearch from '@/components/WikiSearch'

export default function WikiPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-5 overflow-hidden">
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
            <h1 className="text-4xl font-minecraft">
              WIKI
              <br /> (UNDER CONSTRUCTION)
            </h1>
          </div>
          <p className="mx-auto mb-8 max-w-2xl text-lg md:text-xl text-gray-300 text-center">
            Your guide to surviving and thriving in the harsh world of Blothera. Knowledge is power.
          </p>
        </div>
      </section>
      <section className="relative pt-0 pb-20 overflow-visible">
        <WikiSearch />
      </section>
      {/* Wiki Categories */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center font-minecraft text-red-500">
            KNOWLEDGE BASE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Getting Started */}
            <Link href="/wiki/getting-started" className="block">
              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 hover:border-red-500/30 transition-all h-full">
                <div className="bg-red-900/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Book className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-minecraft">GETTING STARTED</h3>
                <p className="text-gray-300 mb-4">
                  New to Blothera? Learn the basics of survival, health mechanics, and how to
                  establish yourself in this unforgiving world.
                </p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• First Night Survival</li>
                  <li>• Health System</li>
                  <li>• Basic Resources</li>
                </ul>
              </div>
            </Link>
            {/* Progression */}
            <Link href="/wiki/progression" className="block">
              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 hover:border-red-500/30 transition-all h-full">
                <div className="bg-red-900/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-minecraft">PROGRESSION</h3>
                <p className="text-gray-300 mb-4">
                  Learn how players grow, adapt, and shape their path in Blothera, whether farming,
                  fighting, or founding a nation.
                </p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Early Game: Survive and gather</li>
                  <li>• Mid Game: Brew, trade, build</li>
                  <li>• End Game: Nations, wars, legacy</li>
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
                  Everything you need to know about the Bloodmoon event, its mechanics, and
                  strategies for survival.
                </p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Bloodmoon Cycle</li>
                  <li>• Special Monsters</li>
                  <li>• Defense Strategies</li>
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
                  Detailed information about forming nations, territory management, diplomacy, and
                  warfare mechanics.
                </p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Nation Formation</li>
                  <li>• Territory Claims</li>
                  <li>• Diplomatic Relations</li>
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
                  Information about the Blothera community, events, and how to get involved beyond
                  just playing.
                </p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Discord Integration</li>
                  <li>• Community Events</li>
                  <li>• Player Contributions</li>
                </ul>
              </div>
            </Link>

            {/* Server Rules */}
            <Link href="/wiki/rules" className="block">
              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 hover:border-red-500/30 transition-all h-full">
                <div className="bg-red-900/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-minecraft">SERVER RULES</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive guide to server rules, conduct expectations, and consequences for
                  violations.
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
          <h2 className="text-3xl font-bold mb-8 text-center font-minecraft text-red-500">
            RECENT UPDATES
          </h2>

          <div className="max-w-4xl mx-auto bg-gray-900/30 border border-gray-800 rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="space-y-6">
                <div className="border-b border-gray-800 pb-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">Getting Started Updated</h3>
                    <span className="text-xs text-gray-500">08/05/2025</span>
                  </div>
                  <p className="text-gray-400 mb-4">
                    The Getting Started article has been updated with new information to reflect the
                    latest changes in the game. This includes new survival tips and strategies for
                    first-night survival and newcomers.
                  </p>
                  <Link href="/wiki/getting-started">
                    <Button
                      variant="outline"
                      className="text-red-500 border-red-600 hover:bg-red-900/20"
                    >
                      Read More
                    </Button>
                  </Link>
                </div>

                <div className="border-b border-gray-800 pb-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">Wiki Lauch</h3>
                    <span className="text-xs text-gray-500">08/05/2025</span>
                  </div>
                  <p className="text-gray-400 mb-4">
                    A comprehensive guide on how to form a nation has been added, including the
                    quest to retrieve the Nation Crown from the End.
                  </p>
                  <Link href="/wiki">
                    <Button
                      variant="outline"
                      className="text-red-500 border-red-600 hover:bg-red-900/20"
                    >
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
