import React from 'react';
import {
    Route,
    Redirect,
} from 'react-router-dom';
import authHelper from '../../helpers/authHelper';


const PrivateRoute = ({ component: Component, ...rest }) => (   // eslint-disable-line react/prop-types
  <Route
    {...rest}
    render={(props) =>
        authHelper.loggedIn() ? (
          <Component {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: '/',
                  // state: { from: props.location }
                }}
              />
                )
        }
  />
);

export default PrivateRoute;
