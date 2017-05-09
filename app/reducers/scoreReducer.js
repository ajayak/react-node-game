import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function productReducer(state = initialState.highScores, action) {
  switch (action.type) {
    case types.LOAD_HIGH_SCORES_SUCCESS:
    case types.RESET_SCORES_SUCCESS:
    case types.END_GAME_SUCCESS:
      return JSON.parse(action.highScores.entity);

    default:
      return state;
  }
}