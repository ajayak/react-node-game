import React from 'react';
import ScorePage from '../Score/ScorePage';
import Commander from '../Commander/Commander';
import DeckPage from '../Deck/DeckPage';
import Turns from '../Turns/Turns';

require('./App.css');

const App = () => {
	return (
		<div className="container">
			<div className="row">
				<Turns />
				<Commander />
			</div>
			<DeckPage />
			<ScorePage />
		</div>
	);
}

export default App;
