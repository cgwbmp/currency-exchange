const entrypoint = 'http://ip-api.com';

interface OriginalResponse {
  currency: string,
}

const getCurrencyByIP = async (): Promise<string> => {
  const source = await fetch(`${entrypoint}/json/?fields=currency`);
  const response: OriginalResponse = await source.json();
  return response.currency.toUpperCase();
};

export default getCurrencyByIP;
