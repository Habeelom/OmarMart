import React from 'react'
import './CSS/loginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email Address' />
            <input type="password" placeholder='Password' />
        </div>
        <button>Next</button>
        <p className="loginsignup-login">Already registered? <span>Login here</span></p>
        <div className="loginsignup-agree">
            <input type="checkbox" name='' id=''/>
            <p>By continuing, I agree to the terms of use</p>
      </div>
      </div>
    </div>
  )
}

export default LoginSignup
