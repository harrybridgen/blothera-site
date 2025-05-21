import { Button } from '@/components/ui/button'
import { Anchor } from '@/components/anchor'

import {
  ChevronLeft,
  ChevronRight,
  Home,
  Moon,
  BedDouble,
  Flame,
  Shield,
  Compass,
} from 'lucide-react'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'

export default function FirstNightSurvivalPage() {
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
          <Link href="/wiki/getting-started" className="hover:text-red-400">
            Getting Started
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-300">First Night Survival</span>
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
                  <Link
                    href="/wiki/getting-started"
                    className="text-gray-300 hover:text-red-400 block py-1"
                  >
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    href="/wiki/getting-started/first-night"
                    className="text-red-500 font-bold block py-1"
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
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <h1 className="text-3xl font-bold mb-2 font-minecraft text-red-500">
                FIRST NIGHT SURVIVAL
              </h1>
              <p className="text-gray-400 italic mb-6">
                Surviving your first Bloodmoon and nightfall
              </p>

              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 mb-4">
                  The first night in Blothera is brutal. You likely won’t have much gear, and danger
                  is constant. Here's how to survive.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 font-minecraft">
                  LIGHT UP AND LOCK DOWN
                </h2>
                <p className="text-gray-300 mb-4">
                  Your first goal is shelter and safety. Place torches around your area and seal any
                  entrances. Light prevents mob spawns.
                </p>

                <div className="my-6 bg-black/40 border border-red-900/30 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-white">TIP: Shields are powerful</h3>
                      <p className="text-gray-400">
                        Shields can block most damage. Use them to block arrows and melee attacks.
                        This in useful in world where you do not regenerate health.
                      </p>
                    </div>
                  </div>
                </div>
                <Anchor id="beds-are-powerful" />
                <h2 className="text-2xl font-bold mt-8 mb-4 font-minecraft">BEDS ARE POWERFUL</h2>
                <p className="text-gray-300 mb-4">If you have a bed, use it. Sleeping:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
                  <li>Skips the night (unless it's a Bloodmoon)</li>
                  <li>Heals 2 hearts</li>
                  <li>Has a small chance to restore 1 Max HP</li>
                </ul>

                <div className="my-6 bg-black/40 border border-gray-800 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <BedDouble className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-white">NO UNDERGROUND SLEEPING</h3>
                      <p className="text-gray-400">
                        You can’t sleep underground or during thunderstorms.
                      </p>
                    </div>
                  </div>
                </div>
                <Anchor id="use-the-navigation-tools" />
                <h2 className="text-2xl font-bold mt-8 mb-4 font-minecraft">
                  USE THE NAVIGATION TOOLS
                </h2>
                <p className="text-gray-300 mb-4">
                  Navigating is a skill. Not handed to you. There is no F3 or dynmap. Use the given
                  tools to navigate.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
                  <li>Compass (helps you find your bed or spawn)</li>
                  <li>Lodestones (craft and place a lodestone, then link it to a compass)</li>
                  <li>Maps & Banners (use maps and banners to map the terrain and mark POIs)</li>
                  <li>Signs & Torches (use signs and/or torches to leave a trail)</li>
                  <li>Roads (construct paths for easier pathing and navigation)</li>
                </ul>
                <div className="my-6 bg-black/40 border border-gray-800 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Compass className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-white">TIP: Using the Compass</h3>
                      <p className="text-gray-400">
                        The compass points to your spawn point. If you want to find spawn, break
                        your bed then use a compass.
                      </p>
                    </div>
                  </div>
                </div>
                <Anchor id="if-the-bloodmoon-rises" />
                <h2 className="text-2xl font-bold mt-8 mb-4 font-minecraft">
                  IF THE BLOODMOON RISES...
                </h2>
                <p className="text-gray-300 mb-4">
                  Bloodmoons can occur at random, roughly once every 12 nights. You can’t sleep
                  through them, and mobs are more aggressive.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
                  <li>Stay inside if you’re not ready.</li>
                  <li>Make sure your walls are solid and doors are blocked.</li>
                  <li>
                    Don’t make noise. Blood monsters can hear you through walls. Sneak. Don't
                    sprint.
                  </li>
                  <li>If you're truly scared, you can log out. It is not against the rules.</li>
                </ul>

                <div className="my-6 bg-black/40 border border-red-900/30 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Moon className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-white">PRO TIP: Listen for Ambient Cues</h3>
                      <p className="text-gray-400">
                        Bloodmoons distort ambient sounds and tint the screen. If the night feels
                        wrong, it probably is.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mt-6">
                  Once you survive the first night, you’ve proven you can adapt. Prepare for deeper
                  caves, riskier mobs, and tougher choices ahead.
                </p>
              </div>

              {/* Article Navigation */}
              <div className="mt-8 pt-6 border-t border-gray-800 flex justify-between">
                <Link href="/wiki/getting-started">
                  <Button
                    variant="outline"
                    className="text-red-500 border-red-600 hover:bg-red-900/20 flex items-center"
                  >
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back to Overview
                  </Button>
                </Link>
                <Link href="/wiki/getting-started/health-system">
                  <Button
                    variant="outline"
                    className="text-red-500 border-red-600 hover:bg-red-900/20 flex items-center"
                  >
                    Next: Health System
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
