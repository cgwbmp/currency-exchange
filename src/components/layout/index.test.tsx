import React from 'react';
import ReactDOM from 'react-dom';
import {
  MemoryRouter as Router,
} from 'react-router-dom';
import Layout from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><Layout /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
