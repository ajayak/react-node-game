import React from 'react';
import { shallow } from 'enzyme';
import ScoreListRow from './ScoreListRow';

describe('ScoreListRow.jsx', () => {
	it('should render user score in a row', () => {
		const score = { name: 'John', turns: 10 };
		const row = shallow(<ScoreListRow position={4} score={score} />);
		expect(row.childAt(0).text()).toEqual('4');
		expect(row.childAt(1).text()).toEqual('10');
		expect(row.childAt(2).text()).toEqual('John');
	});
});
