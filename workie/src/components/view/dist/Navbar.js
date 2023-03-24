"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./dist/Navbar.css");
var Logo_1 = require("./Logo");
function Navbar() {
    return (react_1["default"].createElement("nav", { className: 'navbar' },
        react_1["default"].createElement("div", { className: 'navbar__container' },
            react_1["default"].createElement(Logo_1["default"], null))));
}
exports["default"] = Navbar;
