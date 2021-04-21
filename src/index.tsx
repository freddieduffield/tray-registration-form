import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import {reducer} from './state/User/reducer';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

export const store = createStore(reducer);
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Switch>
                    <Route path="/user" component={App}/>
                    <Redirect from="/" to="/user"/>
                </Switch>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
