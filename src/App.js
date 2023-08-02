import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './PrimaryNav/Navbar';
import Home from './PrimaryNav/Home';
import Cart from './PrimaryNav/Cart';
import Login from './PrimaryNav/Login'
import Address from './PrimaryNav/Address';
import Orders from './PrimaryNav/Orders';
import SecondaryNavbar from './SecondaryNav/SecondNav';
import Mini from './SecondaryNav/Mini';
import Sell from './SecondaryNav/Sell';
import Bestsell from './SecondaryNav/Bestsell';
import Deal from './SecondaryNav/Deal';
import Mobiles from './SecondaryNav/Mobiles';
import Newrelease from './SecondaryNav/Newrelease';
import Customerservice from './SecondaryNav/Customerservice';
import Prime from './SecondaryNav/Prime';
import Electronics from './SecondaryNav/Electronics';
import HomeKitchen from './SecondaryNav/HomeKitchen';
import Gift from './SecondaryNav/Gift';
import News from './SecondaryNav/News';


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <SecondaryNavbar/>
        <Routes>
          <Route path="/" element={<Home />} />
         
          <Route path="/address" element={<Address />} />
          <Route path="/orders" element={<Orders />} />
          
          <Route path="/signin" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/mini" element={<Mini/>} />
          <Route path="/sell" element={<Sell/>}/>
          <Route path='/bestsell' element={<Bestsell/>}/>
          <Route path="/deal" element={<Deal />} />
          <Route path="/mobiles" element={<Mobiles />} />
          
          <Route path="/newre" element={<Newrelease />} />
          <Route path="/cs" element={<Customerservice />} />
          <Route path="/prime" element={<Prime/>} />
          <Route path="/elec" element={<Electronics/>}/>
          <Route path='/hk' element={<HomeKitchen/>}/>
          <Route path="/gift" element={<Gift/>}/>
          <Route path='/new' element={<News/>}/>
        </Routes>
        
      </div>
    </Router>
  );
};

export default App;
