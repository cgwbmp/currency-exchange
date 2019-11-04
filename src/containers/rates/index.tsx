import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RatesComponent from '../../components/rates';
import { State } from '../../store/state';
import { getRates as getSlice } from '../../store';
import { selectors, actions } from '../../store/rates';

const { getCurrencies, getBaseCurrency, getRates } = selectors;
const { changeBaseCurrency } = actions;

type Rates = Array<{
  currency: string,
  rate: number,
}>;

const Rates: React.FC = () => {
  const dispatch = useDispatch();

  const onChangeCurrency = useCallback((newCurrency: string) => {
    dispatch(changeBaseCurrency(newCurrency));
  }, [dispatch]);

  const currencies = useSelector<State, Array<string>>((state) => getCurrencies(getSlice(state)));
  const baseCurrency = useSelector<State, string>((state) => getBaseCurrency(getSlice(state)));
  const rates = useSelector<State, Rates>((state) => getRates(getSlice(state)));

  return (
    <RatesComponent
      currencies={currencies}
      activeCurrency={baseCurrency}
      rates={rates}
      onChangeCurrency={onChangeCurrency}
    />
  );
};

export default Rates;
