import jQuery from 'jquery';
import ResultRow from './ResultRow';
import NoResult from './NoResult';

import './ResultList.scss';

/**
 * @class ResultList - Une ligne de résultat (du tableau de résultats)
 */
export default class ResultList {
  /**
   * Constructeur
   * @constructor
   *
   * @param {Array of Result} resultsList - Liste des résultats
   */
  constructor(resultsList) {
    this.resultsList = resultsList || [];
  }

  /**
   * Génère le code HTML du composant
   *
   * @returns {HTMLElement}
   */
  render() {
    // Si pas de résultats à afficher, on affiche un message
    if (this.resultsList.length === 0) {
      const noResult = new NoResult();
      return noResult.render();
    }

    // Création de la liste
    const table = jQuery('<table></table>')
      .addClass('result-list');

    // Entête de la liste avec le nom des colonnes
    const tableHeadDate = jQuery(
      '<th>Date</th>',
    ).addClass('columnHeadName');
    const tableHeadResult = jQuery(
      '<th>Résultat</th>',
    ).addClass('columnHeadName');
    const tableHeadRow = jQuery('<tr></tr>')
      .append(tableHeadDate)
      .append(tableHeadResult);
    const tableHead = jQuery('<thead></thead>')
      .append(tableHeadRow);

    // Corps de la liste, qui contiendra les lignes de résultats
    const tableBody = jQuery('<tbody></tbody>');

    // Création des lignes de résultats
    this.resultsList.forEach((result) => {
      const row = new ResultRow(
        result.date,
        result.gameTime,
      );
      tableBody.append(row.render());
    });

    table.append(tableHead);
    table.append(tableBody);

    return table;
  }
}
