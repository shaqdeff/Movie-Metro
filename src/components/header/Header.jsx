import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.scss';

const headerNav = [
  {
    name: 'Home',
    link: '/',
  },
];

/* eslint-disable arrow-body-style */
const Header = () => {
  const { pathname } = useLocation();
  const navRef = useRef(null);

  const active = headerNav.findIndex((item) => item.link === pathname);

  return (
    <div ref={navRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <Link to="/">Movie Metro</Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((item) => (
            <li key={item.id} className={active === item.id ? 'active' : ''}>
              <Link to={item.link}>
                {item.name}
                <i className="fa fa-home" style={{ paddingLeft: '5px' }} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
