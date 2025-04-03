import React from 'react'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
function footer() {
  return (
    <section className='footer'>
    <div className='share'>
  
        <FontAwesomeIcon className='a' icon={faFacebook} />
        <FontAwesomeIcon className='a' icon={faLinkedin} />
        <FontAwesomeIcon className='a' icon={faTwitter} />
        <FontAwesomeIcon className='a' icon={faInstagram} />
    </div>
    <div className='links'>
    <a href="#">Home</a>
    <a href="#about">About</a>
    <a href="#menu">Menue</a>
    <a href="#products">Products</a>
    <a href="#review">Review</a>
    <a href="#contact">Contact</a>
    <a href="#blog">Blogs</a>
    </div>
    <div className='credit'>Created by <span>Humayun Imtiaz</span></div>
    </section>
  )
}

export default footer