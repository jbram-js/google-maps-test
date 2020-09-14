import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-links">
        <li className="navbar-link-items">
          <Link to="/map" className="link">
            Map
          </Link>
        </li>
        <li className="navbar-link-items">
          <Link to="/map-current-location" className="link">
            Current location map
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
