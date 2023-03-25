"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Logo_1 = require("../components/view/Logo");
require("./dist/Home.css");
function Home() {
    return (react_1["default"].createElement("div", { className: "bodyContainer" },
        react_1["default"].createElement("nav", { className: "navbar" },
            react_1["default"].createElement("div", { className: "navbar__container" },
                react_1["default"].createElement(Logo_1["default"], null))),
        react_1["default"].createElement("h1", { className: "titel" }, "Workie"),
        react_1["default"].createElement("div", { className: "wraps" },
            react_1["default"].createElement("img", { className: "wraps__homeImg", src: "images/homeImg.jpg" })),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("h2", null, "Welcome"),
            react_1["default"].createElement("p", null, "Enter to your account create a new one")),
        react_1["default"].createElement("div", { className: "login" },
            react_1["default"].createElement("button", { className: "login__Button" },
                react_1["default"].createElement("span", { className: "login__Button__text" }, "Log In"))),
        react_1["default"].createElement("div", { className: "signUp" },
            react_1["default"].createElement("p", { className: "signUp__p" }, "Don't have an account?"))));
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
exports["default"] = Home;
