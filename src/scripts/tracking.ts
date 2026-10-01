// dataLayer du site (plan de marquage : voir README, section « Tracking »).
// Aucune donnée personnelle n'est poussée : ni nom, ni email, ni téléphone du visiteur, ni message.

type DataLayerEvent = Record<string, unknown> & { event: string };

declare global {
  interface Window { dataLayer: unknown[] }
}

export function track(data: DataLayerEvent): void {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);
}

/**
 * Pousse un événement puis exécute `next` quand GTM a fini de traiter l'événement
 * (eventCallback), ou au bout de `timeout` ms si aucun tag manager n'est chargé.
 */
export function trackThen(data: DataLayerEvent, next: () => void, timeout = 1000): void {
  let done = false;
  const go = () => {
    if (!done) {
      done = true;
      next();
    }
  };
  track({ ...data, eventCallback: go, eventTimeout: timeout });
  setTimeout(go, timeout + 100);
}

/** Écoute les clics sur les CTA principaux : devis, téléphone, email. */
export function initCtaTracking(): void {
  document.addEventListener('click', (e) => {
    const link = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
    if (!link) return;
    const href = link.getAttribute('href') ?? '';
    const ctaType = href.startsWith('tel:')
      ? 'phone'
      : href.startsWith('mailto:')
        ? 'email'
        : /\/devis\/?(\?|$)/.test(link.pathname) && link.origin === location.origin
          ? 'quote'
          : null;
    if (!ctaType) return;

    const zone = link.closest<HTMLElement>('[data-cta-location]');
    const ctaLocation =
      zone?.dataset.ctaLocation ??
      (link.closest('.site-header') ? 'header' : link.closest('.site-footer') ? 'footer' : link.closest('.mobile-bar') ? 'mobile_bar' : 'content');

    track({
      event: 'cta_click',
      cta_type: ctaType,
      cta_location: ctaLocation,
      cta_text: link.textContent?.replace(/\s+/g, ' ').trim().slice(0, 100) ?? '',
      link_url: ctaType === 'quote' ? link.pathname + link.search : href,
    });
  });
}
