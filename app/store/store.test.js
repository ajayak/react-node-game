import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import { loadHighScoresSuccess } from '../actions/scoreActions';

describe('Store', () => {
  it('should handling adding high scores', () => {
    const store = createStore(rootReducer, initialState);
    const highScores = {
      entity: JSON.stringify([{ name: 'Spiderman', turns: 30 }])
    };

    const action = loadHighScoresSuccess(highScores);
    store.dispatch(action);

    const actual = store.getState().highScores;
    const expected = [{ name: 'Spiderman', turns: 30 }];
    expect(expected).toEqual(actual);
  });
});