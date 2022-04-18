import jQuery from 'jquery';

import './Footer.scss';

/**
 * @class Footer - Pied de page
 */
export default class Footer {
  /**
   * @constructor
   */
  constructor() {
    this.footerHTMLElement = null;
  }

  /**
   * Ajoute un composant dans le pied de page
   *
   * @param {HTMLElement} htmlElement - Composant à ajouter
   */
  append(htmlElement) {
    this.footerHTMLElement.append(htmlElement);
  }

  /**
   * Génère le code HTML du composant
   *
   * @returns {HTMLElement}
   */
  render() {
    this.footerHTMLElement = jQuery('<footer></footer>')
      .addClass('playZone');

    return this.footerHTMLElement;
  }
}
