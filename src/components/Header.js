// Header.js
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import CartCount from './CartCount'
import LogoutButton from './LogoutButton';
import { getCustomer } from '../services/Common';
import imagePath from '../images/logo.png' ;

export default class Header extends Component {
    state = {
        customer: getCustomer()
    }


    render() {
        const customer = this.state.customer;
        let calssActive ;
        if(this.props.guesses > 0){
            calssActive = "nav-link active";
        }else {
            calssActive="nav-link"
        }
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-primary fixed-top bg-primary">
                    <Link className="nav-link" to="/">
                      <img src={imagePath}  alt=" logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item border">
                                <Link className={calssActive} to="/panier">
                                    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-cart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                    </svg>
                                    <span className="ml-2">Panier <CartCount guesses={this.props.guesses} /> </span>
                                </Link>
                            </li>
                            {customer && <>
                                <li className="nav-item border">
                                    <Link className="nav-link" to="/profil">
                                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-file-earmark-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                                            <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z" />
                                            <path fillRule="evenodd" d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                            <path d="M8 12c4 0 5 1.755 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12z" />
                                        </svg>
                                        <span className="ml-2">Profil</span>
                                    </Link>
                                </li>
                                <li className="nav-item border">
                                    <Link className="nav-link" to="/mes-commandes">
                                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-file-earmark-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                                            <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z" />
                                            <path fillRule="evenodd" d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                            <path d="M8 12c4 0 5 1.755 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12z" />
                                        </svg>
                                        <span className="ml-2">Mes commandes</span>
                                    </Link>
                                </li>
                            </>
                            }
                            <LogoutButton {...this.props} />
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}