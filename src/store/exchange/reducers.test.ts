import {
  convert,
  resolveConvert,
  rejectConvert,
} from './reducers';
import defaultState, { State } from './state';

const type = 'action';

describe('convert()', () => {
  it('sets values to convert, pending status to true, resets previuse result and error message', () => {
    const state: State = {
      ...defaultState,
      amount: 10,
      convertedAmount: 10,
      from: 'rub',
      to: 'usd',
      errorMessage: 'Error',
    };
    const payload = {
      amount: 100,
      from: 'usd',
      to: 'rub',
    };
    const newState: State = convert(state, { payload, type });
    expect(newState.amount).toEqual(100);
    expect(newState.convertedAmount).toBeNull();
    expect(newState.from).toEqual('usd');
    expect(newState.to).toEqual('rub');
    expect(newState.convertedAmount).toBeNull();
    expect(newState.pending).toBeTruthy();
    expect(newState.errorMessage).toBeNull();
  });
});

describe('resolveConvert()', () => {
  it('sets converted amount, sets pending status to false', () => {
    const state: State = {
      ...defaultState,
      pending: true,
    };
    const payload = 100;
    const newState: State = resolveConvert(state, { payload, type });
    expect(newState.convertedAmount).toEqual(100);
    expect(newState.pending).toBeFalsy();
  });
});

describe('rejectConvert()', () => {
  it('sets error message, sets pending status to false', () => {
    const state: State = {
      ...defaultState,
      pending: true,
    };
    const payload = 'Error';
    const newState: State = rejectConvert(state, { payload, type });
    expect(newState.errorMessage).toEqual(payload);
    expect(newState.pending).toBeFalsy();
  });
});
