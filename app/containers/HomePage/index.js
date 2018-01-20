import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import messages from './messages';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h1 className="form-page__form-wrapper">
          <FormattedMessage {...messages.header} />
        </h1>
        <Button href="/AntD">Go to Ant Design Page</Button>
        <Button href="/Grid">Go to Grid Page</Button>
        <Link to="/AntD">Go to Ant Design Page</Link>
      </div>

    );
  }
}
