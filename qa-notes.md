# QA visuelle — correction du hero

## Mobile 390 × 844

La panthère est nette dès le chargement. Le titre reste lisible et ne déborde pas horizontalement. Le premier écran ne montre pas encore les boutons, car le contenu est volontairement empilé ; ils restent dans le flux sous le sous-titre au lieu d’être recouverts par la section suivante.

## Vue intermédiaire 1024 × 768

Le hero s’adapte désormais à son contenu. Le titre, le sous-titre, les deux boutons et la ligne de preuve sont entièrement visibles dans le premier écran. La panthère est centrée dans sa colonne, sans chevauchement avec le texte ni avec la section suivante.

## Correction appliquée

La hauteur fixe du hero a été remplacée par une hauteur auto-adaptative avec `100svh` comme minimum utile. Le contenu possède maintenant un espacement inférieur suffisant et la breakpoint mobile utilise une hauteur intrinsèque plutôt qu’une hauteur forcée.
