import React from 'react';
import NormalLoginForm from '../../components/LoginForm';

export default class LoginPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <NormalLoginForm />
      </div>
    );
  }
}
