import { Button } from '@/components/ui/button'
import { Anchor } from '@/components/anchor'

import { ChevronLeft, ChevronRight, Home, HeartPulse, Apple, BedDouble } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'

export default function HealthSystemPage() {
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
          <span className="text-gray-300">Health System</span>
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
                    className="text-gray-300 hover:text-red-400 block py-1"
                  >
                    First Night Survival
                  </Link>
                </li>
                <li>
                  <Link
                    href="/wiki/getting-started/health-system"
                    className="text-red-500 font-bold block py-1"
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
              <h1 className="text-3xl font-bold mb-2 font-minecraft text-red-500">HEALTH SYSTEM</h1>
              <p className="text-gray-400 italic mb-6">
                Survival has a cost, and healing has a purpose
              </p>

              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 mb-4">
                  Blothera’s health system makes every injury matter. Healing isn’t free. And death?
                  It’s permanent, at least in part.
                </p>
                <Anchor id="death-penalty" />
                <h2 className="text-2xl font-bold mt-8 mb-4 font-minecraft">DEATH PENALTY</h2>
                <p className="text-gray-300 mb-4">
                  Each time you die, your{' '}
                  <strong>maximum health is reduced by 1 heart (2 HP)</strong>. This effect is
                  permanent unless you restore it.
                </p>
                <div className="my-6 bg-black/40 border border-red-900/30 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <HeartPulse className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-white">Minimum HP Floor</h3>
                      <p className="text-gray-400">
                        You cannot fall below <strong>4 hearts</strong> total health. You can still
                        die, but your max HP won’t drop further after that point.
                      </p>
                    </div>
                  </div>
                </div>
                <Anchor id="healing-mechanics" />
                <h2 className="text-2xl font-bold mt-8 mb-4 font-minecraft">HEALING MECHANICS</h2>
                <p className="text-gray-300 mb-4">
                  Natural regeneration is <strong>disabled</strong>. Eating food won’t heal you.
                  These are the ways to heal:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
                  <li>
                    <strong>Sleeping in a bed</strong> restores floor(missingHealth/2) hearts and
                    has a chance to restore 1 Max HP
                  </li>
                  <li>
                    <strong>Spicy Stews</strong> (dropped by mobs) offer tradeoffs like healing +
                    side effects
                  </li>
                  <li>
                    <strong>Golden Apples</strong>, good source of healing and gives 2 temporary
                    hearts (and small chance to heal 1 Max HP)
                  </li>
                  <li>
                    <strong>Enchanted Golden Apples</strong> increase your Max HP by 1 (up to 10
                    hearts) and provide temporary defences{' '}
                  </li>
                  <li>
                    <strong>Potions</strong> offer temporary combat advantages
                  </li>
                </ul>

                <div className="my-6 bg-black/40 border border-gray-800 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Apple className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-white">Golden Apple Effects</h3>
                      <p className="text-gray-400">
                        Regular Golden Apples <em>might</em> restore Max HP. Enchanted ones{' '}
                        <strong>guarantee</strong> a Max HP boost.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 font-minecraft">BE STRATEGIC</h2>
                <p className="text-gray-300 mb-4">
                  Because healing is limited, every fight matters. Avoid fall damage, fight
                  cautiously, and treat food as fuel, not medicine.
                </p>
              </div>

              {/* Article Navigation */}
              <div className="mt-8 pt-6 border-t border-gray-800 flex justify-between">
                <Link href="/wiki/getting-started/first-night">
                  <Button
                    variant="outline"
                    className="text-red-500 border-red-600 hover:bg-red-900/20 flex items-center"
                  >
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back: First Night
                  </Button>
                </Link>
                <Link href="/wiki/getting-started/resources">
                  <Button
                    variant="outline"
                    className="text-red-500 border-red-600 hover:bg-red-900/20 flex items-center"
                  >
                    Next: Basic Resources
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
