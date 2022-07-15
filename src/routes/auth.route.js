const express = require("express");
const { register, login } = require("../controllers/auth.controller");

JWT_KEY = process.env.JWT_KEY;

const route = express.Router();

route.post("/register", register);

route.post("/login", login);

module.exports = route;
