import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Blothera Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 font-minecraft">BLOTHERA</h3>
            <p className="text-gray-400 text-sm">
              A hardcore Minecraft experience where death has consequences and your actions shape the world.
            </p>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://discord.gg/v7YtC2cKVd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400"
              >
                <span className="sr-only">Discord</span>
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515..." />
                </svg>
              </a>

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400"
              >
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26..." />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 font-minecraft">LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/nations" className="text-gray-400 hover:text-red-400 text-sm">
                  Nations & Warfare
                </Link>
              </li>
              <li>
                <Link href="/rules" className="text-gray-400 hover:text-red-400 text-sm">
                  Rules
                </Link>
              </li>
              <li>
                <a
                  href="https://discord.gg/v7YtC2cKVd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-400 text-sm"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div> 

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            Blothera © 2012–{new Date().getFullYear()} Harry Bridgen. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Minecraft is a trademark of Mojang AB and is not affiliated with this site.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Music: "Epic Hollywood Trailer" by MOKKA via <a href="https://pixabay.com/music/main-title-epic-hollywood-trailer-9489/" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-400">Pixabay</a>
          </p>

        </div>
      </div> 
    </footer>
  )
}
