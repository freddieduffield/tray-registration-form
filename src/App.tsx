import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { UserForm } from './components/UserForm';
import { PrivacyForm } from './components/PrivacyForm';
import { SuccessScreen } from './components/SuccessScreen';
import { Tab } from './components/Tabs/Tab';

function App() {
  return (
    <div className="main">
      <nav>
        <ul className="tabs">
          <Tab name="User" path="/user" />
          <Tab name="Privacy" path="/user/privacy" />
          <Tab name="Done" path="/user/done" />
        </ul>
      </nav>
      <Switch>
        <Route exact path="/user" component={UserForm} />
        <Route path="/user/privacy" component={PrivacyForm} />
        <Route path="/user/done" component={SuccessScreen} />
      </Switch>
    </div>
  );
}

export default App;
