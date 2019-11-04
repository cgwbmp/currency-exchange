import { State } from './state';

const getCurrencies = (state: State): Array<string> => state.currencies;

const getBaseCurrency = (state: State): string => state.baseCurrency;

const getRates = (state: State): typeof state.rates => state.rates;

const isPending = (state: State): boolean => state.pending;

const hasError = (state: State): boolean => state.error;

export {
  getCurrencies,
  getBaseCurrency,
  getRates,
  isPending,
  hasError,
};
