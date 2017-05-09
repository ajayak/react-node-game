var rest = require('rest');
const baseUri = 'http://localhost:8000';

export function newGame() {
  return rest(`${baseUri}/new-game`);
}

export function shuffleDecks(deckIds) {
  return rest(`${baseUri}/shuffle?deck1=${deckIds[0]}&deck2=${deckIds[1]}`);
}

export function saveTurns(turns) {
  return rest({
    method: 'POST',
    path: `${baseUri}/end-game/${turns}`
  });
}