const entrypoint = 'https://frankfurter.app';

interface OriginalResponse {
  amount: number,
  base: string,
  date: string,
  rates: {
    [key: string]: number,
  },
}

const convertToAnotherCurrency = async (
  amount: number,
  from: string,
  to: string,
): Promise<number> => {
  const query = `?amount=${amount}&from=${from}&to=${to}`;
  const source = await fetch(`${entrypoint}/latest${query}`);
  const response: OriginalResponse = await source.json();
  return response.rates[to.toUpperCase()];
};

type Rates = Array<{
  currency: string,
  rate: number,
}>;

const getRates = async (
  base: string,
  to: Array<string>,
): Promise<Rates> => {
  const query = `?from=${base}&to=${to}`;
  const source = await fetch(`${entrypoint}/latest${query}`);
  const { rates }: OriginalResponse = await source.json();
  return to.map((currency) => ({
    currency,
    // api returns rate in base currency,
    // so we need to convert this value
    rate: 1 / rates[currency.toUpperCase()],
  }));
};

export default convertToAnotherCurrency;
export {
  convertToAnotherCurrency,
  getRates,
};
