"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var Home_1 = require("./pages/Home");
var WhoWeAre_1 = require("./pages/WhoWeAre");
var react_router_dom_1 = require("react-router-dom");
var LoginPage_1 = require("./pages/LoginPage");
var Enrollment_1 = require("./pages/Enrollment");
var PersonalInformation_1 = require("./pages/PersonalInformation");
var AddingProfile_1 = require("./pages/AddingProfile");
function App() {
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement("div", { className: "App" },
            react_1["default"].createElement(react_router_dom_1.Routes, null,
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(Home_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/WhoWeAre", element: react_1["default"].createElement(WhoWeAre_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/LoginPage", element: react_1["default"].createElement(LoginPage_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/enrollment", element: react_1["default"].createElement(Enrollment_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/PersonalInformation", element: react_1["default"].createElement(PersonalInformation_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/AddingProfile", element: react_1["default"].createElement(AddingProfile_1["default"], null) })))));
}
exports["default"] = App;
