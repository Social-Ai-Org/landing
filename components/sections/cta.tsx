"use client"

const CALENDLY_URL = "https://calendly.com/social-ai-solutions-co/new-meeting-1"

export function CTASection() {
    return (
        <section className="py-24 bg-[#f9f9fc]">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-6xl font-extrabold text-[#2d1263] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                    ¿Listo para automatizar tu operación con IA?
                </h2>
                <p className="text-xl text-[#494550] mb-12 max-w-2xl mx-auto">
                    Agendá una asesoría y detectamos juntos qué procesos podés automatizar en semanas.
                </p>
                <button
                    onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: 'agendar_click' }); window.Calendly?.initPopupWidget({ url: CALENDLY_URL }); }}
                    className="bg-[#9f4200] text-white px-10 py-5 rounded-md font-bold text-xl shadow-xl hover:shadow-[#9f4200]/30 transition-all active:scale-95 inline-flex items-center gap-3 cursor-pointer"
                >
                    Agendar asesoría gratuita
                    <span className="material-symbols-outlined">calendar_today</span>
                </button>
            </div>
        </section>
    )
}
