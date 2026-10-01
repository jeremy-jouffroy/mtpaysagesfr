// ─────────────────────────────────────────────────────────────
// Toutes les informations de l'entreprise sont ici.
// Remplacer chaque valeur entre [crochets] avant la mise en ligne.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'MT Paysage',
  tagline: 'Jardinier & paysagiste',
  description:
    "MT Paysage, jardinier paysagiste à [Ville] : entretien de jardin avec 50 % de crédit d'impôt, création et aménagement d'espaces verts. Devis gratuit.",

  // Coordonnées (doivent être identiques à la fiche Google Business Profile)
  phone: '06 00 00 00 00', // TODO
  email: 'contact@exemple.fr', // TODO
  address: {
    street: '[Adresse]',
    postalCode: '[00000]',
    city: '[Ville]',
    region: '[Région]',
  },
  hours: 'Lundi – vendredi : 8h – 18h · Samedi sur rendez-vous',
  openingHoursSpec: ['Mo-Fr 08:00-18:00'],
  yearsExperience: '[X]',

  // Liens externes
  googleReviewsUrl: '#', // TODO : lien vers la fiche Google
  googleRating: null as null | { value: number; count: number }, // ex. { value: 4.9, count: 37 }

  // Zone d'intervention
  radiusKm: 20,
  communes: ['[Commune 1]', '[Commune 2]', '[Commune 3]', '[Commune 4]', '[Commune 5]', '[Commune 6]', '[Commune 7]', '[Commune 8]'],
  // Communes qui ont leur propre page « jardinier-[commune] ». N'en créer que si vous avez
  // du contenu réel à y mettre (chantiers, photos, avis locaux) : des pages identiques nuisent au référencement.
  cityPages: [
    { name: '[Ville]', intro: '[2–3 phrases propres à cette commune : quartiers, type de jardins, chantiers récents.]' },
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
    companyName: 'MT Paysage', // raison sociale exacte
    legalForm: '[EI / SARL / SAS…]',
    capital: '[montant]',
    siret: '[000 000 000 00000]',
    registry: '[RCS / RM de …]',
    vat: '[FR00000000000]',
    director: '[Nom du dirigeant]',
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
  web3formsKey: 'YOUR_ACCESS_KEY_HERE', // TODO
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
