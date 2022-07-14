const express = require("express");
const {
  createRoom,
  getRoom,
  getRoombyId,
  updateroom,
} = require("../services/room.service");
const route = express.Router();

/**
 * @description: creation of a room
 * @method POST
 * @URL api/room
 */
route.post("/", async (req, res) => {
  body = req.body;
  if (!body) {
    return res.status(400).send({ error: "Empty body" });
  }
  room = await createRoom(body);
  return res.status(201).json({ data: room });
});
/**
 * @description : print all the room
 * @method : GET
 * @url api/room
 */
route.get("/", async (req, res) => {
  allroom = await getRoom();
  console.log(allroom);
  return res.status(200).json({ data: allroom, statusCode: 200 });
});

/**
 * @description get room by id
 * @method GET
 * @url /api/room/
 */
route.get("/:id", async (req, res) => {
  room_id = req.params.id;
  const room = await getRoombyId(room_id);
  return res.status(200).json({ data: room });
});
/**
 * @description update room
 * @metod PUT
 * @url api/rooms
 */
route.put("/:id", async (req, res) => {
  room_id = req.params.id;
  const body = req.body;
  const room_updated = updateroom(room_id, body);

  return res.status(201).json({ data: body });
});
module.exports = route;
