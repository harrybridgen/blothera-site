'use client'

import { useState, useRef, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'

const wikiPages = [
  { title: 'Getting Started', href: '/wiki/getting-started' },
  { title: 'First Night Survival', href: '/wiki/getting-started/first-night' },
  { title: 'Health System', href: '/wiki/getting-started/health-system' },
  { title: 'Basic Resources and Crafting', href: '/wiki/getting-started/resources' },
  { title: 'Building a Shelter', href: '/wiki/getting-started/shelter' },
  { title: 'Progression', href: '/wiki/progression' },
  { title: 'Bloodmoon', href: '/wiki/bloodmoon' },
  { title: 'Nations and War', href: '/wiki/nations-system' },
  { title: 'Community', href: '/wiki/community' },
  { title: 'Server Rules', href: '/wiki/rules' },
]

const pageSections: Record<string, Array<{ title: string; anchor: string }>> = {
  '/wiki/getting-started/resources': [{ title: 'Chainmail', anchor: 'chainmail' }],
  '/wiki/getting-started/first-night': [
    { title: 'Bloodmoon Warnings', anchor: 'if-the-bloodmoon-rises' },
    { title: 'Navigation Tools', anchor: 'use-the-navigation-tools' },
    { title: 'Sleeping System', anchor: 'beds-are-powerful' },
  ],
  '/wiki/getting-started/health-system': [
    { title: 'Death Penalty', anchor: 'death-penalty' },
    { title: 'Healing Mechanics', anchor: 'healing-mechanics' },
  ],
  '/wiki/getting-started/shelter': [
    { title: 'Bloodmoon Preparation', anchor: 'preparing-for-bloodmoons' },
  ],
}

export default function WikiSearch() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const allItems = useMemo(() => {
    const base = wikiPages.map((p) => ({
      title: p.title,
      href: p.href,
      parentHref: null,
      parentTitle: null,
    }))

    const sections = Object.entries(pageSections).flatMap(([baseHref, items]) => {
      const parent = wikiPages.find((p) => p.href === baseHref)
      return items.map((s) => ({
        title: s.title,
        href: `${baseHref}#${s.anchor}`,
        parentHref: baseHref,
        parentTitle: parent ? parent.title : null,
      }))
    })

    return [...base, ...sections]
  }, [])

  const filtered = allItems.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))

  const results = useMemo(() => {
    const out = [...filtered]
    const parents = new Set(filtered.filter((i) => i.parentHref).map((i) => i.parentHref!))

    parents.forEach((parentHref) => {
      if (!filtered.some((i) => i.href === parentHref)) {
        const parent = wikiPages.find((p) => p.href === parentHref)
        if (parent) {
          out.push({
            title: `Open full ${parent.title}`,
            href: parent.href,
            parentHref: null,
            parentTitle: null,
          })
        }
      }
    })

    return out
  }, [filtered])

  return (
    <div ref={ref} className="relative z-40 w-full max-w-xl mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="search"
          value={query}
          onFocus={() => setOpen(true)}
          onChange={(e) => {
            setQuery(e.target.value)
            setOpen(true)
          }}
          className="block w-full p-4 pl-10 text-sm bg-gray-900/80 border border-gray-700 rounded-lg focus:ring-red-500 focus:border-red-500"
          placeholder="Search the wiki..."
        />
      </div>

      {open && query && (
        <div className="absolute left-0 right-0 mt-2 bg-gray-900/80 border border-gray-700 rounded-lg p-4 backdrop-blur-sm shadow-lg">
          {results.length ? (
            results.slice(0, 10).map((page) => (
              <Link
                key={page.href + page.title}
                href={page.href}
                className="block text-red-400 hover:underline mb-2"
              >
                {page.title}
              </Link>
            ))
          ) : (
            <p className="text-gray-500">No results found.</p>
          )}
        </div>
      )}
    </div>
  )
}
