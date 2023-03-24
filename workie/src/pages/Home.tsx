import React from 'react'
import Navbar from '../components/view/Navbar'
import HomeTitle from '../components/view/HomeTitle'
import './dist/Home.css'
import Welcome from '../components/view/Welcome'
import LoginButton from '../components/view/LoginButton'
import SignUp from '../components/view/SignUp'



function Home() {
  return (
    <div >
      <Navbar/>
      <HomeTitle/>
      <div className='wraps' >
      <img className='wraps__homeImg' src='images/homeImg.jpg'/>
        </div>
        <Welcome/>
        <LoginButton/>
        <SignUp/>
        

       </div>
       
  )
}

export default Home
