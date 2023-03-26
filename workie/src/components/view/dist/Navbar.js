"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./dist/Navbar.css");
var Logo_1 = require("./Logo");
var react_router_dom_1 = require("react-router-dom");
function Navbar() {
    return (react_1["default"].createElement("nav", { className: 'navbar' },
        react_1["default"].createElement("div", { className: 'navbar__container' },
            react_1["default"].createElement(Logo_1["default"], null),
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/WhoWeAre" },
                react_1["default"].createElement("button", { className: 'navbar__container__whoWeAre' }, "Who we are?")))));
}
exports["default"] = Navbar;
