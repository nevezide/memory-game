import jQuery from 'jquery';

import ResultListView from './ResultListView';

/**
 * @class ResultListControler - Contrôleur de l'écran de liste des résultats
 */
export default class ResultListControler {
  /**
   * Constructeur
   * @constructor
   *
   * @param {function} onStartGameClick - Handler du clic sur le bouton du démarrage du jeu
   */
  constructor(onStartGameClick) {
    this.pictureIdList = [];
    this.resultListView = new ResultListView(onStartGameClick);
  }

  /**
   * Affiche la vue et récupère la liste des résultats
   *
   * @param {String} retrieveResultListUrl - Url de récupération de la liste des résultats
   */
  showResultList(retrieveResultListUrl) {
    this.resultListView.render();

    jQuery.ajax({
      type: 'GET',
      url: retrieveResultListUrl,
      success: this.resultListView.onGetResultListSuccess,
      error: (error) => {
        console.log(error);
        this.resultListView.onGetResultListFail();
      },
      contentType: 'application/json',
    });
  }
}
