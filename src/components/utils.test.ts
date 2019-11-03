import { parseExchangeQuery } from './utils';

describe('parseExchangeQuery()', () => {
  it('parses string with exchange query in format `[amount] [from] in|to [to]` and return values as object', () => {
    const query = '100 usd in rub';
    const expected = {
      amount: 100,
      from: 'usd',
      to: 'rub',
    };
    const result = parseExchangeQuery(query);
    expect(result).toEqual(expected);
  });

  it('ruturns null if query in wrong format', () => {
    const query = '100 usd in';
    const result = parseExchangeQuery(query);
    expect(result).toBeNull();
  });
});
