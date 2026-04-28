import type { ReactNode } from 'react'

type Item = {
    icon: ReactNode
    color: string
    tag: string
    title: string
    desc: string
}

const iconConsulting = (
    <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <circle cx="21" cy="21" r="11" />
        <path d="M29 29l9 9" />
        <path d="M16 21l4 4 7-8" />
    </svg>
)
const iconAutomation = (
    <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <circle cx="10" cy="12" r="3.5" />
        <circle cx="10" cy="36" r="3.5" />
        <circle cx="38" cy="24" r="3.5" />
        <circle cx="24" cy="24" r="3" />
        <path d="M13.5 12h7M13.5 36h7M27 24h7.5" />
        <path d="M20.5 12c0 4 3.5 6 6 6M20.5 36c0-4 3.5-6 6-6" />
    </svg>
)
const iconSoftware = (
    <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <rect x="6" y="9" width="36" height="28" rx="3" />
        <path d="M6 16h36" />
        <circle cx="11" cy="12.5" r="0.9" fill="currentColor" />
        <circle cx="14" cy="12.5" r="0.9" fill="currentColor" />
        <circle cx="17" cy="12.5" r="0.9" fill="currentColor" />
        <rect x="11" y="20" width="10" height="13" rx="1.5" />
        <path d="M25 21h12M25 26h12M25 31h8" />
    </svg>
)

const items: Item[] = [
    {
        icon: iconConsulting,
        color: '#4F1092',
        tag: 'CONSULTORÍA',
        title: 'Auditoría de IA',
        desc: 'Detectamos dónde aplicar IA en tu empresa para maximizar el ROI antes de construir nada.',
    },
    {
        icon: iconAutomation,
        color: '#FF6200',
        tag: 'AUTOMATIZACIÓN',
        title: 'Workflows con IA',
        desc: 'Agentes y automatizaciones a medida que ejecutan tus procesos sin intervención manual.',
    },
    {
        icon: iconSoftware,
        color: '#181615',
        tag: 'SOFTWARE',
        title: 'Sistemas a medida',
        desc: 'Plataformas de gestión y dashboards operativos conectados a tu stack existente.',
    },
]

export function SolutionsSection() {
    return (
        <section className="sa-section" id="soluciones">
            <div className="sa-container">
                <div className="sa-section__eyebrow">Soluciones</div>
                <h2 className="sa-section__title">
                    Tres formas
                    <br />
                    de <span className="sa-hl-orange">crecer</span>.
                </h2>
                <p className="sa-section__lead">
                    Elegimos la herramienta adecuada para cada marca. Nada de paquetes cerrados — cada motor se arma a
                    medida del negocio.
                </p>
                <div className="sa-features" style={{ marginTop: 56 }}>
                    {items.map((it) => (
                        <div className="sa-feature" key={it.title}>
                            <div className="sa-feature__icon sa-feature__icon--svg" style={{ color: it.color }}>
                                {it.icon}
                            </div>
                            <div className="sa-feature__tag">{it.tag}</div>
                            <h3>{it.title}</h3>
                            <p>{it.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
