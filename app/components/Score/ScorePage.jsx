import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ScoreList from './ScoreList';

export const ScorePage = ({ highScores }) => {
  return <ScoreList scores={highScores} />;
};

ScorePage.propTypes = {
  highScores: PropTypes.array.isRequired
};

function mapStateToProps({ highScores }) {
  return {
    highScores
  };
}

export default connect(
  mapStateToProps
)(ScorePage);
