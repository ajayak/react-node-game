import React from 'react';
import { shallow } from 'enzyme';
import { Commander } from './Commander';

describe('Commander.jsx', () => {
	const props = {
		decks: [],
		actions: {
			loadNewGame: () => true,
			resetScores: () => true,
			shuffle: () => true
		}
	};

	it('should have 3 command buttons', () => {
		const comp = shallow(<Commander {...props} />);
		expect(comp.find('button').length).toEqual(3);
	});

	it('should have shuffle button disabled when no decks are present', () => {
		const comp = shallow(<Commander {...props} />);
		expect(comp.find('.btn-info').prop('disabled')).toEqual(true);
	});
});
