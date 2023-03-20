"use strict";
exports.__esModule = true;
var react_1 = require("react");
function CountButton() {
    var count = 0;
    function countUp() {
        count = count + 1;
    }
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h2", null, count),
        react_1["default"].createElement("button", { onClick: countUp }, "Click me")));
}
exports["default"] = CountButton;
