import { createStore, compose } from 'redux';
import rootReducer from './ducks';

const createAppStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  );

  return store;
}

export default createAppStore;
