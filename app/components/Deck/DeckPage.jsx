import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isNil } from 'lodash';
import Deck from './Deck';
import * as cardActions from '../../actions/cardActions';
import * as gameActions from '../../actions/gameActions';

function isGameCompleted(decks) {
  const matches = decks
    .map(deck => deck.cards.filter(c => !c.isMatched))
    .map(cards => cards.length === 0);
  return matches[0] && matches[1];
}

export const DeckPage = ({ decks, turns, cardActions, gameActions }) => {
  if (isNil(decks) || decks.length === 0) {
    return (
      <div className="jumbotron">
        <h1>Please start a game</h1>
      </div>
    );
  }

  if (isGameCompleted(decks)) {
    gameActions.endGame(turns);
    return (
      <div className="jumbotron">
        <h1>Congratulations, you have won the game.</h1>
        <p>You can start a new game if you wish to!</p>
      </div>
    );
  }

  return (
    <div className="row">
      {decks.map(deck => {
        return (
          <div className="col-sm-6 box">
            <Deck key={+new Date()} deck={deck} onCardReveal={cardActions.revealCard} />
          </div>
        );
      })}
    </div>
  );
};

DeckPage.propTypes = {
  decks: PropTypes.array.isRequired,
  turns: PropTypes.number.isRequired,
  cardActions: PropTypes.object.isRequired,
  gameActions: PropTypes.object.isRequired
};

function mapStateToProps({ decks, turns }) {
  return {
    decks,
    turns
  };
}

function mapDispatchToProps(dispatch) {
  return {
    cardActions: bindActionCreators(cardActions, dispatch),
    gameActions: bindActionCreators(gameActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckPage);
