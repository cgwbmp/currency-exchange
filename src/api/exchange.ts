const convertToAnotherCurrency = async (amount: number, from: string, to: string) => {
  const query = `?amount=${amount}&from=${from}&to=${to}`;
  return fetch(`https://frankfurter.app/latest${query}`);
};

export default convertToAnotherCurrency;
