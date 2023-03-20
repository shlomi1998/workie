"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Watch_1 = require("./Watch");
function TodayTime() {
    var _a = react_1.useState(Date.now()), today = _a[0], setToday = _a[1];
    function upTime() {
        setToday(Date.now());
    }
    setInterval(upTime, 1000);
    return (react_1["default"].createElement(Watch_1["default"], { milliseconds: today }));
}
exports["default"] = TodayTime;
