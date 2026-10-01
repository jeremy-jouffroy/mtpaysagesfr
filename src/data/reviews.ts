// Avis Google réels (source : reviews/mtpaysages_google_reviews.csv, relevé du 1er octobre 2026).
// Recopier les avis tels quels, sans les modifier, et n'afficher que prénom + initiale.
// Ne jamais inventer d'avis : c'est une pratique commerciale trompeuse.

export interface Review { author: string; date: string; rating: number; text: string }

export const reviews: Review[] = [
  {
    author: 'Max M.',
    date: 'juillet 2026',
    rating: 5,
    text: `Thomas nous a réalisé un magnifique terrain de pétanque.
Malgré la chaleur extrême, il est venu tous les jours et a réalisé le projet dans le délai annoncé.
A noter que chaque soir, le chantier est nettoyé et rangé.
Bref, sérieux et qualité sont au Rdv chez Thomas qui en plus, est très sympathique.`,
  },
  {
    author: 'Edouard L.',
    date: 'juillet 2025',
    rating: 5,
    text: `J'ai fait appel à MT paysages pour la réalisation d'une terrasse (pose de gazon synthétique et de dalle sur plot) autour de ma piscine. Les bons conseils de M. Michon ont permis de trouver la meilleure configuration compte tenu des difficultés du terrain. Le travail réalisé est professionnel, et soigné. J'ai également fait appel à MT paysages pour la taille de mes haies.
Je recommande vivement MT paysages.`,
  },
  {
    author: 'Joseph D.',
    date: 'septembre 2024',
    rating: 5,
    text: `M. Michon est un professionnel très compétent, efficace, de très bons conseils et d'un contact très convivial. Il est habilité pour le service à la personne par une application d'utilisation très facile avec la possibilité d'une réduction immédiate par l'URSSAF de 50% de sa facture.
Nous lui avons fait réaliser un chantier rondement mené de 2 jours d'abattage, d'élagage et de taille avec broyage sur place. Le résultat à répondu pleinement à nos attentes.
Je recommande particulièrement MT Paysages`,
  },
  {
    author: 'Cécile E.',
    date: 'mars 2025',
    rating: 5,
    text: `Ravie de l’intervention de ce professionnel chez nous.
Intervention rapide, très bien réalisée.
Nous referons appel à ses services pour notre jardin.`,
  },
];
