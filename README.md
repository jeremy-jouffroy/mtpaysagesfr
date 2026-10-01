# mtpaysagesfr

Site vitrine de l'entreprise MT Paysage (jardinier paysagiste). Site statique [Astro](https://astro.build), hébergé sur GitHub Pages.

## Développement

```sh
npm install
npm run dev      # http://localhost:4321/mtpaysagesfr/
npm run build    # génère dist/
```

## Où modifier quoi

| Quoi | Fichier |
| --- | --- |
| Coordonnées, communes, SIRET, SAP, clé du formulaire | `src/config/site.ts` |
| Prestations (textes, FAQ, photos attendues) | `src/data/services.ts` |
| Articles de conseils | `src/pages/conseils/*.md` (ajouter un fichier suffit) |
| Couleurs et styles | `src/styles/global.css` |

Les images sont des placeholders [placehold.co](https://placehold.co) qui décrivent la photo attendue
(fonction `ph()` dans `src/scripts/utils.ts`, 60 caractères maximum). Pour les remplacer : déposer les photos dans
`public/images/` et remplacer `ph('…')` par `url('images/ma-photo.jpg')`.

## Formulaire de devis

Le formulaire utilise [Web3Forms](https://web3forms.com) (gratuit jusqu'à 250 envois/mois) : chaque demande arrive par
email, sans serveur. Pour l'activer, créer une clé d'accès avec l'email de réception et la coller dans
`web3formsKey` (`src/config/site.ts`). La clé n'est pas secrète.

## Mise en ligne

1. Dans GitHub : *Settings → Pages → Source : GitHub Actions*.
2. Chaque push sur `main` déploie le site via `.github/workflows/deploy.yml`.
3. Domaine personnalisé : le configurer dans *Settings → Pages*, puis décommenter `SITE_URL` / `BASE_PATH` dans le workflow.

## Avant la mise en ligne

- [ ] Remplacer toutes les valeurs `[entre crochets]` et les `TODO` (`grep -rn "TODO\|\[" src`)
- [ ] `sap.enabled` / `sap.avanceImmediate` conformes à la situation réelle
- [ ] Clé Web3Forms, puis envoyer une demande de test
- [ ] Vrais avis Google (jamais d'avis inventés), vraies photos
- [ ] Mentions légales, CGV et médiateur de la consommation validés
- [ ] Supprimer `elagage-abattage` si la prestation n'est pas proposée
- [ ] Fiche Google Business Profile avec les mêmes nom, adresse et téléphone que le site
- [ ] Soumettre `sitemap-index.xml` dans Google Search Console
