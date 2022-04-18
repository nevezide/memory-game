# Les Ecrans
Pour réaliser les écrans, j'ai utilisé l'approche vue / contrôleur.
Chaque écran a donc deux parties :
- Une vue
- Un contrôleur de vue

## La vue
Comme son nom l'indique, la vue gère l'aspect visuel de l'écran.

Elle est une composition de deux couches :
- Un layout : la structure de l'écran (exemple : entête / corps / pied de page)
- Des composants : l'écran est une composition de composants intégrés dans le layout. L'interaction entre les composants est géré dans l'écran.

> ⚠ IMPORTANT ⚠ : Il n'y a aucun code HTML dans un écran.

Dans le fichier d'une vue, on retrouve la même structure qu'un composant.

- Une méthode `render` qui affiche l'écran a son état initial. Il appelle les méthodes `render` des composants, qui a leur tour appelle les méthodes `render` des sous-composants.

## Le contrôleur de vue
Son rôle est de gérer tout ce qui n'est pas du domaine de l'affichage, notamment :
- L'algorithme du jeu
- La récupération et l'envoi de données à l'API
- ...

C'est lui qui créé et affiche la vue et c'est par son intermédiaire que le contrôleur de l'application interagit sur la vue.
