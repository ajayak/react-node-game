import turnReducer from './turnReducer';
import { revealCard } from '../actions/cardActions';
import { loadNewGameSuccess } from '../actions/gameActions';

describe('turnReducer', () => {
  it('should add 1 to turn when a card is revealed', () => {
    const initialState = 0;
    const action = revealCard([], '');
    const newState = turnReducer(initialState, action);
    expect(newState).toBe(1);
  });

  it('should be 0 when a new game is loaded', () => {
    const initialState = 2;
    const action = loadNewGameSuccess([]);
    const newState = turnReducer(initialState, action);
    expect(newState).toBe(0);
  });
});