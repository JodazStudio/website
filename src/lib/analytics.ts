// src/lib/analytics.ts
// Utility for Google Analytics event tracking

const GA_MEASUREMENT_ID = import.meta.env.PUBLIC_GA_MEASUREMENT_ID;

export function trackEvent({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  } else if (import.meta.env.DEV) {
    console.log('[Analytics]', { action, category, label, value });
  }
}

// Example usage:
// trackEvent({ action: 'click', category: 'button', label: 'signup' });
