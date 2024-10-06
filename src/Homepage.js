import React, { useState } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import companyLogo from './JEEKS.jpg';
import companyLogo1 from './JinJer.jpg';
import companyLogo2 from './Street_Star.jpg';
import companyLogo3 from './start.jpg';
import Jecks from './Jecks_Page1.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Homepage() {
    return (
    <div className="container">
    {/* Row 1: Text Header */}
    <div className="row">
      <div className="col-12 text-center mb-4">
        <h1>Design your Jecks</h1>
      </div>
    </div>

    {/* Row 2-4: Images */}
    <div className="row mb-4 d-flex justify-content-center">
        <div className="col-4 col-md-4 d-flex justify-content-center mb-3 mb-md-0">
            <img src={Jecks}></img>
        </div>
    </div>

    <div className="row mb-4">
        <div className="col-12 text-center">
          <h1 className="bold">Jecks Journey  </h1>
          <p className=''>Solo Exhibition</p>
          <p className=''>26 OCT - 24 NOV 2024</p>
        </div>
     </div>
      
     <div className="row mb-4">
        <div className="col-12 col-md-4 d-flex justify-content-center mb-3 mb-md-0">
          <img src={companyLogo}  alt="A detailed description of what is in the " className="img-fluid" />
        </div>
        <div className="col-12 col-md-4 d-flex justify-content-center mb-3 mb-md-0">
          <img src={companyLogo1}  alt="A detailed description of what is in the " className="img-fluid" />
        </div>
        <div className="col-12 col-md-4 d-flex justify-content-center mb-3 mb-md-0">
          <img src={companyLogo2}  alt="A detailed description of what is in the " className="img-fluid" />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-12 col-md-4 d-flex justify-content-center mb-3 mb-md-0">
        </div>
        <div className="col-12 col-md-4 d-flex justify-content-center mb-3 mb-md-0">
            <Link to="/Design">
              <img src={companyLogo3} alt="Company Logo 3" className="img-fluid" />
            </Link>
        </div>
      </div> 
    </div>
 )
}

export default Homepage;
