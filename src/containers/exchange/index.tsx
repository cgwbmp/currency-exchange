import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { convert } from '../../store/exchange/action-creators';
import ExchangeComponent from '../../components/exchange';
import { State } from '../../store/state';
import { getExchange } from '../../store';
import { selectors } from '../../store/exchange';

const { isPending, getResult, getErrorMessage } = selectors;

type Result = {
  amount: number,
  convertedAmount: number,
  from: string,
  to: string,
} | null;

const Exchange: React.FC = () => {
  const dispatch = useDispatch();

  const onConvert = useCallback((amount: number, from: string, to: string) => {
    dispatch(convert(amount, from, to));
  }, [dispatch]);

  const pending = useSelector<State, boolean>((state) => isPending(getExchange(state)));
  const result = useSelector<State, Result>((state) => getResult(getExchange(state)));
  const errorMessage = useSelector<State, string | null>(
    (state) => getErrorMessage(getExchange(state)),
  );

  return (
    <ExchangeComponent
      pending={pending}
      result={result || undefined}
      errorMessage={errorMessage || undefined}
      onConvert={onConvert}
    />
  );
};

export default Exchange;
