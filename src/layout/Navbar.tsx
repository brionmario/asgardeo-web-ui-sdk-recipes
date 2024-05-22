import React from "react";
import "./navbar.scss";
import pinterestLogo from "../assets/Pinterest-logo.png";
import SignInButton from "./SignInButton";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <img
          src={pinterestLogo}
          alt="Pinterest Logo"
          className="navbar__logo"
        />
        <div className="interest">Interest</div>
        <a href="#" className="navbar__link">
          Watch
        </a>
        <a href="#" className="navbar__link">
          Explore
        </a>
      </div>
      <div className="navbar__right">
        <a href="#" className="navbar__link">
          About
        </a>
        <a href="#" className="navbar__link">
          Business
        </a>
        <a href="#" className="navbar__link">
          Blog
        </a>
        <SignInButton />
        <button className="navbar__button">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
