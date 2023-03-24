"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./dist/LoginButton.css");
function LoginButton() {
    return (react_1["default"].createElement("div", { className: 'login' },
        react_1["default"].createElement("button", { className: 'login__Button' },
            react_1["default"].createElement("span", { className: 'login__Button__text' }, "Log In"))));
}
exports["default"] = LoginButton;
