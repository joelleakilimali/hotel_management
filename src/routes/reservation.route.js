const express = require("express");
const route = express.Router();
const {
  createReservation,
  getRoom_reserved,
  getRoom_reservedbyId,
  update_a_reservation,
} = require("../services/reservation.service");

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
  room = await createReservation(body);
  res.json({ data: room, statusCode: 201 });
});

/**
 * @description : print all the room
 * @method : GET
 * @url api/room
 */
route.get("/", async (req, res) => {
  allroom = await getRoom_reserved();
  console.log(allroom);
  return res.status(200).json({ data: allroom, statusCode: 200 });
});

/**
 * @description get room by id
 * @method GET
 * @url /api/reservation/
 */
route.get("/:id", async (req, res) => {
  room_id = req.params.id;
  const room = await getRoom_reservedbyId(room_id);
  return res.status(200).json({ data: room });
});
/**
 * @description update a reservation
 * @method put
 * @url /app/reservation/
 */
route.put("/:id", async (req, res) => {
  rerervation_id = req.params.id;
  const body = req.body;
  const room_updated = update_a_reservation(rerervation_id, body);

  return res.status(200).json({ data: body });
});

module.exports = route;
