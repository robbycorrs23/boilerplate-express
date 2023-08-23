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
  let message = "Hello json";
  process.env.MESSAGE_STYLE == "uppercase"
    ? (message = message.toUpperCase())
    : (message = message);
  res.json({ message: message });
});

app.use((req, res, next) => {
  console.log(`HTTP Method Used: ${req.method}`); // Logs the HTTP method used (e.g., 'GET', 'POST')
  next(); // Move to the next middleware or route handler
});

module.exports = app;
