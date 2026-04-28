'use client'

/* eslint-disable @next/next/no-img-element */

import { useState } from 'react'

const WA_NUMBER = '5491158577753'
const FACT_OPTIONS = ['10K — 50K', '50K — 100K', '+100K']

export function CTASection() {
    const [form, setForm] = useState({
        empresa: '',
        telefono: '',
        email: '',
        empleados: '',
        facturacion: '',
    })
    const [sent, setSent] = useState(false)
    const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
        setForm({ ...form, [k]: e.target.value })

    const waMsg = encodeURIComponent(
        `Hola Social AI! Quiero agendar una auditoría.\n` +
            `Empresa: ${form.empresa || '—'}\n` +
            `Tel: ${form.telefono || '—'}\n` +
            `Email: ${form.email || '—'}\n` +
            `Empleados: ${form.empleados || '—'}\n` +
            `Facturación: ${form.facturacion || '—'}`,
    )
    const waHref = `https://wa.me/${WA_NUMBER}?text=${waMsg}`

    return (
        <section className="sa-contact" id="contacto">
            <img src="/brand/logos/iso-negative.png" alt="" className="sa-contact__iso" />
            <div className="sa-container sa-contact__inner" style={{ alignItems: 'flex-start' }}>
                <div
                    className="sa-contact__grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1.2fr',
                        gap: 64,
                        width: '100%',
                        alignItems: 'start',
                    }}
                >
                    {/* Left — pitch */}
                    <div>
                        <div
                            style={{
                                fontSize: 12,
                                textTransform: 'uppercase',
                                letterSpacing: '.14em',
                                fontWeight: 600,
                                color: '#FF6200',
                                marginBottom: 16,
                            }}
                        >
                            ¿Listo para empezar?
                        </div>
                        <h2 className="sa-contact__title">
                            DAR EL
                            <br />
                            <span style={{ color: '#FF6200' }}>SALTO</span>
                            <br />
                            EMPIEZA ACÁ.
                        </h2>
                        <p className="sa-contact__sub" style={{ maxWidth: 420 }}>
                            Contanos sobre tu empresa y te respondemos en menos de 24 hs con un mapa de oportunidades y
                            su ROI estimado.
                        </p>

                        <a
                            href={waHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 12,
                                background: '#25D366',
                                color: '#fff',
                                fontFamily: 'var(--font-sans)',
                                fontWeight: 700,
                                fontSize: 15,
                                letterSpacing: '.02em',
                                padding: '16px 24px',
                                borderRadius: 999,
                                textDecoration: 'none',
                                marginTop: 28,
                                boxShadow: '0 12px 30px -10px rgba(37,211,102,.6)',
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                                <path d="M20.52 3.48A11.87 11.87 0 0012 0C5.37 0 0 5.37 0 12a11.9 11.9 0 001.67 6.1L0 24l6.08-1.6A11.96 11.96 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.2-3.48-8.52zM12 21.8c-1.92 0-3.8-.52-5.45-1.5l-.39-.23-3.61.95.96-3.52-.25-.4A9.76 9.76 0 012.2 12 9.8 9.8 0 0112 2.2c2.62 0 5.08 1.02 6.93 2.87A9.76 9.76 0 0121.8 12 9.8 9.8 0 0112 21.8zm5.37-7.33c-.29-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.67.15s-.77.96-.94 1.15c-.17.19-.35.22-.64.07-.29-.15-1.24-.46-2.36-1.46-.87-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.35.43-.52.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51l-.57-.01c-.19 0-.51.07-.78.36s-1.02 1-1.02 2.43 1.05 2.82 1.2 3.01c.15.19 2.07 3.16 5.02 4.43.7.3 1.25.48 1.67.62.7.22 1.34.19 1.84.12.56-.08 1.74-.71 1.98-1.4.24-.69.24-1.28.17-1.4-.07-.12-.27-.19-.56-.34z" />
                            </svg>
                            Escribinos por WhatsApp
                        </a>
                    </div>

                    {/* Right — form */}
                    <div
                        style={{
                            background: 'rgba(255,255,255,.04)',
                            border: '1px solid rgba(255,255,255,.12)',
                            borderRadius: 24,
                            padding: 32,
                        }}
                    >
                        {sent ? (
                            <div style={{ padding: '40px 0', textAlign: 'center' }}>
                                <div
                                    style={{
                                        fontFamily: 'var(--font-display)',
                                        textTransform: 'uppercase',
                                        fontSize: 48,
                                        lineHeight: 1,
                                        color: '#FF6200',
                                        marginBottom: 12,
                                    }}
                                >
                                    ¡Recibido!
                                </div>
                                <div
                                    style={{
                                        fontSize: 16,
                                        color: 'rgba(255,255,255,.8)',
                                        maxWidth: 360,
                                        margin: '0 auto',
                                    }}
                                >
                                    Te escribimos a <strong>{form.email}</strong> en menos de 24 hs.
                                </div>
                            </div>
                        ) : (
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault()
                                    setSent(true)
                                }}
                                style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
                            >
                                <div
                                    style={{
                                        fontFamily: 'var(--font-display)',
                                        textTransform: 'uppercase',
                                        fontSize: 28,
                                        letterSpacing: '.02em',
                                        color: '#fff',
                                        marginBottom: 4,
                                    }}
                                >
                                    Auditoría gratuita
                                </div>

                                <div>
                                    <label className="sa-label">Nombre de la empresa</label>
                                    <input
                                        className="sa-input"
                                        type="text"
                                        required
                                        value={form.empresa}
                                        onChange={set('empresa')}
                                        placeholder="Tu marca SRL"
                                    />
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                                    <div>
                                        <label className="sa-label">Teléfono</label>
                                        <input
                                            className="sa-input"
                                            type="tel"
                                            required
                                            value={form.telefono}
                                            onChange={set('telefono')}
                                            placeholder="+54 11 ..."
                                        />
                                    </div>
                                    <div>
                                        <label className="sa-label">Email</label>
                                        <input
                                            className="sa-input"
                                            type="email"
                                            required
                                            value={form.email}
                                            onChange={set('email')}
                                            placeholder="hola@tumarca.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="sa-label">Cantidad de empleados</label>
                                    <input
                                        className="sa-input"
                                        type="number"
                                        min={1}
                                        required
                                        value={form.empleados}
                                        onChange={set('empleados')}
                                        placeholder="25"
                                    />
                                </div>

                                <div>
                                    <label className="sa-label">Facturación mensual</label>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
                                        {FACT_OPTIONS.map((opt) => {
                                            const active = form.facturacion === opt
                                            return (
                                                <button
                                                    type="button"
                                                    key={opt}
                                                    onClick={() => setForm({ ...form, facturacion: opt })}
                                                    style={{
                                                        padding: '12px 8px',
                                                        borderRadius: 12,
                                                        border: active
                                                            ? '1px solid #FF6200'
                                                            : '1px solid rgba(255,255,255,.18)',
                                                        background: active
                                                            ? 'rgba(255,98,0,.15)'
                                                            : 'rgba(255,255,255,.06)',
                                                        color: active ? '#FF6200' : '#fff',
                                                        fontFamily: 'var(--font-sans)',
                                                        fontWeight: 600,
                                                        fontSize: 13,
                                                        cursor: 'pointer',
                                                        transition: 'all .15s',
                                                    }}
                                                >
                                                    USD {opt}
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn--primary"
                                    disabled={!form.facturacion}
                                    style={{
                                        marginTop: 8,
                                        opacity: form.facturacion ? 1 : 0.5,
                                        justifyContent: 'center',
                                    }}
                                >
                                    Enviar consulta →
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
