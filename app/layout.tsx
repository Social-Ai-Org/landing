import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const manrope = localFont({
    variable: '--font-manrope',
    display: 'swap',
    src: [
        { path: '../public/brand/fonts/Manrope-Light.ttf', weight: '300', style: 'normal' },
        { path: '../public/brand/fonts/Manrope-Regular.ttf', weight: '400', style: 'normal' },
        { path: '../public/brand/fonts/Manrope-SemiBold.ttf', weight: '600', style: 'normal' },
    ],
})

const oswald = localFont({
    variable: '--font-oswald',
    display: 'swap',
    src: [
        { path: '../public/brand/fonts/Oswald-Regular.ttf', weight: '400', style: 'normal' },
        { path: '../public/brand/fonts/Oswald-Medium.ttf', weight: '500', style: 'normal' },
        { path: '../public/brand/fonts/Oswald-SemiBold.ttf', weight: '600', style: 'normal' },
    ],
})

export const metadata: Metadata = {
    title: 'Social AI · Software factory + IA a medida · Buenos Aires',
    description:
        'Software factory con IA a medida. Auditoría, automatizaciones y sistemas a medida para empresas que necesitan escalar sin sumar headcount.',
    generator: 'Social AI',
    keywords: [
        'software factory',
        'IA a medida',
        'inteligencia artificial empresas',
        'automatización empresarial IA',
        'agentes de IA',
        'workflows con IA',
        'sistemas a medida',
        'auditoría de IA',
        'Buenos Aires',
    ],
    openGraph: {
        title: 'Social AI · Software factory + IA a medida',
        description:
            'IA a medida, software de gestión y diagnóstico estratégico. El motor operativo que tu empresa necesita para escalar.',
        type: 'website',
        locale: 'es_AR',
        siteName: 'Social AI',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Social AI · Software factory + IA a medida',
        description:
            'IA a medida, software de gestión y diagnóstico estratégico. El motor operativo que tu empresa necesita para escalar.',
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
        icon: { url: '/icon.svg', type: 'image/svg+xml' },
    },
}

export const viewport: Viewport = {
    themeColor: '#4F1092',
    width: 'device-width',
    initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-P3CJKJBH'

    return (
        <html lang="es">
            <head>
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
            <body className={`${manrope.variable} ${oswald.variable} sa-base`}>
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
            </body>
        </html>
    )
}
