import jQuery from 'jquery';

import './MessageBar.scss';

/**
 * @class MessageBar - Barre d'affichage des messages
 */
export default class MessageBar {
  /**
   * Constructeur
   * @constructor
   */
  constructor() {
    this.messageBarHTMLElement = null;
    this.messageSpanHTMLElement = null;
  }

  /**
   * Affiche un message
   *
   * @param {string} message - Message à afficher
   */
  showMessage(message) {
    if (this.messageSpanHTMLElement) {
      this.messageSpanHTMLElement.text(message);
      this.messageBarHTMLElement.show();
    }
  }

  /**
   * Génère le code HTML du composant
   *
   * @returns {HTMLElement}
   */
  render() {
    this.messageSpanHTMLElement = jQuery('<span></span>')
      .addClass('message');
    this.messageBarHTMLElement = jQuery('<div></div>')
      .addClass('messageBar')
      .append(this.messageSpanHTMLElement)
      .hide();

    return this.messageBarHTMLElement;
  }
}
