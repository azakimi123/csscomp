import React, { useContext } from 'react';
import { UserContext } from "../../context/UserContext";
import { Link, useLocation, useHistory } from "react-router-dom";
import axios from 'axios';
import './Nav.scss';


function Nav(props){
  const location = useLocation();
  const history = useHistory();
  const [user, setUser] = useContext(UserContext);


  if (location.pathname === "/" || location.pathname === "/register" || location.pathname === "/media/queries"){
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
          <ul className='nav-links'>
            <Link to='/boxModel'><li>Box Model/Flex</li></Link>
            <Link to='/float'><li>Float Display</li></Link>
            <Link to='/form'><li>Form</li></Link>
            <Link to='/list'><li>List</li></Link>
            <Link to='/media/queries'><li>Media Query</li></Link>
            <Link to='/media/types'><li>Media Types</li></Link>
            <Link to='/aloha'><li>Text Effects</li></Link>
            <li onClick={handleLogout}>logout</li>
          </ul>
      </nav>
    </div>
  )
}

export default Nav;