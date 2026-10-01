// Photos réelles, servies depuis public/images/ (versions WebP optimisées, 1200 px max).
// Les originaux sont dans images/ à la racine du projet.
// Partout où le site attend une image, on peut donner soit un nom de fichier ci-dessous,
// soit un texte de placeholder (voir img() dans src/scripts/utils.ts).

export interface Photo { alt: string; width: number; height: number }

export const photos: Record<string, Photo> = {
  'allee-pas-japonais-dalles-pelouse-jardin.webp': { alt: 'Allée en pas japonais avec dalles dans une pelouse', width: 1200, height: 1200 },
  'arrachage-haie-thuyas-nettoyage-jardin-avant-apres.webp': { alt: 'Arrachage d’une haie de thuyas et nettoyage de jardin, avant / après', width: 1200, height: 1200 },
  'article-presse-mt-paysages-paysagiste-saulon-la-rue.webp': { alt: 'Article de presse sur Thomas Michon, paysagiste MT Paysages à Saulon-la-Rue', width: 1200, height: 1500 },
  'avant-apres-creation-pelouse-gazon-jardin-saulon-la-rue.webp': { alt: 'Création d’une pelouse dans un jardin près de Saulon-la-Rue, avant / après', width: 1200, height: 1200 },
  'creation-massif-arbustes-paillage-mineral-avant-apres.webp': { alt: 'Création d’un massif d’arbustes avec paillage minéral blanc, avant / après', width: 1200, height: 1200 },
  'creation-terrain-petanque-terrasse-bois-avant-apres.webp': { alt: 'Création d’un terrain de pétanque et d’une terrasse bois, avant / après', width: 1200, height: 1200 },
  'creation-terrasse-carrelage-exterieur-avant-apres.webp': { alt: 'Création d’une terrasse en carrelage extérieur, avant / après', width: 1200, height: 1200 },
  'debroussaillage-allee-gravier-jardin-avant-apres.webp': { alt: 'Débroussaillage et remise en état d’une allée gravillonnée, avant / après', width: 1200, height: 1200 },
  'debroussaillage-nettoyage-cour-corps-de-ferme-avant-apres.webp': { alt: 'Débroussaillage et nettoyage de la cour d’un corps de ferme, avant / après', width: 1200, height: 1200 },
  'decaissement-mini-pelle-preparation-pavage-terrasse.webp': { alt: 'Décaissement à la mini-pelle avant la pose d’un pavage', width: 720, height: 396 },
  'desherbage-nettoyage-cour-dallee-puits-avant-apres.webp': { alt: 'Désherbage et nettoyage d’une cour dallée avec puits, avant / après', width: 1200, height: 1200 },
  'entretien-espaces-verts-aire-de-jeux-collectivite.webp': { alt: 'Entretien des espaces verts d’une aire de jeux pour une collectivité', width: 1200, height: 1200 },
  'etapes-creation-massif-toile-paillage-mineral.webp': { alt: 'Étapes de création d’un massif : toile de paillage, plantation, paillage minéral', width: 1200, height: 1200 },
  'haie-laurier-taillee-pelouse-entretien-jardin-saulon-la-rue.webp': { alt: 'Haie de laurier taillée et pelouse entretenue par MT Paysages à Saulon-la-Rue', width: 350, height: 743 },
  'logo-mt-paysages-paysagiste-entretien-creation.webp': { alt: 'Logo MT Paysages, entretien et création', width: 416, height: 500 },
  'paysagiste-mt-paysages-taille-arbustes-secateur.webp': { alt: 'Paysagiste MT Paysages en taille d’arbustes au sécateur', width: 1200, height: 1310 },
  'plantation-arbres-tuteurage-jardin-paysagiste.webp': { alt: 'Plantation d’arbres avec tuteurage dans un jardin', width: 1200, height: 1200 },
  'plantation-grand-olivier-jardin-piscine-paysagiste.webp': { alt: 'Plantation d’un grand olivier à la grue dans un jardin avec piscine', width: 1200, height: 1200 },
  'salon-paysalia-paysage-jardin-mt-paysages.webp': { alt: 'MT Paysages au salon Paysalia, salon du paysage et du jardin', width: 1197, height: 1496 },
  'semis-gazon-massifs-arbustes-paillage-mineral-avant-apres.webp': { alt: 'Semis de gazon et massifs d’arbustes avec paillage minéral, avant / après', width: 1200, height: 1200 },
  'taille-arbustes-en-boule-entretien-jardin-avant-apres.webp': { alt: 'Taille d’arbustes en boule et entretien de jardin, avant / après', width: 1200, height: 1200 },
  'taille-niwaki-genevrier-en-nuage-avant-apres.webp': { alt: 'Taille en nuage (niwaki) d’un genévrier, avant / après', width: 1200, height: 1200 },
  'utilitaire-mt-paysages-motoculteur-creation-espaces-paysagers.webp': { alt: 'Utilitaire et motoculteur MT Paysages', width: 1200, height: 1500 },
};
