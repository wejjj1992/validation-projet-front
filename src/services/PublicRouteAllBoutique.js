import React from 'react';
import { Route } from 'react-router-dom';

// handle the public routes
function PublicRouteAllBoutique({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => <Component {...props} />}
    />
  )
}

export default PublicRouteAllBoutique;