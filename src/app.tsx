import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Layout from './components/layout';
import Exchange from './containers/exchange';
import 'antd/dist/antd.css';
import './app.css';

const App: React.FC = () => (
  <Provider store={store}>
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
  </Provider>
);

export default App;
