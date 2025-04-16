import React from 'react';
import './navbar.css';
import Navbarbelt from './NavbarBelt/navbarbelt';
import Navbarbanner from './NavbarBanner/navbarbanner';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Navbarbelt />
      <Navbarbanner />
    </div>
  )
}

export default Navbar

