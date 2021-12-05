import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  
  const [click, setClick] = useState(false)
  
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">What happened</Link>
        <div ><i onClick={() => setClick(!click)} className="bi bi-menu-button-wide header__menus__icon"></i></div>
        <ul className={`header__container__menus__list ${click ? 'top' : ''}`}>
          <li className="header__container__menus__item">
            <Link to="/introduce" className="nav-link text-uppercase font-weight-bold">
              Introduction
            </Link>
          </li>
          <li className="header__container__menus__item">
            <Link to="/" className="nav-link text-uppercase font-weight-bold">
              Solution
            </Link>
          </li>
          <li className="header__container__menus__item">
            <Link to="/" className="nav-link text-uppercase font-weight-bold">
              Rate plan
            </Link>
          </li>
          <li className="header__container__menus__span">
            <span class='line'>|</span>
          </li>
          <li className="header__container__menus__item">
            <Link to="/" className="nav-link text-uppercase font-weight-bold">
              Login
            </Link>
          </li>
          <li className="header__container__menus__item">
          <i class="bi bi-x" onClick={() => setClick(!click)}></i>
            <Link to="/" className="nav-link text-uppercase font-weight-bold line">
              Apply for free use
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
