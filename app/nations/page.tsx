import { Button } from "@/components/ui/button"
import { Shield, Users, Swords, Map, Flag, Building } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"

export default function NationsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-red-900/20 to-black/80">
          <div className="absolute inset-0 bg-[url('/images/warfare.png')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
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
            <h1 className="text-4xl font-minecraft">NATIONS & WARFARE</h1>
          </div>
          <p className="mx-auto mb-8 max-w-2xl text-lg md:text-xl text-gray-300 text-center">
            Form alliances, build armies, wage war, and leave your mark on Blothera's history. Our custom nations system
            brings true politics and warfare to Minecraft.
          </p>
        </div>
      </section>

      {/* Nations System Overview */}
<section className="py-16 bg-gradient-to-b from-black to-gray-900">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-bold mb-6 font-minecraft text-red-500">FORGE A NATION</h2>
        <p className="text-gray-300 mb-6">
          In Blothera, nations are not claimed — they are born. Forged through legacy, ritual, and resolve, each nation carries the weight of real effort and real meaning.
        </p>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="mt-1 bg-red-900/30 p-2 rounded-full">
              <Flag className="h-5 w-5 text-red-500" />
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">Earned Authority</h3>
              <p className="text-gray-400">
                Leadership must be claimed, not typed. Only those who rise through challenge can found a nation.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="mt-1 bg-red-900/30 p-2 rounded-full">
              <Building className="h-5 w-5 text-red-500" />
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">Tangible Expansion</h3>
              <p className="text-gray-400">
                Villages, roads, alliances — your nation expands by action, not admin. Everything is built, everything is earned.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="mt-1 bg-red-900/30 p-2 rounded-full">
              <Users className="h-5 w-5 text-red-500" />
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">Diplomacy That Matters</h3>
              <p className="text-gray-400">
                Alliances, vassals, betrayals — Blothera remembers every choice. Politics isn’t a menu. It’s a legacy.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold mb-4 font-minecraft">EVERY NAME IS CARVED IN STONE</h3>
        <p className="text-gray-400 text-sm">
          Blothera remembers every nation that rises — and every one that falls. The world itself is your record.
        </p>
        <div className="mt-6">
          <Button variant="outline" className="border-red-600 text-red-500 hover:bg-red-900/20">
            View Nation Archives
          </Button>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Warfare System */}
<section className="py-16 bg-black">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 text-center font-minecraft text-red-500">STRUCTURED WARFARE</h2>
    <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
      War in Blothera is not chaos. It’s earned, scheduled, and orchestrated by those who lead. Every decision carries weight. Every battle has consequence.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 hover:border-red-500/30 transition-all">
        <div className="bg-red-900/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
          <Swords className="h-8 w-8 text-red-500" />
        </div>
        <h3 className="text-xl font-bold mb-3 font-minecraft">OPT-IN CONFLICT</h3>
        <p className="text-gray-300 mb-4">
          No ambushes. No grief raids. Every war must be declared, every fight must be agreed upon — and announced.
        </p>
        <ul className="text-gray-400 text-sm space-y-1">
          <li>• Public war declarations</li>
          <li>• Structured battle windows</li>
          <li>• Consent-based combat</li>
        </ul>
      </div>

      <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 hover:border-red-500/30 transition-all">
        <div className="bg-red-900/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
          <Map className="h-8 w-8 text-red-500" />
        </div>
        <h3 className="text-xl font-bold mb-3 font-minecraft">THE LAND IS THE ARENA</h3>
        <p className="text-gray-300 mb-4">
          Battles take place across real terrain — not prebuilt maps. Forests, plains, and oceans become your battlefield.
        </p>
        <ul className="text-gray-400 text-sm space-y-1">
          <li>• Dynamic battlegrounds</li>
          <li>• Defender picks location</li>
          <li>• No teleportation, no shortcuts</li>
        </ul>
      </div>

      <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 hover:border-red-500/30 transition-all">
        <div className="bg-red-900/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
          <Shield className="h-8 w-8 text-red-500" />
        </div>
        <h3 className="text-xl font-bold mb-3 font-minecraft">CONSEQUENCES THAT STICK</h3>
        <p className="text-gray-300 mb-4">
          Losing a war doesn't just mean losing a fight. It can reshape alliances, change territories, or fracture your nation entirely.
        </p>
        <ul className="text-gray-400 text-sm space-y-1">
          <li>• Tribute & surrender options</li>
          <li>• Real diplomatic fallout</li>
          <li>• History is written by participation</li>
        </ul>
      </div>
    </div>
  </div>
</section>



      {/* War Stories */}
<section className="py-16 bg-gradient-to-b from-black to-red-900/20">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 text-center">WAR STORIES</h2>
    <div className="max-w-4xl mx-auto bg-black/60 border border-gray-800 rounded-lg p-6">
      <div className="space-y-6">
        <div className="border-b border-gray-800 pb-6">
          <h3 className="text-xl font-bold mb-2">The Fall of Westhold</h3>
          <p className="text-gray-400 mb-4">
            "They came at dawn on the third day. The Crimson Empire had siege crews dragging iron barrels on wheels, firing blasts that cracked stone like thunder. 
            We held the walls for as long as we could, but when the eastern gate gave way, it was over. Fires broke out across the inner keep. Most of us fled into the mines. "
          </p>
          <p className="text-sm text-gray-500">— Survivor of Westhold</p>
        </div>

<div className="border-b border-gray-800 pb-6">
  <h3 className="text-xl font-bold mb-2">The Battle of Red Valley</h3>
  <p className="text-gray-400 mb-4">
    "Scouts spotted their supply train early — mules packed with bread, arrows, and iron shells. 
    We collapsed the bridge at Red River and buried charges near the ford. 
    They never reached our gates. By week's end, their ranks were scattered — no food, no firepower, no resolve."
  </p>
  <p className="text-sm text-gray-500">— Leader of the Northern Alliance</p>
</div>


        <div>
          <h3 className="text-xl font-bold mb-2">The Desert Alliance</h3>
			<p className="text-gray-400 mb-4">
				"We were surrounded on every side. But the Forest Keepers came. They didn’t ask for promises, just a place to stand. Together, we carved paths through dust and root, and built something stronger than walls: trust."
			</p>
			<p className="text-sm text-gray-500">— Elder of the Nomads</p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-red-900/20 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">FORGE YOUR LEGACY</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Will you build an empire, lead an army, or watch it all burn? Join Blothera and write your name in the
            server's history.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-minecraft">
            JOIN THE SERVER
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
