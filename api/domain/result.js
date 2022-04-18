/**
 * @class ResultDomain - Domaine métier
 */
class ResultDomain {
  /**
   * Constructeur
   * @constructor
   *
   * @param {ResultRepository} resultRepository Repo des objets Result
   * @param {Result} resultModel Modèle de données de type Result
   */
  constructor(resultRepository, resultModel) {
    this.resultRepository = resultRepository;
    this.Result = resultModel;
  }

  /**
   * Création d'un résultat
   *
   * @param {integer} gameTime - Timestamp correspondant à la durée qu'à mis le joueur
   *
   * @returns {Result} Résultat créé avec son identifiant
   */
  createResult = (gameTime) => this.resultRepository.createResult(new this.Result(
    new Date(),
    gameTime,
  ));

  /**
   * Récupération de la liste des résultats
   *
   * @returns {[Result]} Liste des résultats
   */
  getResultList = () => this.resultRepository.getResultList();
}

module.exports = ResultDomain;
