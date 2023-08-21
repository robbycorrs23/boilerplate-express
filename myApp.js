let express = require("express");
let app = express();

let absolutePath = __dirname + "/views/index.html";

app.get("/", function (req, res) {
  rres.sendFile(absolutePath);
});

module.exports = app;
