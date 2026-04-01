'use client';

import Image from 'next/image';

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
              <div className="relative w-full overflow-hidden rounded-lg shadow-md h-48 mt-auto">
                <Image
                  src={sol.image}
                  alt={sol.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={90}
                  className="object-cover object-top"
                />
              </div>
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
    </section>
  );
}
