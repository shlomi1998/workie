"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./dist/Counter.css");
function Counter() {
    var _a = react_1.useState(0), count = _a[0], setCount = _a[1];
    react_1.useEffect(function () { console.log('re-rendered!'); });
    function increaseHandler() {
        setCount(count + 1);
    }
    function decreaseHandler() {
        setCount(count - 1);
    }
    function restartHandler() {
        setCount(0);
    }
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("button", { onClick: increaseHandler }, "Increase"),
        react_1["default"].createElement("button", { onClick: decreaseHandler }, "Decrease"),
        react_1["default"].createElement("button", { className: 'bi', onClick: restartHandler }, "Restart"),
        react_1["default"].createElement("div", null, count)));
}
exports["default"] = Counter;
