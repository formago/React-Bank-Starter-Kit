import React from 'react';
import { DatePicker, Button, Row, Col } from 'antd';

export default class AntDPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Row gutter={16} justify={'center'} align={'middle'}>
          <Col span={24}> <Button href="/">Go to Home</Button> </Col>
          <Col push={11}> <Button href="/">Go to Home</Button> </Col>
          <Col span={24}> <Button href="/">Go to Home</Button> </Col>
          <Col span={24}> <Button href="/">Go to Home</Button> </Col>
        </Row>
        <DatePicker />
      </div>
    );
  }
}
