import moment from 'moment';
import jQuery from 'jquery';

import GameView from './GameView';

/**
 * @class GameControler - Contrôleur de l'écran de jeu
 */
export default class GameControler {
  /**
   * Constructor
   * @constructor
   *
   * @param {integer} cardShownDuration - Durée d'affichage des cartes
   * @param {integer} gameBoardNbRows - Nombre de lignes du plateau de jeu
   * @param {integer} gameBoardNbCols - Nombre de colonnes du plateau de jeu
   * @param {integer} nbUniquePictures - Nombre de motifs uniques (et non le nombre de cartes)
   * @param {integer} gameTimeMilliSeconds - Temps de jeu
   * @param {integer} gameTimeProgressionIntervalMilliSeconds - Intervalle d'écoulement du temps
   * @param {integer} postResultUrl - URL d'envoi des résultats au backend
   */
  constructor(
    cardShownDuration,
    gameBoardNbRows,
    gameBoardNbCols,
    nbUniquePictures,
    gameTimeMilliSeconds,
    gameTimeProgressionIntervalMilliSeconds,
    postResultUrl,
  ) {
    this.cardShownDuration = cardShownDuration;
    this.gameBoardNbRows = gameBoardNbRows;
    this.gameBoardNbCols = gameBoardNbCols;
    this.nbUniquePictures = nbUniquePictures;
    this.gameTimeMilliSeconds = gameTimeMilliSeconds;
    this.gameTimeProgressionIntervalMilliSeconds = gameTimeProgressionIntervalMilliSeconds;
    this.postResultUrl = postResultUrl;

    this.gameView = null;

    this.nbFoundPairs = 0;// Nombre de paires déjà trouvées
    this.shownCardPair = [];// La paire que le joueur est en train de chercher
  }

  /**
   * Appelé lorsqu'un résultat à été envoyé avec succès au backend
   *
   * @param {Result} result - Résultat retourné par l'API suite à sa demande d'ajout
   */
  onPostResultSuccess = (result) => {
    // Affiche un message de félicitations au joueur qui a réussi
    // à trouver les paires dans le temps imparti
    const gameTime = moment(result.gameTime).format('mm:ss.SSS');
    this.gameView.showMessage(
      `Tu as réussi en ${gameTime} minutes :)`,
    );
  };

  /**
   * Appelé lorsqu'un résultat n'a pas pu être envoyé au backend
   *
   * @param {String} error - Contenu de l'erreur envoyé par le backend
   */
  onPostResultFail = (error) => {
    console.log(error);

    // S'il y a eu une erreur lors de l'envoi du résultat au serveur
    this.gameView.showMessage(
      'Le résultat n\'a pas pu être envoyé au serveur :(',
    );
  };

  /**
   * Processus exécuté lorsque le joueur a gagné
   */
  userWins() {
    // Arrête le timer de progression du jeu
    const gameTime = this.gameView.stopGame();

    // Envoi du résultat au backend
    jQuery.ajax({
      type: 'POST',
      url: this.postResultUrl,
      data: JSON.stringify({
        gameTime,
      }),
      success: this.onPostResultSuccess,
      error: this.onPostResultFail,
      contentType: 'application/json',
    });
  }

  /**
   * Appelé lorsque le joueur clique sur une carte
   *
   * @param {JSEvent} event - Contenu de l'event JS
   * @param {Card} card - Contenu de la carte qui a été cliquée
   * @returns void
   */
  onCardClick = (event, card) => {
    // S'il y a une paire de cartes affichée,
    // empêche qu'il y en ai d'autres d'affichées
    if (this.shownCardPair.length > 1) {
      return;
    }

    this.shownCardPair.push(card);
    card.show();

    // Une seconde carte est retournée
    if (this.shownCardPair.length === 2) {
      const firstCard = this.shownCardPair[0];
      this.shownCardPair.length = 0;

      // Si les cartes de la paire sont identiques
      if (firstCard.pictureId === card.pictureId) {
        this.nbFoundPairs += 1;

        firstCard.disableClick();
        card.disableClick();

        // Si le joueur a trouvé toutes les paires
        if (this.nbFoundPairs === this.nbUniquePictures) {
          this.userWins();
        }
        return;
      }

      // Si les cartes de la paires sont différentes
      firstCard.hide(this.cardShownDuration);
      card.hide(this.cardShownDuration);
    }
  };

  /**
   * Trie aléatoirement un tableau
   *
   * @param {[*]} arrayToShuffle - Tableau à trier
   * @returns {[*]} Tableau trié aléatoirement
   */
  // eslint-disable-next-line class-methods-use-this
  shuffleArray(arrayToShuffle) {
    const shuffledArray = arrayToShuffle;

    for (let i = arrayToShuffle.length; i > 0; i -= 1) {
      const currentIndex = Math.floor(Math.random() * i);
      const currentValue = arrayToShuffle[currentIndex];
      shuffledArray[currentIndex] = arrayToShuffle[i - 1];
      shuffledArray[i - 1] = currentValue;
    }

    return arrayToShuffle;
  }

  /**
   * Créé la liste des paires de motifs
   * Exemple : [14,1,14,3,4,3,...]
   *
   * @returns {[integer]} Liste des paires de motifs triés aléatoirement
   */
  createPictureList() {
    const pictureList = [];
    for (let i = 0; i < this.nbUniquePictures; i += 1) {
      pictureList.push(i + 1);
    }
    // pictureList = [1,2,3,...]
    pictureList.push(...pictureList);
    // pictureList = [1,2,3,...,1,2,3,...]
    return this.shuffleArray(pictureList);
    // pictureList est trié aléatoirement, exemple : [14,1,14,3,4,3,...]
  }

  /**
   * Créé, affiche et démarre le jeu
   */
  startGame() {
    const pictureList = this.createPictureList();
    this.gameView = new GameView(
      pictureList,
      this.gameBoardNbRows,
      this.gameBoardNbCols,
      this.gameTimeMilliSeconds,
      this.gameTimeProgressionIntervalMilliSeconds,
      this.onCardClick,
    );
    this.gameView.render();
    this.gameView.startGame();
  }
}
