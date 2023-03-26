"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./dist/LoginButton.css");
var react_router_dom_1 = require("react-router-dom");
function LoginButton() {
    return (react_1["default"].createElement("div", { className: 'login' },
        react_1["default"].createElement(react_router_dom_1.Link, { to: "/LoginPage" },
            react_1["default"].createElement("button", { className: 'login__Button' }, "Log In"))));
}
exports["default"] = LoginButton;
