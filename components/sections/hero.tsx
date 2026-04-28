'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const WORDS = ['SALTO', 'AVANCE', 'CAMBIO']

function RotatingWord() {
    const [idx, setIdx] = useState(0)
    const [phase, setPhase] = useState<'in' | 'out'>('in')
    const reduceMotion = useRef(false)

    useEffect(() => {
        if (typeof window === 'undefined' || !window.matchMedia) return
        reduceMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (reduceMotion.current) return

        let outTimer: ReturnType<typeof setTimeout>
        const interval = setInterval(() => {
            setPhase('out')
            outTimer = setTimeout(() => {
                setIdx((i) => (i + 1) % WORDS.length)
                setPhase('in')
            }, 250)
        }, 1200)
        return () => {
            clearInterval(interval)
            clearTimeout(outTimer)
        }
    }, [])

    if (reduceMotion.current) {
        return (
            <span className="sa-rotword-slot">
                <span className="hl">SALTO</span>
            </span>
        )
    }

    return (
        <span className="sa-rotword-slot">
            <span className="sa-rotword-slot__ghost" aria-hidden="true">
                AVANCE
            </span>
            <span key={idx} className={`hl sa-rotword sa-rotword--${phase}`} aria-live="polite">
                {WORDS[idx]}
            </span>
        </span>
    )
}

export function HeroSection() {
    return (
        <section className="sa-hero" id="top">
            <div className="sa-hero__bg">
                <Image
                    src="/brand/textures/texture-4.png"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    style={{ objectFit: 'cover', opacity: 0.85 }}
                />
                <div className="sa-aurora" aria-hidden="true">
                    <div className="sa-aurora__blob sa-aurora__blob--1" />
                    <div className="sa-aurora__blob sa-aurora__blob--2" />
                    <div className="sa-aurora__blob sa-aurora__blob--3" />
                </div>
            </div>

            <div className="sa-hero__chip" style={{ top: 100, right: 60 }}>
                <span
                    style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: '#FF6200',
                    }}
                />
                BUENOS AIRES · 2026
            </div>

            <div className="sa-container sa-hero__inner">
                <div className="sa-hero__eyebrow">SOFTWARE FACTORY · IA A MEDIDA</div>
                <h1 className="sa-hero__title">
                    DAR EL
                    <br />
                    <RotatingWord /> CON
                    <br />
                    INTELIGENCIA
                </h1>
                <p className="sa-hero__sub">
                    IA a medida, software de gestión y diagnóstico estratégico. El motor operativo que tu empresa
                    necesita para escalar sin sumar headcount.
                </p>
                <div className="sa-hero__cta">
                    <a href="#contacto" className="btn btn--primary">
                        Empezar un proyecto →
                    </a>
                    <a href="#contacto" className="btn btn--ghost-light">
                        Agendar diagnóstico
                    </a>
                </div>
            </div>
        </section>
    )
}
