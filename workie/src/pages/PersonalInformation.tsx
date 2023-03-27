import React from 'react'
import { Link } from 'react-router-dom'
import TitleAnt from '../components/view/TitleAnt'
import './dist/PersonalInformation.css'

function PersonalInformation() {
  return (
        <div className='wraps_Information'>
   <TitleAnt/>
     <div className='wraps__Information__child'>
     <h1 className='Welcome'>welcome</h1>
     <p className='Welcome__p'>Please fill in the details below so <br /> we can know more about him </p>
    
    

      <form className='fromWraps' >
  <select name="gender" className='gender'>
  <option value="" disabled selected >gender*</option>
  <option className='male' value="male" >male</option>
  <option className='female' value="female">female</option>
  <option className='other' value="other">Other</option>
  </select>
  <input type="date" name="DateOfBirth" id="DateOfBirth" />
  <input type="text" name="Hometown" id="Hometown"  placeholder='Hometown'/>

  <Link to="/AddingProfile">
      <button className='addingProfile'>
      approval
      </button>
      </Link>
      </form>
   
      </div>
    </div>
  )
}

export default PersonalInformation
