const Room = require("../models/room.model");

const createRoom = async (room) => {
  return Room.create(room);
};
const getRoom = async () => {
  return await Room.find();
};
const getRoombyId = async (id) => {
  return await Room.findById(id);
};

const updateRoom = async (id) => {
  return await Room.findById(id);
};
const updateroom = async (id, body) => {
  const filter = { _id: id };
  const update = body;
  return await Room.findOneAndUpdate(filter, update);
};

module.exports = {
  createRoom,
  getRoom,
  getRoombyId,
  updateRoom,
  updateroom,
};
