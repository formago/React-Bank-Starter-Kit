
import { Layout, Popover, Button } from 'antd';
// import { Link, Switch, Route } from 'react-router-dom';
import React from 'react';
import { logout } from '../../actions';
const { Header } = Layout;

export default class HeaderArea extends React.Component {

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout() {
    console.log(this.props);
    store.dispatch(logout());   // eslint-disable-line no-undef
  }

  render() {
    return (
      <Header>
        <div style={{ textAlign: 'right' }}>
          <Popover placement="bottom" title="UserName" trigger="click">
            <Button type="ghost">UserName</Button>
          </Popover>

          <Button
            style={{ marginLeft: 20 }}
            htmlType="button"
            className="login-form-button"
            onClick={this.logout}
          >
            Выход
          </Button>
        </div>
      </Header>
    );
  }


}
