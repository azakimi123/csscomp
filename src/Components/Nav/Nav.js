import React from 'react';
import { useLocation } from "react-router-dom";
import './Nav.scss';


function Nav(props){
  const location = useLocation();
  if (location.pathname === "/" || "/register") return null;

  return(
    <div>
      <nav>
        <section>
          <p>COMP APP</p>
        </section>
        <section>
          <p>logout</p>
        </section>
      </nav>
    </div>
  )
}

export default Nav;