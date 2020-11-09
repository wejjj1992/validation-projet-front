import React, { Component } from 'react';
import Header from '../../components/Header';
import './boutique.css';
import { getCustomer, getInfoCartSession } from '../../services/Common';
import ApiNoS from '../../services/ApiNoS';
import Moment from 'moment';

export default class Orders extends Component {

    state = {
        orders: [],
        guesses: getInfoCartSession().totaleProducts
    }

    componentDidMount() {
        console.log(getCustomer()._id);
        ApiNoS.get(`order/b/cutomer/`, {
            customerId: getCustomer()._id
        })

            .then(res => {
                /* console.log(res); */
                console.log(res.data);
                const orders = res.data;
                this.setState({ orders });
            });

    }

    render() {
        let listOrders = '<tr> <td colSpan="5">Pas des éléments trouvés</td> </tr>';
        Moment.locale('fr');

        console.log(this.state.orders.length);
        if (this.state.orders.length !== 0) {
            listOrders = this.state.orders.map(order =>
                <tr>
                    <td>{order._id}</td>
                    <td>{order.reference}</td>
                    <td>{order.totalPrice} TND</td>
                    <td className="text-center">
                        {order.products.length === 0 && order.products.length}
                        <table width="100%">
                            {order.products.map(product =>
                                <tr width="100%">
                                    <td width="60%">{product.title}</td>
                                    <td width="20%">{product.price} X {product.count}</td>
                                    <td width="20%">{product.totalPriceProduct} TND</td>
                                </tr>
                            )}
                        </table>
                    </td>
                    <td className="text-center"> {Moment(order.dateCreated).format('MM-DD-YYYY hh:mm:ss')} </td>

                </tr>
            )
        } else {
            listOrders = <tr> <td colSpan="5">Pas des éléments trouvés</td> </tr>
        }

        return (
            <div className="container">
                <Header guesses={this.state.guesses} />
                <main role="main" className="flex-shrink-0">
                    <div className="container container-body">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Mes Commandes</h2>
                                <div className="table-responsive">
                                    <table className="table table-striped table-sm">
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Reference</th>
                                                <th>Prix</th>
                                                <th className="text-center">Détails produits</th>
                                                <th>Date création</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {listOrders}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </main >
            </div >
        );
    }
}

