"use client"

import { LogoFull } from "./logo"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  servicios: [
    { label: "Cobranzas Automáticas", href: "#servicios" },
    { label: "IA Telefónica", href: "#servicios" },
    { label: "Atención al Cliente", href: "#servicios" },
    { label: "Agente Comercial IA", href: "#servicios" },
  ],
  empresa: [
    { label: "Sobre Nosotros", href: "#" },
    { label: "Casos de Éxito", href: "#casos" },
    { label: "Blog", href: "#" },
    { label: "Contacto", href: "#" },
  ],
  legal: [
    { label: "Términos de Servicio", href: "#" },
    { label: "Política de Privacidad", href: "#" },
    { label: "Cookies", href: "#" },
    { label: "GDPR", href: "#" },
  ]
}

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/socialai", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/socialai", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/socialai", label: "Twitter" },
]

export function Footer() {
  return (
    <footer className="bg-primary pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-primary-foreground/10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <LogoFull className="h-10 w-auto" variant="white" />
            <p className="mt-4 text-primary-foreground/70 max-w-sm leading-relaxed">
              Diseñamos e implementamos automatizaciones de inteligencia artificial a medida para transformar tu empresa.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <a href="mailto:info@socialai.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@socialai.com</span>
              </a>
              <a href="tel:+5491112341234" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+54 9 11 1234-1234</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-accent hover:text-accent-foreground transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Newsletter</h4>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Suscríbete para recibir tips y novedades sobre IA y ventas.
            </p>
            <form className="flex flex-col gap-3">
              <Input 
                type="email" 
                placeholder="tu@email.com"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium">
                Suscribirse
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Social AI. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link 
                key={link.label}
                href={link.href} 
                className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
