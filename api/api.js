const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const model = require('./model');
const Domain = require('./domain');
const Handlers = require('./handlers');
const Repository = require('./repository');

/**
 * @class Api
 */
class Api {
  /**
   * Constructeur
   * @constructor
   *
   * @param {Express Application} server - Instance du serveur web
   */
  constructor(config) {
    this.config = config;
    this.model = model;
    this.repositories = new Repository(this.config.db, this.model);
    this.domain = new Domain(this.repositories, this.model);
    this.handlers = new Handlers(this.domain);
    this.server = null;
  }

  /**
   * Initialisation de l'API
   */
  init = () => {
    // Création de l'instance du serveur web
    this.server = express();
    // Autorise l'URL du frontend à appeler l'API du backend
    // (le frontend et le backend ayant chacun leur serveur, gérer par vitejs)
    // IMPORTANT : Doit être déclaré avant la déclaration des routes de l'API
    // (sinon ne sera pas pris en compte)
    this.server.use(cors({
      origin: this.config.corsOriginAllowed,
    }));
    // Ajoute le module pour dire au serveur de gérer
    // les données envoyées par le client au format JSON
    this.server.use(bodyParser.json());
    // Déclaration des routes de l'API au serveur
    this.server.get(
      '/resultList',
      this.handlers.resultHandler.getResultList,
    );
    this.server.post(
      '/result',
      this.handlers.resultHandler.postResult,
    );
    // Le serveur va écouter les requêtes arrivant sur le port spécifié
    // C'est à partir de ce moment que le serveur est disponible, en ligne
    this.server.listen(this.config.apiPort, () => {
      console.log(
        `Web server listening on port ${this.config.apiPort}`,
      );
    });
  };
}

module.exports = Api;
