"use client"
import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"

// Create a singleton audio instance to persist across page navigation
let audioInstance: HTMLAudioElement | null = null

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false)
  
  // Initialize audio and restore state
  useEffect(() => {
    // Create audio instance only once across the application
    if (!audioInstance) {
      audioInstance = new Audio("/music/track.mp3")
      audioInstance.loop = true
      audioInstance.volume = 0.4
    }
    
    // Restore playing state and track position
    const stored = localStorage.getItem("blothera-music")
    const storedTime = localStorage.getItem("blothera-music-time")
    
    if (stored === "on") {
      audioInstance.currentTime = storedTime ? parseFloat(storedTime) : 0
      audioInstance.play().catch(e => console.error("Audio playback failed:", e))
      setIsPlaying(true)
    }
    
    // Save current time periodically while playing
    const saveInterval = setInterval(() => {
      if (audioInstance && !audioInstance.paused) {
        localStorage.setItem("blothera-music-time", audioInstance.currentTime.toString())
      }
    }, 1000)
    
    // Clean up
    return () => {
      clearInterval(saveInterval)
    }
  }, [])
  
  const toggleMusic = () => {
    if (!audioInstance) return
    
    if (isPlaying) {
      audioInstance.pause()
      localStorage.setItem("blothera-music", "off")
    } else {
      audioInstance.play().catch(e => console.error("Audio playback failed:", e))
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
        {isPlaying ? 
          <Volume2 className="h-6 w-6 text-white" /> : 
          <VolumeX className="h-6 w-6 text-white" />
        }
      </button>
    </div>
  )
}