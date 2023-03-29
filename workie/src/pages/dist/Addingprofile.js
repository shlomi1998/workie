"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./dist/AddingProfile.css");
var TitleAnt_1 = require("../components/view/TitleAnt");
var react_router_dom_1 = require("react-router-dom");
function AddingProfile() {
    var _a = react_1.useState("./images/ProfileImg.jpg"), imageSrc = _a[0], setImageSrc = _a[1];
    var _b = react_1.useState(''), image = _b[0], setImage = _b[1];
    var handleImageUpload = function (e) {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onload = function () {
            setImage(reader.result);
        };
        reader.readAsDataURL(file);
        changeImageSrc();
    };
    // const handleSubmit = (e:any) => {
    //   e.preventDefault();
    //   // Send the image data to the server for saving
    //   console.log('Image data:', image);
    // }
    function changeImageSrc() {
        if (image) {
            setImageSrc(image);
        }
    }
    return (react_1["default"].createElement("div", { className: "wrapsProfile" },
        react_1["default"].createElement(TitleAnt_1["default"], null),
        react_1["default"].createElement("div", { className: "wrapsProfile__" },
            react_1["default"].createElement("h1", { className: "wrapsProfile__JustLittle" }, "Just a little more"),
            react_1["default"].createElement("form", null,
                react_1["default"].createElement("div", { className: "WrapsProfilePicture" },
                    react_1["default"].createElement("img", { className: "profilePicture", src: image ? image : imageSrc, alt: "Profile picture preview" }),
                    react_1["default"].createElement("input", { className: "inputFile", type: "file", accept: "image/*", id: "image-upload", onChange: handleImageUpload }),
                    react_1["default"].createElement("span", { className: "fa-solid fa-pen" })),
                react_1["default"].createElement("p", { className: "AddAprofilePicture" }, "Add a profile picture"),
                react_1["default"].createElement("textarea", { placeholder: "Tell us a little about yourself", className: "ProfileStatus", rows: 7, cols: 40 }),
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/lets start" },
                    react_1["default"].createElement("button", { className: 'letsStart__button' }, "lets start!"))))));
}
exports["default"] = AddingProfile;
