const Reserved = require("../models/reservation.model");

const createReservation = async (room_reserved) => {
  return Reserved.create(room_reserved);
};
const getRoom_reserved = async () => {
  return await Reserved.find();
};
const getRoom_reservedbyId = async (id) => {
  return await Reserved.findById(id);
};
const update_a_reservation = async (id, body) => {
  const filter = { _id: id };
  const update = body;
  return await User.findOneAndUpdate(filter, update);
};

module.exports = {
  createReservation,
  getRoom_reserved,
  getRoom_reservedbyId,
  update_a_reservation,
};
