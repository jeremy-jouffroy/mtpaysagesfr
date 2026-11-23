// Pages locales « jardinier-[commune] ».
// Chaque page doit avoir un contenu propre à la commune : Google pénalise les pages identiques
// où seul le nom de la ville change. Ne créer une page que si on peut la nourrir.
//
// À compléter en priorité : `projects` (chantiers réels dans la commune, avec photo).
// Tant que `projects` est vide, la page affiche des réalisations génériques de MT Paysages.
// Ne jamais inventer un chantier ou un avis.

import type { Faq } from './services';

export interface CityProject {
  title: string; // ex. « Taille d'une haie de charmilles, rue des Vignes »
  text: string; // 1–3 phrases : ce qui a été fait, en quelle saison, pour quel résultat
  photo: string; // nom de fichier de src/data/photos.ts (ou texte de placeholder)
}

export interface City {
  name: string; // doit correspondre exactement à un nom de site.communes (pour la distance)
  description: string; // meta description (150–160 caractères)
  intro: string; // chapô sous le H1
  context: { title: string; paragraphs: string[] }; // ce qui caractérise les jardins de la commune
  services: string[]; // slugs de src/data/services.ts, les plus demandés dans la commune
  gallery: string[]; // photos réelles montrées tant que `projects` est vide
  projects: CityProject[];
  faq: Faq[];
}

