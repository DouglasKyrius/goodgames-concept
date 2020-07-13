import React from 'react';
import { ReactComponent  as LogoIcon } from '../../assets/img/logo-icon.svg';

const Navbar = () => {
  return(
    <nav>
      <div className="container">
        <div className="left">
          <LogoIcon className="logo-icon"/>

          <div className="separator"></div>

          <a href="#">Explore</a>
          <a href="#">Releases</a>
        </div>
        <div class="center">
          <input type="text" placeholder="Discover New Games"/>
        </div>
        <div className="right">
          <button>Log In</button>
          <button>Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;