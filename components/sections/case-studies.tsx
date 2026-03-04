"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, Star } from "lucide-react"
import Image from "next/image"
import { LogoIcon } from "../logo"

// Video testimonials data
const videoTestimonials = [
  {
    id: 1,
    name: "María García",
    company: "TechCorp Solutions",
    thumbnail: "/testimonials/video1.jpg",
    videoUrl: "#",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    company: "Finanzas Plus",
    thumbnail: "/testimonials/video2.jpg",
    videoUrl: "#",
  },
  {
    id: 3,
    name: "Ana Martínez",
    company: "Logística Express",
    thumbnail: "/testimonials/video3.jpg",
    videoUrl: "#",
  },
  {
    id: 4,
    name: "Roberto Sánchez",
    company: "Marketing Digital Pro",
    thumbnail: "/testimonials/video4.jpg",
    videoUrl: "#",
  },
]

// Written reviews data
const reviews = [
  {
    id: 1,
    name: "Regina Miles",
    role: "CEO",
    company: "TechStart",
    rating: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida vulputate sed id. Gravida viverra neque erat dictum. Diam nunc egestas morbi nulla dignissim facilisis nec vestibulum.",
    avatar: "/testimonials/avatar1.jpg",
  },
  {
    id: 2,
    name: "Regina Miles",
    role: "Director",
    company: "Fintech Co",
    rating: 4,
    text: "Lorem ipsum dolor sit amet consectetuer. Uma dui vulputate sed id. Gravida viverra neque erat dictum. Diam nunc egestas morbi nulla dignissim facilisis nec vestibulum. Tulla gravida vitae pellentesque pretium.",
    avatar: "/testimonials/avatar2.jpg",
  },
  {
    id: 3,
    name: "Regina Miles",
    role: "Founder",
    company: "Startup Labs",
    rating: 4,
    text: "Lorem ipsum dolor sit amet, vulputate sed id. Gravida viverra neque erat dictum. Diam nunc egestas morbi nulla dignissim facilisis nec vestibulum. Tulla gravida vitae auctor malesuada.",
    avatar: "/testimonials/avatar3.jpg",
  },
  {
    id: 4,
    name: "Regina Miles",
    role: "Manager",
    company: "Corp Inc",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur. Gravida vulputate sed id neque erat dictum nunc egestas morbi nulla dignissim facilisis nec vestibulum auctor malesuada vitae sagittis sed ac.",
    avatar: "/testimonials/avatar4.jpg",
  },
]

// Client logos placeholder
const clientLogos = [
  "LOGOCLIENT",
  "LOGOCLIENT",
  "LOGOCLIENT",
  "LOGOCLIENT",
  "LOGOCLIENT",
]

export function CaseStudiesSection() {
  const [activeVideo, setActiveVideo] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideo((prev) => (prev + 1) % videoTestimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="casos" className="relative overflow-hidden">
      {/* Video Testimonials Section */}
      <div className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground mb-2">No te fíes de nosotros,</p>
          <h2 
            className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12 uppercase"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Comprueba de Primera Mano los Resultados<br />de Nuestros Clientes!
          </h2>

          {/* Video Carousel */}
          <div className="relative">
            {/* Dark gradient background for video area */}
            <div className="absolute inset-x-0 top-1/4 bottom-0 bg-gradient-to-b from-[#12071F] via-[#2B0E4A] to-[#12071F] -mx-4 md:-mx-8 rounded-2xl" />
            
            <div className="relative flex items-end justify-center gap-3 md:gap-4 pt-8 pb-8">
              {/* Navigation */}
              <button
                onClick={() => setActiveVideo((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center hover:bg-accent/80 transition-all"
                aria-label="Anterior video"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => setActiveVideo((prev) => (prev + 1) % videoTestimonials.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center hover:bg-accent/80 transition-all"
                aria-label="Siguiente video"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Video cards - Instagram story style */}
              {videoTestimonials.map((video, index) => (
                <div
                  key={video.id}
                  className={`
                    relative bg-white rounded-xl overflow-hidden shadow-xl transition-all duration-500 cursor-pointer
                    ${index === activeVideo 
                      ? 'w-40 md:w-48 h-64 md:h-80 z-10' 
                      : 'w-32 md:w-40 h-56 md:h-72 opacity-80'
                    }
                  `}
                  onClick={() => setActiveVideo(index)}
                >
                  {/* Header with user info */}
                  <div className="absolute top-0 left-0 right-0 p-3 bg-gradient-to-b from-black/50 to-transparent z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-[#C85BFF] to-[#2B0E4A]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-xs font-medium truncate">{video.name}</p>
                        <p className="text-white/60 text-[10px] truncate">{video.company}</p>
                      </div>
                      <div className="text-white/60">•••</div>
                    </div>
                  </div>

                  {/* Video thumbnail area - Purple gradient sphere like Figma */}
                  <div className="absolute inset-0 bg-[#2B0E4A]/10 flex items-center justify-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#C85BFF]/40 via-[#2B0E4A]/50 to-[#12071F]/60 opacity-60" />
                  </div>

                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                      <Play className="w-5 h-5 text-primary ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="py-8 bg-gradient-to-r from-[#12071F] via-[#2B0E4A] to-[#12071F]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <LogoIcon className="w-10 h-10" />
                <span className="text-3xl md:text-4xl font-bold text-white">39,389</span>
              </div>
              <p className="text-white/70 text-sm">Procesos Automatizados</p>
            </div>
            <div className="text-center">
              <span className="text-3xl md:text-4xl font-bold text-white">39,389</span>
              <p className="text-white/70 text-sm">Leads Procesados</p>
            </div>
            <div className="text-center">
              <span className="text-3xl md:text-4xl font-bold text-white">39,389</span>
              <p className="text-white/70 text-sm">Horas Ahorradas</p>
            </div>
            <div className="text-center">
              <span className="text-3xl md:text-4xl font-bold text-white">39,389</span>
              <p className="text-white/70 text-sm">Empresas Activas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust message + Reviews */}
      <div className="pt-10 pb-8 bg-background relative">
        {/* Orange decorative circles */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-[#C85BFF]/20 rounded-full blur-xl" />
        <div className="absolute top-40 right-24 w-20 h-20 bg-[#FF7A00]/15 rounded-full blur-lg" />
        <div className="absolute bottom-20 right-16 w-24 h-24 bg-[#C85BFF]/15 rounded-full blur-xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <h3 
              className="text-2xl md:text-3xl font-bold text-foreground uppercase"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Confía en Nuestra Experiencia Para Desarrollar<br />Tu Estrategia de Automatización
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`
                  bg-white rounded-2xl p-6 shadow-lg border border-gray-100
                  ${index === 1 ? 'md:mt-12' : ''}
                  ${index === 2 ? 'md:mt-24' : ''}
                `}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < review.rating ? 'text-accent fill-accent' : 'text-gray-300'}`}
                    />
                  ))}
                </div>

                {/* Name and avatar */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden" />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6">
                      <LogoIcon className="w-full h-full" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </div>

                {/* Review text */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {review.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client Logos Banner */}
      <div className="py-8 bg-[#f3eef8]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {clientLogos.map((logo, index) => (
              <span 
                key={index}
                className="text-xl md:text-2xl font-bold text-gray-400 tracking-wider"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
