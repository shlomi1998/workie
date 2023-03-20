"use strict";
exports.__esModule = true;
var react_1 = require("react");
function ShowHover() {
    var _a = react_1.useState(0), time = _a[0], setTime = _a[1];
    function countHobver() {
        setTime(time + 1);
    }
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h2", { onMouseOver: countHobver }, time)));
}
exports["default"] = ShowHover;
