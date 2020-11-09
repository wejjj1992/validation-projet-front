import React from "react";
import { getUser, removeUserSession } from '../../services/Common';
import { useHistory } from "react-router-dom";


function Logout(props) {

  const user = getUser();
  const history = useHistory();

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    history.push('/admin/login');
  }

  return (
    <a className="nav-link" href="/admin" onClick={handleLogout}> Déconnecter {user.email}</a>
  );
}

export default Logout;