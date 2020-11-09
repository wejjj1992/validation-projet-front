// Header.js
import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class SideBareAdmin extends Component {


    render() {

        return (
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div className="sidebar-sticky pt-3">
                    <ul className="nav flex-column">

                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/admin/home">
                                <span data-feather="admin"></span>
                                Accueil
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/admin/products">
                                <span data-feather="shopping-cart"></span>
                                Produits
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/admin/orders">
                                <span data-feather="file"></span>
                                Commandes
                            </NavLink >
                        </li>

                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/admin/customers">
                                <span data-feather="users"></span>
                                Clients
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </nav>

        )
    }
}