import { getRates as getRatesApi } from '../../api/exchange';
import { actions, selectors } from '.';
import { State } from '../state';
import { getRates } from '..';

const changeBaseCurrency = (newBaseCurrency: string) => async (
  dispatch: Function,
  getStore: Function,
) => {
  dispatch(actions.changeBaseCurrency(newBaseCurrency));
  const state: State = getStore();
  const currencies = selectors.getCurrencies(getRates(state));
  const currenciesToConvert = currencies.filter((currency) => currency !== newBaseCurrency);
  try {
    const rates = await getRatesApi(newBaseCurrency, currenciesToConvert);
    dispatch(actions.resolveChangeBaseCurrency(rates));
  } catch (exception) {
    dispatch(actions.rejectChangeBaseCurrency());
  }
};

const enterToRates = () => async (
  dispatch: Function,
  getStore: Function,
) => {
  const state: State = getStore();
  const defaultBaseCurrency = selectors.getBaseCurrency(getRates(state));
  dispatch(changeBaseCurrency(defaultBaseCurrency));
};

export default null;
export {
  changeBaseCurrency,
  enterToRates,
};
