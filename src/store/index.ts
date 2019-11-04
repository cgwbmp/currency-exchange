import { configureStore } from 'redux-starter-kit';
import exchange from './exchange';
import rates from './rates';
import { State } from './state';

const store = configureStore({
  reducer: {
    exchange,
    rates,
  },
});

const getExchange = (state: State) => state.exchange;

const getRates = (state: State) => state.rates;

export default store;
export {
  getExchange,
  getRates,
};
