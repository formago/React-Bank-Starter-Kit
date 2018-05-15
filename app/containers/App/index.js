/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Cabinet from 'containers/Cabinet/Loadable';
import Default from 'containers/Default/Loadable';
import PrivateRoute from 'components/PrivateRoute';

// import { getMenuItems } from '../../components/Menu/actions';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Default} />
        <PrivateRoute path="/Cabinet" component={Cabinet} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
