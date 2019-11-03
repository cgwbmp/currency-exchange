import React from 'react';
import {
  Icon, Result, Form, Input, Statistic,
} from 'antd';
import { parseExchangeQuery } from '../utils';
import './index.css';

const { useState, useCallback } = React;

interface ExchangeProps {
  result?: {
    amount: number,
    convertedAmount: number,
    from: string,
    to: string,
  },
  errorMessage?: string,
  pending?: boolean,
  onConvert?: (amount: number, from: string, to: string) => void,
}

const Exchange: React.FC<ExchangeProps> = (props: ExchangeProps) => {
  const {
    result,
    errorMessage,
    pending,
    onConvert,
  } = props;

  const [isInvalidQuery, setIsInvalidQuery] = useState(false);
  const hasErrors = isInvalidQuery || !!errorMessage;

  const onSearch = useCallback((query) => {
    const parseResult = parseExchangeQuery(query);
    if (parseResult) {
      setIsInvalidQuery(false);
      const { amount, from, to } = parseResult;
      onConvert && onConvert(amount, from, to);
    } else {
      setIsInvalidQuery(true);
    }
  }, [onConvert, setIsInvalidQuery]);

  return (
    <Result
      icon={<Icon type="transaction" />}
      title="Exchange to another currency"
      subTitle="Type the amount with current currency and which currency to convert"
      extra={(
        <div className="exchange">
          <Form>
            <Form.Item
              validateStatus={hasErrors ? 'error' : ''}
              help={errorMessage}
            >
              <Input.Search
                size="large"
                enterButton={<Icon type="enter" />}
                placeholder="100 usd in euro"
                loading={pending}
                aria-label="Send"
                onSearch={onSearch}
              />
            </Form.Item>
          </Form>
          {(result && !pending) ? (
            <div className="exchange-result">
              <Statistic
                title={`${result.amount} ${result.from.toUpperCase()} to equal`}
                value={result.convertedAmount}
                precision={2}
                suffix={result.to.toUpperCase()}
              />
            </div>
          ) : null}
        </div>
      )}
    />
  );
};

export default Exchange;
