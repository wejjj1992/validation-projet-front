import React, { Component } from 'react';
import SideBareAdmin from '../../components/SideBareAdmin';
import HeaderAdmin from '../../components/HeaderAdmin';
import ToolbarAdmin from '../../components/ToolbarAdmin';
import '../../components/SideBare.css';
import API from '../../services/api';
import Moment from 'moment';

export default class OrdersAdmin extends Component {

    state = {
        orders: []
    }

    componentDidMount() {

        API.get(`order/`)
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
                    <td>{order.customerId}</td>
                    <td>{order.totalPrice} TND</td>
                    <td className="text-center"> {order.products.length} </td>
                    <td className="text-center"> {Moment(order.dateCreated).format('MM-DD-YYYY hh:mm:ss')} </td>

                </tr>
            )
        } else {
            listOrders = <tr> <td colSpan="5">Pas des éléments trouvés</td> </tr>
        }
        return (
            <div>
                <HeaderAdmin />
                <div className="container-fluid">
                    <div className="row">
                        <SideBareAdmin />
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                            <ToolbarAdmin />
                            <h2>Commandes</h2>
                            <div className="table-responsive">
                                <table className="table table-striped table-sm">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Reference</th>
                                            <th>Client</th>
                                            <th>Prix</th>
                                            <th>Détaillé</th>
                                            <th>Date création</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listOrders}
                                    </tbody>
                                </table>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

