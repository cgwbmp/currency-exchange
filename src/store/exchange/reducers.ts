import { PayloadAction } from 'redux-starter-kit';
import { State } from './state';

type ConvertPayload = {
  amount: number,
  from: string,
  to: string,
};

const convert = (state: State, { payload }: PayloadAction<ConvertPayload>): State => {
  const { amount, from, to } = payload;
  return {
    ...state,
    amount,
    convertedAmount: null,
    from,
    to,
    pending: true,
    errorMessage: null,
  };
};

const resolveConvert = (state: State, { payload }: PayloadAction<number>): State => ({
  ...state,
  convertedAmount: payload,
  pending: false,
});

const rejectConvert = (state: State, { payload }: PayloadAction<string>): State => ({
  ...state,
  errorMessage: payload,
  pending: false,
});

export {
  convert,
  resolveConvert,
  rejectConvert,
};
