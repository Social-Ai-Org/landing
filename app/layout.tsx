import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

// Google Ads optimized metadata
export const metadata: Metadata = {
  title: 'Social AI | Agente IA para Filtrado de Leads - Automatiza tu Proceso de Ventas',
  description: 'Filtramos y calificamos tus leads de publicidad automáticamente con IA. Cobranzas automáticas, IA telefónica y generación de contenido. +500% conversiones.',
  generator: 'v0.app',
  keywords: [
    'agente IA ventas',
    'filtrado de leads',
    'calificación de leads automática',
    'cobranzas automáticas IA',
    'IA telefónica',
    'generación de contenido IA',
    'automatización ventas',
    'chatbot ventas',
    'inteligencia artificial leads',
    'conversión leads'
  ],
  openGraph: {
    title: 'Social AI | Automatiza tu Proceso de Ventas con IA',
    description: 'Filtramos y calificamos tus leads automáticamente. Cobranzas, IA telefónica y contenido automatizado.',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Social AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social AI | Agente IA para Filtrado de Leads',
    description: 'Automatiza tu proceso de ventas con IA. +500% conversiones.',
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
  themeColor: '#4F1092',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

  return (
    <html lang="es">
      <head>
        {/* Google Tag Manager - Replace GTM_ID with your actual GTM container ID */}
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
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
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
      </body>
    </html>
  )
}
