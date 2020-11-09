import React, { Component } from 'react';
import Header from '../../components/Header';
import './boutique.css';
import { getCartSession, getCustomer, getInfoCartSession } from '../../services/Common';


export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            infoCart: getInfoCartSession(),
            customer: getCustomer(),
            error: null
        }
    }

    getCartCurrent() {
        return getCartSession();
    }

    render() {
        const { infoCart, customer } = this.state
        return (
            <div className="container-fluid">
                <Header />
                <main role="main" className="flex-shrink-0">
                    <div className="container container-body">
                        <div className="row">
                            <div className="col-md-6 order-md-2 offset-3 mb-4">
                                <h4 className="d-flex justify-content-between align-items-center mb-3">
                                    <span className="text-muted">Votre panier</span>
                                    <span className="badge badge-secondary badge-pill">{infoCart.totaleProducts}</span>
                                </h4>
                                <ul className="list-group mb-3">
                                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                                        <div>
                                            <h6 className="my-0">Nom </h6>
                                        </div>
                                        <span className="text-muted">{customer.name}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                                        <div>
                                            <h6 className="my-0">Email</h6>
                                        </div>
                                        <span className="text-muted">{customer.email}</span>

                                    </li>

                                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                                        <div>
                                            <h6 className="my-0"> Adresse </h6>
                                        </div>
                                        <span className="text-muted">{customer.address}</span>
                                    </li>

                                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                                        <div>
                                            <h6 className="my-0">Télephone</h6>
                                        </div>
                                        <span className="text-muted">{customer.tel}</span>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </main >
            </div >
        );
    }
}

