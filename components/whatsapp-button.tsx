'use client'

const WHATSAPP_URL =
    'https://wa.me/5491125857753?text=' + encodeURIComponent('Hola Social AI! Quiero agendar una auditoría.')

export function WhatsAppButton() {
    return (
        <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Escribir por WhatsApp"
            style={{
                position: 'fixed',
                bottom: 24,
                right: 24,
                width: 60,
                height: 60,
                borderRadius: '50%',
                background: '#25D366',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 14px 34px -8px rgba(37,211,102,.7), 0 4px 12px rgba(0,0,0,.2)',
                zIndex: 1000,
                textDecoration: 'none',
                transition: 'transform .2s',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.08)'
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
            }}
        >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                <path d="M20.52 3.48A11.87 11.87 0 0012 0C5.37 0 0 5.37 0 12a11.9 11.9 0 001.67 6.1L0 24l6.08-1.6A11.96 11.96 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.2-3.48-8.52zM12 21.8c-1.92 0-3.8-.52-5.45-1.5l-.39-.23-3.61.95.96-3.52-.25-.4A9.76 9.76 0 012.2 12 9.8 9.8 0 0112 2.2c2.62 0 5.08 1.02 6.93 2.87A9.76 9.76 0 0121.8 12 9.8 9.8 0 0112 21.8zm5.37-7.33c-.29-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.67.15s-.77.96-.94 1.15c-.17.19-.35.22-.64.07-.29-.15-1.24-.46-2.36-1.46-.87-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.35.43-.52.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51l-.57-.01c-.19 0-.51.07-.78.36s-1.02 1-1.02 2.43 1.05 2.82 1.2 3.01c.15.19 2.07 3.16 5.02 4.43.7.3 1.25.48 1.67.62.7.22 1.34.19 1.84.12.56-.08 1.74-.71 1.98-1.4.24-.69.24-1.28.17-1.4-.07-.12-.27-.19-.56-.34z" />
            </svg>
        </a>
    )
}
