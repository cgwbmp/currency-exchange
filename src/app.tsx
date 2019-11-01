import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Layout from './components/layout';
import Exchange from './components/exchange';
import './app.css';

const App: React.FC = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path="/exchange">
          <Exchange />
        </Route>
        <Route path="/rate">
          Rate
        </Route>
        <Redirect to="/exchange" />
      </Switch>
    </Layout>
  </Router>
);

export default App;
