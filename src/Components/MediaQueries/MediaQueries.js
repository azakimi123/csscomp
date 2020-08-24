import React from 'react';
import './MediaQueries.scss';

function MediaQueries() {
  return(
    <div className='media-queries-container'>
      <nav>
        <section className='nav-logo'>
          <p>Aaron Zakimi</p>
        </section>
        <ul className='nav-links'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <main>
        <section className='main-upper'>
          <p>WELCOME</p>
        </section>
        <section className='main-lower'>
          <img className='main-img' src='https://image.freepik.com/free-psd/set-digital-devices-screen-mockup_53876-76505.jpg' alt='computer'/>
        </section>
      </main>
    </div>
  )
}

export default MediaQueries;