"use client"
import React from 'react'
import "./forgot-password.css"
export const ForgetPssd = () => {
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
        <div className='Login'>Password Reset</div>
        <div className='inputDiv'>
          <label for="Eamil">Email</label>
          <input type="text"  name='Name' placeholder='Enter your Email Address'/>
        </div>
        <div className='inputDiv'>
        <label for="Eamil">Enter New Password</label>
          <input type="Password"  name='Name' placeholder='Confirm Password'/>
        </div>

        <div className='inputDiv'>
        <label for="Eamil">Confirm New Password</label>
          <input type="Password"  name='Name' placeholder='Password'/>
        </div>
  
      
          <button className='button' type='submit'>Reset Password</button>
      
       </form>
       </div>
  </div>
    </div>
  )
}
export default ForgetPssd