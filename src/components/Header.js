import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import logoHeader from '../images/logo-header.svg';

const Header = ({ loggedIn, userEmail }) => {
  const location = useLocation();

  return (
    <header className="header page__header">
      <img
        className="header__logo"
        src={logoHeader}
        alt="Логотип сайта Место."
      />
      {location.pathname === '/sign-in' && (
        <Link to="/sign-up" className="header__link">
          Регистрация
        </Link>
      )}
      {location.pathname === '/sign-up' && (
        <Link to="/sign-in" className="header__link">
          Войти
        </Link>
      )}
      {loggedIn && (
        <nav className="header__nav">
          <span>{userEmail}</span>
          <Link className="header__sign-out" to="/sign-in">
            Выйти
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
