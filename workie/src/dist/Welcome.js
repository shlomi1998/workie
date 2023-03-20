"use strict";
exports.__esModule = true;
var react_1 = require("react");
function Welcome(props) {
    var name = props.name;
    var prefix = props.prefix;
    return (react_1["default"].createElement("span", null,
        "Hello, ",
        prefix,
        " ",
        name,
        "!") // Component will be here
    );
}
exports["default"] = Welcome;
