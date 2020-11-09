// Header.js
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logout from '../pages/admin/logout';

export default class HeaderAdmin extends Component {

    /*  const user = getUser(); */

    /*     componentWillMount() {
            document.querySelector('body').className += ' admin'
        } */

    render() {
        return (
            <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <Link className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" to="/admin">JouJou</Link>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <Logout {...this.props} />
                    </li>
                </ul>
            </nav>
        )
    }
}