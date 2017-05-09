import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/gameActions';

export class Commander extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shuffleDeck = this.shuffleDeck.bind(this);
  }

  shuffleDeck() {
    const deckIds = this.props.decks.map(deck => deck.deck_id);
    this.props.actions.shuffle(deckIds);
  }

  render() {
    return (
      <div className="col-sm-offset-1 bottom-20">
        <button
          className="btn btn-primary"
          onClick={this.props.actions.loadNewGame}>New Game</button>
        <button
          disabled={this.props.decks.length === 0}
          className="btn btn-info"
          onClick={this.shuffleDeck}>Shuffle</button>
        <button
          className="btn btn-default"
          onClick={this.props.actions.resetScores}>Reset High Scores</button>
      </div>
    );
  }
};

Commander.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps({ decks }) {
  return {
    decks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Commander);
