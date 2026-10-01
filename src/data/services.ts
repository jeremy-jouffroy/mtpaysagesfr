export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  category: 'entretien' | 'creation';
  title: string; // nom court (cartes, menus)
  h1: string;
  metaDescription: string;
  intro: string;
  includes: string[];
  frequency?: string;
  priceFrom?: string; // ex. "35 € / h" — laisser vide pour afficher « Sur devis »
  sapEligible: boolean;
  images: string[]; // photos (src/data/photos.ts) ou descriptions des photos attendues
  faq: Faq[];
};

export const services: Service[] = [
  // ───────────── ENTRETIEN (Services à la personne) ─────────────
  {
    slug: 'tonte-pelouse',
    category: 'entretien',
    title: 'Tonte de pelouse',
    h1: 'Tonte de pelouse et entretien du gazon',
    metaDescription:
      "Tonte de pelouse régulière ou ponctuelle à Saulon-la-Rue et alentours. Ramassage de l'herbe inclus, 50 % de crédit d'impôt.",
    intro:
      "Une pelouse dense et nette demande une tonte régulière pendant toute la saison de pousse. Nous passons à la fréquence qui convient à votre terrain et repartons avec l'herbe coupée.",
    includes: [
      'Tonte à la hauteur adaptée à la saison',
      'Finitions au coupe-bordure le long des massifs, allées et clôtures',
      'Ramassage ou mulching de l’herbe selon votre préférence',
      'Évacuation des déchets verts',
      'Scarification, aération et regarnissage sur demande',
    ],
    frequency: 'Toutes les 2 à 3 semaines de mars à octobre, à la demande ou par contrat.',
    sapEligible: true,
    images: ['haie-laurier-taillee-pelouse-entretien-jardin-saulon-la-rue.webp'],
    faq: [
      { q: 'À quelle hauteur faut-il tondre ?', a: "Entre 5 et 7 cm en général, un peu plus haut en été pour limiter le dessèchement. Nous adaptons la hauteur à la saison et à l'exposition." },
      { q: 'Faut-il être présent pendant l’intervention ?', a: 'Non. Il suffit que le jardin soit accessible. Nous vous prévenons la veille et vous envoyons un message une fois le travail terminé.' },
    ],
  },
  {
    slug: 'taille-haies-arbustes',
    category: 'entretien',
    title: 'Taille de haies et arbustes',
    h1: 'Taille de haies, d’arbustes et de petits arbres',
    metaDescription:
      "Taille de haies et d'arbustes à Saulon-la-Rue : coupe nette, ramassage et évacuation des déchets verts. 50 % de crédit d'impôt.",
    intro:
      'Une haie bien taillée reste dense, saine et à la bonne hauteur. Nous taillons haies, arbustes et petits arbres en respectant la période de taille de chaque espèce et la période de nidification des oiseaux.',
    includes: [
      'Taille de haies (dessus et faces) à la hauteur souhaitée',
      'Taille de formation ou d’entretien des arbustes',
      'Taille douce des petits arbres fruitiers et d’ornement',
      'Ramassage, broyage et évacuation des déchets verts',
    ],
    frequency: '1 à 2 fois par an selon les essences (fin d’hiver et fin d’été).',
    sapEligible: true,
    images: [
      'taille-arbustes-en-boule-entretien-jardin-avant-apres.webp',
      'taille-niwaki-genevrier-en-nuage-avant-apres.webp',
      'paysagiste-mt-paysages-taille-arbustes-secateur.webp',
    ],
    faq: [
      { q: 'Quand tailler sa haie ?', a: "De préférence en fin d'hiver puis en fin d'été. L'Office français de la biodiversité recommande d'éviter les tailles importantes du 15 mars au 31 juillet pour ne pas déranger les oiseaux nicheurs." },
      { q: 'Que faites-vous des branchages ?', a: 'Nous les évacuons vers une plateforme de compostage ou les broyons sur place pour pailler vos massifs, si vous le souhaitez.' },
    ],
  },
  {
    slug: 'desherbage',
    category: 'entretien',
    title: 'Désherbage',
    h1: 'Désherbage manuel et écologique',
    metaDescription:
      "Désherbage sans produits chimiques des massifs, allées et terrasses à Saulon-la-Rue. 50 % de crédit d'impôt.",
    intro:
      "Nous désherbons sans pesticides, à la main et avec des outils mécaniques ou thermiques. C'est meilleur pour votre sol et vos animaux, et c'est conforme à la loi Labbé.",
    includes: [
      'Désherbage manuel des massifs et pieds de haies',
      'Désherbage des allées, terrasses et cours (mécanique ou thermique)',
      'Binage et griffage du sol',
      'Pose de paillage pour limiter la repousse (sur devis)',
    ],
    frequency: 'Toutes les 4 à 8 semaines pendant la saison de pousse.',
    sapEligible: true,
    images: ['desherbage-nettoyage-cour-dallee-puits-avant-apres.webp', 'debroussaillage-allee-gravier-jardin-avant-apres.webp'],
    faq: [
      { q: 'Utilisez-vous du désherbant ?', a: 'Non. Nous travaillons sans produits phytosanitaires de synthèse, uniquement avec des méthodes manuelles, mécaniques ou thermiques.' },
    ],
  },
  {
    slug: 'ramassage-feuilles',
    category: 'entretien',
    title: 'Ramassage des feuilles',
    h1: 'Ramassage des feuilles et nettoyage d’automne',
    metaDescription:
      "Ramassage des feuilles mortes et nettoyage de jardin à l'automne à Saulon-la-Rue. Évacuation incluse, 50 % de crédit d'impôt.",
    intro:
      "Les feuilles laissées sur la pelouse l'étouffent et rendent les allées glissantes. Nous nettoyons le jardin à l'automne et le préparons pour l'hiver.",
    includes: [
      'Soufflage et ramassage des feuilles (pelouse, allées, terrasses)',
      'Nettoyage des massifs et rabattage des vivaces',
      'Nettoyage des gouttières accessibles depuis le sol (sur demande)',
      'Évacuation ou mise en compost des déchets verts',
    ],
    frequency: '1 à 3 passages entre octobre et décembre.',
    sapEligible: true,
    images: ['Jardin d’automne\nnettoyé des feuilles mortes', 'Tas de feuilles\nramassées sur une pelouse'],
    faq: [
      { q: 'Peut-on garder les feuilles ?', a: 'Oui, et c’est même conseillé : nous pouvons les broyer et les étaler en paillage au pied des haies et des massifs.' },
    ],
  },
  {
    slug: 'debroussaillage',
    category: 'entretien',
    title: 'Débroussaillage',
    h1: 'Débroussaillage et remise en état de terrain',
    metaDescription:
      "Débroussaillage de terrain envahi ou débroussaillage obligatoire (OLD) à Saulon-la-Rue. 50 % de crédit d'impôt.",
    intro:
      'Terrain laissé à l’abandon, ronces ou friche : nous dégageons et remettons en état votre terrain. Nous réalisons aussi le débroussaillement obligatoire (OLD) dans les zones exposées aux incendies.',
    includes: [
      'Débroussaillage à la débroussailleuse ou au broyeur',
      'Arrachage des ronces et des rejets',
      'Débroussaillement réglementaire autour des habitations (OLD)',
      'Évacuation des déchets verts',
    ],
    frequency: 'Ponctuel, ou annuel pour les obligations légales de débroussaillement.',
    sapEligible: true,
    images: [
      'debroussaillage-nettoyage-cour-corps-de-ferme-avant-apres.webp',
      'debroussaillage-allee-gravier-jardin-avant-apres.webp',
      'arrachage-haie-thuyas-nettoyage-jardin-avant-apres.webp',
    ],
    faq: [
      { q: 'Suis-je concerné par l’obligation de débroussaillement ?', a: 'Si votre terrain se trouve dans une commune classée à risque, à moins de 200 m d’un bois ou d’une forêt, vous devez débroussailler dans un rayon de 50 m autour de votre habitation. Votre mairie peut vous le confirmer.' },
    ],
  },

  // ───────────── CRÉATION / AMÉNAGEMENT ─────────────
  {
    slug: 'plantations-massifs',
    category: 'creation',
    title: 'Plantations et massifs',
    h1: 'Création de massifs et plantations',
    metaDescription:
      "Création de massifs, haies et plantations adaptées à votre sol et à votre climat à Saulon-la-Rue. Conseil et devis gratuit.",
    intro:
      'Nous choisissons des végétaux adaptés à votre sol, à votre exposition et au temps que vous voulez consacrer au jardin. Nous privilégions les essences locales et économes en eau.',
    includes: [
      'Conception du massif (plan et palette végétale)',
      'Préparation du sol et apport d’amendement',
      'Plantation de vivaces, arbustes, haies et arbres',
      'Paillage et mise en place de l’arrosage',
      'Garantie de reprise des végétaux (selon conditions)',
    ],
    sapEligible: false,
    images: [
      'creation-massif-arbustes-paillage-mineral-avant-apres.webp',
      'etapes-creation-massif-toile-paillage-mineral.webp',
      'plantation-grand-olivier-jardin-piscine-paysagiste.webp',
      'plantation-arbres-tuteurage-jardin-paysagiste.webp',
    ],
    faq: [
      { q: 'Quelle est la meilleure période pour planter ?', a: "L'automne, de fin octobre à mars hors gel. Les racines s'installent pendant l'hiver et la reprise est bien meilleure." },
    ],
  },
  {
    slug: 'engazonnement',
    category: 'creation',
    title: 'Engazonnement',
    h1: 'Création de pelouse : semis ou gazon en rouleau',
    metaDescription: "Création ou rénovation de pelouse par semis ou gazon en rouleau à Saulon-la-Rue. Préparation du sol incluse.",
    intro:
      'Pour une pelouse neuve ou rénovée, tout se joue dans la préparation du sol. Nous vous conseillons entre semis et gazon en rouleau selon votre budget et vos délais.',
    includes: [
      'Décompactage, nivellement et préparation du sol',
      'Semis avec un mélange adapté (ombre, sécheresse, passage) ou pose de gazon en rouleau',
      'Roulage et premier arrosage',
      'Première tonte',
    ],
    sapEligible: false,
    images: ['avant-apres-creation-pelouse-gazon-jardin-saulon-la-rue.webp', 'semis-gazon-massifs-arbustes-paillage-mineral-avant-apres.webp'],
    faq: [
      { q: 'Semis ou gazon en rouleau ?', a: 'Le semis coûte moins cher mais demande 2 à 3 mois avant d’être praticable. Le rouleau est utilisable en 3 à 4 semaines.' },
    ],
  },
  {
    slug: 'terrasses-allees',
    category: 'creation',
    title: 'Terrasses et allées',
    h1: 'Terrasses, allées et bordures',
    metaDescription: 'Création de terrasses bois ou dalles, allées en pavés ou gravier et bordures à Saulon-la-Rue. Devis gratuit.',
    intro:
      'Une terrasse ou une allée structure le jardin et le rend plus pratique au quotidien. Nous les réalisons en bois, en dalles, en pavés ou en matériaux drainants.',
    includes: [
      'Terrassement et préparation du support',
      'Terrasse bois (pin traité, essences exotiques ou composite)',
      'Dallage, pavage, allées gravillonnées stabilisées',
      'Bordures, pas japonais, escaliers de jardin',
    ],
    sapEligible: false,
    images: [
      'creation-terrain-petanque-terrasse-bois-avant-apres.webp',
      'creation-terrasse-carrelage-exterieur-avant-apres.webp',
      'allee-pas-japonais-dalles-pelouse-jardin.webp',
      'decaissement-mini-pelle-preparation-pavage-terrasse.webp',
    ],
    faq: [
      { q: 'Faut-il une autorisation pour une terrasse ?', a: 'Une terrasse de plain-pied ne demande généralement pas d’autorisation. Une terrasse surélevée peut nécessiter une déclaration préalable en mairie : nous vérifions avec vous avant les travaux.' },
    ],
  },
  {
    slug: 'clotures-brise-vue',
    category: 'creation',
    title: 'Clôtures et brise-vue',
    h1: 'Clôtures, portillons et brise-vue',
    metaDescription: 'Pose de clôtures, panneaux brise-vue et portillons à Saulon-la-Rue. Devis gratuit.',
    intro: 'Délimiter votre terrain ou vous protéger des regards : nous installons clôtures rigides, panneaux bois ou composite, ganivelles et haies végétales.',
    includes: [
      'Clôture en panneaux rigides ou grillage',
      'Panneaux brise-vue bois ou composite',
      'Ganivelles et clôtures en bois naturel',
      'Pose de portillons',
    ],
    sapEligible: false,
    images: ['Clôture en panneaux\nbois brise-vue', 'Ganivelle en châtaignier\nle long d’un massif'],
    faq: [
      { q: 'Quelle hauteur de clôture est autorisée ?', a: 'Cela dépend du plan local d’urbanisme (PLU) de votre commune. Nous le consultons avant de vous proposer un devis.' },
    ],
  },
  {
    slug: 'arrosage-automatique',
    category: 'creation',
    title: 'Arrosage automatique',
    h1: 'Installation d’arrosage automatique',
    metaDescription: "Installation d'arrosage automatique enterré et goutte-à-goutte à Saulon-la-Rue. Économisez l'eau.",
    intro: 'Un arrosage bien réglé arrose au bon moment et à la bonne dose. Il vous fait gagner du temps et consomme moins d’eau qu’un arrosage manuel.',
    includes: [
      'Étude du jardin et conception du réseau',
      'Arroseurs enterrés pour la pelouse',
      'Goutte-à-goutte pour les massifs et les haies',
      'Programmateur, sonde de pluie et mise en route',
      'Hivernage et remise en service (sur contrat)',
    ],
    sapEligible: false,
    images: ['Arroseur escamotable\nen fonctionnement', 'Goutte-à-goutte\nau pied d’un massif'],
    faq: [
      { q: 'L’arrosage automatique est-il autorisé en cas de restriction d’eau ?', a: 'Les arrêtés sécheresse peuvent limiter l’arrosage. Un programmateur se règle facilement pour respecter les horaires autorisés.' },
    ],
  },
];

export const byCategory = (c: Service['category']) => services.filter((s) => s.category === c);
