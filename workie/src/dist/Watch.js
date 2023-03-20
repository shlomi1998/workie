"use strict";
exports.__esModule = true;
var react_1 = require("react");
function Watch(props) {
    var date = new Date(props.milliseconds);
    var options = { weekday: 'long', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    var time = date.toLocaleDateString();
    return (react_1["default"].createElement("span", null, time));
}
exports["default"] = Watch;
