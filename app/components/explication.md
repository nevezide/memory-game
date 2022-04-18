# Composants de l'application
Ils sont les briques de base d'une application.
On a deux types de composants :
- Simple : indissociables, ils sont les plus petites briques
- Complexes : composition de composants dont ils gèrent leurs interactions.

Pour réaliser les composants, je me suis inspiré d'un principe de React : séparer la partie statique de la partie dynamique.
Cela permet aux étudiants novice d'adoper une première bonne pratique avant d'apprendre React.

Le composant est découpé en 2 fichiers :

1. Un fichier JS avec le contenu du composant

Il est composé de 3 parties :

- Un constructeur
Alimentation des propriétés du composant.

- Méthode `render` : Partie HTML statique
Contient le code HTML initial du composant.
Elle est appelée en premier au moment de l'affichage de l'application.

> ⚠ IMPORTANT ⚠ : Cette méthode ne doit contenir aucune dynamique d'affichage.

- Dynamique d'affichage
La dynamique d'affichage consiste à manipuler les éléments HTML du composant en fonction, par exemple, des interactions de l'utilisateur avec l'application (ou encore d'événements extérieurs à l'application, de timers, ...).
Ce sont des méthodes appelées (directement ou indirectement) lors de déclenchement d'événements JS (ex: onClick).

2. Un fichier de style `.scss` avec le style du composant

Ce fichier est importé dans le fichier JS du composant
