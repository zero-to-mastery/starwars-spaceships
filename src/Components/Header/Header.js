import React from 'react';
import './Header.css';

const Header = ({ routeChange }) => {
  return (
    <nav className="navbar flex flex-row">
      <div className="navbar-item f3 courier grow" onClick={() => routeChange('home')} >Home</div>
      <div className="navbar-item f3 courier grow" onClick={() => routeChange('films')}>Films</div>
      <div className="navbar-item f3 courier grow" onClick={() => routeChange('spaceship')}>Spaceships</div>
      <div className="navbar-item f3 courier grow" onClick={() => routeChange('planets')}>Planets</div>
      <div className="navbar-item f3 courier grow" onClick={() => routeChange('people')}>People</div>
    </nav>
  )
}
export default Header;