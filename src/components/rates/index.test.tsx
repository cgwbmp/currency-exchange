import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Rates from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <Rates
      currencies={['RUB', 'USD', 'EUR']}
      activeCurrency="RUB"
      rates={[
        { currency: 'USD', rate: 10 },
        { currency: 'EUR', rate: 9 },
      ]}
    />
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});

it('DOM structure not changed', () => {
  const component = renderer.create((
    <Rates
      currencies={['RUB', 'USD', 'EUR']}
      activeCurrency="RUB"
      rates={[
        { currency: 'USD', rate: 10 },
        { currency: 'EUR', rate: 9 },
      ]}
    />
  ));
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
