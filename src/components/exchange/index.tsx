import React from 'react';
import Result from 'antd/es/result';
import Icon from 'antd/es/icon';
import Form from 'antd/es/form';
import Input from 'antd/es/input';
import Statistic from 'antd/es/statistic';
import 'antd/es/result/style/css';
import 'antd/es/icon/style/css';
import 'antd/es/form/style/css';
import 'antd/es/input/style/css';
import 'antd/es/statistic/style/css';
import './index.css';

interface ExchangeProps {
  result?: {
    amount: number,
    convertedAmount: number,
    from: string,
    to: string,
  },
  errorMessage?: string,
  pending?: boolean,
  onSubmit?: (query: string) => void,
}

const Exchange: React.FC<ExchangeProps> = (props: ExchangeProps) => {
  const {
    result,
    errorMessage,
    pending,
    onSubmit,
  } = props;
  return (
    <Result
      icon={<Icon type="transaction" />}
      title="Exchange to another currency"
      subTitle="Type the amount with current currency and which currency to convert"
      extra={(
        <div className="exchange">
          <Form>
            <Form.Item
              validateStatus={errorMessage && 'error'}
              help={errorMessage}
            >
              <Input.Search
                size="large"
                enterButton={<Icon type="enter" />}
                placeholder="100 usd in euro"
                loading={pending}
                aria-label="Send"
                onSearch={onSubmit}
              />
            </Form.Item>
          </Form>
          {(result && !pending) ? (
            <div className="exchange-result">
              <Statistic
                title={`${result.amount} ${result.from} to equal`}
                value={result.convertedAmount}
                precision={2}
                suffix={result.to}
              />
            </div>
          ) : null}
        </div>
      )}
    />
  );
};

export default Exchange;
