import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Exchange from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Exchange />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('DOM structure not changed', () => {
  const component = renderer.create(<Exchange />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
