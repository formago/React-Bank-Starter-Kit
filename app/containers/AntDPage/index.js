import React from 'react';
import { Layout, DatePicker, Button, Row, Col } from 'antd';

export default class AntDPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Layout>
        <Layout.Header>header</Layout.Header>
        <Layout.Content>
          <Row gutter={16} justify={'center'} align={'middle'}>
            <Col span={24}> <Button href="/">Go to Home</Button> </Col>
            <Col push={11}> <Button href="/">Go to Home</Button> </Col>
            <Col span={24}> <Button href="/">Go to Home</Button> </Col>
            <Col span={24}> <Button href="/">Go to Home</Button> </Col>
          </Row>
          <DatePicker />
        </Layout.Content>
        <Layout.Footer>footer</Layout.Footer>
      </Layout>
    );
  }
}
