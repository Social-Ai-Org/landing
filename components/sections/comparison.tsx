type Plan = {
    tag: string
    title: string
    desc: string
    bullets: string[]
    cta: string
    btnClass: 'btn--primary' | 'btn--secondary'
    featured: boolean
}

const PLANS: Plan[] = [
    {
        tag: 'AUDITORÍA',
        title: 'Diagnóstico',
        desc: 'Detectamos dónde aplicar IA en tu empresa para maximizar el ROI antes de construir nada.',
        bullets: [
            'Relevamiento de procesos y stack actual',
            'Mapa de oportunidades priorizado por ROI',
            'Roadmap de implementación',
        ],
        cta: 'Agendar diagnóstico',
        btnClass: 'btn--secondary',
        featured: false,
    },
    {
        tag: 'IMPLEMENTACIÓN',
        title: 'Proyecto a medida',
        desc: 'El formato más elegido. Construimos automatizaciones, agentes de IA y sistemas a medida con scope cerrado.',
        bullets: [
            'Automatizaciones y workflows con IA',
            'Sistemas de gestión a medida',
            'Integraciones con tu stack',
            'Entrega, capacitación y soporte post-launch',
        ],
        cta: 'Empezar un proyecto',
        btnClass: 'btn--primary',
        featured: true,
    },
    {
        tag: 'PARTNERSHIP',
        title: 'Retainer mensual',
        desc: 'Para empresas que necesitan evolución continua. Software factory y mejora mensual sobre datos reales.',
        bullets: [
            'Iteración mensual de sistemas y flujos',
            'Nuevas automatizaciones bajo demanda',
            'Dashboards operativos actualizados',
            'SLA y soporte dedicado',
        ],
        cta: 'Conversemos',
        btnClass: 'btn--secondary',
        featured: false,
    },
]

export function ComparisonSection() {
    return (
        <section className="sa-section" id="precios">
            <div className="sa-container">
                <div className="sa-section__eyebrow">Cómo trabajamos</div>
                <h2 className="sa-section__title">Elegí cómo empezar.</h2>
                <p className="sa-section__lead">
                    Cada proyecto es a medida. Estos son los tres modelos de colaboración con los que trabajamos.
                    Empezamos siempre con una reunión para entender tu negocio antes de proponer nada.
                </p>
                <div className="sa-pricing sa-pricing--hover">
                    {PLANS.map((p) => (
                        <div
                            key={p.title}
                            className={'sa-plan sa-plan--hover ' + (p.featured ? 'sa-plan--featured' : '')}
                        >
                            <div
                                className="sa-plan__tag"
                                style={{
                                    color: p.featured ? '#FF6200' : '#4F1092',
                                    background: p.featured ? 'rgba(255,98,0,.12)' : '#EFE1FF',
                                }}
                            >
                                {p.tag}
                            </div>
                            <div className="sa-plan__title">{p.title}</div>
                            <div className="sa-plan__desc">{p.desc}</div>
                            <ul>
                                {p.bullets.map((b) => (
                                    <li key={b}>{b}</li>
                                ))}
                            </ul>
                            <a
                                href="#contacto"
                                className={'btn btn--block sa-plan__cta ' + p.btnClass}
                                style={{ marginTop: 'auto' }}
                            >
                                <span>{p.cta}</span>
                                <span className="sa-plan__arrow">→</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
