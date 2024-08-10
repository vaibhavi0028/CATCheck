import React, { useState } from "react";
import Logo from "../images/logo.svg";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav class="navbar bg-body-tertiary sticky-top">
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
        <span class="navbar-text"><button type="button" class="btn btn-warning">Sign In</button></span>
      </div>
    </nav>
  );
};

export default Navbar;
