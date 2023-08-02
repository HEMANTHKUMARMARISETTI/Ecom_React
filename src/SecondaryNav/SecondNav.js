// SecondaryNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import './sec.css';

const SecondaryNavbar = () => {
  return (
    <nav className="secondary-navbar">
      <ul className="secondary-navbar__menu">
        <li>
          <Link to="/all">
            <FaBars />
            All
          </Link>
        </li>
        <li>
          <Link to="/mini">Amazon miniTV</Link>
        </li>
        <li>
          <Link to="/sell">Sell</Link>
        </li>
        <li>
          <Link to="/bestsell">Best Sellers</Link>
        </li>
        <li>
          <Link to="/deal">Today's Deal</Link>
        </li>
        <li>
          <Link to="/mobiles">Mobiles</Link>
        </li>
        <li>
          <Link to="/newre">New Releases</Link>
        </li>
        <li>
          <Link to="/cs">Customer Services</Link>
        </li>
        <li>
          <Link to="/prime">Prime</Link>
        </li>
        <li>
          <Link to="/elec">Electronics</Link>
        </li>
        <li>
          <Link to="/hk">Home & Kitchen</Link>
        </li>
        <li>
          <Link to="/gift">Gift Ideas</Link>
        </li>
        <li>
          <Link to="/new">New Launches from Mobiles, Electronics & More | Shop Now</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SecondaryNavbar;
