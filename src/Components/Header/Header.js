import React from 'react';
import './Header.css';


const Header = ({ routeChange }) => {

  return (
    <nav className="navbar">
      <ul>
        <li>
          <div onClick={() => routeChange('home')} >Home</div>
        </li>
        <li>
          <div onClick={() => routeChange('spaceship')}>Spaceships</div>
        </li>
        <li>
          <div onClick={() => routeChange('planets')}>Planets</div>
        </li>
      </ul>
    </nav>
  )


}
export default Header;