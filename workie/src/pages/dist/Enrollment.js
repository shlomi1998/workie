"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var TitleAnt_1 = require("../components/view/TitleAnt");
require("./dist/Enrollment.css");
function Enrollment() {
    var _a = react_1.useState(false), isVisible = _a[0], setIsVisible = _a[1];
    var toggleVisibility = function () {
        setIsVisible(!isVisible);
    };
    var _b = react_1.useState({
        regexfirstName: true,
        regexlastName: true,
        emailRegex: true,
        passwordRegex: true,
        passwordRegex2: true,
        EqualPassword: true
    }), regex = _b[0], setRegex = _b[1];
    var _c = react_1.useState(false), onSubmit = _c[0], setonSubmit = _c[1];
    var _d = react_1.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordAuthentication: ""
    }), person = _d[0], setPerson = _d[1];
    var handleClick = function () {
        setonSubmit(!onSubmit);
    };
    var handlefirstNameChange = function (event) {
        event.preventDefault();
        setPerson({ firstName: event.target.value });
        var regexfirstName = /^[a-zA-Zא-ת]+$/u.test(person.firstName);
        setRegex({ regexfirstName: regexfirstName });
        if (regexfirstName === true) {
            event.currentTarget.classList.remove('wrongWriting');
            event.currentTarget.classList.add('GoodWriting');
        }
        else {
            event.currentTarget.classList.remove('GoodWriting');
            event.currentTarget.classList.add('wrongWriting');
        }
        return regexfirstName;
    };
    var handleLastNameChange = function (event) {
        event.preventDefault();
        setPerson({ lastName: event.target.value });
        var regexlastName = /^[a-zA-Zא-ת]+$/u.test(person.lastName);
        setRegex({ regexlastName: regexlastName });
        if (regexlastName === true) {
            event.currentTarget.classList.remove('wrongWriting');
            event.currentTarget.classList.add('GoodWriting');
        }
        else {
            event.currentTarget.classList.remove('GoodWriting');
            event.currentTarget.classList.add('wrongWriting');
        }
        return regexlastName;
    };
    var handleEmailChange = function (event) {
        event.preventDefault();
        setPerson({ email: event.target.value });
        var emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(person.email);
        setRegex({ emailRegex: emailRegex });
        if (emailRegex === true) {
            event.currentTarget.classList.remove('wrongWriting');
            event.currentTarget.classList.add('GoodWriting');
        }
        else {
            event.currentTarget.classList.remove('GoodWriting');
            event.currentTarget.classList.add('wrongWriting');
        }
        return emailRegex;
    };
    var handlePasswordChange = function (event) {
        event.preventDefault();
        setPerson({ password: event.target.value });
        var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/.test(person.password);
        setRegex({ passwordRegex: passwordRegex });
        if (passwordRegex === true) {
            event.currentTarget.classList.remove('wrongWriting');
            event.currentTarget.classList.add('GoodWriting');
        }
        else {
            event.currentTarget.classList.remove('GoodWriting');
            event.currentTarget.classList.add('wrongWriting');
        }
        return passwordRegex;
    };
    var handlePasswordAuthenticationChange = function (event) {
        event.preventDefault();
        setPerson({ passwordAuthentication: event.target.value });
        var passwordRegex2 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/.test(person.passwordAuthentication);
        setRegex({ passwordRegex2: passwordRegex2 });
        if (passwordRegex2 === true) {
            event.currentTarget.classList.remove('wrongWriting');
            event.currentTarget.classList.add('GoodWriting');
        }
        else {
            event.currentTarget.classList.remove('GoodWriting');
            event.currentTarget.classList.add('wrongWriting');
        }
        return passwordRegex2;
    };
    var areStringsEqual = function () {
        var EqualPassword = /^(.+)\1$/.test(person.password + person.passwordAuthenticatio);
        setRegex({ EqualPassword: EqualPassword });
        return EqualPassword;
    };
    return (react_1["default"].createElement("div", { className: "wraps" },
        react_1["default"].createElement(TitleAnt_1["default"], null),
        react_1["default"].createElement("div", { className: "RegistrationEnvelope" },
            react_1["default"].createElement("h1", { className: "enrollment" }, "enrollment"),
            react_1["default"].createElement("p", { className: "enrollment_p" },
                "Register so that we can find ",
                react_1["default"].createElement("br", null),
                " a job for you soon",
                " "),
            react_1["default"].createElement("form", { className: "fromWraps", onSubmit: handleClick, defaultValue: "DEFAULT" },
                react_1["default"].createElement("input", { type: "text", placeholder: "First name*", className: "defult", onChange: handlefirstNameChange }),
                react_1["default"].createElement("input", { type: "text", placeholder: "Last Name*", className: "defult", name: "LastName", onChange: handleLastNameChange }),
                react_1["default"].createElement("input", { type: "email", placeholder: "email*", className: "defult", onChange: handleEmailChange }),
                react_1["default"].createElement("input", { type: "text", placeholder: "password*", className: "defult", onChange: handlePasswordChange }),
                react_1["default"].createElement("div", { className: "passwordIconWrapper" },
                    react_1["default"].createElement("input", { type: isVisible ? "text" : "password", placeholder: "Password Authentication*", className: "defult", onChange: handlePasswordAuthenticationChange }),
                    react_1["default"].createElement("span", { className: isVisible ? "fa-solid fa-eye" : "fa-solid fa-eye-slash", onClick: toggleVisibility })),
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/PersonalInformation" },
                    react_1["default"].createElement("button", { type: "submit", className: "PersonalInformation__butoon" }, "enrollment"))))));
}
exports["default"] = Enrollment;
