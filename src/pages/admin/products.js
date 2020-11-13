import React, { Component } from 'react';
import SideBareAdmin from '../../components/SideBareAdmin';
import HeaderAdmin from '../../components/HeaderAdmin';
import ToolbarAdmin from '../../components/ToolbarAdmin';
import '../../components/SideBare.css';
import API from '../../services/api';
import { Link } from 'react-router-dom';

export default class ProductsAdmin extends Component {


    state = {
        products: []
    }

    componentDidMount() {

        API.get(`product/`)
            .then(res => {
                /* console.log(res); */
                /* console.log(res.data);  */
                const products = res.data;
                this.setState({ products });
            });
    }
    handleDelete(product) {


        window.confirm("Veuillez vous supprimer ce produit d'id :" + product._id);

        API.delete(`product/` + product._id).then(res => {
            console.log(res);
            console.log(res.data);

            API.get(`product/`)
                .then(res => {
                    /* console.log(res); */
                    /* console.log(res.data);  */
                    const products = res.data;
                    this.setState({ products });
                });
        }).catch(error => {
            this.setState({ error: "Un problème est survenu. Veuillez réessayer plus tard." });
        });

    }

    render() {
        let listProducts;
        if (this.state.products.length !== 0) {
            listProducts = this.state.products.map(product =>
                <tr key={product._id}>
                    <td>{product._id}</td>
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td className="text-center"> <img src={product.imageUrl} alt="..." className="img-thumbnail" style={{ width: 100 + 'px' }} /> </td>
                    <td>{product.price} TND</td>
                    <td>
                        <div className="btn-group btn-group-sm align-middle text-center" role="group" aria-label="...">
                            <Link type="button" className="btn btn-success btn-sm" to={"/admin/products/" + product._id}  >Modifier</Link>
                            <button type="button" className="btn btn-danger btn-sm" onClick={() => this.handleDelete(product)} >Supprimer</button>
                        </div>
                    </td>
                </tr>
            )
        } else {
            listProducts = <tr>
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
                            <h2>Produits <Link type="button" className="btn btn-primary btn-sm float-right small" to="/admin/products/new">Ajouter</Link></h2>
                            <div id="admin-products" className="table-responsive">
                                <table className="table table-striped table-sm">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th width="200px">Titre</th>
                                            <th>description</th>
                                            <th className="text-center" width="200px">Image</th>
                                            <th width="100px">Prix</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listProducts}
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

