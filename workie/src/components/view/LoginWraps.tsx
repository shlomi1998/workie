import React from 'react'
import { Link } from 'react-router-dom'
import './dist/LoginWraps.css'

function LoginWraps() {
  return (
    <div className='loginWarps1'>
    <div className='loginWarps'>
        <h2 className='loginWarps__titel'>entrance</h2>
        <p className='loginWarps__paragraph'>Log in to view the newest jobs</p>
        <input className='checkEmail' type="text" placeholder='   email or phone number'/>
        <input className='checkPassword' type="password" placeholder='   password'/>
        <Link to="/MainScreen">
        <button className='login__Button'>
        log in
        </button>
        </Link>
        
        <Link className='forgotPassword' to='/'>forgot password ?</Link>
    </div>
    </div>
  )
}

export default LoginWraps
