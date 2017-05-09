import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Turns from '../Turns/Turns';
import ScorePage from '../Score/ScorePage';
import Commander from '../Commander/Commander';
import DeckPage from '../Deck/DeckPage';

describe('App.jsx', () => {
	it('should have container class at root', () => {
		const app = shallow(<App />);
		expect(app.hasClass('container')).toEqual(true);
	});

	it('should have all child component', () => {
		const app = shallow(<App />);
		expect(app.contains(<Turns />)).toEqual(true);
		expect(app.contains(<ScorePage />)).toEqual(true);
		expect(app.contains(<Commander />)).toEqual(true);
		expect(app.contains(<DeckPage />)).toEqual(true);
	});
});
