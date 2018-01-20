import React from 'react';
import { Link } from 'react-router-dom';

export default class LoginPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Link to="/Cabinet/">Login to Cabinet</Link>
      </div>
    );
  }
}
