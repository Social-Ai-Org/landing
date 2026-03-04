"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { LogoIcon } from "../logo"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Dark blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#12071F] via-[#2B0E4A] to-[#12071F]" />
      
      {/* Subtle color overlays */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#C85BFF]/10 to-[#C85BFF]/20" />
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-[#12071F]/50 to-transparent" />
      
      {/* Blurred orbs for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-[#C85BFF]/15 rounded-full blur-[200px]" />
        <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-[#FF7A00]/10 rounded-full blur-[150px]" />
        <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-[#2B0E4A]/60 rounded-full blur-[180px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-[#C85BFF]/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-[#C85BFF]/20">
              <LogoIcon className="w-5 h-5" variant="white" />
              <span className="text-primary-foreground/90 text-sm font-medium">Automatizacion Empresarial con IA</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Automatizaciones AI{" "}
              <span className="text-[#E38BFF]">a Medida</span>{" "}
              Para Tu Empresa
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-primary-foreground/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Disenamos e implementamos soluciones de inteligencia artificial que automatizan toda tu empresa: desde la atencion al cliente hasta cobranzas, ventas y contenido.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 h-14 rounded-full"
                asChild
              >
                <Link href="https://calendly.com/social-ai-solutions-co/new-meeting-1" target="_blank" rel="noopener noreferrer">
                  Quiero Automatizar Ahora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-lg px-8 h-14 rounded-full"
                asChild
              >
                <Link href="#video">
                  Ver Video
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-foreground">+500%</div>
                <div className="text-primary-foreground/70 text-sm">Productividad</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-foreground">-70%</div>
                <div className="text-primary-foreground/70 text-sm">Costos Operativos</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-foreground">24/7</div>
                <div className="text-primary-foreground/70 text-sm">Operacion</div>
              </div>
            </div>
          </div>

          {/* Right Content - Orbiting Service Cards */}
          <div className="relative hidden lg:flex items-center justify-center h-[550px]">
            <div className="relative w-[550px] h-[550px]">
              {/* Central Logo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center z-20 shadow-2xl border border-[#C85BFF]/30 animate-pulse-glow">
                <LogoIcon className="w-28 h-28 animate-float" variant="white" />
              </div>

              {/* Dashed orbit circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full border-2 border-dashed border-[#C85BFF]/20" />
              
              {/* Outer glow ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#C85BFF]/10" />

              {/* Orbiting container */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] animate-orbit">
                {/* Card 1 - Top */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-counter-rotate">
                  <div className="bg-white rounded-2xl shadow-lg p-3 w-22 h-22 flex flex-col items-center justify-center gap-1.5">
                    <svg className="w-7 h-7 text-[#C85BFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                    <span className="text-[10px] font-semibold text-[#12071F] text-center leading-tight">Atención</span>
                  </div>
                </div>

                {/* Card 2 - Top Right */}
                <div className="absolute top-[15%] right-[3%] animate-counter-rotate">
                  <div className="bg-white rounded-2xl shadow-lg p-3 w-22 h-22 flex flex-col items-center justify-center gap-1.5">
                    <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[10px] font-semibold text-accent text-center leading-tight">Cobranzas</span>
                  </div>
                </div>

                {/* Card 3 - Bottom Right */}
                <div className="absolute bottom-[15%] right-[3%] animate-counter-rotate">
                  <div className="bg-white rounded-2xl shadow-lg p-3 w-22 h-22 flex flex-col items-center justify-center gap-1.5">
                    <svg className="w-7 h-7 text-[#C85BFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-[10px] font-semibold text-[#12071F] text-center leading-tight">Telefónica</span>
                  </div>
                </div>

                {/* Card 4 - Bottom */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 animate-counter-rotate">
                  <div className="bg-white rounded-2xl shadow-lg p-3 w-22 h-22 flex flex-col items-center justify-center gap-1.5">
                    <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span className="text-[10px] font-semibold text-accent text-center leading-tight">Ventas</span>
                  </div>
                </div>

                {/* Card 5 - Bottom Left */}
                <div className="absolute bottom-[15%] left-[3%] animate-counter-rotate">
                  <div className="bg-white rounded-2xl shadow-lg p-3 w-22 h-22 flex flex-col items-center justify-center gap-1.5">
                    <svg className="w-7 h-7 text-[#C85BFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    <span className="text-[10px] font-semibold text-[#12071F] text-center leading-tight">Contenido</span>
                  </div>
                </div>

                {/* Card 6 - Top Left */}
                <div className="absolute top-[15%] left-[3%] animate-counter-rotate">
                  <div className="bg-white rounded-2xl shadow-lg p-3 w-22 h-22 flex flex-col items-center justify-center gap-1.5">
                    <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                    </svg>
                    <span className="text-[10px] font-semibold text-accent text-center leading-tight">Logística</span>
                  </div>
                </div>
              </div>

              {/* Floating particles */}
              <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#C85BFF] rounded-full animate-pulse" />
              <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-[#FF7A00]/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
