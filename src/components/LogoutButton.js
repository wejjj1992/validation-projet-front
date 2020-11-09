import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getCustomer, removeCustomerSession } from '../services/Common';

function LogoutButton() {

    const history = useHistory();

    const handleLogout = () => {
        removeCustomerSession();
        history.push('login');
    }

    let buttonCurrent;
    const customer = getCustomer();

    if (customer) {
        buttonCurrent = <span className="nav-link" onClick={handleLogout}>Déconnecter  {customer.email} </span>
    } else {
        buttonCurrent = <Link to="/login" className="nav-link">Connecter</Link>
    }


    return (
        <li className="nav-item border">
            {buttonCurrent}
        </li>
    );

}

export default LogoutButton;