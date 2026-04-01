"use client"

import { useState } from "react"
import Link from "next/link"
import { LogoFull } from "./logo"
import { Menu, X } from "lucide-react"

const navItems = [
    { label: "Inicio", href: "#", active: true },
    { label: "Soluciones", href: "#soluciones", active: false },
    { label: "Cómo Funciona", href: "#proceso", active: false },
    { label: "Impacto", href: "#impacto", active: false },
]

const CALENDLY_URL = "https://calendly.com/social-ai-solutions-co/new-meeting-1"

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
            <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <LogoFull className="h-10 w-auto" variant="color" />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`font-semibold transition-colors duration-200 ${
                                item.active
                                    ? "text-[#fd6c00]"
                                    : "text-slate-600 hover:text-[#fd6c00]"
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* CTA + Mobile Toggle */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => window.Calendly?.initPopupWidget({ url: CALENDLY_URL })}
                        className="hidden sm:inline-flex bg-[#9f4200] text-white px-6 py-2.5 rounded-md font-semibold text-sm hover:opacity-90 active:scale-95 transition-all cursor-pointer"
                    >
                        Agendar reunión
                    </button>

                    <button
                        className="md:hidden text-[#432C7A] p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        <span className="sr-only">Toggle menu</span>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden px-6 pb-4 border-t border-gray-100">
                    <div className="flex flex-col gap-2 pt-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`px-3 py-2 rounded-md font-medium transition-colors ${
                                    item.active
                                        ? "text-[#fd6c00] bg-orange-50"
                                        : "text-slate-600 hover:text-[#fd6c00] hover:bg-gray-50"
                                }`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <button
                            className="mt-2 bg-[#9f4200] text-white px-6 py-3 rounded-md font-semibold text-center hover:opacity-90 transition-all cursor-pointer"
                            onClick={() => {
                                setMobileMenuOpen(false)
                                window.Calendly?.initPopupWidget({ url: CALENDLY_URL })
                            }}
                        >
                            Agendar reunión
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}
