"use strict";
exports.__esModule = true;
var react_1 = require("react");
function InputViewer() {
    var _a = react_1.useState(''), text = _a[0], setText = _a[1];
    function changeHandler(e) {
        setText(e.target.value);
    }
    ;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("span", null, text),
        react_1["default"].createElement("input", { onChange: changeHandler, type: "text" })));
}
exports["default"] = InputViewer;
