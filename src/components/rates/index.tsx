import React from 'react';
import {
  Icon, Result, Statistic, Card, Row, Col, Select,
  Spin, Alert,
} from 'antd';
import './index.css';

const { Option } = Select;

interface RatesProps {
  currencies: Array<string>,
  activeCurrency: string,
  rates?: Array<{
    currency: string,
    rate: number,
  }>,
  pending?: boolean,
  hasError?: boolean,
  onChangeCurrency?: (currency: string) => void,
}

const Rates: React.FC<RatesProps> = (props: RatesProps) => {
  const {
    currencies,
    activeCurrency,
    rates = [],
    pending = false,
    hasError = false,
    onChangeCurrency,
  } = props;

  return (
    <Result
      icon={<Icon type="fund" />}
      title={(
        <span className="rates-title">
          Currency Rates to
          <Select
            value={activeCurrency}
            onChange={onChangeCurrency}
          >
            {currencies.map((currency) => (
              <Option key={currency} value={currency}>
                {currency}
              </Option>
            ))}
          </Select>
        </span>
      )}
      extra={(
        <div className="rates">
          {pending && <Spin />}
          {hasError && <Alert message="Something wrong, try again later" type="error" showIcon />}
          <div>
            <Row>
              {rates.map(({ currency, rate }) => (
                <Col span={12} key={currency}>
                  <Card>
                    <Statistic
                      title={`1 ${currency.toUpperCase()} =`}
                      value={rate}
                      precision={2}
                      suffix={activeCurrency.toUpperCase()}
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      )}
    />
  );
};

export default Rates;
