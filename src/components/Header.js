import React from "react";
import { Link } from "react-router-dom";
import LogoIcon from "../assets/images/music-album.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-between">
          <Link to="/">
            <span className="logo">
              <h1>Top Albums</h1>
            </span>
          </Link>
          <Link to="/songs">
            <span className="logo">
              <h1>Top Songs</h1>
            </span>
          </Link>
        </div>
        <Link to="/favourites">
          <li className="header-menu__item link link--white">Favourites</li>
        </Link>
      </div>
    </div>
  );
};

export default Header;
