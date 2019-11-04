import exchange, { State as Exchange } from './exchange/state';
import rates, { State as Rates } from './rates/state';

export interface State {
  exchange: Exchange,
  rates: Rates,
}

const initialState: State = {
  exchange,
  rates,
};

export default initialState;
