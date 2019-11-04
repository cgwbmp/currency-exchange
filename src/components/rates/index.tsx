import React from 'react';
import {
  Icon, Result, Statistic, Card, Row, Col, Select,
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
  onChangeCurrency?: (currency: string) => void,
}

const Rates: React.FC<RatesProps> = (props: RatesProps) => {
  const {
    currencies,
    activeCurrency,
    rates = [],
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
      )}
    />
  );
};

export default Rates;
