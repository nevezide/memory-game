import jQuery from 'jquery';

import './Header.scss';

/**
 * @class Header - Entête de page
 */
export default class Header {
  /**
   * @constructor
   */
  constructor() {
    this.title = 'Le jeu de mémoire';
  }

  /**
   * Génère le code HTML du composant
   *
   * @returns {HTMLElement}
   */
  render() {
    return jQuery(`<header>${this.title}</header>`);
  }
}
