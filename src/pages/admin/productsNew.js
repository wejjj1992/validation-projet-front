import React, { Component } from 'react';
import SideBareAdmin from '../../components/SideBareAdmin';
import HeaderAdmin from '../../components/HeaderAdmin';
import ToolbarAdmin from '../../components/ToolbarAdmin';
import '../../components/SideBare.css';
import API from '../../services/api';

export default class ProductsNewAdmin extends Component {


    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            imageUrl: "https://www.presse-citron.net/wordpress_prod/wp-content/uploads/2018/11/meilleure-banque-image.jpg",
            price: '',
            error: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        API.post(`product/`, {
            title: this.state.title,
            description: this.state.description,
            imageUrl: this.state.imageUrl,
            price: this.state.price
        }).then(res => {
            /*             console.log(res);
                        console.log(res.data); */
            this.props.history.push('/admin/products/');
        }).catch(error => {
            this.setState({ error: "Un problème est survenu. Veuillez réessayer plus tard." });
        });
    }

    render() {

        return (
            <div>
                <HeaderAdmin />
                <div className="container-fluid">
                    <div className="row">
                        <SideBareAdmin />
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                            <ToolbarAdmin />
                            <h2>Produits</h2>
                            {this.state.error && <><div className="alert alert-danger" role="alert"> {this.state.error}</div></>}
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="formControlInputTitre">Titre</label>
                                    <input value={this.state.title} onChange={this.handleChange} type="text" className="form-control" name="title" id="formControlInputTitre" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formControlInputDescription">Description</label>
                                    <textarea value={this.state.description} onChange={this.handleChange} className="form-control" name="description" id="formControlInputDescription" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="formControlInputImage">Lien image</label>
                                    <input value={this.state.imageUrl} onChange={this.handleChange} type="url" className="form-control" name="imageUrl" id="formControlInputImage" pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)(.jpg|.png|.gif)" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="formControlInputPrix">Prix</label>
                                    <input value={this.state.price} onChange={this.handleChange} type="number" className="form-control" name="price" id="formControlInputPrix" minLength="0" min="1" required />
                                </div>
                                <button className="btn btn-primary" type="submit">Envoyer</button>
                            </form>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

