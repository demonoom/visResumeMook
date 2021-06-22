import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import store from './store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
