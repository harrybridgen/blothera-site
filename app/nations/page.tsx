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
              <h2 className="text-3xl font-bold mb-6 font-minecraft text-red-500">CUSTOM NATIONS SYSTEM</h2>
              <p className="text-gray-300 mb-6">
                Blothera features a completely custom-built nations system unlike anything else in Minecraft. This isn't
                just claiming land - it's a full political and military simulation.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-red-900/30 p-2 rounded-full">
                    <Flag className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Nation Formation</h3>
                    <p className="text-gray-400">
                      Create your nation, design a custom banner, establish your capital, and set your government type.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-red-900/30 p-2 rounded-full">
                    <Building className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Territory Control</h3>
                    <p className="text-gray-400">
                      Claim land, build outposts, and expand your influence. Territory provides resources and strategic
                      advantages.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-red-900/30 p-2 rounded-full">
                    <Users className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Citizen Management</h3>
                    <p className="text-gray-400">
                      Assign roles, manage permissions, and create a hierarchy. Every citizen contributes to your
                      nation's power.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 font-minecraft">CURRENT NATIONS</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-900/50 rounded-sm flex items-center justify-center">
                      <Shield className="h-6 w-6 text-red-500" />
                    </div>
                    <div>
                      <span className="font-bold block">The Crimson Empire</span>
                      <span className="text-xs text-gray-500">Founded 43 days ago</span>
                    </div>
                  </div>
                  <div className="text-gray-400 text-sm">23 Citizens</div>
                </div>

                <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-900/50 rounded-sm flex items-center justify-center">
                      <Shield className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <span className="font-bold block">Northern Alliance</span>
                      <span className="text-xs text-gray-500">Founded 38 days ago</span>
                    </div>
                  </div>
                  <div className="text-gray-400 text-sm">17 Citizens</div>
                </div>

                <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-900/50 rounded-sm flex items-center justify-center">
                      <Shield className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <span className="font-bold block">Forest Keepers</span>
                      <span className="text-xs text-gray-500">Founded 29 days ago</span>
                    </div>
                  </div>
                  <div className="text-gray-400 text-sm">12 Citizens</div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-yellow-900/50 rounded-sm flex items-center justify-center">
                      <Shield className="h-6 w-6 text-yellow-500" />
                    </div>
                    <div>
                      <span className="font-bold block">Desert Nomads</span>
                      <span className="text-xs text-gray-500">Founded 15 days ago</span>
                    </div>
                  </div>
                  <div className="text-gray-400 text-sm">8 Citizens</div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Button variant="outline" className="border-red-600 text-red-500 hover:bg-red-900/20">
                  View All Nations
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warfare System */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center font-minecraft text-red-500">REALISTIC WARFARE</h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Blothera's warfare system goes beyond simple PvP. It's a complete military simulation with strategy,
            logistics, and consequences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 hover:border-red-500/30 transition-all">
              <div className="bg-red-900/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Swords className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-minecraft">SIEGE WARFARE</h3>
              <p className="text-gray-300 mb-4">
                Build trebuchets, battering rams, and siege towers. Breach walls and destroy fortifications with
                realistic physics and damage systems.
              </p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Custom-built siege weapons</li>
                <li>• Destructible structures</li>
                <li>• Wall breaching mechanics</li>
                <li>• Defensive countermeasures</li>
              </ul>
            </div>

            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 hover:border-red-500/30 transition-all">
              <div className="bg-red-900/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-minecraft">NPC MERCENARIES</h3>
              <p className="text-gray-300 mb-4">
                Recruit, train, and command NPC soldiers with unique abilities and specializations. Build armies that
                fight alongside you.
              </p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Multiple unit types</li>
                <li>• Training and leveling system</li>
                <li>• Formation tactics</li>
                <li>• Specialized combat roles</li>
              </ul>
            </div>

            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 hover:border-red-500/30 transition-all">
              <div className="bg-red-900/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Map className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-minecraft">SUPPLY LOGISTICS</h3>
              <p className="text-gray-300 mb-4">
                Manage supply lines, secure resources, and maintain your army. Cut off enemy supplies to weaken their
                forces.
              </p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Resource management</li>
                <li>• Supply route protection</li>
                <li>• Sabotage mechanics</li>
                <li>• Starvation and attrition</li>
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
