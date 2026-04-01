export function ImpactSection() {
    return (
        <section className="py-24 bg-[#2d1263] text-white overflow-hidden relative" id="impacto">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-24 -left-24 w-96 h-96 border border-white rounded-full" />
                <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] border border-white rounded-full" />
            </div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <h2 className="text-4xl font-bold mb-16 text-center" style={{ fontFamily: 'var(--font-display)' }}>
                    Resultados reales.
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center p-6 border-l border-white/10">
                        <div className="text-5xl font-extrabold text-[#fd6c00] mb-2">80%</div>
                        <p className="text-purple-200 uppercase tracking-widest text-xs font-bold">↓ tareas manuales</p>
                    </div>
                    <div className="text-center p-6 border-l border-white/10">
                        <div className="text-5xl font-extrabold text-[#fd6c00] mb-2">60 Segs.</div>
                        <p className="text-purple-200 uppercase tracking-widest text-xs font-bold">↑ velocidad respuesta</p>
                    </div>
                    <div className="text-center p-6 border-l border-white/10">
                        <div className="text-5xl font-extrabold text-[#fd6c00] mb-2">+45%</div>
                        <p className="text-purple-200 uppercase tracking-widest text-xs font-bold">↑ conversión leads</p>
                    </div>
                    <div className="text-center p-6 border-l border-white/10">
                        <div className="text-5xl font-extrabold text-[#fd6c00] mb-2">35%</div>
                        <p className="text-purple-200 uppercase tracking-widest text-xs font-bold">↓ costos operativos</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
