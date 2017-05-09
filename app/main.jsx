import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { loadHighScores } from './actions/scoreActions';

const store = configureStore();
store.dispatch(loadHighScores());

import App from './components/App/App';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.body.appendChild(document.createElement('div')),
);
