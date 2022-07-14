const { app } = require("./src/routes/server");
app.listen(3000, () => {
  console.log("Start app");
});
/*
const express = require("express");
const app = express();
app.listen(3000, () => {
  console.log("Start app");
});

module.exports = { app };*/
