import { combineReducers } from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import decks from './deckReducer';
import highScores from './scoreReducer';
import turns from './turnReducer';

const rootReducer = combineReducers({
  ajaxCallsInProgress,
  decks,
  highScores,
  turns
});

export default rootReducer;