'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const solutions = [
  {
    icon: 'support_agent',
    title: 'Atención',
    description:
      'Agentes inteligentes que resuelven consultas complejas en tiempo real, operando 24/7 con el tono y conocimiento de tu marca.',
    image: '/niches/atencion.png',
  },
  {
    icon: 'shopping_bag',
    title: 'Ventas',
    description:
      'Calificación de leads, seguimiento automático y cierre de ventas simples sin intervención humana.',
    image: '/niches/comercial.png',
  },
  {
    icon: 'account_balance_wallet',
    title: 'Cobranzas',
    description:
      'Gestión proactiva de pagos pendientes mediante comunicaciones personalizadas por IA.',
    image: '/niches/cobranzas.png',
  },
  {
    icon: 'call',
    title: 'Telefónica',
    description:
      'Automatización de llamadas entrantes y salientes con agentes de voz inteligentes.',
    image: '/niches/telefonica.png',
  },
  {
    icon: 'edit_note',
    title: 'Contenido',
    description:
      'Generación y gestión automática de contenido para redes sociales y comunicaciones.',
    image: '/niches/contenido.png',
  },
  {
    icon: 'local_shipping',
    title: 'Logística',
    description:
      'Optimización de rutas y gestión de inventario basada en predicciones inteligentes.',
    image: '/niches/logistica.png',
  },
];

export function SolutionsSection() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [lightbox]);

  return (
    <section className="py-24 bg-[#f3f3f6]" id="soluciones">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#2d1263] mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Automatización de punta a punta, adaptada a tu negocio.
          </h2>
          <p className="text-lg text-[#494550]">
            No ofrecemos herramientas aisladas. Construimos sistemas
            inteligentes que se integran a tu operación y eliminan tareas
            manuales.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol) => (
            <div
              key={sol.title}
              className="bg-white p-8 rounded-xl shadow-sm relative overflow-hidden group flex flex-col"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[#9f4200]" />
              <span className="material-symbols-outlined text-4xl text-[#2d1263] mb-4 block">
                {sol.icon}
              </span>
              <h3
                className="text-xl font-bold mb-3"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {sol.title}
              </h3>
              <p className="text-sm text-[#494550] mb-6">
                {sol.description}
              </p>
              <button
                type="button"
                onClick={() => setLightbox({ src: sol.image, alt: sol.title })}
                className="relative w-full overflow-hidden rounded-lg shadow-md h-48 mt-auto cursor-zoom-in group/img"
                aria-label={`Ver ${sol.title} en grande`}
              >
                <Image
                  src={sol.image}
                  alt={sol.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={90}
                  className="object-cover object-top transition-transform duration-300 group-hover/img:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="material-symbols-outlined text-white opacity-0 group-hover/img:opacity-100 transition-opacity text-4xl drop-shadow-lg">
                    zoom_in
                  </span>
                </div>
              </button>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button className="text-[#2d1263] font-bold flex items-center gap-2 mx-auto hover:underline transition-all">
            Ver casos de uso
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="relative w-full max-w-6xl max-h-[90vh] aspect-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={1920}
              height={1080}
              quality={100}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
