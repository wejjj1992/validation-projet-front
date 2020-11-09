import React, { Component } from 'react';
import Header from '../../components/Header';
import './boutique.css';
import { getCartSession, getCustomer, getInfoCartSession, removeCartSession } from '../../services/Common';
import ApiNoS from '../../services/ApiNoS';


export default class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            infoCart: getInfoCartSession(),
            name: "test020",
            address: "address address ",
            tel: "0000000000",
            email: "test@test020.com",
            password: "testtest",
            error: null,
            success: null,
            guesses: getInfoCartSession().totaleProducts
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getCartCurrent() {
        return getCartSession();
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

    }

    handleSubmit(event) {
        console.log(event)
        event.preventDefault();
        if (getCustomer()) {

            if (this.state.infoCart.totaleProducts === 0) {
                this.setState({ error: "Pour passe un commande il faut au moin un produit ajouter au panier." });
            } else {
                ApiNoS.post(`order/b/`, {
                    customerId: getCustomer()._id,
                    totalPrice: getInfoCartSession().totalPriceProducts,
                    products: getInfoCartSession().products,
                }).then(res => {
                    /* console.log(res);
                    console.log(res.data); */
                    removeCartSession();

                    this.setState({ success: "Votre commande est ajouté avec success !!!", guesses: 0 });
                    /* this.props.history.push('/'); */

                }).catch(error => {
                    this.setState({ error: "Un problème est survenu. Veuillez réessayer plus tard." });
                });
            }
        }
        else {
            this.props.history.push('/login');
        }

    }


    render() {
        const { infoCart } = this.state

        let listProducts;
        if (infoCart.products.length !== 0) {
            listProducts = infoCart.products.map(product =>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 className="my-0">{product.title}</h6>
                        <small className="text-muted">{product.description}</small>
                        <small className="text-muted">{product.count} x {product.price}</small>
                    </div>
                    <span className="text-muted">{product.totalPriceProduct}</span>
                </li>
            )
        } else {
            listProducts = <li className="list-group-item d-flex justify-content-between lh-condensed" > Pas des produits trouvée </li >
        }

        return (
            <div className="container-fluid">
                <Header guesses={this.state.guesses} />
                <main role="main" className="flex-shrink-0">
                    <div className="container container-body">
                        <div className="row">
                            <div className="col-md-6 order-md-2 offset-3 mb-4">
                                <h4 className="d-flex justify-content-between align-items-center mb-3">
                                    <span className="text-muted">Votre panier</span>
                                    <span className="badge badge-secondary badge-pill">{this.state.guesses}</span>
                                </h4>
                                {this.state.error && <><div className="alert alert-danger" role="alert"> {this.state.error}</div></>}
                                {this.state.success && <><div className="alert alert-success" role="alert"> {this.state.success}</div></>}
                                {this.state.success === null &&
                                    <>
                                        <ul id="list-order" className="list-group mb-3">
                                            {listProducts}
                                            <li className="list-group-item d-flex justify-content-between">
                                                <span>Total (TND)</span>
                                                <strong>{infoCart.totalPriceProducts}</strong>
                                            </li>
                                        </ul>
                                        <form id="btn-order" className="needs-validation" onSubmit={this.handleSubmit} >
                                            <button className="btn btn-primary btn-lg btn-block" type="submit">Commander</button>
                                        </form>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </main >
            </div >
        );
    }
}

