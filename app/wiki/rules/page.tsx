'use client'

import { Shield, Users, Flame, Mountain, Heart } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Home } from 'lucide-react'
import { ChevronRight } from 'lucide-react'
import { ChevronLeft } from 'lucide-react'

export default function RulesWikiPage() {
  const router = useRouter()
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
          <span className="text-gray-300">Rules</span>
        </div>

        <div className="sticky top-[4.5rem] z-40 inline-block ml-4">
          <Button
            onClick={() => router.back()}
            variant="outline"
            className="text-red-500 border-red-600 hover:bg-red-900/20 flex items-center"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </div>

        {/* Main Content Only (Centered) */}
        <main className="max-w-3xl mx-auto">
          <article className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <h1 className="text-3xl font-bold mb-2 font-minecraft text-red-500">SERVER RULES</h1>
            <p className="text-gray-400 italic mb-6">
              Blothera is built on trust and respect. These rules ensure everyone can enjoy the
              challenging world we've created.
              <br />
              <br />
              <strong>Read the rules carefully.</strong> They are not just guidelines.
              <br />
              <br />
              By playing Blothera, you agree to follow these rules. Breaking them will result in a
              ban.
            </p>

            <RuleSection
              icon={<Shield className="h-6 w-6 text-red-500" />}
              title="⚔️ CORE CONDUCT"
              items={[
                "No griefing or stealing. Respect other players' builds and belongings.",
                'No PvP unless both parties agree. PvP is limited to declared combatants.',
                'No exploiting mechanics or systems and no duping machines.',
                'No hacks, x-ray, illegal mods, or unfair advantages.',
                'No racism, sexism, homophobia, hate speech, harassment, or abusive behaviour.',
              ]}
            />

            <RuleSection
              icon={<Users className="h-6 w-6 text-red-500" />}
              title="🌾 VILLAGER CONDUCT"
              intro='"Villagers are Players"'
              items={[
                'Villages are considered living communities, not resource farms.',
                'No villager breeder farms, trading halls, or villager exploitation.',
                'You may improve, expand, build, upgrade and defend natural villages.',
                'You may build new villages, but they must feel like real settlements, not factories.',
                'Losing a village to Bloodmoons or disasters is a tragedy, not a renewable event.',
              ]}
            />

            <RuleSection
              icon={<Mountain className="h-6 w-6 text-red-500" />}
              title="🌟 FARMING CONDUCT"
              items={[
                'No fully automatic farms. These harvest or gather resources with no input after setup.',
                'Example of prohibited farm: Auto-kill mob grinders that collect drops themselves.',
                'Verification code: blothera111',
                'Semi-automatic farms are allowed (require some interaction).',
                'Example of allowed farm: Mob traps where players must manually kill mobs.',
              ]}
            />

            <RuleSection
              icon={<Flame className="h-6 w-6 text-red-500" />}
              title="🔥 WORLD CONDUCT"
              items={[
                'Fire Spread and Explosion Damage are enabled.',
                'Treat the world with respect. Use these mechanics responsibly.',
                'Protect what you build, respect what others create. Fire and TNT are tools, not weapons.',
              ]}
            />

            <RuleSection
              icon={<Heart className="h-6 w-6 text-red-500" />}
              title="💻 VANILLA CLIENT"
              items={[
                'Only the vanilla Minecraft client (currently 1.21.5 jar) is allowed.',
                'We stop any other client from connecting.',
                "Don't like it? You want to use Optifine? There are thousands of other servers. This one is different.",
              ]}
            />
          </article>

          <div className="mt-4 text-sm text-gray-500 text-right">Last updated: May 8, 2025</div>
        </main>
      </div>

      <Footer />
    </div>
  )
}

function RuleSection({
  icon,
  title,
  items,
  intro,
}: {
  icon: React.ReactNode
  title: string
  items: string[]
  intro?: string
}) {
  return (
    <div className="bg-black/60 border border-red-900/30 rounded-lg p-6 mb-8">
      <div className="flex items-start gap-4">
        <div className="mt-1 bg-red-900/30 p-2 rounded-full">{icon}</div>
        <div>
          <h2 className="text-2xl font-bold mb-3 font-minecraft text-red-500">{title}</h2>
          {intro && <p className="italic text-gray-300 mb-3">{intro}</p>}
          <ul className="text-gray-300 space-y-2 list-disc list-inside">
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
