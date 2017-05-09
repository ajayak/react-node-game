import { getRandomCardCodes } from '../utils';
import rp from 'request-promise';

export function createNewGame() {
  const cards = getRandomCardCodes(9).join(',');
  const getDeckUri = `https://deckofcardsapi.com/api/deck/new/shuffle/?cards=${cards}`;
  return Promise
    .all([
      rp({ uri: getDeckUri, json: true }),
      rp({ uri: getDeckUri, json: true }),
    ])
    .then(values => Promise.all(values.map(value => getAllCardsInDeck(value['deck_id']))));
}

export function shuffleDecks(deckIds) {
  return Promise
    .all(deckIds.map(deckId => shuffleDeck(deckId)))
    .then(values => Promise.all(values.map(value => getAllCardsInDeck(value['deck_id']))));
}

function shuffleDeck(deckId) {
  const shuffleUri = `https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`;
  return rp({ uri: shuffleUri, json: true });
}

function getAllCardsInDeck(deckId) {
  const drawCardUri = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=9`;
  return rp({ uri: drawCardUri, json: true });
}