const express = require("express");
const { findAllUsers } = require("../controllers/user.controller");

const route = express.Router();

/**
 * @description getting all users
 * @method GET
 * @url /api/users/
 */
route.get("/", findAllUsers);

/**
 * @description create usr
 * @method POST
 * @url /api/users/
 */
route.post("/", async (req, res) => {
  body = req.body;
  if (!body) {
    return res.status(400).send({ error: "Empty body" });
  }
  if (!body.email) {
    return res.status(400).send({ error: "Email is required" });
  }

  email = body.email;

  const emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (!email.match(emailFormat)) {
    return res.status(400).send({ error: "Invalid email" });
  }
  user = await createUser(body);
  return res.status(201).json({ data: user });
});

/**
 * @description get user by id
 * @method GET
 * @url /api/users/
 */
route.get("/:id", async (req, res) => {
  user_id = req.params.id;
  const user = await getUserById(user_id);
  return res.status(200).json({ data: user });
});

/**
 * @description update user
 * @method patch
 * @url /api/users/id
 */
route.put("/:id", async (req, res) => {
  user_id = req.params.id;
  const body = req.body;
  const user_updated = updateUser(user_id, body);

  return res.status(200).json({ data: user });
});
module.exports = route;
