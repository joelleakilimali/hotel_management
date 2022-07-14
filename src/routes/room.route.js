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
    res.send({ error: "Empty body", statusCode: 400 });
  }
  room = await createRoom(body);
  res.json({ data: room, statusCode: 201 });
});
/**
 * @description : print all the room
 * @method : GET
 * @url api/room
 */
route.get("/", async (req, res) => {
  allroom = await getRoom();
  console.log(allroom);
  res.json({ data: allroom, statusCode: 200 });
});

/**
 * @description get room by id
 * @method GET
 * @url /api/room/
 */
route.get("/:id", async (req, res) => {
  room_id = req.params.id;
  const room = await getRoombyId(room_id);
  res.json({ data: room });
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

  res.json({ data: body });
});
module.exports = route;
