import React from 'react'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope, faM, faMailBulk, faMailForward, faMailReply, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
function Contact() {
  return (
    <section className='contact' id='contact'>
     <h1 className='heading'>
        <span>Contact </span>us
     </h1>
     <div className='row'>
     <iframe className='map' 
     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.7875672638133!2d-96.7166346!3d32.
     8773396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea12217915539%3A0xb73b206fd46f0e7f
     !2sClub%20Pilates!5e0!3m2!1sen!2s!4v1743636537076!5m2!1sen!2s" 
     allowfullscreen="" loading="lazy" 
     >
     </iframe>
     <form action="">
        <h3>get in touch</h3>
        <div className='inputBox'>
        <span className='fas fa-user'>
            < FontAwesomeIcon  icon={faUser} />
        </span>
        <input type="text" placeholder='name' />
        </div>
        <div className='inputBox'>
        <span className='fas fa-envelope'>
            < FontAwesomeIcon  icon={faEnvelope} />
        </span>
        <input type="mail" placeholder='Email' />
        </div>
        <div className='inputBox'>
        <span className='fas fa-user'>
            < FontAwesomeIcon  icon={faPhone} />
        </span>
        <input type="number" placeholder='Number' />
        </div>
        <input type="submit" className='btn' />
     </form>
     </div>
    </section>
  )
}

export default Contact