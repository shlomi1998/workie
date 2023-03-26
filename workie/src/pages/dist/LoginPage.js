"use strict";
exports.__esModule = true;
var react_1 = require("react");
var LoginWraps_1 = require("../components/view/LoginWraps");
require("./dist/LoginPage.css");
function LoginPage() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: 'wrapsLogin' },
            react_1["default"].createElement("img", { className: 'imgTitile', src: "images/ant-white.png", alt: "not exist" }),
            react_1["default"].createElement("h1", { className: 'title' }, "Workie"),
            react_1["default"].createElement(LoginWraps_1["default"], null)),
        react_1["default"].createElement("img", { className: 'imgLogin', src: 'images/imgLogin.jpg', alt: "not exist" })));
}
exports["default"] = LoginPage;
