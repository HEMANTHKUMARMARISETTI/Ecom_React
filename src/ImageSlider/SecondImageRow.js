
import React from 'react';
import { Link } from 'react-router-dom';
import './Second.css'

const SecondImageRow = () => {
  return (
    <div className="image-row1">
        <div className="image-item1">
        <h1 className='h11'>Up to 40% off on Gadjets</h1>
        <Link to="/image1" className="image-item1">
          <img src={require('./laptop.jpg')} alt="Image1" />
        </Link>
        <p className='per'>See all offers</p>
        </div>
        <div className="image-item1">
        <h1 className='h11'>Up to 45% off on Grinders</h1>
        <Link to="/image1" className="image-item1">
          <img src={require('./grind.jpg')} alt="Image1" />
        </Link>
        <p className='per'>Prime Early Deals | See all offers</p>
        </div>
        <div className="image-item1">
        <h1 className='h11'>Up to 60% off Medical needs</h1>
        <Link to="/image1" className="image-item1">
          <img src={require('./pharmacy.png')} alt="Image1" />
        </Link>
        <p className='per'>See all offers</p>
        </div>
        <div className="image-item1">
        <h1 className='h11'>70% off International brands</h1>
        <Link to="/image1" className="image-item1">
          <img src={require('./inter.jpg')} alt="Image1" />
        </Link>
        <p className='per'>Prime Early Deals | See all offers</p>
        </div>
      </div>
  );
};

export default SecondImageRow;
