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
  const json = { message: "Hello json" };
  json.message = process.env.MESSAGE_STYLE = "uppercase"
    ? json.message.toUpperCase()
    : json.message;
  res.json(json);
});

module.exports = app;
