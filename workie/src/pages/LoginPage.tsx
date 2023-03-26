import React from 'react'
import LoginWraps from '../components/view/LoginWraps';
import './dist/LoginPage.css'

function LoginPage() {
  return (
    <div >
        <div className='wrapsLogin'>
        <img className='imgTitile' src="images/ant-white.png" alt="not exist" />
       <h1 className='title'>Workie</h1>
       <LoginWraps/>
        </div>
    
        <img className='imgLogin' src='images/imgLogin.jpg' alt="not exist" />
    </div>
  )
}

export default LoginPage;
