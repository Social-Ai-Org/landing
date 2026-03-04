"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Link from "next/link"
import { LogoIcon } from "../logo"
import { trackCTAClick, trackDemoBookingIntent } from "@/lib/gtm"

export function CTASection() {
  const handleDemoClick = () => {
    trackCTAClick('demo_booking', 'cta_section')
    trackDemoBookingIntent()
  }

  return (
    <section id="demo" className="py-14 md:py-20 relative overflow-hidden">
      {/* Dark blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#12071F] via-[#2B0E4A] to-[#12071F]" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C85BFF]/10 to-[#C85BFF]/15" />
      
      {/* Blurred gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C85BFF]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#FF7A00]/10 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 left-1/4 w-[250px] h-[250px] bg-[#2B0E4A]/40 rounded-full blur-[60px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 mx-auto mb-8 flex items-center justify-center">
          <LogoIcon className="h-10 w-10" variant="white" />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground uppercase tracking-wide" style={{ fontFamily: 'var(--font-display)' }}>
          Comienza Hoy
        </h2>

        <p className="mt-6 text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
          Registrate y mira cómo automatizamos tu empresa con inteligencia artificial en menos de una semana.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base px-10 h-14 text-lg rounded-full"
            onClick={handleDemoClick}
            asChild
          >
            <Link href="https://calendly.com/social-ai-solutions-co/new-meeting-1" target="_blank" rel="noopener noreferrer">
              Quiero Automatizar Ahora
            </Link>
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-primary-foreground/60">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">Sin tarjeta de crédito</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">Setup en 24h</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">Cancela cuando quieras</span>
          </div>
        </div>
      </div>
    </section>
  )
}
