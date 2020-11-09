import React from 'react'
import PropTypes from 'prop-types'
import { getCartSession, getInfoCartSession } from '../services/Common'

const CartCount = ({ guesses }) => <span className="badge badge-light">{guesses}</span>

CartCount.propTypes = {
    guesses: PropTypes.number,
    cartProducts: PropTypes.array
}

CartCount.defaultProps = {
    guesses: getInfoCartSession().totaleProducts,
    cartProducts: getCartSession()
}

export default CartCount