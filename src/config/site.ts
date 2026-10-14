// ─────────────────────────────────────────────────────────────
// Toutes les informations de l'entreprise sont ici.
// Remplacer chaque valeur entre [crochets] avant la mise en ligne.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'MT Paysages',
  tagline: 'Jardinier & paysagiste',
  description:
    "MT Paysages, jardinier paysagiste à Saulon-la-Rue : entretien de jardin avec 50 % de crédit d'impôt, création et aménagement d'espaces verts. Devis gratuit.",

  // Coordonnées (doivent être identiques à la fiche Google Business Profile)
  phone: '06 20 77 78 17',
  email: 'mtpaysages21@gmail.com',
  address: {
    street: '1 impasse du Parc',
    postalCode: '21910',
    city: 'Saulon-la-Rue',
    region: 'Bourgogne-Franche-Comté',
    geo: { latitude: 47.221078, longitude: 5.066707 }, // siège, source : registre des entreprises
  },
  hours: 'Lundi et mardi : 8h – 18h',
  openingHoursSpec: ['Mo-Tu 08:00-18:00'],
  yearsExperience: '3',
  gardensMaintained: '187',

  // Liens externes
  googleReviewsUrl: 'https://maps.app.goo.gl/pe4eDJ8kFM9YLLbr9',
  // Note et nombre d'avis Google, à mettre à jour quand de nouveaux avis arrivent (avis affichés : src/data/reviews.ts)
  googleRating: { value: 5, count: 4 } as null | { value: number; count: number },
  social: {
    instagram: 'https://www.instagram.com/mtpaysages21/',
    facebook: 'https://www.facebook.com/p/MTpaysages-61552213915124/',
  },

  // Zone d'intervention
  radiusKm: 20,
  // Communes à 20 km maximum (centre à centre) de Saulon-la-Rue, triées par distance (km arrondis).
  // Source : geo.api.gouv.fr. Les premières servent sur l'accueil, dans les descriptions et la FAQ.
  communes: [
    { name: 'Barges', km: 2 }, { name: 'Fénay', km: 2 }, { name: 'Saulon-la-Chapelle', km: 4 },
    { name: 'Broindon', km: 4 }, { name: 'Saint-Philibert', km: 4 }, { name: 'Bretenière', km: 4 },
    { name: 'Perrigny-lès-Dijon', km: 4 }, { name: 'Ouges', km: 4 }, { name: 'Gevrey-Chambertin', km: 5 },
    { name: 'Savouges', km: 5 }, { name: 'Noiron-sous-Gevrey', km: 5 }, { name: 'Épernay-sous-Gevrey', km: 6 },
    { name: 'Brochon', km: 6 }, { name: 'Longvic', km: 7 }, { name: 'Rouvres-en-Plaine', km: 7 },
    { name: 'Corcelles-lès-Cîteaux', km: 7 }, { name: 'Thorey-en-Plaine', km: 7 },
    { name: 'Neuilly-Crimolois', km: 7 }, { name: 'Fixin', km: 7 }, { name: 'Gilly-lès-Cîteaux', km: 7 },
    { name: 'Morey-Saint-Denis', km: 7 }, { name: 'Couchey', km: 8 }, { name: 'Saint-Bernard', km: 8 },
    { name: 'Marsannay-la-Côte', km: 8 }, { name: 'Longecourt-en-Plaine', km: 8 }, { name: 'Chenôve', km: 8 },
    { name: 'Sennecey-lès-Dijon', km: 8 }, { name: 'Fauverney', km: 9 }, { name: 'Chambolle-Musigny', km: 9 },
    { name: 'Izeure', km: 9 }, { name: 'Vougeot', km: 9 }, { name: 'Flagey-Echézeaux', km: 9 },
    { name: 'Villebichot', km: 10 }, { name: 'Marliens', km: 10 }, { name: 'Chevigny-Saint-Sauveur', km: 10 },
    { name: 'Vosne-Romanée', km: 10 }, { name: 'Magny-sur-Tille', km: 10 },
    { name: 'Saint-Nicolas-lès-Cîteaux', km: 10 }, { name: 'Boncourt-le-Bois', km: 11 }, { name: 'Aiserey', km: 11 },
    { name: 'Varanges', km: 11 }, { name: 'Curley', km: 11 }, { name: 'Chambœuf', km: 11 },
    { name: 'Quetigny', km: 11 }, { name: 'Bessey-lès-Cîteaux', km: 12 }, { name: 'Flavignerot', km: 12 },
    { name: 'Corcelles-les-Monts', km: 12 }, { name: 'Nuits-Saint-Georges', km: 12 }, { name: 'Dijon', km: 12 },
    { name: 'Reulle-Vergy', km: 12 }, { name: 'Agencourt', km: 12 }, { name: 'Échigey', km: 12 },
    { name: 'Izier', km: 12 }, { name: 'Saint-Apollinaire', km: 13 }, { name: 'Genlis', km: 13 },
    { name: 'Tart', km: 13 }, { name: 'Talant', km: 13 }, { name: 'Tart-le-Bas', km: 13 },
    { name: 'Curtil-Vergy', km: 13 }, { name: 'Bressey-sur-Tille', km: 13 }, { name: 'Fontaine-lès-Dijon', km: 14 },
    { name: 'Aubigny-en-Plaine', km: 14 }, { name: 'Couternon', km: 14 }, { name: 'Gerland', km: 14 },
    { name: 'Segrois', km: 14 }, { name: 'Velars-sur-Ouche', km: 14 }, { name: "L'Étang-Vergy", km: 14 },
    { name: 'Valforêt', km: 14 }, { name: 'Villars-Fontaine', km: 14 }, { name: 'Quincey', km: 15 },
    { name: 'Plombières-lès-Dijon', km: 15 }, { name: 'Cessey-sur-Tille', km: 15 },
    { name: 'Longeault-Pluvault', km: 15 }, { name: 'Labergement-Foigney', km: 15 }, { name: 'Semezanges', km: 15 },
    { name: 'Magny-lès-Aubigny', km: 15 }, { name: 'Varois-et-Chaignot', km: 16 },
    { name: 'Brazey-en-Plaine', km: 16 }, { name: 'Chaux', km: 16 }, { name: 'Messanges', km: 16 },
    { name: 'Ruffey-lès-Echirey', km: 16 }, { name: 'Beire-le-Fort', km: 16 }, { name: 'Urcy', km: 16 },
    { name: 'Ahuy', km: 16 }, { name: 'Premeaux-Prissey', km: 16 }, { name: 'Charrey-sur-Saône', km: 16 },
    { name: 'Meuilley', km: 16 }, { name: 'Broin', km: 16 }, { name: 'Daix', km: 16 }, { name: 'Pluvet', km: 16 },
    { name: 'Montot', km: 17 }, { name: 'Fleurey-sur-Ouche', km: 17 }, { name: 'Ternant', km: 17 },
    { name: 'Remilly-sur-Tille', km: 17 }, { name: 'Bévy', km: 17 }, { name: 'Comblanchien', km: 17 },
    { name: 'Orgeux', km: 17 }, { name: 'Arc-sur-Tille', km: 17 }, { name: 'Bellefond', km: 17 },
    { name: 'Bonnencontre', km: 17 }, { name: 'Collonges-lès-Bévy', km: 17 },
    { name: 'Hauteville-lès-Dijon', km: 18 }, { name: 'Arcey', km: 18 }, { name: 'Asnières-lès-Dijon', km: 18 },
    { name: 'Argilly', km: 18 }, { name: 'Chevannes', km: 18 }, { name: 'Gergueil', km: 18 },
    { name: 'Collonges-et-Premières', km: 18 }, { name: 'Villers-la-Faye', km: 18 }, { name: 'Tréclun', km: 18 },
    { name: 'Corgoloin', km: 18 }, { name: 'Marey-lès-Fussey', km: 18 }, { name: 'Trouhans', km: 18 },
    { name: 'Arcenant', km: 19 }, { name: 'Longchamp', km: 19 }, { name: 'Soirans', km: 19 },
    { name: 'Esbarres', km: 19 }, { name: 'Chambeire', km: 19 }, { name: 'Auvillars-sur-Saône', km: 19 },
    { name: 'Lantenay', km: 19 }, { name: 'Champdôtre', km: 19 }, { name: 'Bretigny', km: 19 },
    { name: 'Magny-lès-Villers', km: 20 }, { name: 'Binges', km: 20 }, { name: 'Bagnot', km: 20 },
    { name: 'Sainte-Marie-sur-Ouche', km: 20 }, { name: 'Norges-la-Ville', km: 20 }, { name: 'Prenois', km: 20 },
  ],
  // Communes qui ont leur propre page « jardinier-[commune] ». N'en créer que si vous avez
  // du contenu réel à y mettre (chantiers, photos, avis locaux) : des pages identiques nuisent au référencement.
  // Ex. : { name: 'Gevrey-Chambertin', intro: '2–3 phrases propres à cette commune : chantiers, type de jardins…' }
  cityPages: [] as { name: string; intro: string }[],

  // Services à la personne : passer à false si l'entreprise n'est pas déclarée SAP
  sap: {
    enabled: true,
    number: '[SAP000000000]', // TODO : numéro de déclaration NOVA
    avanceImmediate: true, // l'entreprise propose-t-elle l'avance immédiate URSSAF ?
  },

  // Informations légales
  legal: {
    companyName: 'MT PAYSAGES', // raison sociale exacte (registre)
    legalForm: 'SAS',
    capital: '1 000 €',
    siret: '978 977 866 00018',
    registry: 'RCS Dijon 978 977 866',
    vat: 'FR08978977866',
    director: 'Thomas Michon',
    insurer: '[Nom de l’assureur – RC Pro / décennale]',
    mediator: { name: '[Nom du médiateur de la consommation]', url: '#' },
  },
  host: {
    name: 'GitHub, Inc.',
    address: '88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis',
    url: 'https://github.com',
  },

  // Google Tag Manager (laisser vide pour désactiver). Le dataLayer est documenté dans le README.
  gtmId: 'GTM-T9QZ2VVP',

  // Formulaire : clé Web3Forms (gratuite sur https://web3forms.com, liée à l'email de réception).
  // Cette clé n'est pas secrète : elle peut figurer dans le code public.
  web3formsKey: 'e1c752e4-8b67-4131-86c4-25c5ea9f5726',
};

export const nav = [
  { label: 'Entretien', href: 'entretien-jardin/' },
  { label: 'Création', href: 'creation-amenagement/' },
  { label: 'Contrats', href: 'contrats-entretien/' },
  { label: 'Réalisations', href: 'realisations/' },
  { label: 'Crédit d’impôt', href: 'credit-impot-50/' },
  { label: 'Conseils', href: 'conseils/' },
  { label: 'Contact', href: 'contact/' },
];
