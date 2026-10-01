# mtpaysagesfr

Site vitrine de l'entreprise MT Paysages (jardinier paysagiste). Site statique [Astro](https://astro.build), hébergé sur GitHub Pages.

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
| Photos (fichiers et textes alternatifs) | `public/images/` + `src/data/photos.ts` |
| Avis clients | `src/data/reviews.ts` (note Google : `googleRating` dans `site.ts`) |
| Articles de conseils | `src/pages/conseils/*.md` (ajouter un fichier suffit) |
| Couleurs et styles | `src/styles/global.css` |

Les photos sont dans `public/images/` (WebP, 1200 px max) et déclarées avec leur texte alternatif dans
`src/data/photos.ts`. Partout où une image est attendue, la fonction `img()` (`src/scripts/utils.ts`) accepte soit un
nom de fichier, soit un texte de placeholder [placehold.co](https://placehold.co) décrivant la photo manquante.
Avis clients : `src/data/reviews.ts` (avis Google réels uniquement).

## Formulaire de devis

Le formulaire utilise [Web3Forms](https://web3forms.com) (gratuit jusqu'à 250 envois/mois) : chaque demande arrive par
email, sans serveur. Pour l'activer, créer une clé d'accès avec l'email de réception et la coller dans
`web3formsKey` (`src/config/site.ts`). La clé n'est pas secrète.

## Tracking (dataLayer)

Le site alimente `window.dataLayer` sans charger d'outil de mesure. Aucune donnée personnelle n'y est poussée.
Code : `src/scripts/tracking.ts`, initialisation dans `src/layouts/Base.astro`.

| Événement | Déclencheur | Paramètres |
| --- | --- | --- |
| `page_view` | Chaque page, dans le `<head>` | `page_type`, `page_path`, `page_title` |
| `cta_click` | Clic sur un lien devis, téléphone ou email | `cta_type` (`quote` / `phone` / `email`), `cta_location` (`header`, `hero`, `service_sidebar`, `cta_band`, `mobile_bar`, `footer`, `content`), `cta_text`, `link_url` |
| `generate_lead` | Demande de devis acceptée par Web3Forms, avant la redirection vers `/merci/` | `form_name`, `form_location`, `services` |
| `form_error` | Échec de l'envoi du formulaire | `form_name`, `form_location` |

`page_type` : `home`, `service_category`, `service`, `city`, `blog`, `article`, `quote_form`, `thank_you`, `legal`,
`error_404`, ou le nom de la page (`contact`, `a-propos`, `realisations`, `avis`, `zone-intervention`, `credit-impot-50`).
Pour forcer un `cta_location`, ajouter `data-cta-location="…"` sur un bloc parent.

Google Tag Manager (`gtmId` dans `src/config/site.ts`) est chargé juste après l'initialisation du dataLayer, avec le
Consent Mode v2 refusé par défaut. `generate_lead` utilise
`eventCallback`, la redirection attend donc que GTM ait traité l'événement (1 s maximum). Avant d'activer un tag qui
dépose des cookies : ajouter une bannière de consentement (CMP) qui met à jour le consentement, et compléter
`src/pages/confidentialite.astro`.

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
