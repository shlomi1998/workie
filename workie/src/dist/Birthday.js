"use strict";
exports.__esModule = true;
var react_1 = require("react");
function Birthday(props) {
    var _a = props.user, age = _a.age, name = _a.name;
    var phrase = age <= 18 ? 'You are underaged!' : 'You are OK!';
    return (react_1["default"].createElement("span", null,
        "Happy Birthday ",
        name,
        "! You are ",
        age,
        " years old!! ",
        react_1["default"].createElement("span", null, phrase)));
}
exports["default"] = Birthday;
