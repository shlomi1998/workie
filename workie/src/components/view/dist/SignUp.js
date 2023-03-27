"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./dist/SignUp.css");
var react_router_dom_1 = require("react-router-dom");
function SignUp() {
    return (react_1["default"].createElement("div", { className: 'signUp' },
        react_1["default"].createElement("p", { className: 'signUp__p' }, "Don't have an account? "),
        react_1["default"].createElement(react_router_dom_1.Link, { className: 'SignUpLink', to: "/enrollment" }, "Sign up")));
}
exports["default"] = SignUp;
