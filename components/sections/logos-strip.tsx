'use client'

import { useEffect, useRef, useState } from 'react'

const TOTAL_MISC = 7

function MiscelaneaRotator() {
    const [idx, setIdx] = useState(3)
    const [hover, setHover] = useState(false)
    const [outIdx, setOutIdx] = useState<number | null>(null)
    const reduceMotion = useRef(false)

    useEffect(() => {
        if (typeof window !== 'undefined' && window.matchMedia) {
            reduceMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        }
    }, [])

    useEffect(() => {
        if (reduceMotion.current) return
        const dwell = hover ? 600 : 2000
        const t = setTimeout(() => {
            setOutIdx(idx)
            setIdx((i) => (i + 1) % TOTAL_MISC)
            setTimeout(() => setOutIdx(null), 360)
        }, dwell)
        return () => clearTimeout(t)
    }, [idx, hover])

    if (reduceMotion.current) {
        return (
            // eslint-disable-next-line @next/next/no-img-element
            <img src="/brand/miscelaneas/m4.png" alt="Isotipo de Social AI" className="sa-stat__misc" />
        )
    }

    return (
        <div
            className="sa-stat__misc sa-misc-rot"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            role="img"
            aria-label="Isotipo de Social AI"
        >
            {outIdx !== null && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    key={`out-${outIdx}`}
                    src={`/brand/miscelaneas/m${outIdx + 1}.png`}
                    alt=""
                    className="sa-misc-rot__layer sa-misc-rot__layer--out"
                />
            )}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                key={`in-${idx}`}
                src={`/brand/miscelaneas/m${idx + 1}.png`}
                alt=""
                className="sa-misc-rot__layer sa-misc-rot__layer--in"
            />
        </div>
    )
}

const AREAS = ['Ventas', 'Atención al cliente', 'Cobranzas', 'Facturación', 'RRHH', 'Logística', 'Jurídico']

export function LogosStripSection() {
    const ref = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (!ref.current) return
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        setVisible(true)
                        io.disconnect()
                    }
                })
            },
            { threshold: 0.2 },
        )
        io.observe(ref.current)
        return () => io.disconnect()
    }, [])

    return (
        <section className="sa-stat" id="impacto">
            <MiscelaneaRotator />
            <div className="sa-container sa-stat__inner" style={{ position: 'relative', zIndex: 1 }}>
                <div className="sa-stat__left">
                    <h2 className="sa-stat__big">
                        IA QUE
                        <br />
                        <span className="hl">TRABAJA</span> POR VOS
                    </h2>
                </div>
                <div className="sa-stat__right">
                    <p className="sa-stat__side">
                        Agentes y automatizaciones funcionando 24/7 en todas las áreas operativas de tu empresa — sin
                        que tu equipo pierda horas en tareas repetitivas.
                    </p>
                    <div ref={ref} className={'sa-areas ' + (visible ? 'is-visible' : '')}>
                        {AREAS.map((a, i) => (
                            <span
                                key={a}
                                className="sa-area-pill"
                                style={{
                                    transitionDelay: i * 70 + 'ms',
                                    animationDelay: i * 70 + 'ms',
                                }}
                            >
                                {a}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
