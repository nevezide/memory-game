import jQuery from 'jquery';

import Header from '../../components/layout/Header';
import Main from '../../components/layout/Main';

import ResultList from '../../components/ResultList/ResultList';
import StartButton from '../../components/StartButton';
import MessageBar from '../../components/MessageBar';

/**
 * @class ResultListView - Vue de l'écran de la liste des résultats
 */
export default class ResultListView {
  /**
   * Constructor
   * @constructor
   *
   * @param {function} onStartGameClick - Handler du clic sur le bouton de démarrage du jeu
   */
  constructor(onStartGameClick) {
    this.Header = new Header();
    this.Main = new Main();
    this.MessageBar = new MessageBar();
    this.StartButton = new StartButton(onStartGameClick);
  }

  /**
   * Appelée lorsque le backend retourne la liste des résultats
   *
   * @param {[Result]} resultListData - Liste des résultats
   */
  onGetResultListSuccess = (resultListData) => {
    const resultList = new ResultList(resultListData);
    this.Main.append(resultList.render());
  };

  /**
   * Appelée lorsque le backend n'a pas pu retourner la liste des résultats
   */
  onGetResultListFail = () => {
    this.MessageBar.showMessage(
      'Impossible de récupérer les résultats depuis le serveur :(',
    );
  };

  /**
   * Génère le code HTML du composant
   *
   * @returns {HTMLElement}
   */
  render() {
    jQuery('body')
      .empty()
      .prepend(this.Header.render())
      .append(this.Main.render());

    this.Main.prepend(this.MessageBar.render());
    this.Main.append(this.StartButton.render());
  }
}
