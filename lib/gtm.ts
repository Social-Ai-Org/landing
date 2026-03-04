// Google Tag Manager / Google Ads conversion tracking utilities

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
    gtag: (...args: unknown[]) => void
  }
}

// Track custom events to GTM dataLayer
export function trackEvent(eventName: string, eventParams?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventParams,
    })
  }
}

// Track Google Ads conversion
export function trackConversion(conversionLabel: string, value?: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionLabel,
      value: value,
      currency: 'USD',
    })
  }
}

// Track CTA button clicks
export function trackCTAClick(ctaName: string, location: string) {
  trackEvent('cta_click', {
    cta_name: ctaName,
    cta_location: location,
  })
}

// Track form submissions
export function trackFormSubmission(formName: string, formData?: Record<string, unknown>) {
  trackEvent('form_submission', {
    form_name: formName,
    ...formData,
  })
}

// Track video engagement
export function trackVideoEngagement(action: 'play' | 'pause' | 'complete', videoId: string) {
  trackEvent('video_engagement', {
    video_action: action,
    video_id: videoId,
  })
}

// Track scroll depth
export function trackScrollDepth(percentage: number) {
  trackEvent('scroll_depth', {
    scroll_percentage: percentage,
  })
}

// Track demo booking intent
export function trackDemoBookingIntent() {
  trackEvent('demo_booking_intent', {
    timestamp: new Date().toISOString(),
  })
}
