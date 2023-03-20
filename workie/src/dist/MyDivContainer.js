"use strict";
exports.__esModule = true;
var react_1 = require("react");
function MyDivContainer() {
    var _a = react_1.useState(''), activeText = _a[0], setActiveText = _a[1];
    function mouseoverHandler(e) {
        setActiveText('active');
    }
    function mouseoutHandler(e) {
        setActiveText('');
    }
    return (react_1["default"].createElement("div", { onMouseOver: mouseoverHandler, onMouseOut: mouseoutHandler },
        "MyDiv ",
        activeText));
}
exports["default"] = MyDivContainer;
