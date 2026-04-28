'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
    { label: 'Soluciones', href: '#soluciones' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Casos', href: '#casos' },
    { label: 'Precios', href: '#precios' },
    { label: 'Contacto', href: '#contacto' },
]

export function Header() {
    const [open, setOpen] = useState(false)

    return (
        <nav className="sa-nav">
            <div className="sa-container sa-nav__inner">
                <Link href="#top" className="sa-nav__logo" aria-label="Social AI">
                    <Image
                        src="/brand/logos/logo-color.png"
                        alt="Social AI"
                        width={140}
                        height={22}
                        priority
                        style={{ height: 22, width: 'auto' }}
                    />
                </Link>

                <div className="sa-nav__links">
                    {links.map((l) => (
                        <a key={l.href} href={l.href}>
                            {l.label}
                        </a>
                    ))}
                </div>

                <div className="sa-nav__right">
                    <a href="#contacto" className="btn btn--ghost hidden sm:inline-flex">
                        Ingresar
                    </a>
                    <a href="#contacto" className="btn btn--primary">
                        Hablemos →
                    </a>
                    <button
                        type="button"
                        className="md:hidden ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full text-[var(--sa-violeta)]"
                        onClick={() => setOpen((v) => !v)}
                        aria-label="Abrir menú"
                    >
                        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {open && (
                <div className="md:hidden border-t border-[#ede9f3] bg-white/95 backdrop-blur-md">
                    <div className="sa-container py-4 flex flex-col gap-2">
                        {links.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                className="px-2 py-2 text-sm font-medium text-[#4a434f] hover:text-[var(--sa-violeta)]"
                                onClick={() => setOpen(false)}
                            >
                                {l.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}
