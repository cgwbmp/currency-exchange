import converToAnotherCurrencyApi from '../../api/exchange';
import { actions } from '.';

const convert = (amount: number, from: string, to: string) => async (dispatch: Function) => {
  dispatch(actions.convert({ amount, from, to }));
  try {
    const convertedAmount = await converToAnotherCurrencyApi(amount, from, to);
    dispatch(actions.resolveConvert(convertedAmount));
  } catch (exception) {
    dispatch(actions.rejectConvert('Something went wrong, try again later'));
  }
};

export default null;
export {
  convert,
};
