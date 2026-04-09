import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter"
});

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
    weight: ["700", "800"]
});

// Google Ads optimized metadata
export const metadata: Metadata = {
    title: 'Social AI | Automatización Empresarial con Inteligencia Artificial',
    description: 'Diseñamos e implementamos soluciones de inteligencia artificial que automatizan operaciones, ventas y gestión interna — desde atención al cliente hasta procesamiento de datos y toma de decisiones.',
    generator: 'v0.app',
    keywords: [
        'automatización empresarial IA',
        'inteligencia artificial empresas',
        'atención al cliente automatizada',
        'automatización comercial',
        'cobranzas inteligentes',
        'procesamiento de datos IA',
        'integración CRM IA',
        'agentes inteligentes',
        'automatización operaciones',
        'conversión leads IA'
    ],
    openGraph: {
        title: 'Social AI | Automatización Empresarial con IA',
        description: 'Automatizá procesos completos de tu empresa con IA. Atención al cliente, ventas, cobranzas y operaciones.',
        type: 'website',
        locale: 'es_ES',
        siteName: 'Social AI',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Social AI | Automatización Empresarial con IA',
        description: 'Automatizá procesos completos de tu empresa con IA.',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: {
            url: '/icon.svg',
            type: 'image/svg+xml',
        },
    },
}

export const viewport: Viewport = {
    themeColor: '#2d1263',
    width: 'device-width',
    initialScale: 1,
}

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode
}>) {
    const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-P3CJKJBH'

    return (
        <html lang="es">
            <head>
                {/* Material Symbols for icons */}
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
                <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
                {/* Google Tag Manager */}
                {GTM_ID && (
                    <Script id="gtm-script" strategy="afterInteractive">
                        {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `}
                    </Script>
                )}
            </head>
            <body className={`${inter.variable} ${manrope.variable} font-sans antialiased`}>
                {/* Google Tag Manager (noscript) */}
                {GTM_ID && (
                    <noscript>
                        <iframe
                            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                            height="0"
                            width="0"
                            style={{ display: 'none', visibility: 'hidden' }}
                        />
                    </noscript>
                )}
                {children}
                <Analytics />
                <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
            </body>
        </html>
    )
}
