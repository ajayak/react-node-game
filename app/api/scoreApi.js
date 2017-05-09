var rest = require('rest');
const baseUri = 'http://localhost:8000';

export function highScores() {
  return rest(`${baseUri}/high-scores`);
}

export function resetHighScores() {
  return rest(`${baseUri}/reset-scores`);
}