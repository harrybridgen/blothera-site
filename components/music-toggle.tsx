"use client"

import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  // Persist audio on reload
  useEffect(() => {
    if (!audioRef.current) {
      const audio = new Audio("/music/theme.mp3")
      audio.loop = true
      audio.volume = 0.4
      audioRef.current = audio
    }

    // Auto-play if user had it enabled
    const stored = localStorage.getItem("blothera-music")
    if (stored === "on") {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }, [])

  const toggleMusic = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
      localStorage.setItem("blothera-music", "off")
    } else {
      audioRef.current.play()
      localStorage.setItem("blothera-music", "on")
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleMusic}
        className="p-2 rounded-full bg-gray-900/80 hover:bg-red-600 transition"
        aria-label="Toggle Music"
      >
        {isPlaying ? <Volume2 className="h-6 w-6 text-white" /> : <VolumeX className="h-6 w-6 text-white" />}
      </button>
    </div>
  )
}
