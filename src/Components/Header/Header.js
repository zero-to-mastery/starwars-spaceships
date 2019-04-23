import React from 'react';
import './Header.css';

import 'tachyons';

const Header = ({ routeChange }) => {

  return (
    <nav className="navbar flex flex-row">
      <div className="navbar-item f3 underline grow" onClick={() => routeChange('home')} >Home</div>
      <div className="navbar-item f3 underline grow" onClick={() => routeChange('films')}>Films</div>
      <div className="navbar-item f3 underline grow" onClick={() => routeChange('spaceship')}>Spaceships</div>
      <div className="navbar-item f3 underline grow" onClick={() => routeChange('planets')}>Planets</div>
    </nav>
  )


}
export default Header;