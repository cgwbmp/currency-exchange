import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RatesComponent from '../../components/rates';
import { State } from '../../store/state';
import { getRates as getSlice } from '../../store';
import { selectors } from '../../store/rates';
import { changeBaseCurrency, enterToRates } from '../../store/rates/action-creators';

const {
  getCurrencies,
  getBaseCurrency,
  getRates,
  isPending,
  hasError,
} = selectors;

type Rates = Array<{
  currency: string,
  rate: number,
}>;

const Rates: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(enterToRates());
  }, [dispatch]);

  const onChangeCurrency = useCallback((newCurrency: string) => {
    dispatch(changeBaseCurrency(newCurrency));
  }, [dispatch]);

  const currencies = useSelector<State, Array<string>>((state) => getCurrencies(getSlice(state)));
  const baseCurrency = useSelector<State, string>((state) => getBaseCurrency(getSlice(state)));
  const rates = useSelector<State, Rates>((state) => getRates(getSlice(state)));
  const pending = useSelector<State, boolean>((state) => isPending(getSlice(state)));
  const error = useSelector<State, boolean>((state) => hasError(getSlice(state)));

  return (
    <RatesComponent
      currencies={currencies}
      activeCurrency={baseCurrency}
      rates={rates}
      pending={pending}
      hasError={error}
      onChangeCurrency={onChangeCurrency}
    />
  );
};

export default Rates;
