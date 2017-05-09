import * as types from './actionTypes';

export function revealCard(card, deckId) {
  return { type: types.REVEAL_CARD, payload: { card, deckId } };
}