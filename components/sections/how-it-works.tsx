export function HowItWorksSection() {
    return (
        <section className="py-24 bg-[#f9f9fc]" id="proceso">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#2d1263] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                        Cómo llevamos IA a tu operación real.
                    </h2>
                </div>
                <div className="relative grid md:grid-cols-3 gap-12">
                    {/* Step 1 */}
                    <div className="relative flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-[#432c7a] text-[#b098ee] rounded-full flex items-center justify-center mb-6 relative z-10 shadow-xl">
                            <span className="material-symbols-outlined text-3xl">search</span>
                        </div>
                        <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 border-t-2 border-dashed border-gray-300" />
                        <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>1. Auditoría & Estrategia</h3>
                        <p className="text-[#494550]">Nos metemos de lleno en tu operación para entender cómo funciona tu negocio hoy. Analizamos procesos, detectamos cuellos de botella y oportunidades de mejora, y diseñamos una estrategia de automatización 100% alineada a tus objetivos.</p>
                    </div>
                    {/* Step 2 */}
                    <div className="relative flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-[#fd6c00] text-white rounded-full flex items-center justify-center mb-6 relative z-10 shadow-xl">
                            <span className="material-symbols-outlined text-3xl">memory</span>
                        </div>
                        <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 border-t-2 border-dashed border-gray-300" />
                        <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>2. Implementación Inteligente</h3>
                        <p className="text-[#494550]">Desarrollamos e integramos soluciones con inteligencia artificial adaptadas a tu lógica de negocio. Conectamos tus canales (WhatsApp, CRM, APIs, sistemas internos) y automatizamos procesos clave con precisión y escalabilidad.</p>
                    </div>
                    {/* Step 3 */}
                    <div className="relative flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-[#432c7a] text-[#b098ee] rounded-full flex items-center justify-center mb-6 relative z-10 shadow-xl">
                            <span className="material-symbols-outlined text-3xl">rocket_launch</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>3. Activación & Escalamiento</h3>
                        <p className="text-[#494550]">Ponemos todo en marcha y optimizamos en tiempo real. Desde la interacción con clientes hasta la gestión interna, tu operación empieza a funcionar de forma automática, eficiente y lista para crecer sin fricción.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
