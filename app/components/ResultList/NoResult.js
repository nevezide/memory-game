import jQuery from 'jquery';

import './NoResult.scss';

/**
 * @class NoResult - Pas de résultats de jeux précédents à afficher
 */
export default class NoResult {
  /**
   * Génère le code HTML du composant
   *
   * @returns {HTMLElement}
   */
  // eslint-disable-next-line class-methods-use-this
  render() {
    return jQuery('<div></div>')
      .addClass('no-result')
      .text('Pas de résultats, à toi de jouer !');
  }
}
