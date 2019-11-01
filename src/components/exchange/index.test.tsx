import React from 'react';
import ReactDOM from 'react-dom';
import Exchange from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Exchange />, div);
  ReactDOM.unmountComponentAtNode(div);
});
