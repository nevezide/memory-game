const ResultDomain = require('./result');

/**
 * @class Domain - Domaine métier
 */
class Domain {
  /**
   * Constructeur
   * @constructor
   *
   * @param {Domain} repositories - Injection du repo
   * @param {Model} model - Injection du modèle
   */
  constructor(repositories, model) {
    this.model = model;
    this.resultDomain = new ResultDomain(repositories.resultRepository, model.Result);
  }
}

module.exports = Domain;
