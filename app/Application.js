import GameControler from './screens/GameScreen/GameControler';
import ResultListControler from './screens/ResultListScreen/ResultListControler';

/**
 * @class Application
 */
export default class Application {
  /**
   * Constructor
   * @constructor
   *
   * @param {Object} config - COnfiguration de l'application
   */
  constructor(config) {
    this.config = config;
  }

  /**
   * Appelé lors du clic sur le bouton de démarrage du jeu
   */
  onStartGameClick = () => {
    const gameControler = new GameControler(
      this.config.cardShownDuration,
      this.config.gameBoardNbRows,
      this.config.gameBoardNbCols,
      this.config.nbUniquePictures,
      this.config.gameTimeMilliSeconds,
      this.config.gameTimeProgressionIntervalMilliSeconds,
      this.config.postResultUrl,
    );
    gameControler.startGame();
  };

  /**
   * Initialisation de l'application
   */
  init() {
    const resultListControler = new ResultListControler(
      this.onStartGameClick,
    );
    resultListControler.showResultList(
      this.config.showResultListUrl,
    );
  }
}