export const cities: City[] = [
  {
    name: 'Gevrey-Chambertin',
    description:
      "Jardinier paysagiste à Gevrey-Chambertin, à 5 km : tonte, taille de haies, désherbage, création de massifs et terrasses. 50 % de crédit d'impôt, devis gratuit.",
    intro:
      "Basés à Saulon-la-Rue, à 5 km, nous entretenons et aménageons les jardins de Gevrey-Chambertin, du vieux village au pied de la côte jusqu'aux quartiers plus récents côté plaine.",
    context: {
      title: 'Des jardins entre murs de pierre et plaine',
      paragraphs: [
        "À Gevrey-Chambertin, beaucoup de jardins sont bordés de murs en pierre sèche ou de murets, avec des cours et allées gravillonnées qui demandent un désherbage régulier. Nous travaillons sans désherbant chimique : désherbage manuel ou mécanique, puis paillage pour limiter la repousse.",
        "Dans les lotissements plus récents, les demandes portent surtout sur la tonte, la taille des haies de séparation et la création de massifs peu gourmands en eau, adaptés aux étés secs de la Côte-d'Or.",
      ],
    },
    services: ['taille-haies-arbustes', 'desherbage', 'plantations-massifs'],
    gallery: [
      'desherbage-nettoyage-cour-dallee-puits-avant-apres.webp',
      'debroussaillage-allee-gravier-jardin-avant-apres.webp',
      'creation-massif-arbustes-paillage-mineral-avant-apres.webp',
    ],
    projects: [], // TODO : 2–3 chantiers réels à Gevrey-Chambertin
    faq: [
      {
        q: 'Intervenez-vous dans tout Gevrey-Chambertin ?',
        a: "Oui, dans toute la commune. Nous sommes installés à Saulon-la-Rue, à environ 5 km : c'est l'une des communes où nous intervenons le plus facilement, y compris pour des passages réguliers.",
      },
      {
        q: "Le crédit d'impôt de 50 % s'applique-t-il à Gevrey-Chambertin ?",
        a: "Oui. Les travaux d'entretien courant (tonte, taille, désherbage, ramassage des feuilles) ouvrent droit à 50 % de crédit d'impôt partout en France, au titre des services à la personne. La création d'aménagements (terrasses, massifs neufs) n'y ouvre pas droit.",
      },
      {
        q: 'Pouvez-vous désherber une cour ou une allée en gravier sans produit chimique ?',
        a: "Oui. Nous désherbons à la main ou mécaniquement, puis nous proposons un paillage minéral ou une toile pour réduire la repousse. C'est une demande fréquente pour les cours des maisons anciennes.",
      },
    ],
  },
  {
    name: 'Rouvres-en-Plaine',
    description:
      "Jardinier paysagiste à Rouvres-en-Plaine, à 7 km : tonte de grandes pelouses, taille de haies, engazonnement, terrasses. 50 % de crédit d'impôt, devis gratuit.",
    intro:
      "Rouvres-en-Plaine est à 7 km de notre base de Saulon-la-Rue. Nous y entretenons des jardins de maisons de village comme de pavillons récents, souvent avec de grandes surfaces de pelouse.",
    context: {
      title: 'Des terrains plats et souvent spacieux',
      paragraphs: [
        "En plaine, les terrains sont plats et les parcelles souvent généreuses : grandes pelouses, haies de séparation sur plusieurs dizaines de mètres, potagers. Notre matériel est adapté à ces surfaces, ce qui permet des tontes et des tailles rapides.",
        "Les terres de plaine retiennent bien l'eau en hiver mais sèchent vite en été. Pour une nouvelle pelouse, nous choisissons un mélange de gazon résistant à la sécheresse et nous semons de préférence au printemps ou en début d'automne.",
      ],
    },
    services: ['tonte-pelouse', 'taille-haies-arbustes', 'engazonnement'],
    gallery: [
      'avant-apres-creation-pelouse-gazon-jardin-saulon-la-rue.webp',
      'haie-laurier-taillee-pelouse-entretien-jardin-saulon-la-rue.webp',
      'semis-gazon-massifs-arbustes-paillage-mineral-avant-apres.webp',
    ],
    projects: [], // TODO : 2–3 chantiers réels à Rouvres-en-Plaine
    faq: [
      {
        q: 'Intervenez-vous à Rouvres-en-Plaine ?',
        a: "Oui. Rouvres-en-Plaine est à environ 7 km de Saulon-la-Rue, où nous sommes installés. Nous pouvons y assurer un entretien régulier (tonte, taille) ou des interventions ponctuelles.",
      },
      {
        q: 'Pouvez-vous entretenir une grande pelouse ?',
        a: "Oui. Nous intervenons sur toutes les surfaces, y compris les grands terrains de plaine. Le devis tient compte de la surface et de la fréquence de passage souhaitée.",
      },
      {
        q: "Le crédit d'impôt de 50 % s'applique-t-il ?",
        a: "Oui, pour l'entretien courant du jardin (tonte, taille, désherbage, ramassage des feuilles), au titre des services à la personne. Les travaux de création (terrasse, engazonnement d'un terrain nu) n'y ouvrent pas droit.",
      },
    ],
  },
  {
    name: 'Corcelles-les-Monts',
    description:
      "Jardinier paysagiste à Corcelles-les-Monts : entretien de jardins en pente, taille de haies, débroussaillage, massifs adaptés au sec. 50 % de crédit d'impôt, devis gratuit.",
    intro:
      "Sur les hauteurs à l'ouest de Dijon, Corcelles-les-Monts est à une douzaine de kilomètres de Saulon-la-Rue. Nous y entretenons et aménageons des jardins souvent en pente, au sol calcaire et caillouteux.",
    context: {
      title: 'Des jardins en hauteur, sur sol calcaire',
      paragraphs: [
        "Les terrains de Corcelles-les-Monts sont souvent en pente, avec une terre peu profonde et calcaire. Les plantes doivent supporter le sec et le vent : nous privilégions des arbustes et vivaces rustiques, un paillage épais et, si besoin, des murets ou restanques pour retenir la terre.",
        "En lisière de bois et de friches, la végétation repousse vite. Nous proposons un débroussaillage ponctuel pour reprendre un terrain envahi, puis un entretien régulier pour qu'il reste propre.",
      ],
    },
    services: ['debroussaillage', 'taille-haies-arbustes', 'plantations-massifs'],
    gallery: [
      'debroussaillage-nettoyage-cour-corps-de-ferme-avant-apres.webp',
      'etapes-creation-massif-toile-paillage-mineral.webp',
      'taille-arbustes-en-boule-entretien-jardin-avant-apres.webp',
    ],
    projects: [], // TODO : 2–3 chantiers réels à Corcelles-les-Monts
    faq: [
      {
        q: 'Intervenez-vous à Corcelles-les-Monts ?',
        a: "Oui. Corcelles-les-Monts fait partie de notre zone d'intervention, à environ 12 km de Saulon-la-Rue. Nous y assurons l'entretien régulier comme les travaux ponctuels.",
      },
      {
        q: 'Travaillez-vous sur des terrains en pente ?',
        a: "Oui. Nous adaptons le matériel et la méthode au terrain : débroussailleuse plutôt que tondeuse sur les talus raides, plantations couvre-sol et paillage pour limiter l'érosion.",
      },
      {
        q: 'Quelles plantes résistent au sol calcaire et sec ?',
        a: "Les arbustes méditerranéens et rustiques (lavande, romarin, ciste, céanothe, abélia), les graminées et de nombreuses vivaces s'y plaisent. Nous vous conseillons lors du devis selon l'exposition de votre jardin.",
      },
    ],
  },
  {
    name: 'Ahuy',
    description:
      "Jardinier paysagiste à Ahuy, au nord de Dijon : tonte, taille de haies, ramassage des feuilles, contrats d'entretien à l'année. 50 % de crédit d'impôt, devis gratuit.",
    intro:
      "Au nord de Dijon, Ahuy est une commune résidentielle à environ 16 km de Saulon-la-Rue. Nous y entretenons des jardins de pavillons, ponctuellement ou toute l'année.",
    context: {
      title: 'Des jardins de pavillon à entretenir toute l’année',
      paragraphs: [
        "À Ahuy, la plupart des jardins sont ceux de maisons individuelles : une pelouse, des haies de séparation, quelques massifs et arbres. Ce sont des jardins qui demandent un suivi régulier plus que de gros travaux.",
        "Pour ce type de jardin, un contrat d'entretien est souvent la formule la plus simple : nous passons selon un calendrier fixé ensemble (tonte au printemps et en été, taille des haies, ramassage des feuilles à l'automne) et vous bénéficiez de 50 % de crédit d'impôt sur chaque passage.",
      ],
    },
    services: ['tonte-pelouse', 'taille-haies-arbustes', 'ramassage-feuilles'],
    gallery: [
      'haie-laurier-taillee-pelouse-entretien-jardin-saulon-la-rue.webp',
      'taille-niwaki-genevrier-en-nuage-avant-apres.webp',
      'paysagiste-mt-paysages-taille-arbustes-secateur.webp',
    ],
    projects: [], // TODO : 2–3 chantiers réels à Ahuy
    faq: [
      {
        q: 'Intervenez-vous à Ahuy ?',
        a: "Oui. Ahuy est dans notre zone d'intervention, à environ 16 km de Saulon-la-Rue. Nous regroupons nos passages dans le secteur nord de Dijon pour garder des tarifs raisonnables.",
      },
      {
        q: "Proposez-vous des contrats d'entretien à l'année ?",
        a: "Oui. Nous définissons ensemble le nombre de passages et les travaux (tonte, taille, désherbage, feuilles). Vous avez un interlocuteur unique et un jardin entretenu sans y penser.",
      },
      {
        q: "Combien coûte réellement l'entretien après crédit d'impôt ?",
        a: "Le crédit d'impôt couvre 50 % des sommes payées pour l'entretien courant du jardin, dans la limite de 5 000 € de dépenses par an et par foyer. Avec l'avance immédiate, la réduction est déduite directement de la facture.",
      },
    ],
  },
];
