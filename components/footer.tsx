/* eslint-disable @next/next/no-img-element */

export function Footer() {
    return (
        <footer className="sa-footer">
            <div className="sa-container">
                <div className="sa-footer__wordmark" role="img" aria-label="Social AI" />
                <div className="sa-footer__grid">
                    <div className="sa-footer__col">
                        <img
                            src="/brand/logos/logo-negative.png"
                            alt="Social AI"
                            style={{ height: 22, width: 'auto', marginBottom: 16 }}
                        />
                        <p className="sa-footer__about">
                            Software factory · soluciones a medida con IA · automatizaciones. Buenos Aires, Argentina.
                        </p>
                    </div>
                    <div className="sa-footer__col">
                        <h5>Producto</h5>
                        <ul>
                            <li>Automatizaciones</li>
                            <li>Contenido IA</li>
                            <li>Dashboards</li>
                            <li>Integraciones</li>
                        </ul>
                    </div>
                    <div className="sa-footer__col">
                        <h5>Compañía</h5>
                        <ul>
                            <li>Equipo</li>
                            <li>Casos</li>
                            <li>Blog</li>
                            <li>Carreras</li>
                        </ul>
                    </div>
                    <div className="sa-footer__col">
                        <h5>Contacto</h5>
                        <ul>
                            <li>
                                <a href="https://wa.me/5491125857755" target="_blank" rel="noopener noreferrer">
                                    +54 9 11 2585-7755
                                </a>
                            </li>
                            <li>
                                <a href="mailto:social.ai.solutions.co@gmail.com">social.ai.solutions.co@gmail.com</a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/socialai.ok"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Instagram · @socialai.ok
                                </a>
                            </li>
                            <li>Agendar demo</li>
                        </ul>
                    </div>
                </div>
                <div className="sa-footer__bottom">
                    <span>© 2026 Social AI · Todos los derechos reservados.</span>
                    <span>BS.AS. · ARG.</span>
                </div>
            </div>
        </footer>
    )
}
