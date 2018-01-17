import React from 'react';
import { Layout, DatePicker, Button, Row, Col } from 'antd';

const Header = Layout.Header;
const Content = Layout.Content;
const Footer = Layout.Footer;

export default class AntDPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Layout>
        <Header>header</Header>
        <Content>
          <Row gutter={16} justify={'center'} align={'middle'}>
            <Col span={24}> <Button href="/">Go to Home</Button> </Col>
            <Col push={11}> <Button href="/">Go to Home</Button> </Col>
            <Col span={24}> <Button href="/">Go to Home</Button> </Col>
            <Col span={24}> <Button href="/">Go to Home</Button> </Col>
          </Row>
          <DatePicker />
        </Content>
        <Footer>footer</Footer>
      </Layout>
    );
  }
}
