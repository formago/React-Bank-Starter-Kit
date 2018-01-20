import React from 'react';

import { Link, Switch, Route } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import Home from 'containers/Home/Loadable';
import Documents from 'containers/Documents/Loadable';
import Statements from 'containers/Statements/Loadable';
import AntDPage from 'containers/AntDPage/Loadable';
import TablePage from 'containers/TablePage/Loadable';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class Cabinet extends React.PureComponent {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="home" />
              <span>Home</span>
              <Link to="/Cabinet/"></Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="file" />
              <span>Documents</span>
              <Link to="/Cabinet/Documents"></Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="file-text" />
              <span>Statements</span>
              <Link to="/Cabinet/Statements"></Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="smile-o" /><span>Testing</span></span>}
            >
              <Menu.Item key="4">
                <span>Ant D</span>
                <Link to="/Cabinet/AntDPage"></Link>
              </Menu.Item>
              <Menu.Item key="5">
                <span>Table</span>
                <Link to="/Cabinet/TablePage"></Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ color: 'white' }}>
            <span>header</span>
          </Header>
          <Content>
            <Switch>
              <Route exact path="/Cabinet" component={Home} />
              <Route path="/Cabinet/Documents" component={Documents} />
              <Route path="/Cabinet/Statements" component={Statements} />
              <Route path="/Cabinet/AntDPage" component={AntDPage} />
              <Route path="/Cabinet/TablePage" component={TablePage} />
            </Switch>
          </Content>
          <Footer>footer</Footer>
        </Layout>
      </Layout>
    );
  }
}
