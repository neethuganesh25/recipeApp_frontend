import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"
function Footer() {
  return (
    <div className="footer border-top mt-5">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-4 col-sm-12 mb-3">
            <h3 className='text-dark' style={{ color: '#003c36' }}>RECIPO</h3>
            <ul className="list-unstyled mt-3">
              <li><Link to={'/home'} className="text-decoration-none text-dark">Home</Link></li>
              <li><Link to={'/about'} className="text-decoration-none text-dark">About</Link></li>
              <li><Link to={'/recipes'} className="text-decoration-none text-dark">Recipes</Link></li>
            </ul>
          </div>
          <div className="col-md-5 col-sm-12 mb-3">
            <h4 className='text-dark' style={{ color: '#003c36' }}>Contact Us</h4>
            <div className='d-flex flex-column flex-md-row mt-3'>
              <input type="email" className='form-control bg-transparent border rounded mb-2 mb-md-0 w-100 w-md-50' placeholder='Email' />
              <button className='btn btn-outline-success text-dark ms-md-2 w-100 w-md-25'>Subscribe</button>
            </div>
            <p className='mt-3 text-dark fs-5'>Follow us on</p>
            <div className="d-flex mt-4 justify-content-start">
              <FontAwesomeIcon icon={faInstagram} size='2xl' className="me-3" />
              <FontAwesomeIcon icon={faFacebook} size='2xl' className="me-3" />
              <FontAwesomeIcon icon={faTwitter} size='2xl' />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p className='mt-3'>© 2024 Recipo. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
