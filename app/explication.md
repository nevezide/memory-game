# L'application

Elle est basée sur l'approche composants (inspiré par React) et vue / contrôleur.

## Structure (par ordre d'appel)

| Elément | Description                     |
| ------- | ------------------------------- |
| `index.html`  | Structure de la page web qui va reçevoir l'application. C'est d'ici que le navigateur part pour charger l'application. |
| `index.js`  | Point d'entrée de l'application. Injecte la configuration dans l'Application |
| `.env`  | contient la configuration de l'application c'est ce fichier qui est utilisé par l'administration système (ex: Docker) |
| `config.js`  | gère la configuration de l'API : à partir du .env, il retourne un Object qui est injecté dans l'application. |
| `Application.js`  | Contrôleur de l'application. Gère les écrans à travers leurs contrôleurs respectifs. |
| `/components`  | [Les composants](components/explication.md) |
| `/screens`  | [Les écrans](screens/explication.md) |
| `.eslintrc.json`  | Configuration de la gestion du style de code.<br /><br />Un code est plus souvent lu que écrit, c'est important d'avoir une syntaxe commune.<br />Pour se faire plusieurs conventions existent (pour ma part j'utilise celle de airbnb, par habitude de mon XP chez iadvize)<br />Voir [HOWTO](../HOWTO.md) pour plus d'informations |
| `.eslintignore`  | Fichiers et dossiers ignorés dans la gestion du style de code |
| `package.json`  | C'est ici que se trouve les informations publiques de l'application (licence, auteur, ...), ainsi que les dépendances (voir npm package pour plus d'informations) |
| `package-lock.json`  | Sert à bloquer les versions de l'arbre de dépendances (dépendances et leurs sous-dépendances).<br />Sert à prévenir le cas où une nouvelle version d'une sous-dépendance (qui évolue indépendamment de notre volonté) pose problème.<br />Ainsi, on s'assure de rester à la version initiale (celle qu'on avait lorsqu'on a ajouté la dépendance dans package.json).<br />Il est géré automatiquement par npm lorsque qu'on ajoute / met à jour une dépendance. |

## Comment se passe l'initialisation de l'application ?

1. Le joueur tape dans son navigateur l'url de l'application, exemple `http://localhost:3000`

2. Le serveur web qui héberge l'application retourne le fichier `index.html`

3. Le navigateur va charger les fichiers extérieurs à `index.html`. Ici `index.js` (avec la compilation des autres fichiers JS) et l'ensemble des CSS compilés en un seul fichier.

4. Exécution du script `index.js` : instanciation de l'application et initialisation

Appel de la méthode `Application.init()`

5. Instanciation du contrôleur de l'écran et appel de son point d'entrée

Exemple : `ResultListControler.startGame()`

6. Affichage de l'écran

Appel de la méthode render() de l'écran qui à son tour appelle les méthode render() des composants que le compose.
