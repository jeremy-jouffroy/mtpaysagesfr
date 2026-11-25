// Pages locales « jardinier-[commune] ».
// Chaque page doit avoir un contenu propre à la commune : Google pénalise les pages identiques
// où seul le nom de la ville change. Ne créer une page que si on peut la nourrir.
//
// À compléter en priorité : `projects` (chantiers réels dans la commune, avec photo).
// Tant que `projects` est vide, la page affiche des réalisations génériques de MT Paysages.
// Ne jamais inventer un chantier ou un avis.

import type { Faq } from './services';
import { site } from '../config/site';
import { slugify } from '../scripts/utils';

export interface CityProject {
  title: string; // ex. « Taille d'une haie de charmilles, rue des Vignes »
  text: string; // 1–3 phrases : ce qui a été fait, en quelle saison, pour quel résultat
  photo: string; // nom de fichier de src/data/photos.ts (ou texte de placeholder)
}

export type Sector = 'cote' | 'plaine' | 'est' | 'nord' | 'ouest';

export const sectorLabels: Record<Sector, string> = {
  cote: 'Côte de Nuits et sud',
  plaine: 'Plaine de Saulon-la-Rue',
  est: 'Est de Dijon',
  nord: 'Nord de Dijon',
  ouest: 'Dijon et ouest',
};

