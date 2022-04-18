class Result {
  /**
   * Constructeur
   * @constructor
   *
   * @param {Date} date - Date d'envoi du résulat
   * @param {Integer} gameTime - Timestamp correspondant au temps que le joueur à mis
   * @param {UUID} id - Identifiant de l'objet
   */
  constructor(date, gameTime, id) {
    this.date = date;
    this.gameTime = gameTime;
    this.id = id || '';
  }
}

module.exports = { Result };
