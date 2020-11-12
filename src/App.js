import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './pages/boutique/home';
import HomeAdmin from './pages/admin/home';
import CustomersAdmin from './pages/admin/customers';
import ProductsAdmin from './pages/admin/products';
import OrdersAdmin from './pages/admin/orders';
import LoginAdmin from './pages/admin/login';
import PrivateRoute from './services/PrivateRoute';
import PrivateRouteBoutique from './services/PrivateRouteBoutique';
import PublicRouteBoutique from './services/PublicRouteBoutique';
import PublicRoute from './services/PublicRoute';
import ProductsNewAdmin from './pages/admin/productsNew';
import Cart from './pages/boutique/cart';
import Singup from './pages/boutique/singup';
import Login from './pages/boutique/login';
import Orders from './pages/boutique/orders';
import Profile from './pages/boutique/profile';
import PublicRouteAllBoutique from './services/PublicRouteAllBoutique';


class App extends Component {

  render() {

    return (
      <Router>
        <Switch>

          {/* route  boutique */}
          <Route exact path="/">
            <Home />
          </Route>
          <PublicRouteAllBoutique path="/panier" component={Cart} />
          <PublicRouteBoutique path="/inscription" component={Singup} />
          <PublicRouteBoutique path="/login" component={Login} />
          <PrivateRouteBoutique path="/mes-commandes" component={Orders} />
          <PrivateRouteBoutique path="/profil" component={Profile} />
          {/* route admin */}
          <PrivateRoute path="/admin/products/new" component={ProductsNewAdmin} />
          <PrivateRoute path="/admin/products" component={ProductsAdmin} />
          <PrivateRoute path="/admin/orders" component={OrdersAdmin} />
          <PrivateRoute path="/admin/customers" component={CustomersAdmin} />
          <PublicRoute path="/admin/login" component={LoginAdmin} />
          <PrivateRoute path="/admin" component={HomeAdmin} />

        </Switch >
      </Router >
    )
  }

}


export default App;
