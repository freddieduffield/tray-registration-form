import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import {UserForm} from './components/UserForm';
import {PrivacyForm} from "./components/PrivacyForm";
import {SuccessScreen} from "./components/SuccessScreen";
import {Tab} from "./components/Tab";

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <Tab name="User" path="/user"/>
                        <Tab name="Privacy" path="/privacy"/>
                        <Tab name="Done" path="/done"/>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/user">
                        <UserForm />
                    </Route>
                    <Route path="/privacy">
                        <PrivacyForm />
                    </Route>
                    <Route path="/done">
                        <SuccessScreen />
                    </Route>
                    <Redirect from="/" to="/user" />
                </Switch>
            </div>
        </Router>
    );
}

export default App;

