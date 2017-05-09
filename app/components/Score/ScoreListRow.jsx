import React, { PropTypes } from 'react';

const ScoreListRow = ({ score, position }) => {
  return (
    <tr>
      <td>{position}</td>
      <td>{score.turns}</td>
      <td>{score.name}</td>
    </tr>
  );
};

ScoreListRow.propTypes = {
  score: PropTypes.object.isRequired,
  position: PropTypes.number.isRequired
};

export default ScoreListRow;
