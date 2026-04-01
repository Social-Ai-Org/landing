"use client"

import Link from "next/link"
import { LogoIcon } from "../logo"

const CALENDLY_URL = "https://calendly.com/social-ai-solutions-co/new-meeting-1"

export function HeroSection() {
    return (
        <header className="relative pt-24 pb-12 md:pt-28 md:pb-20 overflow-hidden bg-[#f9f9fc]">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left Content */}
                <div className="space-y-6">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-[#2d1263] leading-[1.1] tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                        Automatizá procesos completos de tu empresa con IA
                    </h1>
                    <p className="text-xl text-[#494550] leading-relaxed max-w-xl">
                        Diseñamos e implementamos soluciones de inteligencia artificial que automatizan operaciones, ventas y gestión interna — desde atención al cliente hasta procesamiento de datos y toma de decisiones.
                    </p>
                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-[#9f4200] pt-0.5">check_circle</span>
                            <span className="text-[#1a1c1e] font-medium">Automatización de atención, ventas y cobranzas</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-[#9f4200] pt-0.5">check_circle</span>
                            <span className="text-[#1a1c1e] font-medium">Procesamiento inteligente de datos y documentos</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-[#9f4200] pt-0.5">check_circle</span>
                            <span className="text-[#1a1c1e] font-medium">Integración con tus sistemas actuales (CRM, ERP, APIs)</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-[#9f4200] pt-0.5">check_circle</span>
                            <span className="text-[#1a1c1e] font-medium">Implementaciones a medida, no soluciones genéricas</span>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        <button
                            onClick={() => window.Calendly?.initPopupWidget({ url: CALENDLY_URL })}
                            className="bg-[#9f4200] text-white px-8 py-4 rounded-md font-bold text-lg shadow-lg hover:shadow-[#9f4200]/20 transition-all active:scale-95 text-center cursor-pointer"
                        >
                            Agendar reunión
                        </button>
                        <Link
                            href="#proceso"
                            className="bg-[#2d1263] text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-[#432c7a] transition-all active:scale-95 text-center"
                        >
                            Ver cómo funciona
                        </Link>
                    </div>
                </div>

                {/* Right Content - Orbiting Animation */}
                <div className="relative hidden md:flex items-center justify-center h-[500px]">
                    <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#2d1263]/5 rounded-full blur-3xl" />
                    <div className="relative w-[500px] h-[500px]">
                        {/* Central Logo */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#2d1263] rounded-full flex items-center justify-center z-20 shadow-2xl border border-[#432c7a] animate-pulse-glow">
                            <LogoIcon className="w-24 h-24 animate-float" variant="white" />
                        </div>

                        {/* Dashed orbit circle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border-2 border-dashed border-[#2d1263]/15" />

                        {/* Outer glow ring */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full border border-[#2d1263]/8" />

                        {/* Orbiting container */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] animate-orbit">
                            {/* Card 1 - Top: Logística */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-counter-rotate">
                                <div className="bg-white rounded-2xl shadow-lg p-3 w-22 h-22 flex flex-col items-center justify-center gap-1.5">
                                    <svg className="w-7 h-7 text-[#FF7A00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                                    </svg>
                                    <span className="text-[10px] font-semibold text-[#FF7A00] text-center leading-tight">Logística</span>
                                </div>
                            </div>

                            {/* Card 2 - Top Right: Atención */}
                            <div className="absolute top-[15%] right-[3%] animate-counter-rotate">
                                <div className="bg-white rounded-2xl shadow-lg p-3 w-22 h-22 flex flex-col items-center justify-center gap-1.5">
                                    <svg className="w-7 h-7 text-[#C85BFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                    </svg>
                                    <span className="text-[10px] font-semibold text-[#C85BFF] text-center leading-tight">Atención</span>
                                </div>
                            </div>

                            {/* Card 3 - Bottom Right: Cobranzas */}
                            <div className="absolute bottom-[15%] right-[3%] animate-counter-rotate">
                                <div className="bg-white rounded-2xl shadow-lg p-3 w-22 h-22 flex flex-col items-center justify-center gap-1.5">
                                    <svg className="w-7 h-7 text-[#FF7A00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-[10px] font-semibold text-[#FF7A00] text-center leading-tight">Cobranzas</span>
                                </div>
                            </div>

                            {/* Card 4 - Bottom: Telefónica */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 animate-counter-rotate">
                                <div className="bg-white rounded-2xl shadow-lg p-3 w-22 h-22 flex flex-col items-center justify-center gap-1.5">
                                    <svg className="w-7 h-7 text-[#C85BFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span className="text-[10px] font-semibold text-[#C85BFF] text-center leading-tight">Telefónica</span>
                                </div>
                            </div>

                            {/* Card 5 - Bottom Left: Ventas */}
                            <div className="absolute bottom-[15%] left-[3%] animate-counter-rotate">
                                <div className="bg-white rounded-2xl shadow-lg p-3 w-22 h-22 flex flex-col items-center justify-center gap-1.5">
                                    <svg className="w-7 h-7 text-[#FF7A00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                    <span className="text-[10px] font-semibold text-[#FF7A00] text-center leading-tight">Ventas</span>
                                </div>
                            </div>

                            {/* Card 6 - Top Left: Contenido */}
                            <div className="absolute top-[15%] left-[3%] animate-counter-rotate">
                                <div className="bg-white rounded-2xl shadow-lg p-3 w-22 h-22 flex flex-col items-center justify-center gap-1.5">
                                    <svg className="w-7 h-7 text-[#C85BFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    <span className="text-[10px] font-semibold text-[#C85BFF] text-center leading-tight">Contenido</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating particles */}
                        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#C85BFF]/40 rounded-full animate-pulse" />
                        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-[#FF7A00]/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                    </div>
                </div>
            </div>
        </header>
    )
}
