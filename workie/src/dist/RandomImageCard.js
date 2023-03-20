"use strict";
exports.__esModule = true;
var React = require("react");
var Card_1 = require("@mui/material/Card");
var CardActions_1 = require("@mui/material/CardActions");
var CardContent_1 = require("@mui/material/CardContent");
var CardMedia_1 = require("@mui/material/CardMedia");
var Button_1 = require("@mui/material/Button");
var Typography_1 = require("@mui/material/Typography");
function ImgMediaCard() {
    return (React.createElement(Card_1["default"], { sx: { maxWidth: 345 } },
        React.createElement(CardMedia_1["default"], { component: "img", alt: "green iguana", height: "140", image: "/static/images/cards/contemplative-reptile.jpg" }),
        React.createElement(CardContent_1["default"], null,
            React.createElement(Typography_1["default"], { gutterBottom: true, variant: "h5", component: "div" }, "Lizard"),
            React.createElement(Typography_1["default"], { variant: "body2", color: "text.secondary" }, "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica")),
        React.createElement(CardActions_1["default"], null,
            React.createElement(Button_1["default"], { size: "small" }, "Share"),
            React.createElement(Button_1["default"], { size: "small" }, "Learn More"))));
}
exports["default"] = ImgMediaCard;
