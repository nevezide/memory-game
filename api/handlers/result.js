/* Format des données attendu pour l'entité Result
 * Au format JSON Schema : https://json-schema.org/
*/
const resultSchema = require('./resultSchema.json');

/**
 * @class ResultHandler Point d'entrée des routes /result et /resultList
 */
class ResultHandler {
  /**
   * Constructeur
   * @constructor
   *
   * @param {ResultDomain} resultDomain - Domaine métier qui gère les entités Result
   * @param {Ajv} ajvModule - Module qui gère la validation des données
   *                          à partir d'un schema (voir https://ajv.js.org/)
   */
  constructor(resultDomain, ajvModule) {
    this.resultValidate = ajvModule.compile(resultSchema);
    this.resultDomain = resultDomain;
  }

  /**
   * POST /result handler
   * Route pour péréniser le résultat
   *
   * @param {Request} req - Requête envoyée par le client, reçue par le serveur
   * Les données peuvent être envoyées sous trois formes
   * - req.body   : dans le contenu de la requête
   * - req.params : dans le chemin de l'url de la requête (ex: /result/2)
   * - req.query  : dans les paramètres de l'url de la requête (ex: /result?result=2)
   *
   * @param {Response} res - Réponse du serveur au client (préparée par le serveur)
   */
  postResult = async (req, res) => {
    const userResult = req.body;

    try {
      // Vérification du format des données envoyées par le client
      if (!this.resultValidate(userResult)) {
        // Si les données ne sont pas bien formatées,
        // on répond 400 - Bad Data avec le détail du problème
        res.status(400)
          .send({
            error: 'Le format du résultat est incorrect',
            data: this.resultValidate.errors,
          });
        return;
      }
      // Si les données sont bien formatées,
      // - on délègue la création au domaine
      // - on répond au client avec le result créé, statut 200 - OK
      const createdResult = await this.resultDomain.createResult(userResult.gameTime);
      res.status(200).send(createdResult);
    } catch (error) {
      // En cas d'erreur dans le traitement, on retourne un statut 500 au client
      // On affiche les détails de l'erreur dans le terminal
      // Pour des raisons de sécurité, on donne peu d'informations au client sur l'erreur
      // car seuls les développeurs backend sont concernés par ses informations
      console.log(error);
      res.status(500).send({
        error: 'An error occurs, see server logs',
      });
    }
  };

  /**
   * GET /resultList handler
   * Route pour récupérer la liste des résultats des parties précédentes
   *
   * @param {Request} req - Requête envoyée par le client, reçue par le serveur
   * Les données peuvent être envoyées sous trois formes
   * - req.body   : dans le contenu de la requête
   * - req.params : dans le chemin de l'url de la requête (ex: /result/2)
   * - req.query  : dans les paramètres de l'url de la requête (ex: /result?result=2)
   *
   * @param {Response} res - Réponse du serveur au client (préparée par le serveur)
   */
  getResultList = async (req, res) => {
    try {
      // On délègue la récupération des résultats au domaine
      // On répond au client avec la liste des résultats, statut 200 - OK
      const resultList = await this.resultDomain.getResultList();
      res.status(200).send(resultList);
    } catch (error) {
      // En cas d'erreur dans le traitement, on retourne un statut 500 au client
      // On affiche les détails de l'erreur dans le terminal
      // Pour des raisons de sécurité, on donne peu d'informations au client sur l'erreur
      // car seuls les développeurs backend sont concernés par ses informations
      console.log(error);
      res.status(500).send({
        error: 'An error occurs, see server logs',
      });
    }
  };
}

module.exports = ResultHandler;
