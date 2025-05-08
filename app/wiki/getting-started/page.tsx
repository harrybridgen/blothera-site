import { Button } from '@/components/ui/button'
import { ChevronRight, Home, Shield, Skull } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'

export default function GettingStartedPage() {
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
          <span className="text-gray-300">Getting Started</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4 sticky top-20">
              <h3 className="font-minecraft text-lg mb-4 pb-2 border-b border-gray-800">
                GETTING STARTED
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/wiki/getting-started" className="text-red-500 font-bold block py-1">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    href="/wiki/getting-started/first-night"
                    className="text-gray-300 hover:text-red-400 block py-1"
                  >
                    First Night Survival
                  </Link>
                </li>
                <li>
                  <Link
                    href="/wiki/getting-started/health-system"
                    className="text-gray-300 hover:text-red-400 block py-1"
                  >
                    Health System
                  </Link>
                </li>
                <li>
                  <Link
                    href="/wiki/getting-started/resources"
                    className="text-gray-300 hover:text-red-400 block py-1"
                  >
                    Basic Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="/wiki/getting-started/shelter"
                    className="text-gray-300 hover:text-red-400 block py-1"
                  >
                    Building a Shelter
                  </Link>
                </li>
              </ul>

              <h3 className="font-minecraft text-lg mt-6 mb-4 pb-2 border-b border-gray-800">
                RELATED TOPICS
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/wiki/bloodmoon"
                    className="text-gray-300 hover:text-red-400 block py-1"
                  >
                    Bloodmoon
                  </Link>
                </li>
                <li>
                  <Link
                    href="/wiki/nations-system"
                    className="text-gray-300 hover:text-red-400 block py-1"
                  >
                    Nations System
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <h1 className="text-3xl font-bold mb-2 font-minecraft text-red-500">
                GETTING STARTED
              </h1>
              <p className="text-gray-400 italic mb-6">
                Your guide to surviving your first days in Blothera
              </p>

              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 mb-4">
                  Welcome to Blothera, a hardcore Minecraft experience where death has consequences
                  and your actions shape the world. This guide will help you understand the basics
                  of survival in this unforgiving realm.
                </p>

                <div className="my-8 bg-black/40 border border-red-900/30 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Skull className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-white">IMPORTANT: DEATH HAS CONSEQUENCES</h3>
                      <p className="text-gray-400">
                        In Blothera, each death permanently reduces your maximum health by one heart
                        (2 HP). This is a core mechanic that makes survival meaningful. Be careful,
                        plan ahead, and avoid unnecessary risks.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="my-8 bg-black/40 border border-red-900/30 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Skull className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-white">
                        IMPORTANT: YOU DO NOT REGERATE HEALTH
                      </h3>
                      <p className="text-gray-400">
                        In Blothera, you do not regenerate health naturally. You must use healing
                        items or potions to restore your health. This makes every encounter and
                        resource management crucial for survival.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 font-minecraft">QUESTS FIRST</h2>

                <p className="text-gray-300 mb-4">
                  When you first spawn in Blothera, you'll want to complete the starter quests in
                  the spawn town. These quests will help you gather essential resources and
                  understand the basics of the game. After completing the quests, you can choose to
                  either stay in the spawn town or venture out into the wild.
                </p>

                <h3 className="text-xl font-bold mt-6 mb-3">1. Gather Basic Resources</h3>
                <p className="text-gray-300 mb-4">
                  Start by punching trees to gather wood. Craft a crafting table and wooden tools as
                  soon as possible. Prioritize creating a wooden pickaxe to mine stone, then craft
                  stone tools for better durability.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Priority Resources:</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      <li>Wood (for crafting and building)</li>
                      <li>Stone (for better tools)</li>
                      <li>Coal (for torches)</li>
                      <li>Food (kill animals or gather crops)</li>
                      <li>Iron Nuggets (for early chainmail armour)</li>
                      <li>Wool (for a bed and string)</li>
                      <li>Basic food (bread, potatoes, etc)</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Essential Crafting:</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      <li>Crafting Table</li>
                      <li>Stone Tools (pickaxe, axe, sword)</li>
                      <li>Torches</li>
                      <li>Furnace</li>
                      <li>Bed (if you find wool)</li>
                      <li>Bow and Arrows (if you find string)</li>
                      <li>Chainmail Armor (if you find iron)</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-bold mt-6 mb-3">2. Find or Build Shelter</h3>
                <p className="text-gray-300 mb-4">
                  Before nightfall, you need to secure a shelter. You can either:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  <li>Build a simple structure with collected materials</li>
                  <li>Dig into a hillside or mountain for a temporary cave home</li>
                  <li>Find an existing structure (village house, etc.) to fortify</li>
                </ul>
                <p className="text-gray-300 mb-4">
                  Ensure your shelter is well-lit with torches to prevent monster spawns inside.
                  Block all entrances at night.
                </p>
                <p className="text-gray-300 mb-4">
                  Beds are crucial for skipping the night and resetting your spawn point. If you
                  find wool, craft a bed. Beds also heal you and have a chance to restore one Max
                  HP.
                </p>

                <div className="my-8 bg-black/40 border border-gray-800 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-white">TIP: TEMPORARY VS. PERMANENT HOMES</h3>
                      <p className="text-gray-400">
                        Don't invest too much in your first shelter. Focus on survival first, then
                        scout for a good location for your permanent base. Consider factors like
                        resource availability, terrain defensibility, and proximity to other players
                        or villages.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mt-6 mb-3">3. Secure Food Supply</h3>
                <p className="text-gray-300 mb-4">
                  Hunger depletes faster in Blothera, making food a critical resource. Establish a
                  sustainable food source as soon as possible:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  <li>Hunt animals for meat (cook it to maximize nutrition)</li>
                  <li>Start a small farm (wheat, carrots, potatoes)</li>
                  <li>Gather apples from oak trees</li>
                  <li>Fish in nearby water sources</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 font-minecraft">NEXT STEPS</h2>
                <p className="text-gray-300 mb-4">
                  Once you've survived your first few days, you should focus on:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  <li>Mining for iron and other valuable resources</li>
                  <li>Expanding your base and improving defenses</li>
                  <li>Exploring the surrounding area</li>
                  <li>Meeting other players and potentially joining a nation</li>
                </ul>

                <p className="text-gray-300 mt-6">
                  For more detailed information on specific topics, check out the related articles
                  in the sidebar.
                </p>
              </div>

              {/* Article Navigation */}
              <div className="mt-8 pt-6 border-t border-gray-800 flex justify-between">
                <div>{/* No previous article for the overview page */}</div>
                <Link href="/wiki/getting-started/first-night">
                  <Button
                    variant="outline"
                    className="text-red-500 border-red-600 hover:bg-red-900/20 flex items-center"
                  >
                    Next: First Night Survival
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </article>

            {/* Last Updated Info */}
            <div className="mt-4 text-sm text-gray-500 text-right">Last updated: May 8, 2025</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
