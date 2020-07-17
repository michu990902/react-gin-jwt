import React from 'react';

import { Switch, Route } from 'react-router-dom'

import Menu from '../../components/Menu/Menu'

import Home from '../Home/Home'
import AuthTest from '../AuthTest/AuthTest'
import Error404 from '../Error404/Error404'

function App() {
  return (
    <>    
      <Menu/>
      <main>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/authtest">
            <AuthTest/>
          </Route>
          <Route exact path="*">
            <Error404/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
