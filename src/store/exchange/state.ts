export interface State {
  amount: number | null,
  convertedAmount: number | null,
  from: string | null,
  to: string | null,
  pending: boolean,
  errorMessage: string | null,
}

const initialState: State = {
  amount: null,
  convertedAmount: null,
  from: null,
  to: null,
  pending: false,
  errorMessage: null,
};

export default initialState;
