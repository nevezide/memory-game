import jQuery from 'jquery';
import moment from 'moment';

/**
 * @class ResultRow - Une ligne de résultat (du tableau de résultats)
 */
export default class ResultRow {
  /**
   * Constructeur
   * @constructor
   *
   * @param {Date}    date     Date de jeu
   * @param {integer} gameTime Timestamp de la durée de jeu réussi
   */
  constructor(date, gameTime) {
    this.date = date;
    this.gameTime = gameTime;
  }

  /**
   * Génère le code HTML du composant
   *
   * @returns {HTMLElement}
   */
  render() {
    const date = moment(this.date).format('DD/MM/YYYY HH:mm:ss');
    const gameTime = moment(this.gameTime).format('mm:ss.SSS');
    const row = jQuery(
      `<tr><td>${date}</td><td>${gameTime}</td></tr>`,
    ).addClass('rowData');

    return row;
  }
}
