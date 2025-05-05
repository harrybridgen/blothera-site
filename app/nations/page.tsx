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
				  In Blothera, a nation isn't claimed with a command — it's built with a crown, a lectern, and a legacy. Nations are formed through ritual, expanded with intention, and remembered by the land itself.
				</p>

				<div className="space-y-6">
				  <div className="flex items-start gap-4">
					<div className="mt-1 bg-red-900/30 p-2 rounded-full">
					  <Flag className="h-5 w-5 text-red-500" />
					</div>
					<div>
					  <h3 className="font-bold text-white text-lg">Crowned Leadership</h3>
					  <p className="text-gray-400">
						Nations can only be founded by players who earn a Crown — forged from the Dragon Egg itself.
					  </p>
					</div>
				  </div>

				  <div className="flex items-start gap-4">
					<div className="mt-1 bg-red-900/30 p-2 rounded-full">
					  <Building className="h-5 w-5 text-red-500" />
					</div>
					<div>
					  <h3 className="font-bold text-white text-lg">Physical Infrastructure</h3>
					  <p className="text-gray-400">
						Towns are founded with emeralds and books, not commands. Expand your reach through trade, roads, and diplomacy.
					  </p>
					</div>
				  </div>

				  <div className="flex items-start gap-4">
					<div className="mt-1 bg-red-900/30 p-2 rounded-full">
					  <Users className="h-5 w-5 text-red-500" />
					</div>
					<div>
					  <h3 className="font-bold text-white text-lg">Diplomacy & Trust</h3>
					  <p className="text-gray-400">
						Nations declare war, accept vassals, and shape the map — all through books, chests, and lecterns. No UIs. No shortcuts.
					  </p>
					</div>
				  </div>
				</div>
			  </div>

			  <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 text-center">
				<h3 className="text-xl font-bold mb-4 font-minecraft">THE WORLD REMEMBERS</h3>
				<p className="text-gray-400 text-sm">
				  The land keeps record of every nation — active or fallen. If you wear the Crown, your name will be written into the world’s memory.
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
      War in Blothera is not chaos. It's scheduled, opt-in, and real. Nations must declare their goals publicly and fight on neutral ground using strategy, not brute force.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 hover:border-red-500/30 transition-all">
        <div className="bg-red-900/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
          <Swords className="h-8 w-8 text-red-500" />
        </div>
        <h3 className="text-xl font-bold mb-3 font-minecraft">OPT-IN BATTLES</h3>
        <p className="text-gray-300 mb-4">
          PvP is never forced. Nation leaders must rally support before battles begin. Every fight is earned.
        </p>
        <ul className="text-gray-400 text-sm space-y-1">
          <li>• Scheduled engagements</li>
          <li>• Compass-guided battlefields</li>
          <li>• No teleporting, no cheating</li>
        </ul>
      </div>

      <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 hover:border-red-500/30 transition-all">
        <div className="bg-red-900/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
          <Map className="h-8 w-8 text-red-500" />
        </div>
        <h3 className="text-xl font-bold mb-3 font-minecraft">REAL TERRAIN</h3>
        <p className="text-gray-300 mb-4">
          Battles happen in randomly chosen Overworld locations. No curated arenas — only survival and adaptation.
        </p>
        <ul className="text-gray-400 text-sm space-y-1">
          <li>• Plains, forests, oceans, mountains</li>
          <li>• Defenders pick the day & time</li>
          <li>• Every battle affects the war score</li>
        </ul>
      </div>

      <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 hover:border-red-500/30 transition-all">
        <div className="bg-red-900/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
          <Shield className="h-8 w-8 text-red-500" />
        </div>
        <h3 className="text-xl font-bold mb-3 font-minecraft">VASSALS & CONSEQUENCES</h3>
        <p className="text-gray-300 mb-4">
          Smaller nations can swear fealty for protection. War has meaning — surrender is possible, rebellion is earned.
        </p>
        <ul className="text-gray-400 text-sm space-y-1">
          <li>• Tribute systems</li>
          <li>• Vassal protections</li>
          <li>• Rebellions change history</li>
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
                  "The siege lasted three days. The Crimson Empire brought five trebuchets and over thirty mercenaries.
                  Our walls held for two days, but they breached the eastern gate on the third morning. We lost
                  everything. But we'll rebuild, and we'll have our revenge."
                </p>
                <p className="text-sm text-gray-500">— Former citizen of Westhold, destroyed 12 days ago</p>
              </div>

              <div className="border-b border-gray-800 pb-6">
                <h3 className="text-xl font-bold mb-2">The Battle of Red Valley</h3>
                <p className="text-gray-400 mb-4">
                  "We intercepted their supply caravan in the valley. Cut off from resources, their siege of Northern
                  Keep failed within days. Their mercenaries deserted, and their army retreated in disarray. A victory
                  without a single direct engagement."
                </p>
                <p className="text-sm text-gray-500">— Commander of the Northern Alliance, 5 days ago</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">The Desert Alliance</h3>
                <p className="text-gray-400 mb-4">
                  "Facing threats from both the Crimson Empire and the Northern Alliance, we had no choice but to form a
                  pact with the Forest Keepers. Our combined territories now span from the eastern deserts to the
                  western forests. Let them try to invade us now."
                </p>
                <p className="text-sm text-gray-500">— Leader of the Desert Nomads, 2 days ago</p>
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
