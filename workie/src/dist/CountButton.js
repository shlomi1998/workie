"use strict";
exports.__esModule = true;
var react_1 = require("react");
function CountButton() {
    var _a = react_1.useState(0), count = _a[0], setCount = _a[1];
    function countUp() {
        setCount(count + 1);
    }
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h2", null, count),
        react_1["default"].createElement("button", { onClick: countUp }, "Clck me")));
}
exports["default"] = CountButton;
