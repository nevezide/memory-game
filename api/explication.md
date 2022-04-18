# L'API

## Structure (par ordre d'appel)

| Elément | Description                     |
| ------- | ------------------------------- |
| `.env` | Contient la configuration de l'API. C'est ce fichier qui est utilisé par l'administration système (ex: Docker)<br /><br />**📝 NOTE**: Pour utiliser l'outil `db-migrate`, il impose de mettre la configuration de la BDD dans un fichier `database.json`. |
| `/config` | Contient 2 fichiers de configuration :<br />- `database.json` : Celui de la base de données imposé par l'outil `db-migrate`.<br />- `config.js` : Celui de l'API, alimenté par le contenu du `.env`, qui inclu également le contenu de `database.json` |
| `index.js` | Point d'entrée de l'API. Injecte la configuration `config.js` à l'API |
| `api.js` | L'API : création, configuration et initialisation |
| `/handlers` | [Les contrôleurs de route](handlers/explication.md) |
| `/domain` | [Le domaine métier](domain/explication.md) |
| `/model` | [Le modèle](model/explication.md) |
| `/repository` | [Le stockage](repository/explication.md) |
| `/migrations`  | Contient les scripts de création et de mise à jour de la structure de la BDD. <br /><br />Ils sont exécutés par l'outil db-migrate (voir [HOWTO](../HOWTO.md) pour plus d'informations) |
| `.eslintrc.json`  | Configuration de la gestion du style de code.<br /><br />Un code est plus souvent lu que écrit, c'est important d'avoir une syntaxe commune.<br />Pour se faire plusieurs conventions existent (pour ma part j'utilise celle de airbnb, par habitude de mon XP chez iadvize)<br />Voir [HOWTO](../HOWTO.md) pour plus d'informations |
| `.eslintignore`  | Fichiers et dossiers ignorés dans la gestion du style de code |
| `package.json`  | C'est ici que se trouve les informations publiques de l'application (licence, auteur, ...), ainsi que les dépendances (voir npm package pour plus d'informations) |
| `package-lock.json`  | Sert à bloquer les versions de l'arbre de dépendances (dépendances et leurs sous-dépendances).<br />Sert à prévenir le cas où une nouvelle version d'une sous-dépendance (qui évolue indépendamment de notre volonté) pose problème.<br />Ainsi, on s'assure de rester à la version initiale (celle qu'on avait lorsqu'on a ajouté la dépendance dans package.json).<br />Il est géré automatiquement par npm lorsque qu'on ajoute / met à jour une dépendance. |

## Comment se passe un appel à l'API ?

1. Le client appele l'API (exemple : GET `http://localhost:3000/resultList`)

2. Le handler (contrôleur de route) est appelée avec 2 objets :
- `req` : La requête envoyée par le client
- `res` : La réponse envoyée au client

3. Le handler
- vérifie les données envoyées par le client
- appelle le domaine pour traiter la requête, avec éventuellement des paramètres issus de `req`

4. Le domaine traite l'information
- éventuellement, il interagit avec le repository pour récupérer / envoyer des données depuis / vers la BDD

5. Le repository interroge la BDD avec le language SQL sous les ordres du domaine

6. Le flux part dans l'autre sens : le repository répond au domaine qui répond au handler

7. Le handler envoie la réponse au client, via l'objet `res`
