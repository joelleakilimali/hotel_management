const express = require("express");
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
} = require("../services/user.service");

const route = express.Router();

/**
 * @description getting all users
 * @method GET
 * @url /api/users/
 */
route.get("/", async (req, res) => {
  allUser = await getAllUsers();
  console.log(allUser);
  return res.status(200).json({ data: allUser });
});

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
