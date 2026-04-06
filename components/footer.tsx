"use client"

import Link from "next/link"

const CALENDLY_URL = "https://calendly.com/social-ai-solutions-co/new-meeting-1"


export function Footer() {
    return (
        <footer className="bg-[#f3f3f6] w-full pt-16 pb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto">
                <div>
                    <span className="text-xl font-black text-[#432C7A] mb-4 block" style={{ fontFamily: 'var(--font-display)' }}>Social AI</span>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                        Automatización de alto nivel para empresas que buscan liderar la era de la inteligencia artificial.
                    </p>
                </div>
                <div>
                    <h4 className="font-bold text-[#432C7A] mb-4">Soluciones</h4>
                    <ul className="space-y-2 text-sm text-slate-500">
                        <li><Link href="#soluciones" className="hover:text-[#432C7A] transition-all">Atención al Cliente</Link></li>
                        <li><Link href="#soluciones" className="hover:text-[#432C7A] transition-all">Ventas y Leads</Link></li>
                        <li><Link href="#soluciones" className="hover:text-[#432C7A] transition-all">Procesamiento de Datos</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-[#432C7A] mb-4">Compañía</h4>
                    <ul className="space-y-2 text-sm text-slate-500">
                        <li><Link href="#" className="hover:text-[#432C7A] transition-all">Casos de Éxito</Link></li>
                        <li><Link href="#" className="hover:text-[#432C7A] transition-all">Privacidad</Link></li>
                        <li><Link href="#" className="hover:text-[#432C7A] transition-all">Integraciones</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-[#432C7A] mb-4">Contacto</h4>
                    <ul className="space-y-2 text-sm text-slate-500">
                        <li>
                            <Link href="mailto:social.ai.solutions.co@gmail.com" className="hover:text-[#432C7A] transition-all">
                                social.ai.solutions.co@gmail.com
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://wa.me/5491125857753"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#432C7A] transition-all"
                            >
                                WhatsApp
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={() => window.Calendly?.initPopupWidget({ url: CALENDLY_URL })}
                                className="hover:text-[#432C7A] transition-all cursor-pointer"
                            >
                                Agendar Reunión
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-200">
                <p className="text-slate-400 text-xs text-center">
                    © {new Date().getFullYear()} Social AI. The Sovereign Interface.
                </p>
            </div>
        </footer>
    )
}
