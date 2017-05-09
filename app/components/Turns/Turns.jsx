import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export const ScorePage = ({ turns }) => {
  return (
    <div className="pull-right">
      Turns: {turns}
    </div>
  );
};

ScorePage.propTypes = {
  turns: PropTypes.number.isRequired
};

function mapStateToProps({ turns }) {
  return {
    turns
  };
}

export default connect(
  mapStateToProps
)(ScorePage);