export interface City {
  name: string; // nom officiel ; s'il figure dans site.communes, la distance en est tirée
  km?: number; // distance depuis Saulon-la-Rue, seulement pour une commune hors de site.communes
  sector: Sector; // les pages d'un même secteur se lient entre elles
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
    sector: 'cote',
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
    sector: 'plaine',
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
    sector: 'ouest',
    description:
      "Jardinier paysagiste à Corcelles-les-Monts : jardins en pente, taille de haies, débroussaillage, massifs adaptés au sec. 50 % de crédit d'impôt, devis gratuit.",
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
    sector: 'nord',
    description:
      "Jardinier paysagiste à Ahuy, au nord de Dijon : tonte, taille de haies, ramassage des feuilles, contrats d'entretien. 50 % de crédit d'impôt, devis gratuit.",
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
        a: "Le crédit d'impôt couvre 50 % des sommes payées pour l'entretien courant du jardin, dans la limite de 5 000 € de dépenses par an et par foyer. MT Paysages pratique l'avance immédiate : la réduction est déduite directement de la facture.",
      },
    ],
  },
  {
    name: 'Savouges',
    sector: 'plaine',
    description:
      "Jardinier paysagiste à Savouges, à 5 km : tonte, débroussaillage, désherbage de cours, taille de haies. 50 % de crédit d'impôt sur l'entretien, devis gratuit.",
    intro:
      "Savouges est à 5 km de notre base de Saulon-la-Rue : c'est l'un des villages où nous intervenons le plus vite. Nous y entretenons des jardins de maisons de village, de corps de ferme et de pavillons.",
    context: {
      title: 'Un village de plaine, des terrains à garder propres',
      paragraphs: [
        "Les propriétés de Savouges ont souvent de la surface : grande pelouse, verger, cour, dépendances. Le travail consiste surtout à garder l'ensemble propre au fil des saisons, sans y passer tous ses week-ends.",
        "Pour un terrain laissé quelque temps à l'abandon, nous commençons par un débroussaillage et un nettoyage complet (cours, allées, abords des bâtiments), puis nous proposons un entretien régulier. Étant tout proches, nous pouvons passer souvent sans frais de déplacement importants.",
      ],
    },
    services: ['tonte-pelouse', 'debroussaillage', 'desherbage'],
    gallery: [
      'debroussaillage-nettoyage-cour-corps-de-ferme-avant-apres.webp',
      'arrachage-haie-thuyas-nettoyage-jardin-avant-apres.webp',
      'plantation-arbres-tuteurage-jardin-paysagiste.webp',
    ],
    projects: [], // TODO : 2–3 chantiers réels à Savouges
    faq: [
      {
        q: 'Intervenez-vous à Savouges ?',
        a: "Oui. Savouges est à environ 5 km de Saulon-la-Rue, où nous sommes installés. C'est l'une des communes les plus proches de notre base : nous pouvons y intervenir rapidement, y compris pour des passages fréquents.",
      },
      {
        q: 'Pouvez-vous remettre en état un terrain laissé à l’abandon ?',
        a: "Oui. Nous débroussaillons, arrachons les ronces et les arbustes indésirables, nettoyons cours et allées, puis évacuons ou broyons les déchets verts sur place. Un entretien régulier peut ensuite prendre le relais.",
      },
      {
        q: "Le crédit d'impôt de 50 % s'applique-t-il ?",
        a: "Oui, pour l'entretien courant du jardin (tonte, taille, désherbage, débroussaillage léger, ramassage des feuilles), au titre des services à la personne. Les travaux de création n'y ouvrent pas droit.",
      },
    ],
  },
  {
    name: 'Fontaine-lès-Dijon',
    sector: 'ouest',
    description:
      "Jardinier paysagiste à Fontaine-lès-Dijon : entretien de petits jardins, taille de haies, terrasses, allées et massifs. 50 % de crédit d'impôt, devis gratuit.",
    intro:
      "Aux portes nord-ouest de Dijon, Fontaine-lès-Dijon est à environ 14 km de Saulon-la-Rue. Nous y entretenons et réaménageons des jardins de ville et de quartier, souvent compacts.",
    context: {
      title: 'Des jardins de ville à optimiser',
      paragraphs: [
        "À Fontaine-lès-Dijon, beaucoup de jardins sont de taille modeste, entre maisons mitoyennes ou pavillons proches les uns des autres. Chaque mètre compte : une haie bien taillée pour l'intimité, une terrasse ou une allée pratique, quelques massifs faciles à vivre.",
        "Sur les coteaux du vieux village, la terre est calcaire et parfois en pente. Pour réaménager un petit jardin, nous proposons des solutions qui demandent peu d'entretien : paillage minéral, pas japonais, arbustes persistants et vivaces adaptées au sec.",
      ],
    },
    services: ['taille-haies-arbustes', 'terrasses-allees', 'plantations-massifs'],
    gallery: [
      'allee-pas-japonais-dalles-pelouse-jardin.webp',
      'creation-terrasse-carrelage-exterieur-avant-apres.webp',
      'creation-massif-arbustes-paillage-mineral-avant-apres.webp',
    ],
    projects: [], // TODO : 2–3 chantiers réels à Fontaine-lès-Dijon
    faq: [
      {
        q: 'Intervenez-vous à Fontaine-lès-Dijon ?',
        a: "Oui. Fontaine-lès-Dijon fait partie de notre zone d'intervention, à environ 14 km de Saulon-la-Rue. Nous y assurons l'entretien régulier comme les petits aménagements.",
      },
      {
        q: 'Mon jardin est petit : est-ce que ça vaut le coup de faire appel à vous ?',
        a: "Oui. Un petit jardin se transforme vite avec une allée, une terrasse ou un massif bien pensé, et l'entretien ne prend alors que peu de temps. Nous adaptons le devis à la surface réelle.",
      },
      {
        q: 'Quel accès faut-il pour intervenir dans un jardin mitoyen ?',
        a: "Une porte ou un passage d'environ 80 cm suffit pour la plupart de nos outils. Pour un jardin accessible uniquement par la maison, nous protégeons les sols et évacuons les déchets en sacs.",
      },
    ],
  },
  {
    name: 'Daix',
    sector: 'ouest',
    description:
      "Jardinier paysagiste à Daix, au nord-ouest de Dijon : tonte, taille de haies, gazon et massifs adaptés au sol calcaire. 50 % de crédit d'impôt, devis gratuit.",
    intro:
      "Sur le plateau au nord-ouest de Dijon, Daix est à environ 16 km de notre base de Saulon-la-Rue. Nous y entretenons des jardins de pavillons et créons pelouses et massifs adaptés au terrain.",
    context: {
      title: 'Un plateau calcaire, exposé au sec',
      paragraphs: [
        "À Daix, la terre est souvent mince et caillouteuse, posée sur le calcaire du plateau. Les pelouses y jaunissent vite en été et les plantations mal choisies peinent à s'installer.",
        "Pour un gazon qui tient, nous préparons le sol (apport de terre végétale si besoin) et semons un mélange résistant à la sécheresse. Pour les massifs, nous choisissons des plantes qui aiment le calcaire et nous paillons pour garder l'humidité.",
      ],
    },
    services: ['tonte-pelouse', 'engazonnement', 'plantations-massifs'],
    gallery: [
      'semis-gazon-massifs-arbustes-paillage-mineral-avant-apres.webp',
      'etapes-creation-massif-toile-paillage-mineral.webp',
      'taille-arbustes-en-boule-entretien-jardin-avant-apres.webp',
    ],
    projects: [], // TODO : 2–3 chantiers réels à Daix
    faq: [
      {
        q: 'Intervenez-vous à Daix ?',
        a: "Oui. Daix est dans notre zone d'intervention, à environ 16 km de Saulon-la-Rue. Nous regroupons nos passages dans le secteur nord-ouest de Dijon pour garder des tarifs raisonnables.",
      },
      {
        q: 'Ma pelouse grille chaque été : que faire ?',
        a: "Sur sol calcaire et peu profond, il faut d'abord améliorer le sol puis choisir un gazon rustique résistant à la sécheresse, et tondre plus haut en été. Nous pouvons regarnir ou refaire la pelouse selon son état.",
      },
      {
        q: "Le crédit d'impôt de 50 % s'applique-t-il ?",
        a: "Oui pour l'entretien courant (tonte, taille, désherbage, ramassage des feuilles). La création d'une pelouse neuve ou de massifs relève de l'aménagement et n'y ouvre pas droit.",
      },
    ],
  },
  {
    name: 'Hauteville-lès-Dijon',
    sector: 'ouest',
    description:
      "Jardinier paysagiste à Hauteville-lès-Dijon : débroussaillage, taille de haies, entretien de jardins en lisière de bois. 50 % de crédit d'impôt, devis gratuit.",
    intro:
      "Au nord-ouest de Dijon, Hauteville-lès-Dijon est à environ 18 km de Saulon-la-Rue. Nous y entretenons des jardins de maisons individuelles, souvent proches des bois et des combes.",
    context: {
      title: 'Des jardins au contact de la nature',
      paragraphs: [
        "À Hauteville-lès-Dijon, de nombreux terrains bordent des espaces boisés ou des friches. Ronces, jeunes arbres et broussailles gagnent vite du terrain si on ne les contient pas : un débroussaillage régulier des fonds de parcelle garde le jardin propre et dégagé.",
        "Les haies y sont souvent longues et variées (charmilles, lauriers, haies champêtres). Nous les taillons hors période de nidification, de préférence en fin d'hiver et en fin d'été, comme le recommande l'Office français de la biodiversité.",
      ],
    },
    services: ['debroussaillage', 'taille-haies-arbustes', 'ramassage-feuilles'],
    gallery: [
      'debroussaillage-allee-gravier-jardin-avant-apres.webp',
      'haie-laurier-taillee-pelouse-entretien-jardin-saulon-la-rue.webp',
      'paysagiste-mt-paysages-taille-arbustes-secateur.webp',
    ],
    projects: [], // TODO : 2–3 chantiers réels à Hauteville-lès-Dijon
    faq: [
      {
        q: 'Intervenez-vous à Hauteville-lès-Dijon ?',
        a: "Oui. Hauteville-lès-Dijon fait partie de notre zone d'intervention, à environ 18 km de Saulon-la-Rue. Nous y assurons l'entretien régulier comme les remises en état.",
      },
      {
        q: 'À quelle période tailler les haies ?',
        a: "De préférence en fin d'hiver (février-mars) et à la fin de l'été (septembre-octobre). D'avril à juillet, on évite les tailles importantes pour ne pas déranger les oiseaux qui nichent.",
      },
      {
        q: 'Que faites-vous des déchets verts ?',
        a: "Selon votre préférence, nous les broyons sur place (le broyat sert de paillage) ou nous les évacuons en déchetterie. Le brûlage des déchets verts est interdit.",
      },
    ],
  },
  {
    name: 'Dijon',
    sector: 'ouest',
    description:
      "Jardinier paysagiste à Dijon : entretien de jardins de ville, cours et petits espaces verts, taille de haies, désherbage. 50 % de crédit d'impôt, devis gratuit.",
    intro:
      "À une douzaine de kilomètres de notre base de Saulon-la-Rue, nous intervenons dans les jardins de Dijon : maisons de ville, cours intérieures, pavillons des quartiers résidentiels.",
    context: {
      title: 'Jardins de ville, cours et petits espaces',
      paragraphs: [
        "À Dijon, les jardins sont souvent de petite taille, entourés de murs ou de maisons voisines. On y cherche avant tout un espace propre et agréable sans y passer ses week-ends : haies et arbustes taillés, cour désherbée, massifs nets.",
        "En ville, l'organisation compte autant que le travail : nous venons avec un matériel adapté aux accès étroits, nous protégeons les passages par la maison quand il n'y a pas d'autre accès, et nous évacuons tous les déchets verts.",
      ],
    },
    services: ['taille-haies-arbustes', 'desherbage', 'plantations-massifs'],
    gallery: [
      'desherbage-nettoyage-cour-dallee-puits-avant-apres.webp',
      'taille-arbustes-en-boule-entretien-jardin-avant-apres.webp',
      'allee-pas-japonais-dalles-pelouse-jardin.webp',
    ],
    projects: [], // TODO : 2–3 chantiers réels à Dijon
    faq: [
      {
        q: 'Intervenez-vous dans tous les quartiers de Dijon ?',
        a: "Oui. Dijon est dans notre zone d'intervention, à environ 12 km de Saulon-la-Rue. Nous intervenons chez les particuliers dans tous les quartiers, pour un passage ponctuel ou un entretien régulier.",
      },
      {
        q: 'Mon jardin n’est accessible que par la maison : est-ce un problème ?',
        a: "Non. Nous protégeons les sols du passage, utilisons du matériel compact et évacuons les déchets verts en sacs. Signalez-le simplement lors de la demande de devis.",
      },
      {
        q: "Le crédit d'impôt de 50 % s'applique-t-il à Dijon ?",
        a: "Oui. Les travaux d'entretien courant du jardin (tonte, taille, désherbage, ramassage des feuilles) ouvrent droit à 50 % de crédit d'impôt partout en France, au titre des services à la personne.",
      },
    ],
  },
  {
    name: 'Talant',
    sector: 'ouest',
    description:
      "Jardinier paysagiste à Talant : jardins sur les hauteurs, taille de haies, massifs adaptés au sol calcaire, allées. 50 % de crédit d'impôt, devis gratuit.",
    intro:
      "Perchée au-dessus du lac Kir, à l'ouest de Dijon, Talant est à environ 13 km de Saulon-la-Rue. Nous y entretenons des jardins du vieux village comme des quartiers pavillonnaires.",
    context: {
      title: 'Des jardins sur la butte, entre pente et calcaire',
      paragraphs: [
        "Sur les hauteurs de Talant, beaucoup de terrains sont en pente, avec une terre calcaire peu profonde. Les talus demandent un entretien adapté (débroussailleuse plutôt que tondeuse) et les plantations doivent supporter le sec et le vent.",
        "Pour un jardin plus facile à vivre, nous proposons des massifs d'arbustes et de vivaces rustiques avec paillage, des allées stabilisées et des haies variées qui protègent du vent sans demander trop de taille.",
      ],
    },
    services: ['taille-haies-arbustes', 'plantations-massifs', 'terrasses-allees'],
    gallery: [
      'creation-massif-arbustes-paillage-mineral-avant-apres.webp',
      'taille-niwaki-genevrier-en-nuage-avant-apres.webp',
      'allee-pas-japonais-dalles-pelouse-jardin.webp',
    ],
    projects: [], // TODO : 2–3 chantiers réels à Talant
    faq: [
      {
        q: 'Intervenez-vous à Talant ?',
        a: "Oui. Talant fait partie de notre zone d'intervention, à environ 13 km de Saulon-la-Rue. Nous y assurons l'entretien régulier comme les aménagements.",
      },
      {
        q: 'Comment entretenir un talus en pente ?',
        a: "Sur un talus raide, nous passons la débroussailleuse plutôt que la tondeuse. À plus long terme, des arbustes couvre-sol et un paillage limitent l'entretien et retiennent la terre.",
      },
      {
        q: "Le crédit d'impôt de 50 % s'applique-t-il ?",
        a: "Oui pour l'entretien courant (tonte, taille, désherbage, ramassage des feuilles). Les travaux de création, comme une allée ou un massif neuf, n'y ouvrent pas droit.",
      },
    ],
  },
  {
    name: 'Saint-Apollinaire',
    sector: 'est',
    description:
      "Jardinier paysagiste à Saint-Apollinaire : tonte, taille de haies, ramassage des feuilles, contrats d'entretien à l'année. 50 % de crédit d'impôt, devis gratuit.",
    intro:
      "À l'est de Dijon, Saint-Apollinaire est à environ 13 km de Saulon-la-Rue. Nous y entretenons des jardins de pavillons, en passages ponctuels ou réguliers tout au long de l'année.",
    context: {
      title: 'Des jardins de pavillon à suivre au fil des saisons',
      paragraphs: [
        "À Saint-Apollinaire, les jardins sont majoritairement ceux de maisons individuelles : pelouse, haie de clôture, quelques arbres et massifs. Ce sont des jardins qui demandent surtout de la régularité.",
        "Un contrat d'entretien évite d'avoir à rappeler à chaque saison : tontes du printemps à l'automne, taille des haies deux fois par an, ramassage des feuilles en novembre. Vous bénéficiez de 50 % de crédit d'impôt sur chaque passage.",
      ],
    },
    services: ['tonte-pelouse', 'taille-haies-arbustes', 'ramassage-feuilles'],
    gallery: [
      'haie-laurier-taillee-pelouse-entretien-jardin-saulon-la-rue.webp',
      'avant-apres-creation-pelouse-gazon-jardin-saulon-la-rue.webp',
      'paysagiste-mt-paysages-taille-arbustes-secateur.webp',
    ],
    projects: [], // TODO : 2–3 chantiers réels à Saint-Apollinaire
    faq: [
      {
        q: 'Intervenez-vous à Saint-Apollinaire ?',
        a: "Oui. Saint-Apollinaire est dans notre zone d'intervention, à environ 13 km de Saulon-la-Rue. Nous regroupons nos passages dans l'est dijonnais pour garder des tarifs raisonnables.",
      },
      {
        q: "Combien de passages prévoir dans un contrat d'entretien ?",
        a: "Pour un jardin de pavillon, comptez en général une tonte toutes les 2 à 3 semaines en saison, deux tailles de haie par an et un ramassage des feuilles à l'automne. Nous ajustons selon votre jardin.",
      },
      {
        q: "Le crédit d'impôt de 50 % s'applique-t-il ?",
        a: "Oui, sur l'entretien courant du jardin, au titre des services à la personne, dans la limite de 5 000 € de dépenses par an et par foyer. MT Paysages pratique l'avance immédiate : il est déduit directement de la facture.",
      },
    ],
  },
  {
    name: 'Chevigny-Saint-Sauveur',
    sector: 'plaine',
    description:
      "Jardinier paysagiste à Chevigny-Saint-Sauveur, à 10 km : taille et remplacement de haies de thuyas, tonte, massifs. 50 % de crédit d'impôt, devis gratuit.",
    intro:
      "Chevigny-Saint-Sauveur est à environ 10 km de notre base de Saulon-la-Rue. Nous y entretenons de nombreux jardins de pavillons, de la tonte régulière au renouvellement des haies.",
    context: {
      title: 'Des haies à entretenir… ou à renouveler',
      paragraphs: [
        "Comme dans beaucoup de quartiers pavillonnaires, les jardins de Chevigny-Saint-Sauveur sont souvent fermés par des haies de thuyas ou de lauriers plantées il y a plusieurs décennies. Trop hautes, dégarnies à la base ou sèches par endroits, elles demandent une taille soignée, voire un remplacement.",
        "Quand une haie de thuyas est trop abîmée, nous l'arrachons, dessouchons et replantons une haie variée (charmille, photinia, abélia, troène…), plus résistante à la sécheresse et plus favorable aux oiseaux.",
      ],
    },
    services: ['taille-haies-arbustes', 'tonte-pelouse', 'plantations-massifs'],
    gallery: [
      'arrachage-haie-thuyas-nettoyage-jardin-avant-apres.webp',
      'haie-laurier-taillee-pelouse-entretien-jardin-saulon-la-rue.webp',
      'semis-gazon-massifs-arbustes-paillage-mineral-avant-apres.webp',
    ],
    projects: [], // TODO : 2–3 chantiers réels à Chevigny-Saint-Sauveur
    faq: [
      {
        q: 'Intervenez-vous à Chevigny-Saint-Sauveur ?',
        a: "Oui. Chevigny-Saint-Sauveur est à environ 10 km de Saulon-la-Rue, où nous sommes installés. Nous y intervenons régulièrement, pour l'entretien comme pour les travaux ponctuels.",
      },
      {
        q: 'Faut-il remplacer une haie de thuyas qui sèche ?',
        a: "Un thuya qui a bruni ou qui est taillé dans le vieux bois ne repousse pas. Si les trous sont nombreux, il vaut mieux arracher et replanter une haie variée, plus résistante. Nous vous conseillons sur place.",
      },
      {
        q: "Le crédit d'impôt de 50 % s'applique-t-il ?",
        a: "Oui pour la taille de haie et l'entretien courant. L'arrachage et la plantation d'une nouvelle haie relèvent de travaux d'aménagement, qui n'y ouvrent pas droit.",
      },
    ],
  },
  {
    name: 'Couternon',
    sector: 'est',
    description:
      "Jardinier paysagiste à Couternon : création de jardin, engazonnement, plantations, puis entretien régulier. 50 % de crédit d'impôt sur l'entretien, devis gratuit.",
    intro:
      "À l'est de Dijon, Couternon est à environ 14 km de Saulon-la-Rue. Nous y aménageons et entretenons des jardins de maisons individuelles, y compris sur des terrains à créer de zéro.",
    context: {
      title: 'Créer un jardin, puis le faire vivre',
      paragraphs: [
        "Après une construction, le terrain est souvent nu, tassé par les engins et plein de gravats. Avant de semer ou de planter, il faut nettoyer, décompacter et parfois apporter de la terre végétale : c'est ce qui fait la différence entre une pelouse qui tient et une pelouse qui dépérit.",
        "Nous concevons ensuite un jardin simple à entretenir : pelouse, haie de clôture, quelques arbres et massifs paillés. Une fois installé, nous pouvons en assurer l'entretien régulier.",
      ],
    },
    services: ['engazonnement', 'plantations-massifs', 'tonte-pelouse'],
    gallery: [
      'avant-apres-creation-pelouse-gazon-jardin-saulon-la-rue.webp',
      'decaissement-mini-pelle-preparation-pavage-terrasse.webp',
      'plantation-arbres-tuteurage-jardin-paysagiste.webp',
    ],
    projects: [], // TODO : 2–3 chantiers réels à Couternon
    faq: [
      {
        q: 'Intervenez-vous à Couternon ?',
        a: "Oui. Couternon fait partie de notre zone d'intervention, à environ 14 km de Saulon-la-Rue.",
      },
      {
        q: 'Quand semer une pelouse sur un terrain neuf ?',
        a: "Les meilleures périodes sont le début de l'automne (septembre-octobre) et le printemps (avril-mai). L'été est à éviter sans arrosage automatique. La préparation du sol peut se faire plus tôt.",
      },
      {
        q: "La création d'un jardin ouvre-t-elle droit au crédit d'impôt ?",
        a: "Non, seul l'entretien courant (tonte, taille, désherbage, ramassage des feuilles) ouvre droit aux 50 % de crédit d'impôt. Une fois le jardin créé, son entretien y est éligible.",
      },
    ],
  },
  {
    name: 'Varois-et-Chaignot',
    sector: 'est',
    description:
      "Jardinier paysagiste à Varois-et-Chaignot : haies, clôtures et brise-vue, tonte, taille. 50 % de crédit d'impôt sur l'entretien, devis gratuit.",
    intro:
      "Varois-et-Chaignot, à l'est de Dijon, est à environ 16 km de Saulon-la-Rue. Nous y entretenons des jardins et aménageons clôtures, haies et brise-vue.",
    context: {
      title: 'Se protéger des regards et du vent',
      paragraphs: [
        "En limite de plaine, les jardins de Varois-et-Chaignot sont souvent ouverts sur les champs ou les terrains voisins. Les demandes portent beaucoup sur l'intimité et la protection du vent : haies, clôtures, panneaux brise-vue.",
        "Nous combinons volontiers les solutions : une clôture ou un brise-vue pour un résultat immédiat, doublé d'une haie variée qui prendra le relais en quelques années. Ensuite, nous assurons la taille et l'entretien.",
      ],
    },
    services: ['clotures-brise-vue', 'taille-haies-arbustes', 'tonte-pelouse'],
    gallery: [
      'haie-laurier-taillee-pelouse-entretien-jardin-saulon-la-rue.webp',
      'creation-terrain-petanque-terrasse-bois-avant-apres.webp',
      'plantation-arbres-tuteurage-jardin-paysagiste.webp',
    ],
    projects: [], // TODO : 2–3 chantiers réels à Varois-et-Chaignot
    faq: [
      {
        q: 'Intervenez-vous à Varois-et-Chaignot ?',
        a: "Oui. Varois-et-Chaignot est dans notre zone d'intervention, à environ 16 km de Saulon-la-Rue.",
      },
      {
        q: 'Haie ou brise-vue : que choisir ?',
        a: "Le brise-vue protège tout de suite mais vieillit ; la haie met quelques années à pousser mais dure et accueille la biodiversité. Souvent, le mieux est de poser un brise-vue le temps que la haie pousse.",
      },
      {
        q: 'Quelle hauteur pour une haie en limite de propriété ?',
        a: "Selon le Code civil, une haie de plus de 2 m doit être plantée à au moins 2 m de la limite, et à 50 cm minimum en dessous de 2 m de hauteur, sauf règle locale différente (PLU, lotissement).",
      },
    ],
  },
  {
    name: 'Brochon',
    sector: 'cote',
    description:
      "Jardinier paysagiste à Brochon, à 6 km : entretien de jardins de village, taille de haies, terrasses et allées. 50 % de crédit d'impôt, devis gratuit.",
    intro:
      "Village de la Côte de Nuits entre Fixin et Gevrey-Chambertin, Brochon est à 6 km de notre base de Saulon-la-Rue. Nous y entretenons et aménageons des jardins de maisons anciennes et récentes.",
    context: {
      title: 'Aménager les extérieurs des maisons de village',
      paragraphs: [
        "Entre vignes et plaine, les maisons de Brochon ont souvent une cour, une terrasse ou un jardin clos de murs. Beaucoup de demandes portent sur l'aménagement des extérieurs : terrasse, allée, réfection d'une cour, avec des matériaux qui s'accordent à la pierre.",
        "Pour l'entretien, nous taillons haies et arbustes, désherbons cours et allées sans produit chimique et tondons les pelouses, en passages ponctuels ou réguliers puisque nous sommes tout proches.",
      ],
    },
    services: ['terrasses-allees', 'taille-haies-arbustes', 'desherbage'],
    gallery: [
      'creation-terrasse-carrelage-exterieur-avant-apres.webp',
      'creation-terrain-petanque-terrasse-bois-avant-apres.webp',
      'desherbage-nettoyage-cour-dallee-puits-avant-apres.webp',
    ],
    projects: [], // TODO : 2–3 chantiers réels à Brochon
    faq: [
      {
        q: 'Intervenez-vous à Brochon ?',
        a: "Oui. Brochon est à environ 6 km de Saulon-la-Rue, où nous sommes installés : c'est l'une des communes que nous desservons le plus facilement.",
      },
      {
        q: 'Réalisez-vous des terrasses et des allées ?',
        a: "Oui : terrasses en dalles, carrelage ou bois, allées en gravier, pavés ou pas japonais. Nous nous occupons du terrassement, du décaissement et de la pose.",
      },
      {
        q: "Le crédit d'impôt de 50 % s'applique-t-il ?",
        a: "Oui pour l'entretien courant du jardin (tonte, taille, désherbage). La création d'une terrasse ou d'une allée n'y ouvre pas droit.",
      },
    ],
  },
  {
    name: 'Fixin',
    sector: 'cote',
    description:
      "Jardinier paysagiste à Fixin, à 7 km : entretien de jardins en coteau, murets, désherbage, taille, massifs adaptés au sec. 50 % de crédit d'impôt, devis gratuit.",
    intro:
      "Au nord de la Côte de Nuits, Fixin est à environ 7 km de Saulon-la-Rue. Nous y entretenons des jardins au pied du coteau, souvent en pente et bordés de murets de pierre.",
    context: {
      title: 'Des jardins en coteau, entre pierre et vigne',
      paragraphs: [
        "À Fixin, beaucoup de jardins s'étagent sur la pente, avec des murets en pierre, des terrasses et des escaliers. L'entretien demande plus de travail à la main : désherbage au pied des murs, taille des arbustes, nettoyage des allées.",
        "Le sol caillouteux et calcaire chauffe vite en été. Nous privilégions des plantes qui aiment ces conditions (lavandes, sauges, cistes, graminées) et un paillage minéral qui se marie avec la pierre et limite l'arrosage.",
      ],
    },
    services: ['desherbage', 'taille-haies-arbustes', 'plantations-massifs'],
    gallery: [
      'etapes-creation-massif-toile-paillage-mineral.webp',
      'debroussaillage-allee-gravier-jardin-avant-apres.webp',
      'taille-arbustes-en-boule-entretien-jardin-avant-apres.webp',
    ],
    projects: [], // TODO : 2–3 chantiers réels à Fixin
    faq: [
      {
        q: 'Intervenez-vous à Fixin ?',
        a: "Oui. Fixin est à environ 7 km de Saulon-la-Rue, où nous sommes installés. Nous y intervenons rapidement, pour un entretien régulier ou ponctuel.",
      },
      {
        q: 'Comment désherber au pied des murets en pierre ?',
        a: "À la main ou avec des outils adaptés, sans produit chimique, pour ne pas abîmer les joints ni la pierre. Un paillage minéral au pied des murs réduit ensuite la repousse.",
      },
      {
        q: 'Quelles plantes pour un jardin en coteau sec ?',
        a: "Lavandes, sauges, romarins, cistes, perovskias et graminées supportent bien le sol calcaire et la chaleur. Une fois installées, elles demandent très peu d'arrosage.",
      },
    ],
  },
  {
    name: 'Asnières-lès-Dijon',
    sector: 'nord',
    description:
      "Jardinier paysagiste à Asnières-lès-Dijon : débroussaillage, taille de haies, tonte, remise en état de terrains. 50 % de crédit d'impôt, devis gratuit.",
    intro:
      "Au nord de Dijon, Asnières-lès-Dijon est à environ 18 km de Saulon-la-Rue. Nous y entretenons des jardins de maisons de village et de pavillons, souvent au contact des combes et des bois.",
    context: {
      title: 'Garder la main sur un terrain qui pousse vite',
      paragraphs: [
        "Entre plateau et combes boisées, les terrains d'Asnières-lès-Dijon ont souvent des fonds de parcelle où ronces et jeunes arbres s'installent vite. Un débroussaillage une à deux fois par an suffit à garder le terrain dégagé.",
        "Le reste du jardin demande un entretien classique : tonte, taille des haies de clôture, ramassage des feuilles à l'automne. Nous pouvons regrouper le tout dans un contrat d'entretien.",
      ],
    },
    services: ['debroussaillage', 'tonte-pelouse', 'taille-haies-arbustes'],
    gallery: [
      'debroussaillage-allee-gravier-jardin-avant-apres.webp',
      'arrachage-haie-thuyas-nettoyage-jardin-avant-apres.webp',
      'haie-laurier-taillee-pelouse-entretien-jardin-saulon-la-rue.webp',
    ],
    projects: [], // TODO : 2–3 chantiers réels à Asnières-lès-Dijon
    faq: [
      {
        q: 'Intervenez-vous à Asnières-lès-Dijon ?',
        a: "Oui. Asnières-lès-Dijon est dans notre zone d'intervention, à environ 18 km de Saulon-la-Rue. Nous regroupons nos passages dans le nord dijonnais pour garder des tarifs raisonnables.",
      },
      {
        q: 'À quelle fréquence débroussailler ?',
        a: "Une à deux fois par an suffit en général : au printemps, avant que la végétation ne s'emballe, et à la fin de l'été. Un terrain très envahi peut demander une première intervention plus lourde.",
      },
      {
        q: "Le crédit d'impôt de 50 % s'applique-t-il ?",
        a: "Oui pour l'entretien courant du jardin (tonte, taille, désherbage, débroussaillage léger, ramassage des feuilles), au titre des services à la personne.",
      },
    ],
  },
  {
    name: 'Bellefond',
    sector: 'nord',
    description:
      "Jardinier paysagiste à Bellefond : entretien de jardins et vergers, taille d'arbustes, ramassage des feuilles, tonte. 50 % de crédit d'impôt, devis gratuit.",
    intro:
      "Petit village au nord de Dijon, Bellefond est à environ 17 km de Saulon-la-Rue. Nous y entretenons des jardins arborés, avec pelouse, arbres fruitiers et haies.",
    context: {
      title: 'Des jardins arborés, à suivre à chaque saison',
      paragraphs: [
        "Les jardins de Bellefond sont souvent plantés d'arbres : fruitiers, arbres d'ornement, haies champêtres. Ils sont agréables l'été mais demandent du travail à l'automne, quand les feuilles couvrent pelouse et allées.",
        "Nous proposons un suivi sur l'année : tonte en saison, taille des arbustes et des haies, ramassage et évacuation des feuilles en automne (ou broyage pour pailler les massifs), nettoyage de fin d'hiver.",
      ],
    },
    services: ['ramassage-feuilles', 'taille-haies-arbustes', 'tonte-pelouse'],
    gallery: [
      'plantation-arbres-tuteurage-jardin-paysagiste.webp',
      'paysagiste-mt-paysages-taille-arbustes-secateur.webp',
      'taille-arbustes-en-boule-entretien-jardin-avant-apres.webp',
    ],
    projects: [], // TODO : 2–3 chantiers réels à Bellefond
    faq: [
      {
        q: 'Intervenez-vous à Bellefond ?',
        a: "Oui. Bellefond fait partie de notre zone d'intervention, à environ 17 km de Saulon-la-Rue.",
      },
      {
        q: 'Que faites-vous des feuilles ramassées ?',
        a: "Nous les évacuons ou, si vous le souhaitez, nous les broyons pour pailler les massifs et le pied des haies : c'est gratuit et ça nourrit le sol.",
      },
      {
        q: "Le crédit d'impôt de 50 % s'applique-t-il ?",
        a: "Oui. Le ramassage des feuilles, la tonte et la taille font partie de l'entretien courant, qui ouvre droit à 50 % de crédit d'impôt au titre des services à la personne.",
      },
    ],
  },
  {
    name: 'Ruffey-lès-Echirey',
    sector: 'nord',
    description:
      "Jardinier paysagiste à Ruffey-lès-Echirey : tonte, taille de haies, désherbage, contrats d'entretien. 50 % de crédit d'impôt, devis gratuit.",
    intro:
      "Au nord-est de Dijon, Ruffey-lès-Echirey est à environ 16 km de Saulon-la-Rue. Nous y entretenons des jardins de maisons individuelles, ponctuellement ou toute l'année.",
    context: {
      title: 'Un entretien régulier, sans contrainte',
      paragraphs: [
        "À Ruffey-lès-Echirey, la plupart des jardins associent pelouse, haie de clôture et quelques massifs. Le plus gros du travail se concentre du printemps à l'automne, quand l'herbe et les haies poussent vite.",
        "Nous proposons des formules simples : passages programmés pour la tonte et la taille, désherbage des allées et terrasses, nettoyage de fin de saison. Vous n'avez rien à organiser et vous bénéficiez de 50 % de crédit d'impôt.",
      ],
    },
    services: ['tonte-pelouse', 'taille-haies-arbustes', 'desherbage'],
    gallery: [
      'haie-laurier-taillee-pelouse-entretien-jardin-saulon-la-rue.webp',
      'desherbage-nettoyage-cour-dallee-puits-avant-apres.webp',
      'semis-gazon-massifs-arbustes-paillage-mineral-avant-apres.webp',
    ],
    projects: [], // TODO : 2–3 chantiers réels à Ruffey-lès-Echirey
    faq: [
      {
        q: 'Intervenez-vous à Ruffey-lès-Echirey ?',
        a: "Oui. Ruffey-lès-Echirey est dans notre zone d'intervention, à environ 16 km de Saulon-la-Rue.",
      },
      {
        q: 'Faut-il être présent pendant l’intervention ?',
        a: "Non. Il suffit que le jardin soit accessible. Nous vous prévenons du jour de passage et vous envoyons la facture après l'intervention.",
      },
      {
        q: "Comment fonctionne l'avance immédiate du crédit d'impôt ?",
        a: "MT Paysages pratique l'avance immédiate de l'URSSAF : vous ne payez que 50 % de la facture d'entretien : la part du crédit d'impôt est déduite directement, sans attendre la déclaration de revenus.",
      },
    ],
  },
  {
    name: 'Norges-la-Ville',
    sector: 'nord',
    description:
      "Jardinier paysagiste à Norges-la-Ville : tonte, taille de haies, ramassage des feuilles, entretien saisonnier. 50 % de crédit d'impôt, devis gratuit.",
    intro:
      "Au nord de Dijon, Norges-la-Ville est à environ 20 km de Saulon-la-Rue, en limite de notre zone. Nous y intervenons en regroupant nos passages avec les communes voisines.",
    context: {
      title: 'Un entretien planifié par saison',
      paragraphs: [
        "À cette distance, nous organisons l'entretien en tournées planifiées avec les communes voisines du nord dijonnais. Cela permet de proposer des tarifs raisonnables et des dates de passage fixées à l'avance.",
        "Un calendrier type : tontes régulières d'avril à octobre, taille des haies en fin d'hiver et fin d'été, ramassage des feuilles en novembre. Nous adaptons le nombre de passages à votre jardin.",
      ],
    },
    services: ['tonte-pelouse', 'taille-haies-arbustes', 'ramassage-feuilles'],
    gallery: [
      'avant-apres-creation-pelouse-gazon-jardin-saulon-la-rue.webp',
      'haie-laurier-taillee-pelouse-entretien-jardin-saulon-la-rue.webp',
      'paysagiste-mt-paysages-taille-arbustes-secateur.webp',
    ],
    projects: [], // TODO : 2–3 chantiers réels à Norges-la-Ville
    faq: [
      {
        q: 'Intervenez-vous à Norges-la-Ville ?',
        a: "Oui. Norges-la-Ville est à environ 20 km de Saulon-la-Rue, en limite de notre zone. Nous y intervenons, de préférence pour un entretien planifié regroupé avec les communes voisines.",
      },
      {
        q: 'Facturez-vous des frais de déplacement ?',
        a: "Le devis tient compte de la distance et de la fréquence des passages. En regroupant les interventions dans le secteur, nous limitons l'impact du déplacement sur votre facture.",
      },
      {
        q: "Le crédit d'impôt de 50 % s'applique-t-il ?",
        a: "Oui pour l'entretien courant du jardin (tonte, taille, désherbage, ramassage des feuilles), au titre des services à la personne.",
      },
    ],
  },
  {
    name: 'Messigny-et-Vantoux',
    km: 23,
    sector: 'nord',
    description:
      "Paysagiste à Messigny-et-Vantoux : création de jardin, terrassement, terrasses, pavage, plantations et engazonnement. Devis gratuit et détaillé.",
    intro:
      "Au nord de Dijon, Messigny-et-Vantoux est à environ 23 km de Saulon-la-Rue, au-delà de notre rayon d'entretien. Nous y réalisons des chantiers d'aménagement extérieur : création de jardin, terrasses, pavage, plantations.",
    context: {
      title: 'Aménager un terrain entre plateau et vallée',
      paragraphs: [
        "Entre plateau calcaire et vallée boisée, les terrains de Messigny-et-Vantoux sont parfois en pente et souvent caillouteux. Un aménagement réussi commence par le terrassement : décaissement, nivellement, évacuation des déblais, et si besoin murets pour tenir la terre.",
        "Nous prenons en charge le chantier de bout en bout : terrasse ou pavage posés sur un fond de forme solide, allées, plantation d'arbres, de haies et de massifs adaptés au sol, puis engazonnement. Ce sont des travaux sur plusieurs jours, pour lesquels la distance pèse peu.",
      ],
    },
    services: ['terrasses-allees', 'plantations-massifs', 'engazonnement'],
    gallery: [
      'decaissement-mini-pelle-preparation-pavage-terrasse.webp',
      'creation-terrasse-carrelage-exterieur-avant-apres.webp',
      'plantation-arbres-tuteurage-jardin-paysagiste.webp',
    ],
    projects: [], // TODO : 2–3 chantiers réels à Messigny-et-Vantoux
    faq: [
      {
        q: 'Intervenez-vous à Messigny-et-Vantoux ?',
        a: "Oui, pour les chantiers d'aménagement. La commune est à environ 23 km de Saulon-la-Rue, au-delà du rayon de 20 km où nous assurons l'entretien régulier.",
      },
      {
        q: 'Quels travaux réalisez-vous à cette distance ?',
        a: "Les chantiers d'aménagement extérieur : création de jardin, terrassement, terrasses, pavage et allées, plantations d'arbres, de haies et de massifs, engazonnement. Nous ne proposons pas d'entretien régulier (tonte, taille) aussi loin de notre base.",
      },
      {
        q: "Ces travaux ouvrent-ils droit au crédit d'impôt de 50 % ?",
        a: "Non. Le crédit d'impôt des services à la personne ne concerne que l'entretien courant du jardin. Les travaux de création et d'aménagement n'y ouvrent pas droit, mais le devis est gratuit et détaillé poste par poste.",
      },
    ],
  },
  {
    name: 'Clénay',
    km: 22,
    sector: 'nord',
    description:
      "Paysagiste à Clénay : engazonnement, terrassement, terrasses et pavage, plantations, création de jardin. Devis gratuit et détaillé.",
    intro:
      "Au nord-est de Dijon, Clénay est à environ 22 km de Saulon-la-Rue, au-delà de notre rayon d'entretien. Nous y réalisons des chantiers d'aménagement : pelouses, terrasses, pavage, plantations, création de jardin.",
    context: {
      title: 'Des terrains plats, faciles à aménager',
      paragraphs: [
        "Les terrains de Clénay sont généralement plats et spacieux, idéaux pour un aménagement complet : grande pelouse, terrasse dans le prolongement de la maison, allée carrossable pavée, haie de clôture.",
        "Pour une maison neuve, nous partons du terrain nu : nettoyage des gravats, terrassement et nivellement, apport de terre végétale, puis semis d'un gazon rustique adapté aux étés secs et plantation des haies et massifs.",
      ],
    },
    services: ['engazonnement', 'terrasses-allees', 'plantations-massifs'],
    gallery: [
      'avant-apres-creation-pelouse-gazon-jardin-saulon-la-rue.webp',
      'decaissement-mini-pelle-preparation-pavage-terrasse.webp',
      'semis-gazon-massifs-arbustes-paillage-mineral-avant-apres.webp',
    ],
    projects: [], // TODO : 2–3 chantiers réels à Clénay
    faq: [
      {
        q: 'Intervenez-vous à Clénay ?',
        a: "Oui, pour les chantiers d'aménagement. Clénay est à environ 22 km de Saulon-la-Rue, au-delà du rayon de 20 km où nous assurons l'entretien régulier.",
      },
      {
        q: 'Quels travaux réalisez-vous à cette distance ?',
        a: "Les chantiers d'aménagement extérieur : création de jardin, terrassement, terrasses, pavage et allées, plantations d'arbres, de haies et de massifs, engazonnement. Nous ne proposons pas d'entretien régulier (tonte, taille) aussi loin de notre base.",
      },
      {
        q: "Ces travaux ouvrent-ils droit au crédit d'impôt de 50 % ?",
        a: "Non. Le crédit d'impôt des services à la personne ne concerne que l'entretien courant du jardin. Les travaux de création et d'aménagement n'y ouvrent pas droit, mais le devis est gratuit et détaillé poste par poste.",
      },
    ],
  },
  {
    name: 'Ruffey-lès-Beaune',
    km: 25,
    sector: 'cote',
    description:
      "Paysagiste à Ruffey-lès-Beaune : création de jardin, terrassement, terrasses, pavage, plantations et engazonnement. Devis gratuit et détaillé.",
    intro:
      "Dans la plaine près de Beaune, Ruffey-lès-Beaune est à environ 25 km de Saulon-la-Rue, au-delà de notre rayon d'entretien. Nous y réalisons des chantiers d'aménagement extérieur, du terrassement à la plantation.",
    context: {
      title: 'Des chantiers d’aménagement complets',
      paragraphs: [
        "À cette distance, nous intervenons pour des projets bien définis : création ou rénovation complète d'un jardin, terrasse, pavage d'une cour ou d'une allée, plantation d'arbres et de haies, engazonnement. Ce sont des chantiers de plusieurs jours, pour lesquels la distance pèse peu.",
        "Nous assurons tout le chantier avec notre propre matériel : terrassement à la mini-pelle, préparation du fond de forme, pose, plantation et finitions, avec un chantier nettoyé chaque soir.",
      ],
    },
    services: ['terrasses-allees', 'plantations-massifs', 'engazonnement'],
    gallery: [
      'creation-terrain-petanque-terrasse-bois-avant-apres.webp',
      'plantation-grand-olivier-jardin-piscine-paysagiste.webp',
      'decaissement-mini-pelle-preparation-pavage-terrasse.webp',
    ],
    projects: [], // TODO : 2–3 chantiers réels à Ruffey-lès-Beaune
    faq: [
      {
        q: 'Intervenez-vous à Ruffey-lès-Beaune ?',
        a: "Oui, pour les chantiers d'aménagement. La commune est à environ 25 km de Saulon-la-Rue, au-delà du rayon de 20 km où nous assurons l'entretien régulier.",
      },
      {
        q: 'Quels travaux réalisez-vous à cette distance ?',
        a: "Les chantiers d'aménagement extérieur : création de jardin, terrassement, terrasses, pavage et allées, plantations d'arbres, de haies et de massifs, engazonnement. Nous ne proposons pas d'entretien régulier (tonte, taille) aussi loin de notre base.",
      },
      {
        q: "Ces travaux ouvrent-ils droit au crédit d'impôt de 50 % ?",
        a: "Non. Le crédit d'impôt des services à la personne ne concerne que l'entretien courant du jardin. Les travaux de création et d'aménagement n'y ouvrent pas droit, mais le devis est gratuit et détaillé poste par poste.",
      },
    ],
  },
];

