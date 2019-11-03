import { State } from './state';

type Result = {
  amount: number,
  convertedAmount: number,
  from: string,
  to: string,
} | null;

const getResult = (state: State): Result => {
  const {
    amount,
    convertedAmount,
    from,
    to,
  } = state;
  if (
    amount === null
    || convertedAmount === null
    || from === null
    || to === null
  ) {
    return null;
  }
  return {
    amount,
    convertedAmount,
    from,
    to,
  };
};

const isPending = (state: State): boolean => state.pending;

const getErrorMessage = (state: State): string | null => state.errorMessage;

export {
  getResult,
  isPending,
  getErrorMessage,
};
