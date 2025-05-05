import { Button } from "@/components/ui/button"
import { Shield, Users, Flame, Mountain, Heart } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"

export default function RulesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-red-900/20 to-black/80">
          <div className="absolute inset-0 bg-[url('/images/rules.png')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <h1 className="mb-6 text-center">
            <Image
              src="/images/blothera-logo.png"
              alt="BLOTHERA"
              width={550}
              height={200}
              className="mx-auto mb-7"
              priority
            />
            <span className="block font-minecraft text-4xl">SERVER RULES</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg md:text-xl text-gray-300 text-center">
            Blothera is built on trust and respect. These rules ensure everyone can enjoy the challenging world we've
            created.
          </p>
        </div>
      </section>

      {/* Rules Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/60 border border-red-900/30 rounded-lg p-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-red-900/30 p-2 rounded-full">
                  <Shield className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 font-minecraft text-red-500">⚔️ CORE CONDUCT</h2>
                  <ul className="text-gray-300 space-y-3">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>
                        <strong>No griefing or stealing.</strong> Respect other players' builds and belongings.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>
                        <strong>No PvP unless both parties agree.</strong> Combat between players must be consensual.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>
                        <strong>No exploiting mechanics or systems and no duping machines.</strong> Play the game as
                        intended.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>
                        <strong>No hacks, x-ray, illegal mods, or unfair advantages.</strong> Keep the playing field
                        level.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>
                        <strong>No racism, sexism, homophobia, hate speech, harassment, or abusive behaviour.</strong>{" "}
                        Treat everyone with respect.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-black/60 border border-red-900/30 rounded-lg p-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-red-900/30 p-2 rounded-full">
                  <Users className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 font-minecraft text-red-500">🌾 VILLAGER CONDUCT</h2>
                  <p className="text-xl text-gray-300 italic mb-4">"Villagers are Players"</p>
                  <ul className="text-gray-300 space-y-3">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>
                        <strong>Villages are considered living communities, not resource farms.</strong> Treat them with
                        respect.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>
                        <strong>No villager breeder farms, trading halls, or villager exploitation.</strong> Villagers
                        are not resources.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>
                        <strong>You may improve, expand, build, upgrade and defend natural villages.</strong> Enhancing
                        villages is encouraged.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>
                        <strong>
                          You may build new villages - but they must feel like real settlements, not factories.
                        </strong>{" "}
                        Create authentic communities.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>
                        <strong>
                          Losing a village to Bloodmoons or disasters is a tragedy, not a renewable event.
                        </strong>{" "}
                        Protect your villagers.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-black/60 border border-red-900/30 rounded-lg p-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-red-900/30 p-2 rounded-full">
                  <Mountain className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 font-minecraft text-red-500">🌟 FARMING CONDUCT</h2>
                  <ul className="text-gray-300 space-y-3">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>
                        <strong>No fully automatic farms.</strong> A fully automatic farm is one that harvests or
                        gathers resources without any player input after being set up.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>
                        <strong>Example of prohibited farm:</strong> Auto-kill mob grinders that collect drops by
                        themselves.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>
                        <strong>Semi-automatic farms are allowed.</strong> These require some player interaction.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>
                        <strong>Example of allowed farm:</strong> Mob spawner traps where players must manually kill
                        mobs.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-black/60 border border-red-900/30 rounded-lg p-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-red-900/30 p-2 rounded-full">
                  <Flame className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 font-minecraft text-red-500">🔥 WORLD CONDUCT</h2>
                  <ul className="text-gray-300 space-y-3">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>
                        <strong>Fire Spread and Explosion Damage are enabled.</strong> The world has real consequences.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>
                        <strong>Treat the world with respect.</strong> Use these mechanics responsibly.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>
                        <strong>Protect what you build, respect what others create.</strong> Fire and TNT are tools, not
                        weapons against other players.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-black/60 border border-red-900/30 rounded-lg p-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-red-900/30 p-2 rounded-full">
                  <Heart className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 font-minecraft text-red-500">💻 VANILLA CLIENT</h2>
                  <ul className="text-gray-300 space-y-3">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>
                        <strong>Only the vanilla minecraft client (currently 1.21.5 jar) is allowed.</strong> No
                        modified clients.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>
                        <strong>We have a plugin that stops any other client from connecting.</strong> (TO BE
                        IMPLEMENTED)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>
                        <strong>This is rare, but it is necessary for this experience to work.</strong> Don't like it?
                        There are thousands of other servers. This one is different.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>
                        <strong>Verification code:</strong> blothera111
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">UNDERSTAND & AGREE?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            These rules create the foundation for a challenging but fair experience. If you agree to follow them, we
            welcome you to Blothera.
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
