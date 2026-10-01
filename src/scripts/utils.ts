import { photos } from '../data/photos';

const BASE =import.meta.env.BASE_URL.replace(/\/$/, '');

/** Lien interne qui tient compte du chemin de base (GitHub Pages). */
export function url(path = ''): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  return `${BASE}/${path.replace(/^\//, '')}`;
}

/**
 * Image provisoire placehold.co. Le texte décrit la photo attendue.
 * Utiliser "\n" pour un retour à la ligne. placehold.co tronque au-delà de 60 caractères.
 */
export function ph(text: string, w = 800, h = 600): string {
  if (text.length > 60) throw new Error(`Texte de placeholder trop long (${text.length}/60) : « ${text} »`);
  return `https://placehold.co/${w}x${h}/dfe8d6/2d4a2b?font=lato&text=${encodeURIComponent(text)}`;
}

const isFile = (s: string) => /\.(webp|jpe?g|png|avif)$/i.test(s);

/**
 * Image du site : un nom de fichier de src/data/photos.ts (photo réelle dans public/images/)
 * ou, à défaut, un texte de placeholder.
 */
export function img(s: string, w = 800, h = 600): string {
  if (!isFile(s)) return ph(s, w, h);
  if (!photos[s]) throw new Error(`Photo inconnue (à ajouter dans src/data/photos.ts) : ${s}`);
  return url(`images/${s}`);
}

export function imgAlt(s: string): string {
  return isFile(s) ? photos[s].alt : s.replace(/\n/g, ' ');
}

export function telHref(phone: string): string {
  return `tel:+33${phone.replace(/\s/g, '').replace(/^0/, '')}`;
}

export function slugify(s: string): string {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
