import React, { useState } from "react";
import Logo from "../images/logo.svg";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav class="navbar bg-black sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img
            src={Logo}
            alt="Logo"
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
        </a>
        <button type="button" class="btn-cat-yellow">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
