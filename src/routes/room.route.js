const express = require("express");
const {
  findRoom,
  create_a_room,
  findRoomById,
  update_a_room,
} = require("../controllers/room.controller");

const route = express.Router();

/**
 * @description: creation of a room
 * @method POST
 * @URL api/room
 */
route.post("/", create_a_room);
/**
 * @description : print all the room
 * @method : GET
 * @url api/room
 */
route.get("/", findRoom);

/**
 * @description get room by id
 * @method GET
 * @url /api/room/
 */
route.get("/:id", findRoomById);
/**
 * @description update room
 * @metod PUT
 * @url api/rooms
 */
route.put("/:id", update_a_room);
module.exports = route;
