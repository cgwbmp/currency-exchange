import {
  changeBaseCurrency,
  resolveChangeBaseCurrency,
  rejectChangeBaseCurrency,
} from './reducers';
import defaultState, { State } from './state';

const type = 'action';

describe('changeBaseCurrency()', () => {
  it('sets base currency, pending status to true, resets previuse rates and error', () => {
    const state: State = {
      ...defaultState,
      rates: [
        { currency: 'USD', rate: 10 },
      ],
      error: true,
    };
    const payload = 'USD';
    const newState: State = changeBaseCurrency(state, { payload, type });
    expect(newState.baseCurrency).toEqual(payload);
    expect(newState.rates.length).toEqual(0);
    expect(newState.pending).toBeTruthy();
    expect(newState.error).toBeFalsy();
  });
});

describe('resolveChangeBaseCurrency()', () => {
  it('sets new rates, pending status to false', () => {
    const state: State = {
      ...defaultState,
      pending: true,
    };
    const payload = [
      { currency: 'USD', rate: 10 },
    ];
    const newState: State = resolveChangeBaseCurrency(state, { payload, type });
    expect(newState.rates.length).toEqual(1);
    expect(newState.pending).toBeFalsy();
  });
});

describe('rejectChangeBaseCurrency()', () => {
  it('sets error to true, pending status to false', () => {
    const state: State = {
      ...defaultState,
      pending: true,
    };
    const newState: State = rejectChangeBaseCurrency(state);
    expect(newState.error).toBeTruthy();
    expect(newState.pending).toBeFalsy();
  });
});
