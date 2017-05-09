import { find, isNil } from 'lodash';
import * as types from '../actions/actionTypes';
import initialState from './initialState';

function anotherCardOpenedinSameDeck(deck) {
  const openedCards = deck.cards.filter(card => card.isRevealed === true && !card.isMatched);
  if (openedCards.length > 0) return true;
}

function matchCardInDeck(card, deck) {
  const openedCardInDeck = deck.cards.filter(c => c.isRevealed === true && c.code === card.code)[0];
  if (isNil(openedCardInDeck)) return;
  openedCardInDeck.isMatched = true;
  card.isMatched = true;
}

function hasDirtyReads(decks) {
  const openCards = decks
    .map(deck => deck.cards.filter(card => card.isRevealed === true && !card.isMatched))
    .map(cards => cards.length > 0);
  return openCards[0] && openCards[1];
}

function cleanDirtyReadCards(decks) {
  return decks.map(deck => {
    deck.cards.map(card => {
      if (card.isRevealed === true && !card.isMatched) {
        card.isRevealed = false;
      }
      return card;
    })
    return deck;
  });
}

export default function deckReducer(state = initialState.decks, action) {
  switch (action.type) {
    case types.LOAD_NEW_GAME_SUCCESS:
    case types.SHUFFLE_DECKS_SUCCESS:
      return JSON.parse(action.decks.entity);

    case types.REVEAL_CARD:
      const stateClone = [...state];
      if (hasDirtyReads(stateClone)) return cleanDirtyReadCards(stateClone);

      const selectedDeck = state.filter(deck => deck.deck_id === action.payload.deckId)[0];
      if (anotherCardOpenedinSameDeck(selectedDeck)) return state;

      const card = find(selectedDeck.cards, (card => card.code === action.payload.card.code));
      card.isRevealed = !card.isRevealed;

      const secondDeck = state.filter(deck => deck.deck_id !== action.payload.deckId)[0];
      matchCardInDeck(card, secondDeck);
      return stateClone;

    default:
      return state;
  }
}