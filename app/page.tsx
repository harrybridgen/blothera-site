"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight, Shield, Skull, Flame, Mountain, Users, Heart } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FeatureCard from "@/components/feature-card"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-red-900/20 to-black/80">
          <div className="absolute inset-0 bg-[url('/images/bloodmoon.png')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="mb-6 text-center">
            <Image
              src="/images/blothera-logo.png"
              alt="BLOTHERA"
              width={700}
              height={200}
              className="mx-auto"
              priority
            />
            <span className="block text-red-500 text-2xl md:text-3xl mt-4 font-minecraft">SURVIVAL MUST BE EARNED</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg md:text-xl text-gray-300">
            No cash shop. No kits. No pay to win. No shortcuts.
            <br />A living world where your actions have meaning and survival is never guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-minecraft">
              JOIN THE WORLD
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-red-600 text-red-500 hover:bg-red-900/20 font-minecraft"
				<a href="https://discord.blothera.com" target="_blank" rel="noopener noreferrer">
				  DISCORD
				</a>


            >
              DISCORD
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">THE BLOODMOON RISES</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg mb-4">When night falls and the Bloodmoon rises, you have a choice:</p>
              <ul className="text-gray-300 text-lg space-y-2 list-disc pl-6 mb-6">
                <li>Face the horde head-on and claim your glory</li>
                <li>Fortify your base and pray it holds till dawn</li>
                <li>Flee and live to fight another day</li>
              </ul>
              <p className="text-gray-300 text-lg mb-4">
                Death costs you Max Hearts. Progress is slow. Every resource matters.
              </p>
            </div>
            <p className="text-xl text-red-500 font-semibold text-center mt-6">
              This isn't just another server. This is survival as it was meant to be.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-900 border-y border-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">MINECRAFT WITH MEANING</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Remember when Minecraft was challenging? When every decision mattered? We do.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Skull className="h-10 w-10 text-red-500" />}
              title="DEATH HAS CONSEQUENCES"
              description="Each death permanently reduces your max health. How long can you survive?"
            />
            <FeatureCard
              icon={<Flame className="h-10 w-10 text-red-500" />}
              title="REAL DANGER"
              description="Fire spreads. TNT explodes. The world doesn't hold back, but griefing is never allowed."
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-red-500" />}
              title="NO HANDOUTS"
              description="No cash shops. No starter kits. No pay-to-win garbage. Just pure survival."
            />
            <FeatureCard
              icon={<Mountain className="h-10 w-10 text-red-500" />}
              title="SHAPE THE WORLD"
              description="Build, transform, and leave your mark. Your creations are protected by server rules."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-red-500" />}
              title="CUSTOM NATIONS SYSTEM"
              description="Form nations with custom banners, laws, and territories. Engage in consensual warfare."
            />
            <FeatureCard
              icon={<Heart className="h-10 w-10 text-red-500" />}
              title="COMMUNITY RESPECT"
              description="No griefing, no stealing, no random PvP. We trust players to respect each other's work."
            />
          </div>
        </div>
      </section>

      {/* Nations & Community Section */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/village.png')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2">
              <div className="bg-black/60 backdrop-blur-sm border border-red-900/30 rounded-lg p-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-minecraft text-red-500">NATIONS & COMMUNITY</h2>
                <p className="text-gray-300 mb-6">
                  Blothera features a completely custom-built nations system that encourages cooperation, diplomacy, and
                  organized conflict - never random violence or griefing.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-red-900/30 p-1 rounded">
                      <Shield className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">FORM YOUR NATION</h3>
                      <p className="text-gray-400">
                        Create a nation, design your banner, and establish your territory. Set your own laws and
                        governance style.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-red-900/30 p-1 rounded">
                      <Users className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">CONSENSUAL WARFARE</h3>
                      <p className="text-gray-400">
                        Wars are formal, agreed-upon conflicts between nations. No random PvP or griefing is ever
                        allowed.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-red-900/30 p-1 rounded">
                      <Heart className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">VILLAGER PROTECTION</h3>
                      <p className="text-gray-400">
                        Villagers are treated as players, not resources. No trading halls or breeding farms - only real
                        settlements.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-red-900/30 p-1 rounded">
                      <Mountain className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">RESPECTFUL FARMING</h3>
                      <p className="text-gray-400">
                        Semi-automatic farms are allowed, but fully automatic farms are not. Player interaction is
                        always required.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-4 mt-4">
                  <p className="text-white font-minecraft">COOPERATION WITH CONSEQUENCES</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-black/60 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
                <div className="mb-4 flex justify-between items-center">
                  <h3 className="font-minecraft text-xl">SERVER RULES</h3>
                  <span className="text-xs text-gray-500">CORE PRINCIPLES</span>
                </div>

                <div className="space-y-4">
                  <div className="border-b border-gray-800 pb-3">
                    <h4 className="font-bold text-red-500 mb-2">⚔️ Core Conduct</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• No griefing or stealing</li>
                      <li>• No PvP unless both parties agree</li>
                      <li>• No exploiting mechanics or systems</li>
                      <li>• No hacks, x-ray, or unfair advantages</li>
                      <li>• No hate speech or harassment</li>
                    </ul>
                  </div>

                  <div className="border-b border-gray-800 pb-3">
                    <h4 className="font-bold text-red-500 mb-2">🌾 Villager Conduct</h4>
                    <p className="text-gray-300 text-sm italic mb-2">"Villagers are Players"</p>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• No villager breeder farms or trading halls</li>
                      <li>• Villages are living communities, not resources</li>
                      <li>• You may improve and defend natural villages</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-red-500 mb-2">🌟 Farming Conduct</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• No fully automatic farms</li>
                      <li>• Semi-automatic farms requiring player interaction are allowed</li>
                      <li>• Treat the world with respect</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-700 text-center">
					<Button
					  variant="outline"
					  className="border-red-600 text-red-500 hover:bg-red-900/20 font-minecraft"
					  onClick={() => window.location.href = "/rules"}
					>
					  VIEW FULL RULES
					</Button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              NOT ABOUT PUNISHMENT.
              <br />
              ABOUT PURPOSE.
            </h2>
            <div className="bg-gray-900/50 border border-red-900/30 rounded-lg p-8">
              <p className="text-gray-300 text-lg mb-6">
                Modern servers are dopamine factories. Lootboxes. Starter packs. Fast-track bullshit. Nothing matters
                because everything is handed to you.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                <span className="text-red-500 font-semibold">Blothera is different.</span> Your actions have weight.
                Your name means something. Your legacy endures.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                We don't babysit. We don't hold hands. We give you the tools and trust you to use them. This isn't a
                theme park - it's a world that fights back and remembers what you do.
              </p>
              <p className="text-xl text-center font-bold text-red-500">
                MOST WILL NOT SURVIVE.
                <br />
                WILL YOU?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-black to-red-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">READY TO PROVE YOURSELF?</h2>
          <div className="bg-black/50 border border-red-900/30 rounded-lg p-6 max-w-md mx-auto mb-8">
            <p className="text-gray-400 mb-4 font-mono">SERVER IP:</p>
            <p className="text-xl text-white font-mono bg-gray-800/50 p-2 rounded mb-4">play.blothera.com</p>
            <p className="text-gray-400 text-sm">Java Edition 1.21.5</p>
          </div>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-minecraft">
            JOIN THE SERVER
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
