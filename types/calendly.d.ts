declare global {
    interface Window {
        Calendly?: {
            initPopupWidget: (opts: { url: string }) => void
        }
        dataLayer: Record<string, unknown>[]
    }
}

export {}
