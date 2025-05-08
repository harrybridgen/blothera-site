'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/20 blur-lg rounded-full"></div>
              <Image
                src="/images/blothera-logo.png"
                alt="BLOTHERA"
                width={160}
                height={50}
                className="h-14 w-auto relative z-10 brightness-150 drop-shadow-[0_0_2px_rgba(255,30,30,0.3)]"
                priority
              />
            </div>
            <span className="sr-only">Blothera</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/nations" className="text-sm font-medium text-gray-300 hover:text-red-400">
            NATIONS
          </Link>
          <Link href="/wiki" className="text-sm font-medium text-gray-300 hover:text-red-400">
            WIKI
          </Link>
          <Link href="/wiki/rules" className="text-sm font-medium text-gray-300 hover:text-red-400">
            RULES
          </Link>
          <a
            href="https://discord.com/invite/v7YtC2cKVd"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white font-minecraft px-4 py-2 rounded text-sm"
          >
            JOIN NOW
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-300" />
          ) : (
            <Menu className="h-6 w-6 text-gray-300" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 px-4 py-6 bg-gray-900/90 backdrop-blur-sm">
            <Link
              href="/nations"
              className="text-sm font-medium text-gray-300 hover:text-red-400"
              onClick={() => setIsMenuOpen(false)}
            >
              NATIONS
            </Link>
            <Link
              href="/wiki"
              className="text-sm font-medium text-gray-300 hover:text-red-400"
              onClick={() => setIsMenuOpen(false)}
            >
              WIKI
            </Link>
            <Link
              href="/rules"
              className="text-sm font-medium text-gray-300 hover:text-red-400"
              onClick={() => setIsMenuOpen(false)}
            >
              RULES
            </Link>
            <a
              href="https://discord.com/invite/v7YtC2cKVd"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white w-full text-center font-minecraft px-4 py-2 rounded"
            >
              JOIN NOW
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
