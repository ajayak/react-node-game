import {
  createStore,
  compose,
  applyMiddleware
} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  const store = createStore(rootReducer,
    initialState,
    applyMiddleware(thunk),
    compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}