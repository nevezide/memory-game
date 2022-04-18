# HOWTO

## Sommaire

* [Configurer l'environnement pour le développement](#configurer-lenvironnement-pour-le-développement)
* [Gérer la structure de la base de données](#gérer-la-structure-de-la-base-de-données)
* [Préparer la mise en production](#préparer-la-mise-en-production)

## Configurer l'environnement pour le développement
### Vérification du style de code
Un code est plus souvent lu que écrit, c'est important d'avoir une syntaxe commune.
Pour se faire, plusieurs conventions existent (pour ma part j'utilise celle de airbnb, par habitude de mon XP chez iadvize)

[ESLINT](https://eslint.org/) est l'outil le plus populaire pour se faire (il y a JSHINT aussi ^^).

#### A faire
- Installer le plugin ESLINT dans l'IDE pour vérifier la syntaxe du code pendant l'édition
- Pour corriger automatiquement les erreurs de syntaxe, dans tout un projet, saisir la commande :
```bash
cd <app ou api>
npm run eslint
```

### Lancer l'API en mode développement
C'est très pratique lorsqu'on modifie le code que le serveur redémarre automatiquement.
Pour se faire, j'utilise l'outil `nodemon` : [https://github.com/remy/nodemon#nodemon](https://github.com/remy/nodemon#nodemon)

#### A faire
- Ouvrir un premier terminal pour lancer le backend, via la commande :
```bash
cd api
npm run api:dev
```

Cette commande va
-- mettre à jour la base de données avec les scripts de migration
-- lancer nodemon

### Lancer l'application frontend en mode développement
C'est très pratique lorsqu'on modifie le code javascript ou le CSS que la page dans le navigateur se rafraichi automatiquement.
Pour se faire, j'utilise `vitejs`: [https://vitejs.dev/](https://vitejs.dev/).

#### A faire
- Ouvrir un second terminal pour lancer le frontend, via la commande :

```bash
cd app
npm run front:dev
```

## Gérer la structure de la base de données
### Créer un script de migration
Par exemple pour créer ou mettre à jour une table

```bash
db-migrate create <nom migration> --sql-file
```

Dans /migrations/sql deux ficheirs sql ont été générés
- Un finissant par `up` : C'est ici qu'on met notre script SQL pour mettre à jour la structure
- Un finissant par `down` : Ici on met un script SQL pour revenir en arrière

> ⚠ IMPORTANT ⚠ : L'état de la BDD doit toujours correspondre à la version de l'application, en cas de rollback de celle-ci si elle dysfonctionne une fois en production

### Migrer la version de la base de données

Nouvelle version

```bash
db-migrate up
```

Retour à une version antérieure
```bash
db-migrate down
```

## Préparer la mise en production
TODO
