import React, { useState, useContext } from 'react';
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import axios from 'axios';
import './Auth.scss';

function Auth(props){

  const history = useHistory();

 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useContext(UserContext);


  const handleLogin = () => {
    axios
      .post("/auth/login", { email, password })
      .then((res) => {
        setUser(res.data);
        history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return(
    <div>
      <section>
        <h1>Login</h1>
        <span>Email: </span><input value={email} onChange={e => setEmail(e.target.value)}/>
        <span>Password: </span><input value={password} type='password' onChange={e => setPassword(e.target.value)}/>
        <button onClick={handleLogin}>Login</button>
        <Link to='/register'><button>Create Account</button></Link>
      </section>
    </div>
  )
}

export default Auth;

