import React from "react";
import "./dist/AddingProfile.css";
import TitleAnt from "../components/view/TitleAnt";
import { Link } from "react-router-dom";

function AddingProfile() {
  return (
    <div className="wrapsProfile"  >
      <TitleAnt />
      <div className="wrapsProfile__">
        <h1 className="wrapsProfile__JustLittle">Just a little more</h1>

       
        <form >
          <img className="profilePicture" src="./images/ProfileImg.jpg" />
          <p className="AddAprofilePicture">Add a profile picture</p>
          <textarea
          placeholder="Tell us a little about yourself"
          className="ProfileStatus"
          rows={7}
          cols={40}
         />
           <Link to="/lets start">
      <button className='letsStart__button'>
      lets start!
      </button>
      </Link>
         </form> 
        
      </div>
    </div>
  );
}

export default AddingProfile;
