import React from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
import reducer from "./reducer";
import saga from "./saga";
import injectReducer from "utils/injectReducer";
import injectSaga from "utils/injectSaga";
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { makeSelectUsername, makeSelectPassword } from "./selectors";

import { changeUserName, changePassword, loginRequest, testEntry } from "./actions";

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { username } = this.props;

    return (
      <Form onSubmit={this.props.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator("userName", {
            rules: [{ required: true, message: "Введите имя пользователя" }]
          })(
            <Input
              onChange={this.props.onChangeUsername}
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Логин"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Введите пароль" }]
          })(
            <Input
              onChange={this.props.onChangePassword}
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Пароль"
            />
          )}
        </FormItem>
        <FormItem style={{textAlign:"right"}}>
          {/* {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)} */}
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{marginRight:"15px"}}
          >
            Войти
          </Button>

          <Button       
            htmlType="button"
            className="login-form-button"  
            onClick={this.props.testEntry}        >
            Тестовый вход
          </Button>
        </FormItem>
      </Form>
    );
  }
}

NormalLoginForm.propTypes = {
  form: "any"
};
const mapDispatchToProps = function (dispatch, props) {
  return {
    onChangeUsername: event => {
      dispatch(changeUserName(event.target.value));
    },
    onChangePassword: event => {
      dispatch(changePassword(event.target.value));
    },
    handleSubmit: event => {
      event.preventDefault();
      dispatch(loginRequest());
    },
    testEntry:event => {
      event.preventDefault();
      dispatch(testEntry());
    },
  };
};

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
  password: makeSelectPassword(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: "loginForm", reducer });
const withSaga = injectSaga({ key: "loginForm", saga });

export default compose(withReducer, withSaga, withConnect)(
  Form.create()(NormalLoginForm)
);
