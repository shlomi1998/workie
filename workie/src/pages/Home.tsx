import React from "react";
import Logo from "../components/view/Logo";
import "./dist/Home.css";

function Home() {
  return (
    <div className="bodyContainer">
      <nav className="navbar">
        <div className="navbar__container">
          <Logo />
        </div>
      </nav>
      <h1 className="titel">Workie</h1>
      <div className="wraps">
        <img className="wraps__homeImg" src="images/homeImg.jpg" />
      </div>
      <div>
        <h2>Welcome</h2>
        <p>Enter to your account create a new one</p>
      </div>
      <div className="login">
        <button className="login__Button">
          <span className="login__Button__text">Log In</span>
        </button>
      </div>
      <div className="signUp">
        <p className="signUp__p">Don't have an account?</p>
        {/* <Link to="/">Sign up</Link> */}
      </div>
    </div>
  );
  // return (
  //   <div >
  //     <Navbar/>
  //     <HomeTitle/>
  //     <div className='wraps' >
  //     <img className='wraps__homeImg' src='images/homeImg.jpg'/>
  //       </div>
  //       <Welcome/>
  //       <LoginButton/>
  //       <SignUp/>

  //      </div>

  // )
}

export default Home;
