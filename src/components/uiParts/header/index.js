import React from "react";
import logo from '~/img/vacca-note-logo.svg';

const Header = () => {
  return (
    <header>
      <img src={logo} className="logo" alt="logo" />
    </header>
  );
}

export default Header;