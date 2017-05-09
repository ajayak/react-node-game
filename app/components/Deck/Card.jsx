import React, { PropTypes } from 'react';

class Card extends React.Component {
  card;

  constructor(props, context) {
    super(props, context);
    this.reveal = this.reveal.bind(this);
    this.card = props.card;
  }

  reveal() {
    this.props.onCardReveal(this.props.card, this.props.deckId);
  }

  render() {
    const cardIsRevealed = !!this.card.isRevealed;
    const staticCardUrl = 'https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-odd-bods-1_grande.png?v=1474350874';
    return (
      <div className="col-xs-4">
        <div className="thumbnail" onClick={this.reveal}>
          <img
            src={cardIsRevealed ? this.card.image : staticCardUrl}
            alt={cardIsRevealed ? this.card.code : 'Card'}
            height="180px"
            width="130px" />
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
  deckId: PropTypes.string.isRequired,
  onCardReveal: PropTypes.func.isRequired
};

export default Card;