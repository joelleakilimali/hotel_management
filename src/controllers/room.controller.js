const {
  createRoom,
  getRoom,
  getRoombyId,
  updateroom,
} = require("../services/room.service");

const findRoom = async (req, res) => {
  allroom = await getRoom();
  console.log(allroom);
  return res.status(200).json({ data: allroom, statusCode: 200 });
};

const create_a_room = async (req, res) => {
  body = req.body;
  if (!body) {
    return res.status(400).send({ error: "Empty body" });
  }
  room = await createRoom(body);

  return res.status(201).json({ data: room });
};

const findRoomById = async (req, res) => {
  room_id = req.params.id;
  const room = await getRoombyId(room_id);

  return res.status(200).json({ data: room });
};
const update_a_room = async (req, res) => {
  room_id = req.params.id;
  const body = req.body;
  const room_updated = updateroom(room_id, body);

  return res.status(201).json({ data: body });
};
module.exports = {
  findRoom,
  create_a_room,
  findRoomById,
  update_a_room,
};
