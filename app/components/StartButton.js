import jQuery from 'jquery';

import './StartButton.scss';

/**
 * @class StartButton - Bouton pour démarrer le jeu
 */
export default class StartButton {
  /**
   * Constructeur
   * @constructor
   *
   * @param {function} onclick - Evénement déclenché lors du clic sur le bouton
   */
  constructor(onClick) {
    this.onClick = onClick;
  }

  /**
   * Génère le code HTML du composant
   *
   * @returns {HTMLElement}
   */
  render() {
    return jQuery('<button></button>')
      .addClass('start-button')
      .text('Commencer le jeu')
      .on('click', this.onClick);
  }
}
