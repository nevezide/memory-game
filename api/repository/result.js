/**
 * @class ResultRepository - Repo des objets Result
 */
class ResultRepository {
  /**
   * Constructeur
   * @constructor
   *
   * @param {Postgres Client} client - Client de la BDD
   * @param {Result} model - Modèle de données de type Result
   */
  constructor(client, resultModel) {
    this.client = client;
    this.Result = resultModel;
  }

  /**
   * Insert en base un résultat
   *
   * @param {Result} result without identifier
   *
   * @returns {Result} with identifier
   */
  createResult = async (result) => {
    // Pour éviter l'injection de code SQL (Voir https://www.w3schools.com/sql/sql_injection.asp)
    // On ne concatène JAMAIS les variables avec le texte de la requête
    // A la place, on utilise les paramètres SQL
    const query = 'INSERT INTO results(date, "gameTime") VALUES($1, $2) RETURNING *';
    const values = [result.date, result.gameTime];

    const queryResult = await this.client.query(
      query,
      values,
    );

    // On attend qu'une seule ligne vu qu'on en a inséré qu'une seule
    const row = queryResult.rows[0];

    return new this.Result(row.date, row.gameTime, row.id);
  };

  /**
   * Récupère la liste des résultats
   *
   * @returns {[Result]}
   */
  getResultList = async () => {
    const queryResult = await this.client.query(
      'SELECT * FROM results ORDER BY date DESC',
    );

    return queryResult.rows.map(
      (row) => new this.Result(row.date, row.gameTime, row.id),
    );
  };
}

module.exports = { ResultRepository };
