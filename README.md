# Le jeu de mémoire

Un petit jeu de mémoire sympa où il faut retrouver des paires de cartes dans un temps limité.
Au début du jeu les temps précédents sont listés, alors à toi d'aller plus vite :p !

[![Ecran du jeu](_docs/screenshots/gameBoard.png)](_docs/screenshots/gameBoard.png)

==> Voir toutes les [captures d'écran](_docs/screenshots.md)

## Sommaire

* [Philosophie](#philosophie)
* [Licence](#licence)
* [Stack technique](#stack-technique)
* [Prérequis](#prérequis)
* [Installation](#installation)
* [Guides](HOWTO.md)
* [Algorithme](_docs/algorithme.md)
* [Explications détaillées](explication.md)

## Philosophie
Dans tous mes développements, je suis les principes suivants :

* [KISS](https://wikimonde.com/article/KISS-principe)
* [Unix philosophy](https://wikimonde.com/article/Philosophie_d%27Unix)

## Licence
[GPL : https://fr.wikipedia.org/wiki/Licence_publique_g%C3%A9n%C3%A9rale_GNU
](https://fr.wikipedia.org/wiki/Licence_publique_g%C3%A9n%C3%A9rale_GNU
)

## Stack technique

Frontend
* [Javascript](https://www.javascript.com/)
* [jQuery](https://jquery.com/) : Manipulation du DOM et événements JS
* [SASS](https://sass-lang.com/documentation) : pré compilateur CSS
* [Vitejs](https://vitejs.dev/) : Outils de développement pour frontend
  - Instant server : Rafraichissement automatique de la page
  - Construction des packages pour le déploiement en production
  - Aussi rapide sur les petites que les grosses applications

Backend
* [NodeJS](https://nodejs.org/en/docs/) : Version 16
* [Express](https://expressjs.com/) : Serveur web
* [Ajv](https://ajv.js.org/guide/getting-started.html) : Validation des données en entrée de l'API
* [PostgreSQL](https://www.postgresql.org/) : Base de données 
* [db-migrate](https://db-migrate.readthedocs.io/en/latest/) : Gestionnaire de version de la base de données

Outils communs
* [ESLINT](https://eslint.org/) : Gestion de la syntaxe du code

## Prérequis
### Postgresql
1. Installer PostgreSQL et PgAdmin

[https://www.postgresql.org/download/](https://www.postgresql.org/download/)

2. Créer la base de données

Ouvrir PgAdmin et exécuter cette requête

```sql
CREATE DATABASE resultsdb
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
```

3. Mettre à jour la configuration de la base de données dans `api/.env`

* Modifier le mot de passe pour y mettre celui spécifié lors de l'installation de PostgreSQL.

* Si différent de celui par défaut, modifier le nom d'utilisateur aussi.

## Installation

```bash
cd api
npm install
cd app
npm install
```
