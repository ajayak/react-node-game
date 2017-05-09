import * as types from './actionTypes';
import { highScores } from '../api';
import {
  ajaxCallError,
  beginAjaxCall
} from './ajaxStatusActions';

export function loadHighScoresSuccess(highScores) {
  return { type: types.LOAD_HIGH_SCORES_SUCCESS, highScores };
}

export function loadHighScores() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return highScores()
      .then(newDecks => dispatch(loadHighScoresSuccess(newDecks)))
      .catch(err => dispatch(ajaxCallError(err)));
  }
}