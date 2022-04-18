# Le stockage des données

Le dépôt (repository) gére la pérénisation (ou stockage) des données.
Bien qu'il a des objets en entrée / sortie, il ne les manipule pas (cela est réservé au domaine).
Il se contente de les ajouter / mettre à jour / récupérer de la BDD.

## 🎓 COURS DEBUTANT - SQL

L'objectif du language SQL est de manipuler les données d'une base de données relationnelle.

Soit un classeur Excel ou autre (Libreoffice Calc, ...) composé de feuilles.

* Une base de données relationnelle correspond au classeur qui est composée de TABLES.

* Une `TABLE` correspond à une feuille
Tout comme une feuille, une `TABLE` est faite de
  - colonnes (appelés aussi champs), qui ont chacune un nom
  - lignes qui ont chacune un identifiant

Exemple de `TABLE` :

- Soit une `TABLE` nommée Gateau
- Elle est composée de colonnes nommées forme, couleur, dimension
- Elle contient 3 lignes, chacune correspondant à un gâteau

```
identifiant | forme | couleur | dimension
          1 |  rond |    dore |        20
          2 | carre |   jaune |        30
          3 | carre |    noir |        10
```

### Cas d'usage 1 : Je veux récupérer tous les gâteaux.

Pour se faire, on utilise la requête

```sql
SELECT identifiant, forme, couleur, dimension
  FROM Gateau
```

#### SELECT
Sélectionner les champs que je souhaite
```sql
SELECT <champ1>, <champ2>, ...
```
ou récupérer toutes les colonnes
```sql
SELECT *
```
📝 Note : `*` signifie toutes les colonnes

#### FROM
Dans quelle `TABLE` je veux aller chercher les données
```sql
FROM <table>
```

#### Résultat

```
identifiant | forme | couleur | dimension
          1 |  rond |    dore |        20
          2 | carre |   jaune |        30
          3 | carre |    noir |        10
```

### Cas d'usage 2 : Je veux récupérer la forme des gâteaux

Pour se faire, on utilise la requête

```sql
SELECT identifiant, forme
  FROM Gateau
```

#### Résultat

```
identifiant | forme
          1 |  rond
          2 | carre
          3 | carre
```

### Cas d'usage 3 : Je veux trier les gâteaux par dimension

Pour se faire, on utilise la commande `ORDER BY <nom du champ> ASC ou DESC`
- ASC : Par ordre alpha numérique croissant 0-9A-Z
- DESC : Par ordre alpha numérique décroissant Z-A9-0

```sql
SELECT forme, couleur
  FROM Gateau
 ORDER BY dimension ASC
```

#### Résultat

```
identifiant | forme | couleur | dimension
          3 | carre |    noir |        10
          1 |  rond |    dore |        20
          2 | carre |   jaune |        30
```

### Cas d'usage 4 : Je veux créer un nouveau gâteau

Pour se faire, on utilise la requête

```sql
INSERT INTO <table>(<champ1>, <champ2>)
     VALUES(<valeur champ1>, <valeur champ2>)
RETURNING *
```

#### INSERT INTO
Liste des champs de la table dans lesquels ont veut insérer
```sql
INSERT INTO <table>(<champ1>, <champ2>)
```

Les champs non présents seront automatiquement alimentés par la valeur par défaut ou NULL s'il n'y en a pas.

> ⚠ IMPORTANT ⚠ : Attention aux risques de bug si le champ est obligatoire (`NOT NULL`)

#### VALUES
Valeurs à insérer

```sql
VALUES(<valeur champ1>, <valeur champ2>)
```

Valeurs à ajouter, dans l'ordre respectif des champs déclérés plus haut, cad `<valeur champ1>` ira dans `<champ1>`, `<valeur champ2>` ira dans `<champ2>`

#### RETURNING
Retourne la ligne insérée

```sql
RETURNING <champ1>, <champ2>, ...
```

ou retourner toutes les colonnes

```sql
RETURNING *
```

**📝 NOTE**
`RETURNING *` est une spécificité PosgreSQL (n'existe pas dans MySQL par exemple)

#### Exemple
```sql
INSERT INTO Gateau(forme, couleur, dimension)
     VALUES ("rond", "jaune", 15)
RETURNING *
```

La requête retournera la ligne insérée avec son identifiant généré :

```
identifiant | forme | couleur | dimension
          4 |  rond |   jaune |        15
```
