"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Navbar_1 = require("../components/view/Navbar");
var HomeTitle_1 = require("../components/view/HomeTitle");
require("./dist/Home.css");
var Welcome_1 = require("../components/view/Welcome");
var LoginButton_1 = require("../components/view/LoginButton");
var SignUp_1 = require("../components/view/SignUp");
function Home() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(Navbar_1["default"], null),
        react_1["default"].createElement(HomeTitle_1["default"], null),
        react_1["default"].createElement("div", { className: 'wraps' },
            react_1["default"].createElement("img", { className: 'wraps__homeImg', src: 'images/homeImg.jpg' })),
        react_1["default"].createElement(Welcome_1["default"], null),
        react_1["default"].createElement(LoginButton_1["default"], null),
        react_1["default"].createElement(SignUp_1["default"], null)));
}
exports["default"] = Home;
