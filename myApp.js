require("dotenv").config();

let express = require("express");
let app = express();

let absolutePath = __dirname + "/views/index.html";
let publicPath = __dirname + "/public";

app.get("/", function (req, res) {
  res.sendFile(absolutePath);
});

app.use("/public", express.static(publicPath));

app.get("/json", function (req, res) {
  let response = (process.env.MESSAGE_STYLE = "uppercase"
    ? "Hello json".toUpperCase()
    : "Hello json");
  res.json({ message: response });
});

module.exports = app;
