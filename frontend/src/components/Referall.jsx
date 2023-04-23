import React from 'react'

function Referall() {
  return (
    <div className='referall'>
      <div className='section1'>
      <div className='haha'>
        Before you go..... Is there someone else you think would Make a Wish? 
      </div>
      <div className='haha'>
        If so, please enter their contact information below (email or phone number of organizations or individual): 
      </div>
      <input type="text" name="information" />
      <button className='referencesubmitbutton'> 
          Submit
       </button>
       </div>
    

    <div className='section2'>
    <div className='haha'>
        Or you can copy our information below and share it with others!!!
      </div>
      <div className='copyinformation'>
        Company Name: Make-A-Wish;
      </div>
      <div className='copyinformation'>
        Website: https://wish.org/mission
      </div>
      <div className='copyinformation'>
        Website: https://wish.org/
      </div>
      <div className='copyinformation'>
        Referring a child: https://wish.org/refer-a-child
      </div>

      <button className='referencesubmitbutton'> 
        Copy
       </button>



    </div>






    </div>

  )
  }
export default Referall