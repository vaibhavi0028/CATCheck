import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../images/logo.svg";
import Avatar from "../images/avatar.svg";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthPath = location.pathname.includes("/auth");

  const [showDropdown, setShowDropdown] = useState(false);

  const handleSignInClick = () => {
    navigate("/auth/signin");
  };

  const handleAvatarClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleProfileClick = () => {
    navigate("/dashboard");
    setShowDropdown(false);
  };

  const handleDashboardClick = () => {
    navigate("/dashboard");
    setShowDropdown(false);
  };

  const handleLogoutClick = () => {
    // Add your logout logic here (e.g., clearing tokens)
    navigate("/");
    setShowDropdown(false);
  };

  return (
    <nav className="navbar bg-black sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src={Logo}
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
        </a>
        <div className="navbar-right">
          {isAuthPath ? null : location.pathname === "/" ? (
            <button
              type="button"
              className="btn-cat-yellow"
              onClick={handleSignInClick}
            >
              Sign In
            </button>
          ) : (
            <>
              <img
                src={Avatar}
                alt="Profile Avatar"
                width="30"
                height="30"
                className="avatar-icon"
                onClick={handleAvatarClick}
              />
              {showDropdown && (
                <div className="dropdown-menu">
                  <button onClick={handleProfileClick} className="dropdown-item">
                    Profile
                  </button>
                  <button onClick={handleDashboardClick} className="dropdown-item">
                    Dashboard
                  </button>
                  <button onClick={handleLogoutClick} className="dropdown-item">
                    Logout
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
