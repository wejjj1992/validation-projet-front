import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getCustomerToken } from './Common';

// handle the private routes
function PrivateRouteBoutique({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => getCustomerToken() ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
}

export default PrivateRouteBoutique;