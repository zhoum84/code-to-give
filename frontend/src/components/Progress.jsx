import React from 'react'
  
export const Progress = ({percent}) => {


  // needs to add each question accordingly
  return (
    <div className='centerer'>
    <div className='progress-container'>
  
        <progress className="progress" max="100" value={percent}/>

      
    </div>
    </div>
  )
}
export default Progress;