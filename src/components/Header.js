import React from "react";
import "../assets/styles/header.css";

// the header component
const Header = () => {
  return (
    <header>
      <div className="header-wrapper">
        {/* logo */}
        <div className="logo-wrapper">
          <img
            alt="logo"
            className="logo"
            src="https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg"
          />
        </div>

        {/* middle nav bar */}
        <ul className="header_middle_nav">
          <li>Price</li>
          <li>Learn</li>
          <li>Individual</li>
          <li>Businesses</li>
          <li>Developers</li>
          <li>Company</li>
        </ul>

        {/* Auth links */}
        <ul className="header_auth_links">
          <li className="sign__in">sign in</li>
          <li className="get__started">Get started</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
