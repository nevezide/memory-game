# Le modèle

Le modèle correspond aux objets manipulées par le domaine.

> ⚠ IMPORTANT ⚠ Principe de séparation des responsabilités : Seul le domaine manipule les entités


## 🎓 COURS DEBUTANT - Programmation orientée objet
Prenons un moule à gâteau : il a une forme, une couleur, une dimension.

Avec ce moule on créé des gâteaux, chaque gâteau est unique et on peut y ajouter des éléments comme des bougies, des décorations de Noël, ...

En programmation objet, le moule s'appelle `class` qui porte un nom et les propriétés qui définnissent le gâteau :

```javascript
class Gateau {
  forme,
  couleur,
  dimension
}
```

Et le gâteau s'appelle un objet, représenté par un ensemble d'accolades, contenant les propriétés uniques du gâteau :

```json
{
  forme: "ronde",
  couleur: "doré",
  dimension: 20
}
```

Pour contruire un gâteau, nous avons aussi besoin d'une recette à suivre (indiquant comment construire le gâteau), appelée `constructor` en programmation objet.
Il prend les ingrédients (appelés propriétés) et construit le gâteau (l'objet).

```javascript
class Gateau {
  constructor(forme, couleur, dimension) {
    this.forme = forme,
    this.couleur = couleur,
    this.dimension = dimension
  }
}
```

Et pour créer un gâteau, on appelle le constructeur du moule avec le mot clé `new`

```javascript
const gateau1 = new Gateau("ronde", "doré", 20);

// console.log(gateau1) donne :
{
  forme: "ronde",
  couleur: "doré",
  dimension: 20
}

const gateau2 = new Gateau("carré", "jaune", 30);
// console.log(gateau2) donne :
{
  forme: "carré",
  couleur: "jaune",
  dimension: 30
}
```

Et petite magie, en javascript, on peut ajouter des propriétés à un objet (Pratique pour debug, en revanche très déconseillé car va poser des problèmes de cohérence)

```javascript
gateau1.deco = "noel"

// console.log(gateau1) donne :
{
  forme: "ronde",
  couleur: "doré",
  dimension: 20,
  deco: "noel"
}

// console.log(gateau2) donne :
{
  forme: "carré",
  couleur: "jaune",
  dimension: 30
}
```
