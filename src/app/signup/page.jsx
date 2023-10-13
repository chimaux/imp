"use client"
import React from 'react'
const Signup = () => {
  return (
    <div  className='FormContainer'>
    <div className='FormContent'>

<div className='FormImages'>
      <div className='formOverly'>
      <div  className='formImage'>
        <img src="images/formlogo.png" alt="" />
      </div>

      <div className='needHelpDiv'>
      <div className="needHelp">Need Help?</div>
      </div>
      </div>
     
     </div>

     <div className='FormDiv'>
     <form action="">
      <div className='Login'>Sign up</div>
      <div className='inputDiv'>
        <label for="Eamil">Email</label>
        <input type="text"  name='Name' placeholder='Enter your Email Address'/>
      </div>
      <div className='inputDiv'>
      <label for="Eamil">Enter Password</label>
        <input type="Password"  name='Name' placeholder='Enter Password'/>
      </div>

      <div className='inputDiv'>
      <label for="Eamil">Confirm Password</label>
        <input type="Password"  name='Name' placeholder='Confirm Password'/>
      </div>

    
        <button className='button' type='submit'>Sign up</button>
    
     </form>
     </div>
</div>
  </div>
  )
}

export default Signup