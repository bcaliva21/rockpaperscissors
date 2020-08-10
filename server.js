const express = require("express");
const path = require("path");
const app = express();

app.get("/index.html", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/styles.css", (req, res) => {
  res.sendFile(path.join(__dirname + "/styles.css"));
});

app.get("/app.js", (req, res) => {
  res.sendFile(path.join(__dirname + "/app.js"));
});

app.get("/", (req, res) => {
  res.redirect("index.html");
});

app.listen(3000, () =>
  console.log("App listening at http://localhost:3000/index.html")
);
