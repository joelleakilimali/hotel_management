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
  res.json({ data: allUser, statusCode: 200 });
});

/**
 * @description create usr
 * @method POST
 * @url /api/users/
 */
route.post("/", async (req, res) => {
  body = req.body;
  if (!body) {
    res.send({ error: "Empty body", statusCode: 400 });
  }
  if (!body.email) {
    res.send({ error: "Email is required", statusCode: 400 });
  }
  user = await createUser(body);
  res.json({ data: user, statusCode: 201 });
});

/**
 * @description get user by id
 * @method GET
 * @url /api/users/
 */
route.get("/:id", async (req, res) => {
  user_id = req.params.id;
  const user = await getUserById(user_id);
  res.json({ data: user, statusCode: 200 });
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

  res.json({ data: user });
});
module.exports = route;
