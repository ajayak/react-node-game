import React, { PropTypes } from 'react';
import ScoreListRow from './ScoreListRow';

const ProductList = ({ scores }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Turns</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {scores.map((score, index) =>
          <ScoreListRow key={score.id} score={score} position={index + 1} />
        )}
      </tbody>
    </table>
  );
};

ProductList.propTypes = {
  scores: PropTypes.array.isRequired
};

export default ProductList;
