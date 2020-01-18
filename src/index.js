import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
// console.log(store.dispatch({type: 'INCREMENT'}));
// console.log(store.dispatch({type: 'INCREMENT'}));
// console.log(store.dispatch({type: 'DECREMENT'}));
// console.log(store.dispatch({type: 'RESEt'}));

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
