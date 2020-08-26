import React from 'react';
import './MediaTypes.scss';


function MediaTypes(){
  return(
    <div className='media-type-container'>
      <h1>Media Types</h1>
      <div className='media-type-box'>
        <article className='media-type-article'>
          <h3 className='media-type-title'>Title</h3>
          <h3 className='media-type-title2'>Printview Title</h3>
          <p className='media-type-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit   anim id est laborum.</p>
        </article>
      </div>
    </div>
  )
}

export default MediaTypes;