// ─── Maillage interne ─────────────────────────────────────────

/** Communes mises en avant dans le pied de page (lien sur toutes les pages : en garder 6 à 8). */
export const featuredCities = [
  'Dijon', 'Chevigny-Saint-Sauveur', 'Gevrey-Chambertin', 'Saint-Apollinaire',
  'Talant', 'Fontaine-lès-Dijon', 'Fixin', 'Rouvres-en-Plaine',
];

export const cityPath = (name: string) => `jardinier-${slugify(name)}/`;

export function cityByName(name: string): City | undefined {
  return cities.find((c) => c.name === name);
}

/** Distance depuis la base : site.communes, à défaut le champ km de la commune. */
export function cityKm(c: City): number {
  const km = site.communes.find((x) => x.name === c.name)?.km ?? c.km;
  if (km === undefined) throw new Error(`Distance inconnue pour ${c.name} : l'ajouter à site.communes ou renseigner km`);
  return km;
}

/** Au-delà du rayon d'entretien : uniquement des chantiers d'aménagement. */
export const isWorksOnly = (c: City) => cityKm(c) > site.radiusKm;

/** Communes dont la page met ce service en avant, de la plus proche à la plus éloignée. */
export function citiesForService(slug: string, limit = 8): City[] {
  return cities.filter((c) => c.services.includes(slug)).sort((a, b) => cityKm(a) - cityKm(b)).slice(0, limit);
}

// Vérifications au build : une faute de frappe casserait un lien sans prévenir.
for (const n of featuredCities) if (!cityByName(n)) throw new Error(`featuredCities : commune sans page : ${n}`);
