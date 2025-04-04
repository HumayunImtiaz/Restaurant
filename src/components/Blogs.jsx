import React from 'react'
import { blog } from '../Data'
import './Blogs.css'
function Blogs() {
  return (
     <section className='blogs' id='blog'>
     <h1 className='heading'>
        Our <span>Blogs</span>
     </h1>
     <div className='box-container'>
      {
        blog.map((item , index)=>(
            <div className='box' key={index}>
            <div className='image'>
                <img src={item.img} alt="" />
            </div>
            <div className='content'>
             <a href="#" className='title'>
                 Tasty and Refreshing  Spices
             </a>
             <span>by admin/ 21st may, 2025</span>
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                 Suscipit fuga velit voluptatibus id quaerat. 
             </p>
             <a href="#" className='btn'>read more</a>
            </div>
            </div>
        ))
      }
     </div>
     </section>
     
  )
}

export default Blogs