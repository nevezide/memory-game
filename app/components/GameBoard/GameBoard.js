import jQuery from 'jquery';
import Card from './Card';

import './GameBoard.scss';

/**
 * @class GameBoard - Composant du plateau de jeu,
 *        contenant les cartes à motif
 */
export default class GameBoard {
  /**
   * Constructeur
   * @constructor
   *
   * @param {Array of integer} randomPictureList - Liste des paires de motifs
   *        triés aléatiorement (liste de leurs identifiants)
   */
  constructor(
    randomPictureList,
    gameBoardNbRows,
    gameBoardNbCols,
    onCardClick,
  ) {
    this.randomPictureList = randomPictureList;
    this.gameBoardNbRows = gameBoardNbRows;
    this.gameBoardNbCols = gameBoardNbCols;
    this.cards = [];
    this.onCardClick = onCardClick;

    // On vérifie que les paramètres nbre lignes * nbre colonnes
    // correspond bien au nombre de motifs présents dans la liste
    // Il doit y avaoir un motif par case du tableau de jeu
    const pictureCount = randomPictureList.length;
    if (pictureCount !== gameBoardNbRows * gameBoardNbCols) {
      throw new Error(
        `Game board has ${gameBoardNbRows} rows and ${gameBoardNbCols} but ${pictureCount} pictures`,
      );
    }
  }

  /**
   * Affiche toutes les cartes et désactive le clic
   */
  showAndDisableCards() {
    this.cards.forEach((card) => {
      card.show();
      card.disableClick();
    });
  }

  /**
   * Génère le code HTML du composant
   *
   * @returns {HTMLElement}
   */
  render() {
    const boardHTMLElement = jQuery('<table></table>')
      .addClass('gameBoard');

    for (let i = 1; i <= this.gameBoardNbRows; i += 1) {
      const rowHTMLElement = jQuery('<tr></tr>');
      boardHTMLElement.append(rowHTMLElement);

      for (let j = 1; j <= this.gameBoardNbCols; j += 1) {
        const randomPictureListIndex = this.gameBoardNbCols * (i - 1) + (j - 1);
        const pictureId = this.randomPictureList[randomPictureListIndex];

        const card = new Card(pictureId, this.onCardClick);
        this.cards.push(card);
        rowHTMLElement.append(card.render());
      }
    }

    return boardHTMLElement;
  }
}
