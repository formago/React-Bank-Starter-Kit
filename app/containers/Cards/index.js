import React from "react";
import { FormattedMessage } from "react-intl";
import { Row, Col, Icon, Tooltip } from "antd";
import { Pie, yuan, ChartCard, Field } from "ant-design-pro/lib/Charts";
import Trend from "ant-design-pro/lib/Trend";
import numeral from "numeral";
import messages from './messages';

export default class Cards extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    const salesPieData = [
      {
        x: "Услуги связи",
        y: 4544
      },
      {
        x: "ЖКХ",
        y: 3321
      },
      {
        x: "Кредиты",
        y: 3113
      },
      {
        x: "Налоги",
        y: 2341
      },
      {
        x: "Аренда жилья",
        y: 1231
      },
      {
        x: "Прочее",
        y: 1231
      }
    ];
    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <Row gutter={16} type="flex" justify="space-around">
          <Col span={12}>
            <ChartCard title="Мои расходы">
              <Pie
                hasLegend
                title="Мои расходы"
                subTitle="Мои расходы"
                total={() => (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: yuan(
                        salesPieData.reduce((pre, now) => now.y + pre, 0)
                      )
                    }}
                  />
                )}
                data={salesPieData}
                valueFormat={val => (
                  <span dangerouslySetInnerHTML={{ __html: yuan(val) }} />
                )}
                height={294}
              />
            </ChartCard>
          </Col>
          <Col span={12}>
            <ChartCard
              title="Курсы валют"
              action={
                <Tooltip title="指标说明">
                  <Icon type="info-circle-o" />
                </Tooltip>
              }
              total={() => (
                <span dangerouslySetInnerHTML={{ __html: yuan(126560) }} />
              )}
              footer={
                <Field
                  label="日均销售额"
                  value={numeral(12423).format("0,0")}
                />
              }
              contentHeight={46}
            >
              <span>
                周同比
                <Trend
                  flag="up"
                  style={{ marginLeft: 8, color: "rgba(0,0,0,.85)" }}
                >
                  12%
                </Trend>
              </span>
              <span style={{ marginLeft: 16 }}>
                日环比
                <Trend
                  flag="down"
                  style={{ marginLeft: 8, color: "rgba(0,0,0,.85)" }}
                >
                  11%
                </Trend>
              </span>
            </ChartCard>
          </Col>
        </Row>
      </div>
    );
  }
}
