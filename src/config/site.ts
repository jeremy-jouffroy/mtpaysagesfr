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
  },
  hours: 'Lundi et mardi : 8h – 18h',
  openingHoursSpec: ['Mo-Tu 08:00-18:00'],
  yearsExperience: '3',
  gardensMaintained: '187',

  // Liens externes
  googleReviewsUrl: '#', // TODO : lien vers la fiche Google
  googleRating: null as null | { value: number; count: number }, // ex. { value: 4.9, count: 37 }

  // Zone d'intervention
  radiusKm: 20,
  // Communes à 20 km maximum (centre à centre) de Saulon-la-Rue, triées par distance.
  // Source : geo.api.gouv.fr. Les premières servent dans les descriptions et la FAQ.
  communes: [
    'Barges', 'Fénay', 'Saulon-la-Chapelle', 'Broindon', 'Saint-Philibert', 'Bretenière', 'Perrigny-lès-Dijon',
    'Ouges', 'Gevrey-Chambertin', 'Savouges', 'Noiron-sous-Gevrey', 'Épernay-sous-Gevrey', 'Brochon', 'Longvic',
    'Rouvres-en-Plaine', 'Corcelles-lès-Cîteaux', 'Thorey-en-Plaine', 'Neuilly-Crimolois', 'Fixin',
    'Gilly-lès-Cîteaux', 'Morey-Saint-Denis', 'Couchey', 'Saint-Bernard', 'Marsannay-la-Côte',
    'Longecourt-en-Plaine', 'Chenôve', 'Sennecey-lès-Dijon', 'Fauverney', 'Chambolle-Musigny', 'Izeure', 'Vougeot',
    'Flagey-Echézeaux', 'Villebichot', 'Marliens', 'Chevigny-Saint-Sauveur', 'Vosne-Romanée', 'Magny-sur-Tille',
    'Saint-Nicolas-lès-Cîteaux', 'Boncourt-le-Bois', 'Aiserey', 'Varanges', 'Curley', 'Chambœuf', 'Quetigny',
    'Bessey-lès-Cîteaux', 'Flavignerot', 'Corcelles-les-Monts', 'Nuits-Saint-Georges', 'Dijon', 'Reulle-Vergy',
    'Agencourt', 'Échigey', 'Izier', 'Saint-Apollinaire', 'Genlis', 'Tart', 'Talant', 'Tart-le-Bas', 'Curtil-Vergy',
    'Bressey-sur-Tille', 'Fontaine-lès-Dijon', 'Aubigny-en-Plaine', 'Couternon', 'Gerland', 'Segrois',
    'Velars-sur-Ouche', "L'Étang-Vergy", 'Valforêt', 'Villars-Fontaine', 'Quincey', 'Plombières-lès-Dijon',
    'Cessey-sur-Tille', 'Longeault-Pluvault', 'Labergement-Foigney', 'Semezanges', 'Magny-lès-Aubigny',
    'Varois-et-Chaignot', 'Brazey-en-Plaine', 'Chaux', 'Messanges', 'Ruffey-lès-Echirey', 'Beire-le-Fort', 'Urcy',
    'Ahuy', 'Premeaux-Prissey', 'Charrey-sur-Saône', 'Meuilley', 'Broin', 'Daix', 'Pluvet', 'Montot',
    'Fleurey-sur-Ouche', 'Ternant', 'Remilly-sur-Tille', 'Bévy', 'Comblanchien', 'Orgeux', 'Arc-sur-Tille',
    'Bellefond', 'Bonnencontre', 'Collonges-lès-Bévy', 'Hauteville-lès-Dijon', 'Arcey', 'Asnières-lès-Dijon',
    'Argilly', 'Chevannes', 'Gergueil', 'Collonges-et-Premières', 'Villers-la-Faye', 'Tréclun', 'Corgoloin',
    'Marey-lès-Fussey', 'Trouhans', 'Arcenant', 'Longchamp', 'Soirans', 'Esbarres', 'Chambeire',
    'Auvillars-sur-Saône', 'Lantenay', 'Champdôtre', 'Bretigny', 'Magny-lès-Villers', 'Binges', 'Bagnot',
    'Sainte-Marie-sur-Ouche', 'Norges-la-Ville', 'Prenois',
  ],
  // Communes qui ont leur propre page « jardinier-[commune] ». N'en créer que si vous avez
  // du contenu réel à y mettre (chantiers, photos, avis locaux) : des pages identiques nuisent au référencement.
  cityPages: [
    { name: 'Saulon-la-Rue', intro: '[2–3 phrases propres à cette commune : quartiers, type de jardins, chantiers récents.]' },
    { name: '[Commune 1]', intro: '[2–3 phrases propres à cette commune.]' },
    { name: '[Commune 2]', intro: '[2–3 phrases propres à cette commune.]' },
  ],

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
