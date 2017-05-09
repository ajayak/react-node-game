import * as types from './actionTypes';
import {
  newGame,
  shuffleDecks,
  saveTurns,
  resetHighScores
} from '../api';
import {
  ajaxCallError,
  beginAjaxCall
} from './ajaxStatusActions';

export function loadNewGameSuccess(decks) {
  return { type: types.LOAD_NEW_GAME_SUCCESS, decks };
}

export function shuffleDeckSuccess(decks) {
  return { type: types.SHUFFLE_DECKS_SUCCESS, decks };
}

export function endGameSuccess(highScores) {
  return { type: types.END_GAME_SUCCESS, highScores };
}

export function resetScoresSuccess(highScores) {
  return { type: types.RESET_SCORES_SUCCESS, highScores };
}

export function loadNewGame() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return newGame()
      .then(newDecks => dispatch(loadNewGameSuccess(newDecks)))
      .catch(err => dispatch(ajaxCallError(err)));
  }
}

export function shuffle(deckIds) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return shuffleDecks(deckIds)
      .then(newDecks => dispatch(shuffleDeckSuccess(newDecks)))
      .catch(err => dispatch(ajaxCallError(err)));
  }
}

export function endGame(turns) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return saveTurns(turns)
      .then(highScores => dispatch(endGameSuccess(highScores)))
      .catch(err => dispatch(ajaxCallError(err)));
  }
}

export function resetScores() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return resetHighScores()
      .then(highScores => dispatch(resetScoresSuccess(highScores)))
      .catch(err => dispatch(ajaxCallError(err)));
  }
}