export interface State {
  currencies: Array<string>,
  baseCurrency: string,
  rates: Array<{
    currency: string,
    rate: number,
  }>,
  pending: boolean,
  error: boolean,
}

const initialState: State = {
  currencies: ['RUB', 'USD', 'EUR'],
  baseCurrency: '',
  rates: [],
  pending: false,
  error: false,
};

export default initialState;
