// eslint-disable-next-line prefer-destructuring
const env = import.meta.env;

export default {
  cardShownDuration: parseInt(env.VITE_cardShownDuration, 10),
  gameBoardNbRows: parseInt(env.VITE_gameBoardNbRows, 10),
  gameBoardNbCols: parseInt(env.VITE_gameBoardNbCols, 10),
  nbUniquePictures: parseInt(env.VITE_nbUniquePictures, 10),
  gameTimeMilliSeconds: parseInt(env.VITE_gameTimeMilliSeconds, 10),
  gameTimeProgressionIntervalMilliSeconds: parseInt(
    env.VITE_gameTimeProgressionIntervalMilliSeconds,
    10,
  ),
  postResultUrl: env.VITE_postResultUrl,
  showResultListUrl: env.VITE_showResultListUrl,
};
