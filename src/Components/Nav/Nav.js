import React, { useContext } from 'react';
import { UserContext } from "../../context/UserContext";
import { useLocation, useHistory } from "react-router-dom";
import axios from 'axios';
import './Nav.scss';


function Nav(props){
  const location = useLocation();
  const history = useHistory();
  const [user, setUser] = useContext(UserContext);


  if (location.pathname === "/" || location.pathname === "/register"){
    return null;
  }

  const handleLogout = () => {
    axios
      .get("/auth/logout")
      .then(() => {
        setUser({});
        history.push("/");
      })
      .catch(err => console.log(err));
  }


  return(
    <div>
      <nav>
        <section className='nav-logo'>
          <p>COMP APP</p>
        </section>
        <section className='nav-links'>
          <p onClick={handleLogout}>logout</p>
        </section>
      </nav>
    </div>
  )
}

export default Nav;