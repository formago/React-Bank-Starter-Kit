import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import LoginPage from 'containers/Default/LoginPage/Loadable';

import authorizeHelper from 'utils/authorize';

const { Header, Content, Footer } = Layout;
const MenuItem = Menu.Item;

export default class Default extends React.Component {

  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };
  
  componentWillMount() {
    const { history } = this.props;   
    if (authorizeHelper.isAuthorized())
      history.push("/Cabinet");
  }

  render() {

    // if (true)
    //   return <Redirect to="/Cabinet" push={true} />
    // else
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
            <MenuItem key="1">React-Bank-Starter-Kit</MenuItem>
            <MenuItem key="2">About</MenuItem>
            <MenuItem key="3">Credits</MenuItem>
          </Menu>
        </Header>
        <Content style={{ padding: '50px' }}>
          <div>
            <Switch>
              <Route exact path="/" component={LoginPage} />
            </Switch>
          </div>
        </Content>
        <Footer>
        </Footer>
      </Layout>
    );
  }
}
