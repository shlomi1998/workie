"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Home_1 = require("./Home");
var NiceImage_1 = require("./NiceImage");
function MyRouter() {
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement("div", null,
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/" }, "Home"),
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/image" }, "Nice Image"),
            react_1["default"].createElement(react_router_dom_1.Routes, null,
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(Home_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/image", element: react_1["default"].createElement(NiceImage_1["default"], null) })))));
}
exports["default"] = MyRouter;
