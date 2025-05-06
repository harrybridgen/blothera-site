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
<h2 className="text-3xl font-bold mb-6 font-minecraft text-red-500">FORGE A NATION</h2>
<p className="text-gray-300 mb-6">
  Nations in Blothera are not created through commands or claims. They are summoned. Only those who rise through survival may carve their name into the world.
</p>

<div className="space-y-6">
  <div className="flex items-start gap-4">
    <div className="mt-1 bg-red-900/30 p-2 rounded-full">
      <Flag className="h-5 w-5 text-red-500" />
    </div>
    <div>
      <h3 className="font-bold text-white text-lg">Legacy, Not Permission</h3>
      <p className="text-gray-400">
        There are no shortcuts. No /nation create. To lead a nation, you must prove something real. The crown is not given. It is taken, from the heart of the End.
      </p>
    </div>
  </div>

  <div className="flex items-start gap-4">
    <div className="mt-1 bg-red-900/30 p-2 rounded-full">
      <Building className="h-5 w-5 text-red-500" />
    </div>
    <div>
      <h3 className="font-bold text-white text-lg">The World Is Your Record</h3>
      <p className="text-gray-400">
        Build roads. Found towns. Write treaties in ink and trust. Nothing is automated. Everything is seen. The world remembers what you build, and what you abandon.
      </p>
    </div>
  </div>

  <div className="flex items-start gap-4">
    <div className="mt-1 bg-red-900/30 p-2 rounded-full">
      <Users className="h-5 w-5 text-red-500" />
    </div>
    <div>
	<h3 className="font-bold text-white text-lg">Diplomacy with Teeth</h3>
		<p className="text-gray-400">
		Alliances are written, not clicked or typed. Vassals kneel in person. Every pact is placed, read, and remembered. Nothing is truely hidden. Every choice leaves a trace in the world.
	</p>

    </div>
  </div>
</div>




      {/* Warfare System */}
<h2 className="text-3xl font-bold mb-8 text-center font-minecraft text-red-500">STRUCTURED WARFARE</h2>
<p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
  War in Blothera is not chaos. It is a ritual. A reckoning. Battles are not surprise ambushes — they are announced, prepared for, and fought in the open. Every engagement echoes through the land.
</p>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 hover:border-red-500/30 transition-all">
    <div className="bg-red-900/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
      <Swords className="h-8 w-8 text-red-500" />
    </div>
    <h3 className="text-xl font-bold mb-3 font-minecraft">CONSENT TO BLEED</h3>
    <p className="text-gray-300 mb-4">
      No backstabs. No random raids. Every war must be declared, every objective named, every sword lifted with purpose.
    </p>
    <ul className="text-gray-400 text-sm space-y-1">
      <li>• Written casus belli</li>
      <li>• Scheduled battle dates</li>
      <li>• PvP is always opt-in</li>
    </ul>
  </div>

  <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 hover:border-red-500/30 transition-all">
    <div className="bg-red-900/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
      <Map className="h-8 w-8 text-red-500" />
    </div>
    <h3 className="text-xl font-bold mb-3 font-minecraft">THE WORLD IS YOUR WARFIELD</h3>
    <p className="text-gray-300 mb-4">
      Battles don’t happen on arenas. They happen in forests, mountains, and rivers, wherever the world chooses. You’ll need maps, mounts, and real logistics.
    </p>
    <ul className="text-gray-400 text-sm space-y-1">
      <li>• Terrain is random, untamed</li>
      <li>• No teleports, no summons</li>
      <li>• Movement is half the battle</li>
    </ul>
  </div>

  <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 hover:border-red-500/30 transition-all">
    <div className="bg-red-900/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
      <Shield className="h-8 w-8 text-red-500" />
    </div>
    <h3 className="text-xl font-bold mb-3 font-minecraft">TO BREAK A WALL, YOU MUST BUILD</h3>
    <p className="text-gray-300 mb-4">
      Some battles are fought at the gates of real towns. For those, tools exist, heavy, slow, and loud. Only the bold will use them. Only the prepared will survive them.
    </p>
    <ul className="text-gray-400 text-sm space-y-1">
      <li>• Sieges can happen</li>
      <li>• Real structures can fall</li>
      <li>• The cost is always greater than the gain</li>
    </ul>
  </div>
</div>




      {/* War Stories */}
<h2 className="text-3xl font-bold mb-8 text-center font-minecraft text-red-500">WAR STORIES</h2>
<div className="max-w-4xl mx-auto bg-black/60 border border-gray-800 rounded-lg p-6">
  <div className="space-y-6">

    <div className="border-b border-gray-800 pb-6">
      <h3 className="text-xl font-bold mb-2">“I was just planting carrots…”</h3>
      <p className="text-gray-400 mb-4">
        Emberfall was never meant to be important. Just a small town behind tall walls. I was farming. The siege came anyway.
        I remember someone in chat saying “don’t engage if you’re unarmed.” Then the ground started shaking.
        Fire arced past the barn. Soldiers I didn’t know fought monsters I didn’t summon. 
        I hid in the root cellar with a stew and prayed the roof held. It did. 
        The next morning, someone came back and replanted my field.
      </p>
      <p className="text-sm text-gray-500">— Soil Keeper of Emberfall</p>
    </div>

    <div className="border-b border-gray-800 pb-6">
      <h3 className="text-xl font-bold mb-2">“The bridge never broke. We did.”</h3>
      <p className="text-gray-400 mb-4">
        Red Valley wasn’t supposed to be a war. A missed tribute. We mined under the ford and packed it with lava. But they didn’t come that way.
        They came through the treeline. On foot. Silent. By the time we saw their flags, they were already inside.
        I dropped my sword and played dead beside a sheep. It worked.
      </p>
      <p className="text-sm text-gray-500">— Disgraced Sentry of Red Valley</p>
    </div>

    <div className="border-b border-gray-800 pb-6">
      <h3 className="text-xl font-bold mb-2">“We signed with ink. They answered with fire.”</h3>
      <p className="text-gray-400 mb-4">
        The Unionists had promised to defend us. They even sent a letter. Sealed and everything. But when the sky turned red, no one came.
        We held for ten minutes before they breached the west gate. My brother fell in the orchard. 
        I left the nation the next day. Signed my own name in a different book.
      </p>
      <p className="text-sm text-gray-500">— Former Citizen of Oakwatch</p>
    </div>

    <div>
      <h3 className="text-xl font-bold mb-2">“We brought no weapons. Just a flag.”</h3>
      <p className="text-gray-400 mb-4">
        The Desert Alliance wasn’t formed in battle. It happened at a well. Four nations. No trust. No guards.
        We passed around some loaves of bread and talked about trade routes. 
        By the time the Bloodmoon rose, we’d built something worth defending.
      </p>
      <p className="text-sm text-gray-500">— Elder of the Nomads</p>
    </div>

  </div>
</div>



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
