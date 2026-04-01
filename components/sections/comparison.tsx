export function ComparisonSection() {
    return (
        <section className="py-24 bg-[#f3f3f6]">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-[#2d1263] mb-16 text-center" style={{ fontFamily: 'var(--font-display)' }}>
                    Eliminá fricción operativa y escalá sin aumentar estructura.
                </h2>
                <div className="grid md:grid-cols-2 gap-px bg-gray-200 rounded-2xl overflow-hidden shadow-sm">
                    {/* Traditional Side */}
                    <div className="bg-[#e8e8ea] p-10">
                        <h3 className="text-xl font-bold mb-8 flex items-center gap-2 text-[#1a1c1e]">
                            <span className="material-symbols-outlined text-[#ba1a1a]">error_outline</span>
                            Gestión Tradicional
                        </h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <span className="material-symbols-outlined text-slate-400 mt-1">remove</span>
                                <div>
                                    <p className="font-bold">Respuesta lenta</p>
                                    <p className="text-sm text-[#494550]">Clientes esperan horas por una respuesta básica.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="material-symbols-outlined text-slate-400 mt-1">remove</span>
                                <div>
                                    <p className="font-bold">Error Humano</p>
                                    <p className="text-sm text-[#494550]">Carga de datos manual propensa a fallos críticos.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="material-symbols-outlined text-slate-400 mt-1">remove</span>
                                <div>
                                    <p className="font-bold">Costos Lineales</p>
                                    <p className="text-sm text-[#494550]">Para vender el doble necesitás el doble de gente.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* AI Side */}
                    <div className="bg-white p-10">
                        <h3 className="text-xl font-bold mb-8 flex items-center gap-2 text-[#2d1263]">
                            <span className="material-symbols-outlined text-[#9f4200]">verified</span>
                            Social AI
                        </h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <span className="material-symbols-outlined text-[#9f4200] mt-1">bolt</span>
                                <div>
                                    <p className="font-bold">Inmediatez absoluta</p>
                                    <p className="text-sm text-[#494550]">Atención instantánea 24/7 sin tiempos de espera.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="material-symbols-outlined text-[#9f4200] mt-1">precision_manufacturing</span>
                                <div>
                                    <p className="font-bold">Precisión quirúrgica</p>
                                    <p className="text-sm text-[#494550]">Procesamiento de datos sin errores, validado por IA.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="material-symbols-outlined text-[#9f4200] mt-1">trending_up</span>
                                <div>
                                    <p className="font-bold">Escalabilidad infinita</p>
                                    <p className="text-sm text-[#494550]">Aumentá tu volumen de operación sin aumentar nómina.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
