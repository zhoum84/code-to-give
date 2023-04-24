import React from 'react'
import VanishingText from '../components/VanishingText'

function Hello() {
  return (
    <div className='hello-background'>
    
        <VanishingText delay={1000000} text={'Hello'}/>
        <div className='vanisher'>We are so excited to meet you!</div>
    </div>
  )
}

export default Hello