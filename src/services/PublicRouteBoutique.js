import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getCustomerToken } from './Common';

// handle the public routes
function PublicRouteBoutique({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => !getCustomerToken() ? <Component {...props} /> : <Redirect to={{ pathname: '/profil' }} />}
    />
  )
}

export default PublicRouteBoutique;