require("dotenv").config();

let express = require("express");
let app = express();

let absolutePath = __dirname + "/views/index.html";
let publicPath = __dirname + "/public";

app.get("/", function (req, res) {
  res.sendFile(absolutePath);
});

app.use("/public", express.static(publicPath));

app.get("/json", (req, res) {
  let message = "Hello json";
(process.env.MESSAGE_STYLE == "uppercase") ? message=message.toUpperCase() : message=message; 
res.json({"message": message});
});

module.exports = app;
