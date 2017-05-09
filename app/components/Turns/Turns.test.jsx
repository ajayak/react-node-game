import React from 'react';
import { shallow } from 'enzyme';
import { ScorePage as Turns } from './Turns';

describe('Turns.jsx', () => {
	it('should have turns as passed in props', () => {
		const turns = shallow(<Turns turns={2} />);
		expect(turns.text()).toEqual('Turns: 2');
	});
});
