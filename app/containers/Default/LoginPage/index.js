import React from 'react';
import NormalLoginForm from './../../LoginForm';

export default class LoginPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ background: '#fff', padding: 30, maxWidth: 350, margin: 'auto', border: '1px solid lightgray', borderRadius: 4 }}>
        <NormalLoginForm />
      </div>
    );
  }
}
