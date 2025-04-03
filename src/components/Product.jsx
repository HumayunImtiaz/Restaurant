import React from 'react'
import { product } from '../Data'
import '../assets/css/style.css'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEye, faHeart, faShoppingCart, faStar, faStarHalf, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

function Product() {
  return (
    <section className='products' id='products'>
      <h1 className='heading'>
        our <span>Products</span>
      </h1>
      <div className='box-container'>
        {
          product.map((item,index)=>(
            <div className='box' key={index}> 
              <div className='icons'>
              < FontAwesomeIcon className='a'  icon={faShoppingCart} />
              < FontAwesomeIcon className='a'  icon={faHeart} /> 
              <FontAwesomeIcon  className='a' icon={faEye} /> 
              </div>
              <div className='image'>
                <img src={item.img} alt="" />
              </div>
              <div className='content'>
                <h3>{item.title}</h3>
                <div className='stars'>
               <i> <FontAwesomeIcon  icon={faStar} /></i>
               <i> <FontAwesomeIcon  icon={faStar} /></i>
               <i> <FontAwesomeIcon  icon={faStar} /></i>
               <i> <FontAwesomeIcon  icon={faStar} /></i>
               <i> <FontAwesomeIcon  icon={faStarHalfAlt} /></i>                
                </div>
                <div className='price'> 
                 {item.price} <span>{item.off}</span>
                </div>
              </div>
            </div>
          ))
        }

      </div>

    </section>
  )
}

export default Product