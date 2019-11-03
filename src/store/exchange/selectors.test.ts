import {
  getResult,
  isPending,
  getErrorMessage,
} from './selectors';
import defaultState, { State } from './state';

describe('getResult()', () => {
  it('returns object with amount, convertedAmount, from and to currencies', () => {
    const state: State = {
      ...defaultState,
      amount: 10,
      convertedAmount: 10,
      from: 'usd',
      to: 'rub',
    };
    const result = getResult(state);
    expect(result).not.toBeNull();
    if (result) {
      expect(result.amount).toEqual(10);
      expect(result.convertedAmount).toEqual(10);
      expect(result.from).toEqual('usd');
      expect(result.to).toEqual('rub');
    }
  });

  it('returns null if one of needed values is null', () => {
    const state: State = {
      ...defaultState,
      amount: 10,
      from: 'usd',
      to: 'rub',
    };
    const result = getResult(state);
    expect(result).toBeNull();
  });
});

describe('isPending()', () => {
  it('returns true or false of pending status', () => {
    const state: State = {
      ...defaultState,
      pending: true,
    };
    const result = isPending(state);
    expect(result).toBeTruthy();
  });
});

describe('getErrorMessage()', () => {
  it('returns error message', () => {
    const state: State = {
      ...defaultState,
      errorMessage: 'Error',
    };
    const result = getErrorMessage(state);
    expect(result).toEqual('Error');
  });
});
