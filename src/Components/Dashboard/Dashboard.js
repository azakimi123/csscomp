import React, { useState } from 'react';
import axios from 'axios';
import './Dashboard.scss';

function Dashboard() {

  const [meme, setMeme] = useState('');
  const [toggle, setToggle] = useState(false);

const handlePush = () => {
  axios.get('/api/meme')
  .then(res => {
    setMeme(res.data)
    console.log(res.data)
    setToggle(!toggle)
  })
  .catch( error => alert(error.response.request.response))
}

  return(
    <div>
      <h1>Dashboard</h1>
      <span>push button only if you are admin</span>
      <button onClick={handlePush}>Push</button>
      {toggle
      ? <img src={meme[0].image} alt='meme'/>
      : null}
    </div>
  )
}

export default Dashboard;