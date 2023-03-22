"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
app.use(express_1["default"].static("./workie"));
var PORT = 8000;
app.get("/workie", function (req, res) {
    res.json({ message: "Hello from server!" });
});
app.listen(PORT, function () {
    console.log("Server is listening on port " + PORT);
});
