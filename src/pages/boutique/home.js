import React, { Component } from 'react';
import Header from '../../components/Header';
import Product from '../../components/Product';
import ApiNoS from '../../services/ApiNoS';
import './boutique.css';
import { getCartSession, getInfoCartSession, setCartSession } from '../../services/Common';


export default class Home extends Component {
    state = {
        guesses: getInfoCartSession().totaleProducts,
        products: [],
        cart: getCartSession()
    }

    componentDidMount() {

        ApiNoS.get(`product/b/`)
            .then(res => {
                const products = res.data;
                this.setState({ products });
            });
    }

    // Arrow fx for binding
    handleProductClick = (product) => {
        const { cart } = this.state;
        cart.push(product);
        const newCart = cart;
        setCartSession(newCart);
        this.setState({ guesses: getInfoCartSession().totaleProducts, cart: newCart })
    }

    render() {
        const { guesses, products } = this.state

        return (
            <div className="container-fluid">
                <Header guesses={guesses} />
                <main role="main" className="flex-shrink-0">
                    <div className="container container-body">
                        <div className="row">
                            {products.map((product, index) => (
                                <Product key={index} index={index} product={product} onClick={this.handleProductClick} />
                            ))}

                        </div>
                    </div>
                </main>

            </div>
        );
    }
}

