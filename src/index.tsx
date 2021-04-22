import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { store } from './state/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/user" component={App} />
          <Redirect from="/" to="/user" />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root') || document.createElement('div'),
);
