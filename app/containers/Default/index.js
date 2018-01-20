import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import LoginPage from 'containers/LoginPage/Loadable';

const { Header, Content, Footer } = Layout;

export default class Default extends React.PureComponent {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout className="layout" style={{ minHeight: '100vh' }}>
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">React-Bank-Starter-Kit</Menu.Item>
            <Menu.Item key="2">About</Menu.Item>
            <Menu.Item key="3">Credits</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Switch>
              <Route exact path="/" component={LoginPage} />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
           © 2018 Created by someone
        </Footer>
      </Layout>
    );
  }
}
