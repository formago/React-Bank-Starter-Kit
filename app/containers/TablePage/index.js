import React from 'react';
import { Link } from 'react-router-dom';
import Demo from '../TableComponent';

export default class TablePage extends React.Component {   // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <Link to="/">Go to Home Page</Link>
        <Demo />
      </div>
    );
  }
}
