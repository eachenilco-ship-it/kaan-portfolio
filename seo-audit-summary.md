# Audit SEO et accessibilité — Kaan Studio

## Modifications appliquées

Le titre est maintenant `Kaan Studio | Création de sites web sur mesure en Bretagne`. La meta description présente les sites vitrines, les artisans, les indépendants, les petites entreprises, la Bretagne et le caractère moderne et responsive de l’offre.

Les métadonnées Open Graph et Twitter/X Cards ont été ajoutées avec une image de panthère, une URL canonique et une description cohérente. La balise canonical pointe vers `https://eachenilco-ship-it.github.io/kaan-portfolio/`.

Le contenu mentionne naturellement la Bretagne, le travail à distance et les zones de Rennes et Fougères. La section Services précise le design personnalisé, le responsive mobile/tablette/ordinateur, le formulaire de contact, la mise en ligne et l’optimisation SEO de base.

Les données structurées JSON-LD contiennent `ProfessionalService` et `WebSite`, avec uniquement les informations réellement disponibles : nom, URL, email, téléphone, description et zone Bretagne.

Les fichiers `robots.txt` et `sitemap.xml` ont été ajoutés. Le sitemap contient l’URL canonique unique du portfolio.

Les images disposent désormais de textes alternatifs naturels et de dimensions explicites. Le logo panthère est servi en WebP optimisé : environ 164 Ko au lieu d’environ 2,7 Mo pour le PNG, soit une réduction importante du poids de chargement. L’image immédiatement visible n’est pas lazy-loadée ; celle du footer l’est.

Le script principal est chargé avec `defer`. La hiérarchie vérifiée contient un seul `h1`, cinq `h2` et neuf `h3`. Les champs du formulaire ont des labels, des attributs `required`, un état de retour `aria-live` et les liens téléphone/email sont utilisables sur mobile.

## Vérifications

| Contrôle | Résultat |
|---|---|
| H1 principal unique | Conforme |
| H2/H3 structurés | Conforme |
| Meta title et description | Conforme |
| Canonical | Conforme |
| Open Graph | Conforme |
| Twitter/X Cards | Conforme |
| JSON-LD | Conforme : ProfessionalService + WebSite |
| robots.txt | Présent |
| sitemap.xml | Présent |
| Images avec alt et dimensions | Conforme |
| Script différé | Conforme |
| Responsive mobile/tablette/desktop | Contrôlé visuellement |
| Débordement horizontal | Aucun observé dans le contrôle responsive |
| Formulaire Formspree | Endpoint conservé et champs validés sans envoi de test |

## À faire après publication

Importer `index.html`, `style.css`, `script.js`, `panther-logo-new.webp`, `robots.txt` et `sitemap.xml` dans le dépôt GitHub Pages. Dans Google Search Console, soumettre le sitemap à l’adresse `/sitemap.xml`, puis demander l’indexation de l’URL canonique.
