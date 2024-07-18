
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <>
    
   

<div
      style={{
      
        width: "100%",
      }}
      className=" foot d-flex flex-column justify-content-center align-items-center p-5 "
    >
      <div className="d-flex justify-content-center align-items-center">
        <FontAwesomeIcon
          icon={faTwitter}
          className="fa-2x ms-3 text-dark"
        />
        <FontAwesomeIcon
          icon={faFacebook}
          className="fa-2x ms-3 text-dark"
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className="fa-2x ms-3 text-dark"
        />
       


       
      </div>
      <div className="d-flex justify-content-center align-items-center mt-4">
        <Link
          to={'/'}
          className="text-secondary ps-3 pe-3"
          style={{  textDecoration: "none" }}
        >
         Home
        </Link>
        <a
          href="about"
          className="text-secondary ms-3  pe-3"
          style={{ textDecoration: "none" }}
        >
          About
        </a>
        <a
          href="Recipes"
          className="text-secondary ms-3 pe-3"
          style={{ textDecoration: "none" }}
        >
          Recipes
        </a>
      </div>
    </div>
  
    
    
    </>
  )
}

export default Footer
