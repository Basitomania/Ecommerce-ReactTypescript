import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.component'
import { Switch, Route } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

const App: React.FC = () => {
  console.log('>>>', process.env.NODE_ENV)
  return (
    <div>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/hats' component={HatsPage}/>
        </Switch>
    </div>
  );
}

export default App;
