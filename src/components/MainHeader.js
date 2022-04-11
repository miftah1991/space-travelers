import React, { useId } from 'react';
import { NavLink } from 'react-router-dom';
import './MainHeader.css';
import icon from '../images/planet.png';

function MainHeader() {
  const navLinks = [
    {
      id: useId(),
      path: '/',
      name: 'Rockets',
    },
    {
      id: useId(),
      path: '/Missions',
      name: 'Missions',
    },
    {
      id: useId(),
      path: '/Dragons',
      name: 'Dragons',
    },
    {
      id: useId(),
      path: '/MyProfile',
      name: 'My Profile',
    },
  ];
  return (
    <nav className="Header">
      <div className="HeaderLeft">
        <img className="HeaderLogo" src={icon} alt="Space Travelers Hub logo" />
        <h1 className="HeaderTitle">Space Travelers&apos; Hub</h1>
      </div>
      <div className="HeaderRight">
        {navLinks.map(({ id, path, name }) => (
          <NavLink className="aTag" key={id} to={path}>
            {name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default MainHeader;
