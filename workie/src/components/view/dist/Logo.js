"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./dist/Logo.css");
function Logo() {
    return (react_1["default"].createElement("div", { className: 'wraps' },
        react_1["default"].createElement("div", { className: 'wraps__logo' },
            react_1["default"].createElement("img", { className: 'wraps__logo__ant', src: 'images/ant.png' }))));
}
exports["default"] = Logo;
