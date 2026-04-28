/* eslint-disable @next/next/no-img-element */

export function ImpactSection() {
    return (
        <section className="sa-quote">
            <img src="/brand/logos/iso-negative.png" alt="" className="sa-quote__iso" />
            <div className="sa-container" style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="sa-quote__text">
                    “ACOMPAÑAR CRECIMIENTO.
                    <br />
                    PROVOCARLO.
                    <br />
                    DAR EL SALTO.”
                </h2>
                <div className="sa-quote__attr">— Manifiesto Social AI</div>
            </div>
        </section>
    )
}
