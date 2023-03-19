"use strict";
exports.__esModule = true;
var react_1 = require("react");
var logo_svg_1 = require("./logo.svg");
require("./dist/App.css");
var Welcome_1 = require("./Welcome");
var myImportedObject = require("./Vars");
function App() {
    console.log(myImportedObject.foo);
    var vladislav = "heloo vladislav";
    var myChildren = ['shlomi', 'tal', 'vvladislav'];
    var someVar = true;
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("header", { className: "App-header" },
            react_1["default"].createElement("img", { src: logo_svg_1["default"], className: "App-logo", alt: "logo" }),
            react_1["default"].createElement("p", null,
                "Edit ",
                react_1["default"].createElement("code", null, "src/App.tsx"),
                " and save to reload."),
            react_1["default"].createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, "bla bla"),
            react_1["default"].createElement(Welcome_1["default"], null),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("p", { className: 'Heloo' }, vladislav),
            react_1["default"].createElement("ul", null, myChildren.map(function (man) { return react_1["default"].createElement("li", null,
                " ",
                man,
                " "); })),
            someVar === true ? react_1["default"].createElement("span", null, "I am TRUE") : react_1["default"].createElement("span", null, "I am FALSE"))));
}
exports["default"] = App;
