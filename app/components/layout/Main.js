import jQuery from 'jquery';

import './Main.scss';

/**
 * @class Main - Corps de page
 */
export default class Main {
  /**
   * @constructor
   */
  constructor() {
    this.mainHTMLElement = null;
  }

  /**
   * Ajoute un composant au début du pied de page
   *
   * @param {HTMLElement} htmlElement - Composant à ajouter
   */
  prepend(htmlElement) {
    this.mainHTMLElement.prepend(htmlElement);
  }

  /**
   * Ajoute un composant dans le pied de page
   *
   * @param {HTMLElement} htmlElement - Composant à ajouter
   */
  append(htmlElement) {
    this.mainHTMLElement.append(htmlElement);
  }

  /**
   * Génère le code HTML du composant
   *
   * @returns {HTMLElement}
   */
  render() {
    this.mainHTMLElement = jQuery('<main></main>')
      .addClass('playZone');

    return this.mainHTMLElement;
  }
}
