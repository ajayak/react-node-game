import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function turnReducer(state = initialState.turns, action) {
  switch (action.type) {

    case types.REVEAL_CARD:
      return state + 1;

    case types.LOAD_NEW_GAME_SUCCESS:
    case types.SHUFFLE_DECKS_SUCCESS:
      return 0;

    default:
      return state;
  }
}