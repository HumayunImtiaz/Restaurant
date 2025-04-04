import React from 'react'
import {menu} from'../Data'
import '../assets/css/style.css'
import './Menu.css'

function Menu() {
  return (
    <section className='menu' id='menu'>
    <h1 className='heading'>
        our <span>menu</span>
    </h1>
    <div className='box-container'>
    {
      menu.map((item, index)=>(
        <div className='box' key={index}>
            <img src={item.img} alt="" />

            <h3>{item.title}</h3>
            <div className='price'>
                {item.price} <span>{item.off}</span>
                
            </div>
            <a href=""className='btn'>Add to Cart</a>
        </div>
      ))
    }
  
    </div>
    </section>
  )
}

export default Menu