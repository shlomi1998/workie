import React from 'react'
import './dist/LoginButton.css'
import { Link } from 'react-router-dom'

function LoginButton() {
  return (
    <div className='login'>

    <Link to="/LoginPage">
      <button className='login__Button'>
        Log In
      </button>
      </Link>

    </div>




  )
}

export default LoginButton
