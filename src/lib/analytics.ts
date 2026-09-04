// src/lib/analytics.ts
// Utility for Google Analytics event tracking

type GtagWindow = Window & { gtag?: (...args: unknown[]) => void };

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
  const gtag = typeof window !== 'undefined' ? (window as GtagWindow).gtag : undefined;
  if (gtag) {
    gtag('event', action, {
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
