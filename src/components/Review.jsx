import React from 'react'
import { review } from '../Data'
import hello from '../assets/images/hello.png'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Review.css'
function Review() {
  return (
    <section className='review' id='review'>
      <h1 className='heading'>
        Clients <span>Reviews</span>
      </h1>
      <div className='box-container'>
        {
            review.map((item,index)=>(
                <div className='box' key={index}>
                 <img src={hello} alt="" />
                 <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit natus inventore officia, fuga reprehenderit dolore dolores dignissimos
                     adipisci cumque in vel nihil, expedita, ratione tempora provident accusantium libero tempore eum.
                 </p>
                 <img className='user' src={item.img} alt=""  />
                 <h3>Jhon Does</h3>
                 <div className='stars'>
                 <i> <FontAwesomeIcon  icon={faStar} /></i>
                    <i> <FontAwesomeIcon  icon={faStar} /></i>
                    <i> <FontAwesomeIcon  icon={faStar} /></i>
                    <i> <FontAwesomeIcon  icon={faStar} /></i>
                    <i> <FontAwesomeIcon  icon={faStarHalfAlt} /></i>  
                                  
                 
                 </div>
                </div>
            ))
        }

      </div>
    </section>
  )
}

export default Review