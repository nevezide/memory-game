import jQuery from 'jquery';

import Header from '../../components/layout/Header';
import Main from '../../components/layout/Main';
import Footer from '../../components/layout/Footer';

import GameBoard from '../../components/GameBoard/GameBoard';
import MessageBar from '../../components/MessageBar';
import ProgressBar from '../../components/ProgressBar';

/**
 * @class GameView - Vue de l'écran du plateau de jeu
 */
export default class GameView {
  /**
   * Constructor
   * @constructor
   *
   * @param {[integer]} randomPictureList - Liste des paires de motifs
   * @param {integer} gameBoardNbRows - Nombre de lignes du plateau de jeu
   * @param {integer} gameBoardNbCols - Nombre de colonnes du plateau de jeu
   * @param {integer} gameTimeMilliSeconds - Temps de jeu
   * @param {integer} gameTimeProgressionIntervalMilliSeconds - Intervalle d'écoulement du temps
   * @param {function} onCardClick - Handler du clic sur une carte
   */
  constructor(
    randomPictureList,
    gameBoardNbRows,
    gameBoardNbCols,
    gameTimeMilliSeconds,
    gameTimeProgressionIntervalMilliSeconds,
    onCardClick,
  ) {
    this.Header = new Header();
    this.Main = new Main();
    this.Footer = new Footer();
    this.GameBoard = new GameBoard(
      randomPictureList,
      gameBoardNbRows,
      gameBoardNbCols,
      onCardClick,
    );
    this.ProgressBar = new ProgressBar(
      gameTimeMilliSeconds,
      gameTimeProgressionIntervalMilliSeconds,
      this.onGameTimeOver,
    );
    this.MessageBar = new MessageBar();
  }

  /**
   * Appelée lorsque le temps de jeu est atteint
   */
  onGameTimeOver = () => {
    // Affiche et Désactive le clic sur toutes les cartes
    this.GameBoard.showAndDisableCards();

    // Affiche le message "Temps écoulé"
    this.showMessage(
      'Le temps imparti s\'est écoulé :(',
    );
  };

  /**
   * Démarre le jeu
   */
  startGame() {
    this.ProgressBar.startTimer();
  }

  /**
   * Stoppe le jeu
   *
   * @returns {integer} Timestamp du temps écoulé
   */
  stopGame() {
    return this.ProgressBar.stopTimer();
  }

  /**
   * Affiche un message dans la barre
   *
   * @param {String} message - Message affiché dans la barre
   */
  showMessage(message) {
    this.MessageBar.showMessage(message);
  }

  /**
   * Génère le code HTML du composant
   *
   * @returns {HTMLElement}
   */
  render() {
    jQuery('body')
      .empty()
      .prepend(this.Header.render())
      .append(this.Main.render())
      .append(this.Footer.render());

    this.Main.append(this.GameBoard.render());
    this.Main.prepend(this.MessageBar.render());
    this.Footer.append(this.ProgressBar.render());
  }
}
