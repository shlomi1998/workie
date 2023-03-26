var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());
app.use(express.json());
app.get("/message", function (req, res) {
    res.json({ message: "Hello from server!" });
});
app.listen(8000, function () {
    console.log("Server is running on port 8000.");
});
