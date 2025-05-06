"use client"

import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-red-500 mb-4 font-minecraft text-center">THE HISTORY OF BLOTHERA</h1>
        <p className="text-center text-gray-400 italic mb-12">Over a decade of war, survival, and legacy.</p>

        <div className="space-y-16 max-w-4xl mx-auto">

          {/* The Beginning */}
          <section>
            <h2 className="text-2xl font-bold text-red-400 mb-2">✨ The Beginning (2012 → 2015)</h2>
            <p className="text-gray-300 mb-4">
              Between 2013 and 2016, we ran <strong>Blothera Kingdom</strong>, a standalone RP/PvP server that laid the lore foundations for everything you see today.
              Multiple versions built on the original name pushed forward a shared legacy.
            </p>
            <ul className="text-sm text-gray-400 list-disc list-inside space-y-1 mb-4">
              <li>First public use of “Blothera” — Sept 2012 trailer</li>
              <li>Townsfolk vs. Dark Fox Clan</li>
              <li>18 role-locked classes (Paladin, Sage, Dark Archer...)</li>
              <li>25+ pages of custom lore on early wiki</li>
              <li>Peak online: 60 / 60 players</li>
            </ul>
            <p className="text-sm text-gray-500 italic">
              Archive: YouTube trailer, 2013 Wiki, 2014 Siege Weapon demo
            </p>
          </section>

          {/* Civcraft Era */}
          <section>
            <h2 className="text-2xl font-bold text-red-400 mb-2">🏛️ The Civcraft Era (~2016/2017)</h2>
            <p className="text-gray-300 mb-4">
              After Blothera Kingdom’s first run, we experimented with Civcraft — a sandbox famed for nation-building and politics. The <strong>Kingdom of Blothera</strong> existed as a small nation, keeping the name alive.
            </p>
            <ul className="text-sm text-gray-400 list-disc list-inside space-y-1 mb-4">
              <li>Founded: Mid 2016 (Civcraft v3)</li>
              <li>~4 active citizens</li>
              <li>Only one surviving screenshot — “lost chapter” of lore</li>
            </ul>
          </section>

          {/* Atlas Era */}
          <section>
            <h2 className="text-2xl font-bold text-red-400 mb-2">🌐 The Atlas Era (2019 → 2020)</h2>
            <p className="text-gray-300 mb-4">
              On MC Atlas, the <strong>Kingdom of Blothera</strong> returned — small but powerful. Eventually, it became the most dominant nation on the server.
            </p>
            <ul className="text-sm text-gray-400 list-disc list-inside space-y-1 mb-4">
              <li>Peaked at ~20 active citizens</li>
              <li>Most powerful nation by all metrics</li>
              <li>Claimed an entire biome</li>
              <li>Dozens of preserved diplomatic documents</li>
            </ul>
            <p className="text-sm text-gray-500 italic">
              Archives include: Coalition Statement, Blotherian Law, Unionist Alliance
            </p>
          </section>

          {/* Today */}
          <section>
            <h2 className="text-2xl font-bold text-red-400 mb-2">🩸 Blothera Today (2025 → Present)</h2>
            <p className="text-gray-300 mb-4">
              Blothera is now its own fully custom server — written from scratch with original Paper plugins, and home to features never before seen in Minecraft multiplayer.
            </p>
            <ul className="text-sm text-gray-400 list-disc list-inside space-y-1 mb-4">
              <li>No natural regen, -1 heart on death, Bloodmoon invasions</li>
              <li>Fully custom Nations & Warfare system</li>
              <li>Real chunk-based trains, fire & TNT enabled</li>
              <li>0% pay-to-win, 100% earned survival</li>
              <li>Veterans from every past era have already returned</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  )
}
