'use client';

import { useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const niches = [
    {
        id: 'cobranzas',
        title: 'Cobranzas Automáticas',
        description:
            'Automatiza tus procesos de cobranza con IA que gestiona recordatorios, seguimientos y negociaciones de pago.',
        image: '/niches/cobranzas.png',
    },
    {
        id: 'telefonica',
        title: 'IA Telefónica',
        description:
            'Agentes de voz con IA que atienden llamadas, califican leads y agendan citas automáticamente.',
        image: '/niches/telefonica.png',
    },
    {
        id: 'contenido',
        title: 'Generación de Contenido',
        description:
            'Crea contenido de marketing personalizado y escalable: emails, posts, anuncios y más.',
        image: '/niches/contenido.png',
    },
    {
        id: 'atencion',
        title: 'Atención al Cliente',
        description:
            'Chatbots inteligentes que resuelven consultas, escalan tickets y mejoran la satisfacción del cliente.',
        image: '/niches/atencion.png',
    },
    {
        id: 'comercial',
        title: 'Agente Comercial IA',
        description:
            'Vendedores virtuales que califican leads, nutren prospectos y cierran ventas automáticamente.',
        image: '/niches/comercial.png',
    },
    {
        id: 'logistica',
        title: 'Automatización Logística',
        description:
            'Optimiza rutas, gestiona inventarios y coordina entregas con inteligencia artificial predictiva.',
        image: '/niches/logistica.png',
    },
];

const VISIBLE_COUNT = 4;

export function NichesSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % niches.length);
    }, []);

    const prevSlide = useCallback(() => {
        setActiveIndex(
            (prev) => (prev - 1 + niches.length) % niches.length
        );
    }, []);

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    const getVisibleIndices = () => {
        const indices: number[] = [];
        for (let i = 0; i < VISIBLE_COUNT; i++) {
            indices.push((activeIndex + i) % niches.length);
        }
        return indices;
    };

    const visibleIndices = getVisibleIndices();

    return (
        <section
            id="servicios"
            className="py-10 md:py-14 relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-[#12071F] via-[#2B0E4A] to-[#12071F]" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C85BFF]/10 to-[#C85BFF]/15" />

            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C85BFF]/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FF7A00]/10 rounded-full blur-[100px]" />
                <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-[#C85BFF]/8 rounded-full blur-[80px]" />
                <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-[#2B0E4A]/50 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <h2
                    className="text-3xl md:text-5xl font-bold text-white mb-3 uppercase tracking-wide"
                    style={{ fontFamily: 'var(--font-display)' }}
                >
                    Está Pensado Para Vos
                </h2>
                <p className="text-white/70 text-lg mb-8 max-w-xl">
                    Soluciones de automatización AI diseñadas para cada área
                    de tu empresa
                </p>

                <div className="relative">
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-accent hover:border-accent hover:shadow-[0_0_20px_rgba(255,122,0,0.4)] active:scale-90 transition-all duration-200 cursor-pointer shadow-lg md:-left-5"
                        aria-label="Anterior"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-accent hover:border-accent hover:shadow-[0_0_20px_rgba(255,122,0,0.4)] active:scale-90 transition-all duration-200 cursor-pointer shadow-lg md:-right-5"
                        aria-label="Siguiente"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Mobile: single card */}
                    <div className="md:hidden flex justify-center px-14">
                        <NicheCard
                            niche={niches[activeIndex]}
                            isActive
                        />
                    </div>

                    {/* Desktop: 4 cards */}
                    <div className="hidden md:grid md:grid-cols-4 gap-4 px-10">
                        {visibleIndices.map((idx, i) => (
                            <NicheCard
                                key={`${idx}-${i}`}
                                niche={niches[idx]}
                                isActive={i === 0}
                                onClick={() => setActiveIndex(idx)}
                            />
                        ))}
                    </div>

                    <div className="flex justify-center gap-2.5 mt-8">
                        {niches.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`
                                    h-2.5 rounded-full transition-all duration-300
                                    ${index === activeIndex ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60 w-2.5'}
                                `}
                                aria-label={`Ir a slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function NicheCard({
    niche,
    isActive,
    onClick,
}: {
    niche: (typeof niches)[number];
    isActive?: boolean;
    onClick?: () => void;
}) {
    return (
        <div
            onClick={onClick}
            className={`
                group relative rounded-2xl cursor-pointer
                transition-all duration-500 ease-out
                hover:-translate-y-1.5
                ${isActive ? '[&_.glass]:border-accent/30' : ''}
            `}
        >
            {/* Outer glow */}
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-white/25 via-white/10 to-white/5 pointer-events-none" />

            {/* Glass card */}
            <div
                className="glass relative rounded-2xl overflow-hidden
                    bg-gradient-to-b from-white/[0.14] via-white/[0.07] to-white/[0.03]
                    backdrop-blur-xl
                    border border-white/[0.2]
                    shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),inset_0_-1px_1px_rgba(0,0,0,0.15),0_12px_40px_rgba(0,0,0,0.4),0_4px_12px_rgba(0,0,0,0.2)]
                    group-hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),inset_0_-1px_1px_rgba(0,0,0,0.15),0_16px_48px_rgba(200,91,255,0.2),0_0_24px_rgba(255,122,0,0.12)]
                    group-hover:border-white/30
                    group-hover:from-white/[0.18] group-hover:via-white/[0.09] group-hover:to-white/[0.04]
                    transition-all duration-500"
            >
                {/* Top highlight reflection */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
                {/* Diagonal light sweep */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.1] via-transparent to-transparent pointer-events-none" />

                <div className="relative h-56 overflow-hidden">
                    <Image
                        src={niche.image}
                        alt={niche.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12071F]/90 via-[#12071F]/20 to-transparent" />
                </div>
                <div className="relative p-4">
                    <h3
                        className="font-bold text-white uppercase tracking-wide text-sm mb-2"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        {niche.title}
                    </h3>
                    <p className="text-white/50 text-xs leading-relaxed line-clamp-3">
                        {niche.description}
                    </p>
                </div>
            </div>
        </div>
    );
}
