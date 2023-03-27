"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./dist/AddingProfile.css");
var TitleAnt_1 = require("../components/view/TitleAnt");
var react_router_dom_1 = require("react-router-dom");
function AddingProfile() {
    return (react_1["default"].createElement("div", { className: "wrapsProfile" },
        react_1["default"].createElement(TitleAnt_1["default"], null),
        react_1["default"].createElement("div", { className: "wrapsProfile__" },
            react_1["default"].createElement("h1", { className: "wrapsProfile__JustLittle" }, "Just a little more"),
            react_1["default"].createElement("form", null,
                react_1["default"].createElement("img", { className: "profilePicture", src: "./images/ProfileImg.jpg" }),
                react_1["default"].createElement("p", { className: "AddAprofilePicture" }, "Add a profile picture"),
                react_1["default"].createElement("textarea", { placeholder: "Tell us a little about yourself", className: "ProfileStatus", rows: 7, cols: 40 }),
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/lets start" },
                    react_1["default"].createElement("button", { className: 'letsStart__button' }, "lets start!"))))));
}
exports["default"] = AddingProfile;
