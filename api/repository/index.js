const { Client } = require('pg');
const { ResultRepository } = require('./result');

/**
 * @class Repository - Gestion du stockage des données
 */
class Repository {
  /**
   * Constructeur
   * @constructor
   *
   * @param {Object} dbConfig - Configuration de la BDD
   * @param {Model} model - Les modèles de données manipulées par le domaine
   */
  constructor(dbConfig, model) {
    this.model = model;

    // Création de l'instance du client qui va dialoguer avec la base de données
    // C'est à travers lui qu'on va envoyer les requêtes SQL
    this.client = new Client(dbConfig);
    // On dit au client de se connecter (comme un ordinateur se connecte à internet)
    this.client.connect();

    this.resultRepository = new ResultRepository(
      this.client,
      this.model.Result,
    );
  }
}

module.exports = Repository;
