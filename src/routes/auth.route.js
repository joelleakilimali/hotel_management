const express = require("express");
const bcrypt = require("bcryptjs");
const { getUserByEmail, createUser } = require("../services/user.service");
const route = express.Router();

route.post("/register", async (req, res) => {
  body = req.body;
  if (!body) {
    return res.status(400).json({ error: "Empty body" });
  }
  if (!body.email && !body.password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  email = body.email;
  find_user = await getUserByEmail(email);
  if (find_user.length) {
    return res
      .status(400)
      .json({ message: "Account with same email already in the system" });
  }

  password = body.password;

  const salt = await bcrypt.genSalt(10);
  const hashed_password = await bcrypt.hash(password, salt);

  new_user = await createUser({ ...body, password: hashed_password });

  return res.status(200).json({ message: "user created", data: new_user });
});

route.post("/login", async (req, res) => {
  body = req.body;
  if (!body) {
    return res.status(400).json({ error: "Empty body" });
  }
  if (!body.email && !body.password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  email = body.email;
  find_user = await getUserByEmail(email);
  if (find_user.length) {
    return res
      .status(400)
      .json({ message: "Account with same email already in the system" });
  }

  return res.status(200).json({ message: "user created" });
});

module.exports = route;
