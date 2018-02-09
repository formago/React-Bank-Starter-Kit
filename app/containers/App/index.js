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

// import { getMenuItems } from '../../components/Menu/actions';

export default function App() {
  // IS CALLED BUT HERE store = {} AND IS NOT A FUNCTION, CHECK IT LATER!
  // function getMenu() {
  //   const store = this.context;
  //   const { menuData } = store.getState();
  //   if (!menuData) {
  //     store.dispatch(getMenuItems());
  //   }
  // }

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Default} />
        {/* <Route render={getMenu}>
          <Route path="/Cabinet" component={Cabinet} />
        </Route> */}
        <Route path="/Cabinet" component={Cabinet} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
