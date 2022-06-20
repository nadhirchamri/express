const express = require("express");
const path = require("path");
const app = express();

const logger = (req, res, next) => {
  const date = new Date();
  if (
    date.getHours() < 9 ||
    date.getHours() >= 17 ||
    date.getDay() === 0 ||
    date.getDay() === 6
  ) {
    return res.sendFile(__dirname + "/public/closed.html");
  }
  next();
};

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", logger, (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.get("/Services", logger, (req, res) => {
  res.sendFile(__dirname + "/public/Services.html");
});
app.get("/Contact", logger, (req, res) => {
  res.sendFile(__dirname + "/public/Contact.html");
});
app.get("/style.css", logger, (req, res) => {
  res.sendFile(__dirname + "/public/style.css");
});
app.get("/contact.css", logger, (req, res) => {
  res.sendFile(__dirname + "/public/contact.css");
});

const port = 5000;
app.listen(port, () => console.log("server started.."));
