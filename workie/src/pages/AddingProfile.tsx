import React, { useState } from "react";
import "./dist/AddingProfile.css";
import TitleAnt from "../components/view/TitleAnt";
import { Link } from "react-router-dom";

function AddingProfile() {
  const [imageSrc, setImageSrc] = useState("./images/ProfileImg.jpg");
  const [image, setImage] = useState('');

 

  const handleImageUpload = (e:any) => {
    const file = e.target.files[0];
    const reader:any = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    }

    reader.readAsDataURL(file);


    changeImageSrc();
  }

  // const handleSubmit = (e:any) => {
  //   e.preventDefault();
    
  //   // Send the image data to the server for saving
  //   console.log('Image data:', image);
  // }

  function changeImageSrc() {
    if(image){
      setImageSrc(image);
    }
      
  }


  return (
    <div className="wrapsProfile"  >
      <TitleAnt />
      <div className="wrapsProfile__">
        <h1 className="wrapsProfile__JustLittle">Just a little more</h1>

       
        <form >
          <div className="WrapsProfilePicture"> 
          <img className="profilePicture" src={image?image:imageSrc} alt="Profile picture preview" />
          <input className="inputFile" type="file" accept="image/*" id="image-upload" onChange={handleImageUpload} />
          <span  className={ "fa-solid fa-pen"}/>
          </div>
       
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
