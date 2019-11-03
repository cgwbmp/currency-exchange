import { configureStore } from 'redux-starter-kit';
import exchange from './exchange';
import { State } from './state';

const store = configureStore({
  reducer: {
    exchange,
  },
});

const getExchange = (state: State) => state.exchange;

export default store;
export {
  getExchange,
};
