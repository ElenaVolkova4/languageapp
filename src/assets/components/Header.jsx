import React from 'react';
import './Header.scss';
import logo from '../images/logo10.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="header_logo">
        <Link to="/">
          <img className="logo" src={logo} alt="Логотип приложения" />{' '}
        </Link>
        <p className="header_phrase">
          Чтобы попасть в Хогвартс - надо знать английский язык!
        </p>
      </div>
      <div className="header_buttons">
        <Link to="/">
          <div className="header_button">Home</div>
        </Link>
        <Link to="/game">
          <div className="header_button">Training</div>
        </Link>
        <Link to="/new">
          <div className="header_button">Add new word</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
