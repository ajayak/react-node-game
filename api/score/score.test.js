import {
  addScore,
  getAllHighScores,
  resetScores
} from './score';

describe('Score', () => {
  it('should add highest score at begining', () => {
    addScore(4);
    expect(getAllHighScores()[0].turns).toBe(4);
  });

  it('should reset scores to empty array', () => {
    resetScores();
    expect(getAllHighScores().length).toBe(0);
  });
});