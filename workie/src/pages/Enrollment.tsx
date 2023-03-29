import console from "console";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CheckingUserData from "../components/controller/CheckingUserData";
import TitleAnt from "../components/view/TitleAnt";
import "./dist/Enrollment.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Enrollment() {
  

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
 
  
  const [regex , setRegex]: any = useState({
    regexfirstName: true,
    regexlastName: true,
    emailRegex: true,
    passwordRegex: true,
    passwordRegex2: true,
    EqualPassword: true,
  });
  
  const [onSubmit, setonSubmit] = useState(false);

  const [person, setPerson]: any = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordAuthentication: "",
  });

  const handleClick = () => {
    setonSubmit(!onSubmit);
  };

 


  const handlefirstNameChange = (event: any) => {
    event.preventDefault()
    setPerson({ firstName: event.target.value });
     const regexfirstName = /^[a-zA-Zא-ת]+$/u.test(person.firstName);
     setRegex({regexfirstName:regexfirstName}) 
     if(regexfirstName===true){
      event.currentTarget.classList.remove('wrongWriting');
      event.currentTarget.classList.add('GoodWriting');
    }else{
      event.currentTarget.classList.remove('GoodWriting');
      event.currentTarget.classList.add('wrongWriting');
    }
     return regexfirstName;
  };

  const handleLastNameChange = (event: any) => {
    event.preventDefault()
    setPerson({ lastName: event.target.value });
    const regexlastName = /^[a-zA-Zא-ת]+$/u.test(person.lastName); 
    setRegex({regexlastName:regexlastName}) 
    if(regexlastName===true){
      event.currentTarget.classList.remove('wrongWriting');
      event.currentTarget.classList.add('GoodWriting');
    }else{
      event.currentTarget.classList.remove('GoodWriting');
      event.currentTarget.classList.add('wrongWriting');
    }
    return regexlastName;
  };
  const handleEmailChange = (event: any) => {
    event.preventDefault()
    setPerson({ email: event.target.value });
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(person.email);
    setRegex({emailRegex:emailRegex}) 
    
    if(emailRegex===true){
      event.currentTarget.classList.remove('wrongWriting');
      event.currentTarget.classList.add('GoodWriting');
    }else{
      event.currentTarget.classList.remove('GoodWriting');
      event.currentTarget.classList.add('wrongWriting');
    }
    
    return emailRegex;
  };

  const handlePasswordChange = (event: any) => {
    event.preventDefault()
    setPerson({ password: event.target.value });
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/.test(
      person.password
    );

    
    setRegex({passwordRegex:passwordRegex}) 
    if(passwordRegex===true ){
      event.currentTarget.classList.remove('wrongWriting');
      event.currentTarget.classList.add('GoodWriting');
    }else{
      event.currentTarget.classList.remove('GoodWriting');
      event.currentTarget.classList.add('wrongWriting');
    }
  
   
    return passwordRegex;
  };

  const handlePasswordAuthenticationChange = (event: any) => {
    event.preventDefault()
    setPerson({ passwordAuthentication: event.target.value });
    const passwordRegex2 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/.test(
      person.passwordAuthentication
    );
       
    setRegex({passwordRegex2:passwordRegex2}) 
    if(passwordRegex2===true){
      event.currentTarget.classList.remove('wrongWriting');
      event.currentTarget.classList.add('GoodWriting');
    }else{
      event.currentTarget.classList.remove('GoodWriting');
      event.currentTarget.classList.add('wrongWriting');
    }
    return passwordRegex2;
  };

  const areStringsEqual = () => {
    
    const EqualPassword = /^(.+)\1$/.test(person.password +person. passwordAuthenticatio); 
    setRegex({EqualPassword:EqualPassword}) 
    return EqualPassword;
  };

 

  return (
    <div className="wraps">
      <TitleAnt />
      <div className="RegistrationEnvelope">
        <h1 className="enrollment">enrollment</h1>
        <p className="enrollment_p">
          Register so that we can find <br /> a job for you soon{" "}
        </p>

        <form
          className="fromWraps"
          onSubmit={handleClick}
          defaultValue={"DEFAULT"}
        >
          <input
          
            type="text"
            placeholder="First name*"
            className="defult"
            onChange={handlefirstNameChange}
          />
          <input
          
            type="text"
            placeholder="Last Name*"
            className="defult"
            name="LastName"
            onChange={handleLastNameChange}
          />
          <input
           
            type="email"
            placeholder="email*"
            className="defult"
            onChange={handleEmailChange}
          />
          <input
           
            type="text"
            placeholder="password*"
            className="defult"
            onChange={handlePasswordChange}
          />

          <div className="passwordIconWrapper" >

          <input
           
           type={isVisible ? "text" : "password"}
           placeholder="Password Authentication*"
           className="defult"
           onChange={handlePasswordAuthenticationChange}
           
         />
         <span className={isVisible ?"fa-solid fa-eye":"fa-solid fa-eye-slash"} onClick={toggleVisibility}  />
         

          </div>
         

          <Link to="/PersonalInformation"> 
            <button type="submit" className="PersonalInformation__butoon">
              enrollment
            </button>
          </Link>
        </form>
      </div>

   
     
     
    </div>
  );
}

export default Enrollment;




