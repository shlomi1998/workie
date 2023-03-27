import React from 'react'
import { Link } from 'react-router-dom'
import TitleAnt from '../components/view/TitleAnt'
import './dist/Enrollment.css'

function enrollment() {
  return (
    <div className='wraps'>
   <TitleAnt/>
     <div className='RegistrationEnvelope'>
     <h1 className='enrollment'>enrollment</h1>
     <p className='enrollment_p'>Register so that we can find <br /> a job for you soon </p>
    
    

      <form className='fromWraps' >
        <input type="text" placeholder='First name*' name='FirstName'/>
        <input type="text" placeholder='Last Name*' name='LastName'/>
        <input type="email" placeholder='email*' name='email'  />
        <input type="password" placeholder='password*' name='password*'/>
        <input type="email" placeholder='Password Authentication*' name='PasswordAuthentication'/>
        
      <Link to="/PersonalInformation">
      <button type='submit' className='PersonalInformation__butoon'>
      enrollment
      </button>
      </Link>
      </form>

      </div>
     
      
    </div>
  )
}

export default enrollment
