import React, { Component } from 'react';
import Header from '../../components/Header';
import './boutique.css';
import { getCartSession, getInfoCartSession, setCustomerSession } from '../../services/Common';
import api from '../../services/ApiNoS';


export default class Singup extends Component {

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
        event.preventDefault();
        console.log(this.props.name);

        api.post(`customer/b/signup`, {
            name: this.state.name,
            address: this.state.address,
            tel: this.state.tel,
            email: this.state.email,
            password: this.state.password
        }).then(res => {
            console.log(res);
            console.log(res.data);
            setCustomerSession(res.data.token, res.data.customer);
            window.location.reload(true);
            this.props.history.push('/panier');

        }).catch(error => {
            this.setState({ error: "Un problème est survenu. Veuillez réessayer plus tard." });
        });
    }


    render() {

        return (
            <div className="container-fluid">
                <Header guesses={this.state.guesses} />
                <main role="main" className="flex-shrink-0">
                    <div className="container container-body">
                        <div className="row">
                            <div className="col-md-8 order-md-1">
                                {this.state.error && <><div className="alert alert-danger" role="alert"> {this.state.error}</div></>}
                                <h4 className="mb-3">Inscription</h4>
                                <form className="needs-validation" onSubmit={this.handleSubmit} >
                                    <div className="mb-3">
                                        <label htmlFor="username">Nom et prenom</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">*</span>
                                            </div>
                                            <input value={this.state.name} onChange={this.handleChange} type="text" className="form-control" name="name" id="name" placeholder="Nom et prenom" required />
                                            <div className="invalid-feedback" style={{ width: 100 + '%' }}>
                                                Your username is required.
            </div>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="email">Email  </label>
                                        <input value={this.state.email} onChange={this.handleChange} type="email" className="form-control" name="email" id="email" placeholder="you@example.com" required />
                                        <div className="invalid-feedback">
                                            Please enter a valid email address for shipping updates.
          </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="email">Mot de passe   </label>
                                        <input value={this.state.password} onChange={this.handleChange} type="password" className="form-control" name="password" id="password" required />
                                        <div className="invalid-feedback">
                                            Please enter a valid password address for shipping updates.
          </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="address">Adresse</label>
                                        <input value={this.state.address} onChange={this.handleChange} type="text" className="form-control" name="address" id="address" placeholder="1234 Main St" required />
                                        <div className="invalid-feedback">
                                            Please enter your shipping address.
          </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="address2">Téléphone <span className="text-muted">(Optional)</span></label>
                                        <input value={this.state.tel} onChange={this.handleChange} type="text" className="form-control" name="tel" id="tel" placeholder="Téléphone" />
                                    </div>
                                    <hr className="mb-4" />
                                    <button className="btn btn-primary btn-lg btn-block" type="submit">s'inscrire</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main >
            </div >
        );
    }
}

