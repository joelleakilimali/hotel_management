const express = require("express");
const {
  findAllUsers,
  create_new_user,
  findUserById,
  update_a_user,
} = require("../controllers/user.controller");

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
route.post("/", create_new_user);

/**
 * @description get user by id
 * @method GET
 * @url /api/users/
 */
route.get("/:id", findUserById);

/**
 * @description update user
 * @method put
 * @url /api/users/id
 */
route.put("/:id", update_a_user);
module.exports = route;
