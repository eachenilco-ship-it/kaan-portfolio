# Kaan Studio — brief de refonte

## Mode

**Redesign · Preserve** : conserver l’identité panthère, la palette sombre/cuivre, la voix française, les ancres principales et le formulaire ; renforcer la clarté commerciale, la preuve et l’expérience mobile.

## Preserve

- Le logo panthère et le nom Kaan.
- Le positionnement de studio web pour artisans, indépendants et petites entreprises.
- Les projets Menuiserie Dupont et Ker'Equine.
- Les ancres `#accueil`, `#apropos`, `#projets`, `#methode` et `#contact`.
- Le ton direct, humain et non-agressif.

## Improve

- Hero : formuler une spécialisation mémorisable et une promesse orientée résultat.
- Preuve : transformer chaque projet en mini étude de cas avec **problème → intervention → résultat attendu** et badge visible **Projet de démonstration**.
- Offre : ajouter une section claire « Site vitrine sur mesure » avec cible, livrables, déroulé et appel à l’action.
- Différenciation : expliquer la méthode Kaan, centrée sur la compréhension rapide de l’activité locale et la prise de contact.
- Mobile : menu accessible, tailles de texte fluides, zones tactiles d’au moins 44px, formulaire confortable, images non débordantes, réduction des effets décoratifs si nécessaire.
- Interaction : cartes de projets entièrement cliquables, hover discret, révélation progressive, focus clavier visible, `prefers-reduced-motion`.

## Remove

- Les formulations génériques qui pourraient convenir à n’importe quel freelance.
- Les cartes de projets qui ne montrent que le secteur et la description.
- Les effets décoratifs qui concurrencent le message ou ralentissent la lecture sur mobile.

## Protected contracts

- Routes et liens externes des deux projets.
- Noms et ordre des champs `nom`, `email`, `message`.
- Soumission et confirmation du formulaire.
- Logo existant et identité visuelle reconnaissable.

## Nouvelle architecture de contenu

1. Hero : « Je transforme les activités locales difficiles à trouver en ligne en sites qui donnent envie de les contacter. »
2. Preuve rapide : 2 projets de démonstration, 3 bénéfices concrets, CTA.
3. Différenciation : « Pourquoi Kaan ? » avec compréhension du métier, structure persuasive et accompagnement humain.
4. Études de cas : pour chaque projet, problème client, ce qui a été fait, résultat recherché, lien vers la démo.
5. Offre : ce qui est inclus, pour qui, comment ça se passe ; prix non affiché mais cadrage explicite.
6. Méthode : échange, structure, construction, lancement.
7. Contact : demande qualifiée avec micro-copy rassurante.

## Design Read + dials

- Artifact : portfolio de studio / landing page de conversion.
- Audience : artisans, indépendants et petites entreprises locales.
- Visual language : atelier digital haut de gamme, sombre, éditorial, tactile, précis.
- Visual variance : 7/10.
- Motion intensity : 4/10.
- Information density : 6/10.
- Asset dependence : 7/10.
- Brand fidelity : 9/10.

## Design decisions

- **Palette** : encre `#0d0e10`, ivoire chaud `#f4f0e8`, cuivre `#d5aa62`, graphite `#1a1b1f`.
- **Typographie** : Space Grotesk pour les titres, Inter pour les textes, DM Mono pour les labels et métriques.
- **Espacement** : échelle basée sur 8px, avec grands espacements éditoriaux entre sections.
- **Rayons** : angles modérés et cohérents ; pas de cartes molles génériques.
- **Ombres** : faibles, utilisées seulement pour détacher les boutons et les médias.
- **Mouvement** : transitions courtes, easing doux, révélation au scroll et survols de cartes ; désactivation partielle sous `prefers-reduced-motion`.

## Highest-risk change

Le plus grand risque est de rendre la page plus longue et plus explicative au point de diluer l’impact visuel. Pour l’éviter, les sections seront conçues en blocs scannables avec un message principal, une preuve et un CTA clair.

## Rollback / fallback

Les nouvelles sections peuvent être retirées sans modifier les ancres existantes ni les contrats du formulaire. Les projets restent accessibles via leurs liens actuels.
