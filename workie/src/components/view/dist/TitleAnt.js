"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./dist/TitleAnt.css");
function TitleAnt() {
    return (react_1["default"].createElement("div", { className: 'wrapsLogo' },
        react_1["default"].createElement("img", { className: 'imgTitil', src: "images/ant-white.png", alt: "not exist" }),
        react_1["default"].createElement("h1", { className: 'title_' }, "Workie")));
}
exports["default"] = TitleAnt;
