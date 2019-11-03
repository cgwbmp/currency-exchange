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
  const source = await fetch(`https://frankfurter.app/latest${query}`);
  const response: OriginalResponse = await source.json();
  return response.rates[to.toUpperCase()];
};

export default convertToAnotherCurrency;
