import jQuery from 'jquery';

import './Card.scss';

/**
 * @class Card - Une carte contenant un motif
 */
export default class Card {
  /**
   * Constructeur
   * @constructor
   *
   * @param {integer} pictureId - Numéro du motif de la carte
   * @param {function} onClick - Evénement déclenché lorsque
   *        l'utilisateur clique sur la carte
   */
  constructor(pictureId, onClick) {
    this.pictureId = pictureId;
    this.onClick = onClick;
    this.cardHTMLElement = null;
    this.imageHTMLElement = null;
  }

  /**
   * Affiche la carte
   */
  show() {
    this.imageHTMLElement.fadeIn(0);
  }

  /**
   * Masque la carte
   *
   * @param {integer} fadeDuration - Durée d'affichage des cartes
   */
  hide(fadeDuration) {
    this.imageHTMLElement.fadeOut(fadeDuration);
  }

  /**
   * Désactive le clic sur une carte
   */
  disableClick() {
    this.cardHTMLElement.off('click');
  }

  /**
   * Génère le code HTML du composant
   *
   * @returns {HTMLElement}
   */
  render() {
    // On masque le motif de la carte au début du jeu
    this.imageHTMLElement = jQuery('<div></div>')
      .addClass('picture')
      .addClass(`picture${this.pictureId}`)
      .fadeOut(0);

    this.cardHTMLElement = jQuery('<td></td>')
      .addClass('card')
      .append(this.imageHTMLElement)
      .on('click', (event) => this.onClick(event, this));

    return this.cardHTMLElement;
  }
}
