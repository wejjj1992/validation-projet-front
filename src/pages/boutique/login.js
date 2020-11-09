import React, { useState } from "react";
import { getInfoCartSession, setCustomerSession } from '../../services/Common';
import './login.css';
import ApiNoS from "../../services/ApiNoS";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import Axios from "axios";

function Login(props) {

    const [loading, setLoading] = useState(false);
    const username = useFormInput('admin@admin.com');
    const password = useFormInput('admin');
    const [error, setError] = useState(null);

    // handle button click of login form
    const handleLogin = () => {

        setError(null);
        setLoading(true);

        Axios.post(`http://localhost:3000/api/customer/b/login`, { email: username.value, password: password.value })
            .then(response => {
                setLoading(false);
                setCustomerSession(response.data.token, response.data.customer);
                /*         console.log(response); */
                window.location.reload(true);
                props.history.push('/panier');
            }).catch(error => {
                setLoading(false);
                console.log(error)
                if (error.response.status === 401) setError(error.response.data.error);
                else setError("Something went wrong. Please try again later.");
            });
    }

    return (
        <div className="container-fluid">
            <Header guesses={getInfoCartSession().totaleProducts} />
            <main role="main" className="flex-shrink-0">
                <div className="container container-body">
                    <div className="row">
                        <div className="login-body my-5 m-auto">
                            <div className="login">
                                <form className="form-signin">
                                    <h1 className="h3 mb-3 font-weight-normal text-center">Login</h1>
                                    <label htmlFor="inputEmail" className="sr-only">Email</label>
                                    <input className="form-control" type="email" {...username} autoComplete="new-email" />
                                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                                    <input type="password" id="inputPassword" className="form-control" {...password} autoComplete="new-password" required />
                                    {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
                                    <input className="btn btn-lg btn-primary btn-block text-uppercase" type="button" value={loading ? 'Loading...' : 'Se Connecter'} onClick={handleLogin} disabled={loading} />
                                </form>
                                <Link className="btn btn-lg btn-primary btn-block text-uppercase" to="/inscription"> Inscription </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    );
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}


export default Login;