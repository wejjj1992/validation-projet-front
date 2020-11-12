import React, { useState } from "react";
import axios from 'axios';
import { setUserSession } from '../../services/Common';
import './login.css';

function Login(props) {

  const [loading, setLoading] = useState(false);
  const username = useFormInput('admin@admin.com');
  const password = useFormInput('admin');
  const [error, setError] = useState(null);

  // handle button click of login form
  const handleLogin = () => {

    setError(null);
    setLoading(true);

    axios.post(`http://localhost:3000/api/user/login`, { email: username.value, password: password.value })
      .then(response => {
        setLoading(false);
        setUserSession(response.data.token, response.data.user);
        /*         console.log(response); */
        window.location.reload(false);
        props.history.push('/admin');
      }).catch(error => {
        setLoading(false);
        console.log(error)
        if (error.response.status === 401) setError(error.response.data.error);
        else setError("Something went wrong. Please try again later.");
      });
  }

  return (

    <div className="login-body my-5">
      <div className="login">
        <form className="form-signin">
          <h1 className="h3 mb-3 font-weight-normal text-center">Espace Admin</h1>
          <label htmlFor="inputEmail" className="sr-only">Email</label>
          <input className="form-control" type="email" {...username} autoComplete="new-email" />
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password" id="inputPassword" className="form-control" {...password} autoComplete="new-password" required />
          {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
          <input className="btn btn-lg btn-primary btn-block text-uppercase" type="button" value={loading ? 'Loading...' : 'Se Connecter'} onClick={handleLogin} disabled={loading} />
        </form>
      </div>
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