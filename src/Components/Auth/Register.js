import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import axios from 'axios';
import './Register.scss';


function Register(props) {

  const history = useHistory();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useContext(UserContext);


  const handleRegister = () => {
    axios
      .post("/auth/register", { email, password, username})
      .then((res) => {
        setUser(res.data);
        history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return(
    <div>
      <section>
        <h1>Register</h1>
        <span>Email: </span><input value={email} onChange={e => setEmail(e.target.value)}/>
        <span>Username: </span><input value={username} onChange={e => setUsername(e.target.value)}/>
        <span>Password: </span><input value={password} type='password' onChange={e => setPassword(e.target.value)}/>
        <button onClick={handleRegister}>Register</button>
      </section>
    </div>
  )
}

export default Register;