"use client"

import { useState } from "react"
import Link from "next/link"
import { LogoFull } from "./logo"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navItems = [
  { label: "Qué es", href: "#video" },
  { label: "Para quién", href: "#servicios" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Casos de Éxito", href: "#casos" },
  { label: "FAQ", href: "#faq" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <LogoFull className="h-10 w-auto" variant="white" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA & Language */}
          <div className="flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10">
                  <Globe className="h-4 w-4" />
                  <span className="sr-only">Cambiar idioma</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Español</DropdownMenuItem>
                <DropdownMenuItem>English</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button 
              className="hidden sm:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              asChild
            >
              <Link href="https://calendly.com/social-ai-solutions-co/new-meeting-1" target="_blank" rel="noopener noreferrer">Automatizar Ahora</Link>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-primary-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-foreground/10">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/5 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                className="mt-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                asChild
              >
                <Link href="https://calendly.com/social-ai-solutions-co/new-meeting-1" target="_blank" rel="noopener noreferrer">Automatizar Ahora</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
