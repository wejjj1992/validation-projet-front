import React, { Component } from 'react';
import SideBareAdmin from '../../components/SideBareAdmin';
import HeaderAdmin from '../../components/HeaderAdmin';
import ToolbarAdmin from '../../components/ToolbarAdmin';
import '../../components/SideBare.css';
import API from '../../services/api';

export default class CustomersAdmin extends Component {

    state = {
        customers: []
    }

    componentDidMount() {

        API.get(`customer/`)
            .then(res => {
                /* console.log(res);
                console.log(res.data); */
                const customers = res.data;
                this.setState({ customers });
            });

    }

    render() {
        let listCustomers;
        if (this.state.customers.length !== 0) {
            listCustomers = this.state.customers.map(customer =>
                <tr>
                    <td>{customer._id}</td>
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td className="text-center">{customer.address}</td>
                    <td>{customer.tel}</td>
                </tr>
            )
        } else {
            listCustomers = <tr>
                <td colSpan="5">Pas de produits trouvee</td>
            </tr>
        }
        return (
            <div>
                <HeaderAdmin />
                <div className="container-fluid">
                    <div className="row">
                        <SideBareAdmin />
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                            <ToolbarAdmin />
                            <h2>Clients</h2>
                            <div className="table-responsive">
                                <table className="table table-striped table-sm">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Nom</th>
                                            <th>Email</th>
                                            <th className="text-center">Adresse</th>
                                            <th>Télephone</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listCustomers}
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

