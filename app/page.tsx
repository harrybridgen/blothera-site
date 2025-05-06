"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, Shield, Skull, Flame, Mountain, Users, Heart } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FeatureCard from "@/components/feature-card"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIiIG9wYWNpdHk9IjAuMDUiPjwvcGF0aD4KPC9zdmc+')] opacity-10">
        </div>

{/* HERO SECTION */}
<section className="relative py-20 md:py-32 overflow-hidden">
  {/* Hero Background */}
  <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#440000] via-[#1a0000] to-black">
    <div className="absolute inset-0 bg-[url('/images/bloodmoon.png')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIiIG9wYWNpdHk9IjAuMDUiPjwvcGF0aD4KPC9zdmc+')] opacity-10"></div>
  </div>

{/* Hero Content */}
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
    <span className="block text-red-500 text-2xl md:text-3xl mt-4 font-minecraft">
      SURVIVAL MUST BE EARNED
    </span>
    <span className="block text-gray-400 italic text-sm mt-2">
      The land remembers what you build… and what you leave behind.
    </span>
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
    <a
  href="//discord.blothera.com"
  target="_blank"
  rel="noopener noreferrer"
    >
      <Button
        size="lg"
        variant="outline"
        className="border-red-600 text-red-500 hover:bg-red-900/20 font-minecraft"
      >
        DISCORD
      </Button>
    </a>
  </div>
</div>
</section>

{/* Optional: Music Toggle */}
{/* <MusicToggle /> */}


{/* INTRO SECTION */}
<section className="relative py-16 bg-black overflow-hidden">
  {/* Optional: keep bloodmoon image if desired */}
  <div className="absolute inset-0 bg-[url('/images/bloodmoon.png')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none"></div>
  <div className="container relative z-10 mx-auto px-4">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">THE BLOODMOON RISES</h2>
      <p className="text-center text-gray-500 mb-8 italic">And the world is watching.</p>
      <div className="text-center max-w-xl mx-auto">
        <p className="text-gray-300 text-lg mb-4">
          When night falls and the Bloodmoon rises, you have a choice:
        </p>
        <ul className="text-gray-300 text-lg space-y-2 list-disc list-inside mb-6 inline-block text-left">
          <li>Face the horde head-on and claim your glory</li>
          <li>Fortify your base and pray it holds till dawn</li>
          <li>Flee and live to fight another day</li>
        </ul>
        <p className="text-gray-300 text-lg mb-4">
          Every death lingers. Every block earned. Every moon… a warning.
        </p>
      </div>
      <p className="text-xl text-red-500 font-semibold text-center mt-6 mb-16">
        This isn't just another server. This is survival as it was meant to be.
      </p>
    </div>
  </div>
</section>


      {/* Features Section */}
      <section className="py-16 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">MINECRAFT WITH MEANING</h2>
          <p className="text-center italic text-sm text-gray-500 mb-6">No resets. No kits. No throwaway builds.</p>
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

      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/village.png')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black"></div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            
            {/* Nations & Consequence Box */}
            <div className="lg:w-1/2 h-full flex flex-col justify-between lg:min-h-[700px]">

            <div className="flex-1 bg-black/60 backdrop-blur-sm border border-red-900/30 rounded-lg p-6 flex flex-col">

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-minecraft text-red-500">
                      NATIONS & CONSEQUENCE
                    </h2>
                    <p className="text-gray-300 mb-2">
                      Blothera features a completely custom-built nations system that encourages cooperation, diplomacy, and
                      organized conflict, never random violence or griefing.
                    </p>
                    <p className="text-sm italic text-gray-500 mb-6">
                      Power is built, not given. And every law is written in ink.
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
                            Wars are formal, agreed-upon conflicts between nations. No random PvP or griefing is ever allowed.
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
                            Villagers are treated as players, not resources. No trading halls or breeder farms, only real
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
                            Semi-automatic farms are allowed. Fully automatic systems are not. The land should feel lived in.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-6 mt-6 border-t border-gray-700 text-center min-h-[56px] flex items-center justify-center">
                  <p className="text-white font-minecraft">COOPERATION WITH CONSEQUENCES</p>
                </div>
              </div>
            </div>

            {/* Server Rules Box */}
            <div className="lg:w-1/2 h-full flex flex-col justify-between lg:min-h-[700px]">
            <div className="flex-1 bg-black/60 backdrop-blur-sm border border-gray-800 rounded-lg p-6 flex flex-col">

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="mb-4 flex justify-between items-center">
                      <h3 className="font-minecraft text-xl">SERVER RULES</h3>
                      <span className="text-xs text-gray-500">CORE PRINCIPLES</span>
                    </div>

                    <div className="space-y-4">
                      <div className="border-b border-gray-800 pb-3">
                        <h4 className="font-bold text-red-500 mb-2">⚔️ Core Conduct</h4>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• No griefing or stealing</li>
                          <li>• No PvP outside of war or mutual consent</li>
                          <li>• No exploiting mechanics or systems</li>
                          <li>• No hacks, x-ray, or unfair advantages</li>
                          <li>• No hate speech or harassment</li>
                        </ul>
                      </div>
                      <div className="border-b border-gray-800 pb-3">
                        <h4 className="font-bold text-red-500 mb-2">🌾 Villager Conduct</h4>
                        <p className="text-gray-300 text-sm italic mb-2">"Villagers are Players"</p>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• No breeder farms or trading halls</li>
                          <li>• Villages are communities, not assets</li>
                          <li>• You may improve and defend natural villages</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-red-500 mb-2">🌟 Farming Conduct</h4>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• No fully automatic farms</li>
                          <li>• Semi-automatic farms requiring player input are okay</li>
                          <li>• Treat the world with care and purpose</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-6 mt-6 border-t border-gray-700 text-center min-h-[56px] flex items-center justify-center">
                  <Button variant="outline" className="border-red-600 text-red-500 hover:bg-red-900/20 font-minecraft">
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
            <div className="bg-gray-900/50 border border-red-900/30 rounded-lg p-8 text-center max-w-3xl mx-auto">
              <p className="text-gray-300 text-lg mb-6">
                Modern servers are dopamine factories. Lootboxes. Starter kits. Skip buttons. Nothing matters because
                nothing is earned.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                <span className="text-red-500 font-semibold">Blothera is different.</span><br /> You struggle. You adapt. You
                leave your name behind.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                There are no shortcuts. We give you the tools. You write the legend.
              </p>
              <p className="text-xl text-center font-bold text-red-500">
                MOST WILL NOT SURVIVE.
                <br />
                MOST WONT EVEN UNDERSTAND IT.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-black to-red-900/30">
        <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">READY TO PROVE YOURSELF?</h2>
        <p className="text-lg text-red-500 italic mb-6 tracking-wide">TO LEAD?..</p>
          <div className="bg-black/50 border border-red-900/30 rounded-lg p-6 max-w-md mx-auto mb-8">
            <p className="text-gray-400 mb-4 font-mono">SERVER IP:</p>
            <p className="text-xl text-white font-mono bg-gray-800/50 p-2 rounded mb-4">play.blothera.com</p>
            <p className="text-gray-400 text-sm">Minecraft Java Edition 1.21.5</p>
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
