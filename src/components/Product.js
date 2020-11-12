import React from 'react'
import PropTypes from 'prop-types'


const Product = ({ product, onClick }) => (
    <div className="col-md-4 product">
        <div className="card mb-4 shadow-sm">
            <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={product.imageUrl} alt="" />
            <div className="card-body">
                <h3 className="card-text text-center">{product.title}</h3>
                <p className="card-text text-center">{product.description.substring(0,120)}....</p>
                <p className="card-text text-center">{product.price} TND</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group m-auto">
                        <button type="button" className="btn btn-sm btn-outline-secondary text-center"  onClick={() => onClick(product)}>Ajouter au panier </button>
                    </div>
                </div>
            </div>
        </div>
    </div >
)

Product.defaultProps = {
    id: 1,
    title: "title 1",
    description: "description description description",
    imageUrl: "logo512.png",
    price: "300",
}


Product.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Product