import jQuery from 'jquery';

import './ProgressBar.scss';

/**
 * @class ProgressBar - Gestion du temps de jeu et sa progression
 */
export default class ProgressBar {
  /**
   * Constructeur
   * @constructor
   *
   * @param {integer} gameTimeMilliSeconds - Timestamp : Temps de jeu
   * @param {integer} gameTimeProgressionIntervalMilliSeconds - Timestamp :
   *        Intervalle de progression du temps
   * @param {function} onTimeOver - Evenement déclenché lorsque le temps de jeu est atteint
   *
   */
  constructor(
    gameTimeMilliSeconds,
    gameTimeProgressionIntervalMilliSeconds,
    onTimeOver,
  ) {
    this.gameTimeMilliSeconds = gameTimeMilliSeconds;
    this.gameTimeProgressionIntervalMilliSeconds = gameTimeProgressionIntervalMilliSeconds;
    this.gameTimeProgression = 0;
    this.progressBarHTMLElement = null;
    this.onTimeOver = onTimeOver;
    this.timer = null;
  }

  /**
   * Stoppe la progression du jeu et retourne le temps écoulé
   *
   * @returns {integer} Timestamp du temps écoulé
   */
  stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    return this.gameTimeProgression;
  }

  /**
   * Démarre le temps de jeu
   */
  startTimer() {
    // Utilise un timer infini avec un intervalle déterminé par
    // gameTimeProgressionIntervalMilliSeconds
    this.timer = setInterval(() => {
      // A chaque tic d'intervalle :
      // - la progression du temps est mise à jour
      this.gameTimeProgression += this.gameTimeProgressionIntervalMilliSeconds;
      // - l'affichage de la barre de progression est rafraichi
      this.progressBarHTMLElement.val(
        Math.floor((this.gameTimeProgression * 100) / this.gameTimeMilliSeconds),
      );
      // - si la progression est égale ou dépasse la temps de jeu
      if (this.gameTimeProgression >= this.gameTimeMilliSeconds) {
        // On stoppe le timer
        this.stopTimer();
        // On déclenche l'événement "Temps de jeu atteint"
        this.onTimeOver();
      }
    }, this.gameTimeProgressionIntervalMilliSeconds);
  }

  /**
   * Génère le code HTML du composant
   *
   * @returns {HTMLElement}
   */
  render() {
    this.progressBarHTMLElement = jQuery('<progress max="100" value="0"></progress>');
    return this.progressBarHTMLElement;
  }
}
