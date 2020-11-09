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

    render() {
        let listProducts;
        if (this.state.products.length !== 0) {
            listProducts = this.state.products.map(product =>
                <tr>
                    <td>{product._id}</td>
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td className="text-center"> <img src={product.imageUrl} alt="..." className="img-thumbnail" style={{ width: 100 + 'px' }} /> </td>
                    <td>{product.price} TND</td>
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
                            <h2>Produits <Link className="badge badge-primary float-right small" to="/admin/products/new"  style={{ fontSize: 60 + '%' }}>Ajouter</Link></h2>
                            <div className="table-responsive">
                                <table className="table table-striped table-sm">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th width="200px">Titre</th>
                                            <th>description</th>
                                            <th className="text-center" width="200px">Image</th>
                                            <th width="100px">Prix</th>
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

