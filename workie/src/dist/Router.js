"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Home_1 = require("./Home");
var Help_1 = require("./Help");
var About_1 = require("./About");
function Router() {
    var _a = react_1.useState(window.location.hash.substr(1)), route = _a[0], setRoute = _a[1];
    react_1.useEffect(function () {
        window.addEventListener('hashchange', function () {
            setRoute(window.location.hash.substr(1));
        });
    }, []);
    var Child;
    function getChild() {
        switch (route) {
            case '/about':
                Child = About_1["default"];
                break;
            case '/help':
                Child = Help_1["default"];
                break;
            default:
                Child = Home_1["default"];
        }
    }
    return (react_1["default"].createElement("div", null,
        getChild(),
        react_1["default"].createElement("h1", null, "App"),
        react_1["default"].createElement("ul", null,
            react_1["default"].createElement("li", null,
                react_1["default"].createElement("a", { href: "#/about" }, "About")),
            react_1["default"].createElement("li", null,
                react_1["default"].createElement("a", { href: "#/help" }, "Help")),
            react_1["default"].createElement("li", null,
                react_1["default"].createElement("a", { href: "#/home" }, "Home"))),
        react_1["default"].createElement(Child, null)));
}
exports["default"] = Router;
