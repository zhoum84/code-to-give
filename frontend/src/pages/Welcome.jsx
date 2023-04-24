import React from 'react'
import {Link} from 'react-router-dom'
function Welcome() {
  return (
    <div id="welcome">

        <img className="sideimage" src={require('../resources/kid-smiling-1.jpg')} />
        
        <div id="maincontainer">
            <img className="logo" src={require('../resources/logo-blue-transparent.png')} />
            <div className='welcomepage-item'>
              <p>
                Welcome to Make-A-Wish Foundation, where we believe that every child deserves to experience the hope, strength, and joy that comes with having a wish granted. We are thrilled to announce our new user-friendly document upload process that makes it easier than ever to refer a child for a wish. Whether you are a medical professional, family member, or friend, our streamlined process will help you get your referral to us quickly and easily.
              </p>
            </div>
            <div className='welcomepage-item'>
              <p>
                At Make-A-Wish, we are committed to reaching every eligible child, so if you know a child who is facing a critical illness, please refer them to us today. Our wish-granting experiences are more than just a moment of joy; they can have a positive impact on a child's physical and emotional health, and provide them with the hope they need to fight their illness.
              </p>
            </div>
            <div className='welcomepage-item'>
              <p>
                Together, we can make a difference in the lives of children and families who need it most. Thank you for your support of Make-A-Wish Foundation.
              </p>
            </div>
            <div className='welcomepage-item'>
              <button className="btn-big-blue">Refer</button>
              <Link to='/login'>
                <button className="btn-big-blue">Get Started</button>
              </Link>
              <button className="btn-big-blue">Login</button>
            </div>
        </div>

        <img className='sideimage' src={require('../resources/kid-smiling-2.jpg')} />

    </div>
  )
}

export default Welcome