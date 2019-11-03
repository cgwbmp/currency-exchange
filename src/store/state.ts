import exchange, { State as Exchange } from './exchange/state';

export interface State {
  exchange: Exchange,
}

const initialState: State = {
  exchange,
};

export default initialState;
