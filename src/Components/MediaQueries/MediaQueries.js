import React, { useState } from 'react';
import './MediaQueries.scss';

function MediaQueries() {

  let [dropdownToggle, setDropdownToggle] = useState(false);

  const handleToggle = () => {
    setDropdownToggle(!dropdownToggle)
}

  return(
    <div className='media-queries-container'>
      <nav className='desktop-nav'>
        <section className='nav-logo'>
          <p>Aaron Zakimi</p>
        </section>
        <ul className='nav-links'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <section className='mobile-nav'>
      <section className='mobile-nav-logo'>
          <p>Aaron Zakimi</p>
      </section>
        <img className='nav-menu-icon' src='https://image.flaticon.com/icons/svg/545/545705.svg' alt='menu-icon' 
          onClick={handleToggle}/>
          {dropdownToggle
          ? 
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            
          : null
          }    
      </section>
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