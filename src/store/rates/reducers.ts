import { PayloadAction } from 'redux-starter-kit';
import { State } from './state';

const changeBaseCurrency = (state: State, { payload }: PayloadAction<string>): State => ({
  ...state,
  baseCurrency: payload,
  rates: [],
  pending: true,
  error: false,
});

type Rates = Array<{
  currency: string,
  rate: number,
}>;

const resolveChangeBaseCurrency = (
  state: State,
  { payload }: PayloadAction<Rates>,
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
