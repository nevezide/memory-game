// Ajv : Module qui gère la validation des données
// à partir d'un schema (voir https://ajv.js.org/)
const Ajv = require('ajv');

const ResultHandler = require('./result');

/**
 * @class Handlers - Points d'entrée des routes de l'API
 */
class Handlers {
  /**
   * Constructeur
   * @constructor
   *
   * @param {Domain} domain - Injection du domaine métier
   */
  constructor(domain) {
    this.ajv = new Ajv();
    this.resultHandler = new ResultHandler(
      domain.resultDomain,
      this.ajv,
    );
  }
}

module.exports = Handlers;
