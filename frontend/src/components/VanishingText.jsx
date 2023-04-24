import React from 'react'

function VanishingText({text, delay}) {

  return (
    <div className='vanisher' value={delay}>{text}</div>
  )
}

export default VanishingText