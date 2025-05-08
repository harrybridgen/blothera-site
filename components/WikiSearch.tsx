// components/WikiSearch.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'

const wikiPages = [
  // Top-level sections
  { title: 'Getting Started', href: '/wiki/getting-started' },
  { title: 'Progression', href: '/wiki/progression' },
  { title: 'Bloodmoon', href: '/wiki/bloodmoon' },
  { title: 'Nations and War', href: '/wiki/nations-system' },
  { title: 'Community', href: '/wiki/community' },
  { title: 'Server Rules', href: '/wiki/rules' },

  // Getting Started sub-pages
  { title: 'First Night Survival', href: '/wiki/getting-started/first-night' },
  { title: 'Health System', href: '/wiki/getting-started/health-system' },
  { title: 'Basic Resources and Crafting', href: '/wiki/getting-started/resources' },
  { title: 'Shelter', href: '/wiki/getting-started/shelter' },
]

export default function WikiSearch() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // close dropdown when clicking outside
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const filtered = wikiPages.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()))

  return (
    <div ref={ref} className="relative z-50 w-full max-w-xl mx-auto">
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
          {filtered.length ? (
            filtered.map((page) => (
              <Link
                key={page.href}
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
