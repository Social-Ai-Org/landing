"use client"

import { Play } from "lucide-react"
import { useState } from "react"
import { trackVideoEngagement } from "@/lib/gtm"

export function VSLSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
    trackVideoEngagement('play', 'vsl-main')
  }

  return (
    <section id="video" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">Que es Social AI</p>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-4xl font-bold text-foreground mb-3 text-balance">
            Descubre Como Automatizamos Tu Empresa
          </h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto">
            Mira como nuestra IA transforma operaciones en minutos
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border">
            {!isPlaying ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2B0E4A] to-[#12071F]" />
                
                <button
                  onClick={handlePlay}
                  className="relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full bg-accent hover:bg-accent/90 transition-all duration-300 flex items-center justify-center shadow-lg hover:scale-110"
                  aria-label="Reproducir video"
                >
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-accent-foreground ml-1" fill="currentColor" />
                </button>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/60">
                  <span className="text-sm font-medium">Video de presentacion</span>
                  <span className="text-sm">2:30</span>
                </div>
              </div>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
                title="Social AI - Video de Presentacion"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
