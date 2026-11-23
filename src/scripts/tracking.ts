// dataLayer du site (plan de marquage : voir README, section « Tracking »).
// Seul generate_lead contient des données personnelles (nom, email, téléphone, code postal) :
// à n'utiliser que dans des tags autorisés à les recevoir (ex. conversions améliorées Google Ads),
// avec le consentement du visiteur. Ne jamais les envoyer à GA4 (interdit par ses conditions).

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

/**
 * Numéro français au format international E.164 (+33XXXXXXXXX), ou '' si le numéro n'est pas reconnu.
 * Accepte 06 12 34 56 78, 06.12.34.56.78, +33 6 12 34 56 78, 0033612345678, +33 (0)6 12 34 56 78.
 */
export function toE164FR(raw: string): string {
  let d = raw.replace(/\(0\)/g, '').replace(/[^\d+]/g, '');
  if (d.startsWith('00')) d = '+' + d.slice(2);
  if (d.startsWith('+33')) d = d.slice(3);
  else if (d.startsWith('+')) return ''; // numéro étranger : non géré
  if (d.startsWith('0')) d = d.slice(1);
  return /^[1-9]\d{8}$/.test(d) ? `+33${d}` : '';
}

/** Code postal à 5 chiffres trouvé dans le texte saisi (« 21910 », « Saulon 21910 »…), ou ''. */
export function extractPostalCode(raw: string): string {
  return raw.match(/\b\d{5}\b/)?.[0] ?? '';
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
