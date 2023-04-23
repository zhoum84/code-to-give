import React from 'react'
  
export const Progress = () => {
  const percentage = 50;
  // needs to add each question accordingly
  return (
    <div className='progress-container'>
      {/* <div className='progress-bar'> */}
        {/* <GrInProgress></GrInProgress> */}
          {/* <div className='progress-bar-fill'>
          <div className='progress-bar-percentage' > */}
          <progress className="progress" max="100" value={percentage}></progress>
          {/* </div>
          </div> */}
      {/* </div> */}
    </div>
  )
}
export default Progress;