import React from 'react';
import './dist/Navbar.css';
import Logo from './Logo';


function Navbar() {
  return (
    <nav className='navbar'>
    <div className='navbar__container'>
        <Logo/>
    </div>
    </nav>
   
  )
}

export default Navbar;

