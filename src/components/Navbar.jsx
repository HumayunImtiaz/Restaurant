import React from 'react'
import logo from '../assets/images/logo.png'
import '../assets/css/style.css'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faSearch,faX } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import {cart} from '../Data'

function Navbar() {
    const searchRef= useRef();
    const cartRef = useRef();
    const navbarRef = useRef();

    const searchHandler=()=>{
    searchRef.current.classList.toggle('active') 
    cartRef.current.classList.remove('active')
    navbarRef .current.classList.remove('active')       
    }
    const cartHandler=()=>{
        cartRef.current.classList.toggle('active')  
        searchRef.current.classList.remove('active') 
        navbarRef .current.classList.remove('active')  
    }
    const navbarHandler=()=>{
        navbarRef .current.classList.toggle('active') 
        cartRef.current.classList.remove('active')  
        searchRef.current.classList.remove('active') 
        
        }

  return (
   <>
   <header className='header'>
    <a href="#" className='logo'>
    <img src={logo} alt="" />
    </a>
    <nav className='navbar ' ref={navbarRef } >
        <a href="#home">Home</a>
        <a href="#about">about</a>
        <a href="#menu">menue</a>
        <a href="#products">products</a>
        <a href="#review">review</a>
        <a href="#contact">contact</a>
        <a href="#blogs">blogs</a>
    </nav>
    <div className='icons'>
        <div onClick={searchHandler}>
        <FontAwesomeIcon icon={faSearch} />
        </div>
        <div onClick={cartHandler}>
        <FontAwesomeIcon icon={faShoppingCart} />
        </div>
        <div id='menu-btn'  onClick={navbarHandler}>
        <FontAwesomeIcon icon={faBars} />
        </div>
    </div>
    <div className='search-form' ref={searchRef} >
        <input type="search" placeholder='search here...' 
        id='search-box'/>
        <label htmlFor="search-box">
        <div >
        <FontAwesomeIcon icon={faSearch} />
        </div>
        </label>
    </div>
   <div className='cart-items-container' ref={cartRef}>
   {
    cart.map((item,index)=>(
        <div className='cart-item' key={index}>
            <span className='fas fa-times'>
            <FontAwesomeIcon  icon={faX} />
            </span>
            <img src={item.img} alt="" />
            <div className="content">
                <h3>{item.title}</h3>
                <div className="price">{item.price}</div>
            </div>              
            </div>
                    ))}
    <a className='btn' href="">Checkout Now</a>
   </div>
    
   </header>
   </>
  )
}

export default Navbar