"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./dist/LoginWraps.css");
function LoginWraps() {
    return (react_1["default"].createElement("div", { className: 'loginWarps1' },
        react_1["default"].createElement("div", { className: 'loginWarps' },
            react_1["default"].createElement("h2", { className: 'loginWarps__titel' }, "log in"),
            react_1["default"].createElement("p", { className: 'loginWarps__paragraph' }, "Log in to view the newest jobs"),
            react_1["default"].createElement("input", { className: 'checkEmail', type: "text", placeholder: '   email or phone number' }),
            react_1["default"].createElement("input", { className: 'checkPassword', type: "password", placeholder: '   password' }),
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/MainScreen" },
                react_1["default"].createElement("button", { className: 'login__Button' }, "log in")),
            react_1["default"].createElement(react_router_dom_1.Link, { className: 'forgotPassword', to: '/' }, "forgot password ?"))));
}
exports["default"] = LoginWraps;
