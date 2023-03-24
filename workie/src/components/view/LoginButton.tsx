import React from 'react'
import './dist/LoginButton.css'

function LoginButton() {
  return (
    <div className='login'>
      <button className='login__Button'>
        <span className='login__Button__text'>Log In</span>
      </button>
    </div>
  )
}

export default LoginButton
