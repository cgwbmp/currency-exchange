export const parseExchangeQuery = (
  query: string,
): { amount: number, from: string, to: string } | null => {
  const result = query.match(/(\d+)\s+(\w+)\s+(?:in|to)\s+(\w+)/);
  if (!result) {
    return null;
  }
  return {
    amount: Number(result[1]),
    from: result[2],
    to: result[3],
  };
};

export default null;
