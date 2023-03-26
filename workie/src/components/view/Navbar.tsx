import React from 'react';
import './dist/Navbar.css';
import Logo from './Logo';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className='navbar'>
    <div className='navbar__container'>
        <Logo/>

        <Link to="/WhoWeAre">
        <button className='navbar__container__whoWeAre'>Who we are?</button>
        </Link>

    </div>
    </nav>
   
  )
}

export default Navbar;

