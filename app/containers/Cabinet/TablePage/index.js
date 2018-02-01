import React from 'react';
import { Link } from 'react-router-dom';
import TableDemo from '../../../components/TableDemo';

export default class TablePage extends React.PureComponent {   // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Link to="/">Go to Home Page</Link>
        <TableDemo />
      </div>
    );
  }
}
