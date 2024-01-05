import React from 'react';
import { FaShoppingCart,FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Nav.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
      <Link to='/'><img src={require('./amazon.png') } alt='amazon-logo' className='amazon_logo'/></Link>
      </div>
      <div className="navbar__options">
        <Link to="/address">Address</Link>
      </div>
      <div className="navbar__search">
      <select name="category">
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
        </select>
        <input type="text" placeholder="Search" />
        <button><FaSearch /></button>
      </div>
      <select name="nation">
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="ca">Canada</option>
        </select>
      <div className="navbar__signIn">
        <Link to="/signin">Sign In</Link>
      </div>
      <div className="navbar__orders" > 
        <Link to="/orders"><span className='Hem'>Returns</span><br></br>& Orders</Link>
      </div>
      <div className="navbar__cart">
        <Link to="/cart">
          <FaShoppingCart />
          <span className="navbar__cartCount">0</span>Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
