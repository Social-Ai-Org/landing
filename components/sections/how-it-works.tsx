/* eslint-disable @next/next/no-img-element */

const STEPS = [
    {
        n: '01',
        t: 'Diagnóstico',
        d: 'Entendemos tu marca, tus flujos y el punto donde duele más.',
        m: '/brand/miscelaneas/misc-1.png',
    },
    {
        n: '02',
        t: 'Diseño del motor',
        d: 'Armamos la arquitectura de IA y automatizaciones a medida.',
        m: '/brand/miscelaneas/misc-7.png',
    },
    {
        n: '03',
        t: 'Implementación',
        d: 'Desplegamos en tu stack, entrenamos al equipo y medimos resultados.',
        m: '/brand/miscelaneas/misc-5.png',
    },
    {
        n: '04',
        t: 'Evolución',
        d: 'Iteramos mensualmente sobre datos reales para seguir potenciando.',
        m: '/brand/miscelaneas/misc-3.png',
    },
]

export function HowItWorksSection() {
    return (
        <section className="sa-section" id="proceso" style={{ background: '#F6F4F9' }}>
            <div className="sa-container">
                <div className="sa-section__eyebrow">Proceso</div>
                <h2 className="sa-section__title">
                    Un proceso
                    <br />
                    de <span className="sa-hl-orange">alta vinculación</span>.
                </h2>
                <div className="sa-steps sa-steps--float">
                    {STEPS.map((s) => (
                        <div className="sa-step sa-step--card" key={s.n}>
                            <img src={s.m} alt="" className="sa-step__misc" />
                            <div className="sa-step__num">{s.n}</div>
                            <h4>{s.t}</h4>
                            <p>{s.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
