export function SocialProofSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-[#6751a0]/5 p-12 rounded-2xl relative">
                    <span className="material-symbols-outlined text-6xl text-[#2d1263]/10 absolute top-8 right-12">format_quote</span>
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold text-[#2d1263] mb-10" style={{ fontFamily: 'var(--font-display)' }}>
                            Lo que dicen nuestros clientes
                        </h2>
                        <blockquote className="text-2xl italic text-[#1a1c1e] leading-relaxed mb-8">
                            &ldquo;Logramos automatizar el 70% de nuestras consultas de atención al cliente en solo 30 días. La integración con nuestro CRM fue impecable y los resultados en conversión se notaron desde la primera semana.&rdquo;
                        </blockquote>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#432c7a] rounded-full" />
                            <div>
                                <p className="font-bold text-[#2d1263]">Director de Operaciones</p>
                                <p className="text-sm text-[#494550]">Retail Tech Leader</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
