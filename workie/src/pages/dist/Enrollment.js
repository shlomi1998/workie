"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var TitleAnt_1 = require("../components/view/TitleAnt");
require("./dist/Enrollment.css");
function enrollment() {
    return (react_1["default"].createElement("div", { className: 'wraps' },
        react_1["default"].createElement(TitleAnt_1["default"], null),
        react_1["default"].createElement("div", { className: 'RegistrationEnvelope' },
            react_1["default"].createElement("h1", { className: 'enrollment' }, "enrollment"),
            react_1["default"].createElement("p", { className: 'enrollment_p' },
                "Register so that we can find ",
                react_1["default"].createElement("br", null),
                " a job for you soon "),
            react_1["default"].createElement("form", { className: 'fromWraps' },
                react_1["default"].createElement("input", { type: "text", placeholder: 'First name*', name: 'FirstName' }),
                react_1["default"].createElement("input", { type: "text", placeholder: 'Last Name*', name: 'LastName' }),
                react_1["default"].createElement("input", { type: "email", placeholder: 'email*', name: 'email' }),
                react_1["default"].createElement("input", { type: "password", placeholder: 'password*', name: 'password*' }),
                react_1["default"].createElement("input", { type: "email", placeholder: 'Password Authentication*', name: 'PasswordAuthentication' }),
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/PersonalInformation" },
                    react_1["default"].createElement("button", { type: 'submit', className: 'PersonalInformation__butoon' }, "enrollment"))))));
}
exports["default"] = enrollment;
