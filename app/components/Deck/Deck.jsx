import React, { PropTypes } from 'react';
import Card from './Card';

export const Deck = ({ deck, onCardReveal }) => {
  return (
    <div className="row">
      {deck.cards.map(card => <Card
        key={card.code}
        deckId={deck.deck_id}
        card={card}
        onCardReveal={onCardReveal} />)}
    </div>
  );
};

Deck.propTypes = {
  deck: PropTypes.object.isRequired,
  onCardReveal: PropTypes.func.isRequired
};

export default Deck;
