import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default class Home extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
      </div>
    );
  }
}
