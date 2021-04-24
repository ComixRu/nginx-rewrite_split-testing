import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { VariantA } from './VariantA';
import { VariantB } from './VariantB';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="/need_test/"
        >
          Go to test
        </a>
        {/*<Link to="/need_test/">
          Go to split test
        </Link>*/}
      </header>
    </div>
      <Switch>
        <Route path="/variant_a">
          <VariantA />
        </Route>
        <Route path="/variant_b">
          <VariantB />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
