import { PayloadAction } from 'redux-starter-kit';
import { State } from './state';

const changeBaseCurrency = (state: State, { payload }: PayloadAction<string>): State => ({
  ...state,
  baseCurrency: payload,
  rates: [],
  pending: true,
  error: false,
});

const resolveChangeBaseCurrency = (
  state: State,
  { payload }: PayloadAction<typeof state.rates>,
): State => ({
  ...state,
  rates: payload,
  pending: false,
});

const rejectChangeBaseCurrency = (state: State): State => ({
  ...state,
  error: true,
  pending: false,
});

export {
  changeBaseCurrency,
  resolveChangeBaseCurrency,
  rejectChangeBaseCurrency,
};
