"use strict";
exports.__esModule = true;
var react_1 = require("react");
var logo_svg_1 = require("./logo.svg");
require("./dist/App.css");
var Welcome_1 = require("./Welcome");
var myImportedObject = require("./Vars");
var Birthday_1 = require("./Birthday");
var CountButton_1 = require("./CountButton");
var ShowHover_1 = require("./ShowHover");
var CountDown_1 = require("./CountDown");
var TodayTime_1 = require("./TodayTime");
// import InputViewer from "./InputViewer";
var MyDivContainer_1 = require("./MyDivContainer");
var Counter_1 = require("./Counter");
var RandomImageCard_1 = require("./RandomImageCard");
var MyRouter_1 = require("./MyRouter");
function App() {
    console.log(myImportedObject.foo);
    var vladislav = "heloo vladislav";
    var myChildren = ['shlomi', 'tal', 'vvladislav'];
    var someVar = true;
    var fathers = ['Avraham', 'Itzhak', 'Yaakov'];
    var listItems = fathers.map(function (father, index) {
        return react_1["default"].createElement("li", { key: index }, father);
    });
    var b = 5;
    var items = [];
    for (var i = 10; i > 0; i--) {
        items.push(react_1["default"].createElement("li", { key: i }, i));
    }
    var user = {
        name: 'Ran',
        lastName: 'Bar-Zik',
        city: 'Petah Tiqwa',
        id: '666'
    };
    var User = {
        name: 'Moshe',
        age: 10
    };
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
            someVar === true ? react_1["default"].createElement("span", null, "I am TRUE") : react_1["default"].createElement("span", null, "I am FALSE"),
            react_1["default"].createElement("ul", null, listItems),
            react_1["default"].createElement("ul", null, items),
            react_1["default"].createElement(Birthday_1["default"], { user: User }),
            react_1["default"].createElement(TodayTime_1["default"], null),
            react_1["default"].createElement(Welcome_1["default"], { name: "Moshe", prefix: "Doctor" }),
            react_1["default"].createElement(CountButton_1["default"], null),
            react_1["default"].createElement(ShowHover_1["default"], null),
            react_1["default"].createElement(CountDown_1["default"], { time: "3" }),
            react_1["default"].createElement(MyDivContainer_1["default"], null),
            react_1["default"].createElement(RandomImageCard_1["default"], null),
            react_1["default"].createElement(Counter_1["default"], null),
            react_1["default"].createElement(MyRouter_1["default"], null))));
}
exports["default"] = App;
