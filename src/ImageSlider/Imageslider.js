// ImageSlider.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Imageslider.css'; // Create this file for custom styling if needed
import { Link } from 'react-router-dom'; 
import SecondImageRow from './SecondImageRow';
import Imagescroll from '../ImageScroll/Imagescroll';


const ImageSlider = () => {
  return (
    <div className="image-slider-container">
      <Carousel autoPlay infiniteLoop interval={2000} showArrows={true} showStatus={false} showIndicators={false} showThumbs={false}>
      <div className="slide" style={{ backgroundImage: `url(${require('./Updated_hero_2_FT._CB599285209_.jpg')})` }}></div>
        <div className="slide" style={{ backgroundImage: `url(${require('./0-PC_Hero_2x._CB594150943_.jpg')})` }}></div>
        <div className="slide" style={{ backgroundImage: `url(${require('./D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg')})` }}></div>
        <div className="slide" style={{ backgroundImage: `url(${require('./Haircare-Herofader-PC._CB594539534_.jpg')})` }}></div>
        
      </Carousel>
    
      <div className="image-row">
        <div className="image-item">
        <h1 className='h11'>Keep Shopping For</h1>
        <Link to="/image1" className="image-item">
          <img src={require('./mobile.jpg')} alt="Image1" />
        </Link>
        <p className='per'>View Your Browsing History</p>
        </div>
        <div className="image-item">
        <h1 className='h11'>Up to 35% off on Laptops</h1>
        <Link to="/image1" className="image-item">
          <img src={require('./brand.png')} alt="Image1" />
        </Link>
        <p className='per'>Prime Early Deals | See all offers</p>
        </div>
        <div className="image-item">
        <h1 className='h11'>Up to 60% off | Daily needs</h1>
        <Link to="/image1" className="image-item">
          <img src={require('./daily.jpg')} alt="Image1" />
        </Link>
        <p className='per'>See all offers</p>
        </div>
        <div className="image-item">
        <h1 className='h11'>Newly Launched Televisions</h1>
        <Link to="/image1" className="image-item">
          <img src={require('./samsung.jpg')} alt="Image1" />
        </Link>
        <p className='per'>Prime Early Deals | See all offers</p>
        </div>
      </div><br></br>
      <SecondImageRow></SecondImageRow>
      <div className='bigman'>
        <Link to="/bigimage" className='big-man'>
          <img src={require('./GWeditorial_2300x646._CB599389263_.jpg')} height='95%' width='1450px' alt=''></img>
        </Link>
      </div><br></br>
      {/* <Imagescroll></Imagescroll> */}
     
    </div>
  );
};

export default ImageSlider;
