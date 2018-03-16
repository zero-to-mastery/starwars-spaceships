import React from 'react';
import './Menu.css';

const Menu = ({ routeChange }) => {
  return (
    <nav className="navbar">
      <div onClick={() => {routeChange('home')}} >Home</div>
      <div onClick={() => {routeChange('spaceship')}}>Spaceships</div>
      <div onClick={() => {routeChange('planets')}}>Planets</div>
    </nav>
  );
}
export default Menu;