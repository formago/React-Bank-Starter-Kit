import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import Documents from '../index';
import messages from '../messages';

describe('<Documents />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(
      <Documents />
    );
    expect(renderedComponent.contains(
      <FormattedMessage {...messages.header} />
    )).toEqual(true);
  });
});
