"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var TitleAnt_1 = require("../components/view/TitleAnt");
require("./dist/PersonalInformation.css");
function PersonalInformation() {
    return (react_1["default"].createElement("div", { className: 'wraps_Information' },
        react_1["default"].createElement(TitleAnt_1["default"], null),
        react_1["default"].createElement("div", { className: 'wraps__Information__child' },
            react_1["default"].createElement("h1", { className: 'Welcome' }, "welcome"),
            react_1["default"].createElement("p", { className: 'Welcome__p' },
                "Please fill in the details below so ",
                react_1["default"].createElement("br", null),
                " we can know more about him "),
            react_1["default"].createElement("form", { className: 'fromWraps' },
                react_1["default"].createElement("select", { name: "gender", className: 'gender' },
                    react_1["default"].createElement("option", { value: "", disabled: true, selected: true }, "gender*"),
                    react_1["default"].createElement("option", { className: 'male', value: "male" }, "male"),
                    react_1["default"].createElement("option", { className: 'female', value: "female" }, "female"),
                    react_1["default"].createElement("option", { className: 'other', value: "other" }, "Other")),
                react_1["default"].createElement("input", { type: "date", name: "DateOfBirth", id: "DateOfBirth" }),
                react_1["default"].createElement("input", { type: "text", name: "Hometown", id: "Hometown", placeholder: 'Hometown' }),
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/AddingProfile" },
                    react_1["default"].createElement("button", { className: 'addingProfile' }, "approval"))))));
}
exports["default"] = PersonalInformation;
