import React from 'react';
import './List.scss';


function List() {
  return(
    <div className='list-container'>
      <h1>nth child (odd) =></h1>
      <ul>
        <li className='nth-list'>One</li>
        <li className='nth-list'>Two</li>
        <li className='nth-list'>Three</li>
        <li className='nth-list'>Four</li>
        <li className='nth-list'>Five</li>
        <li className='nth-list'>Six</li>
        <li className='nth-list'>Seven</li>
      </ul>
    </div>
  )
}

export default List;