const Reservation = require("../models/reservation.model");

const createReservation = async (room_reserved) => {
  return Reservation.create(room_reserved);
};

const getRoom_reserved = async () => {
  return await Reservation.find();
};

const getRoom_reservedbyId = async (id) => {
  return await Reservation.findById(id);
};

const updateReservation = async (id, body) => {
  const filter = { _id: id };
  const update = body;
  return await Reservation.findOneAndUpdate(filter, update);
};

const getReservationByUser = async (userId) => {
  return await Reservation.find({ name_custome: userId });
};

const getReservationByDateRange = async (date1, date2) => {
  return await Reservation.find({
    date_ceremony: { $gte: date1, $lte: date2 },
  });
};

const getReservationMadeInDateRange = async (date1, date2) => {
  return await Reservation.find({
    reservationDate: { $gte: date1, $lte: date2 },
  });
};

module.exports = {
  createReservation,
  getRoom_reserved,
  getRoom_reservedbyId,
  updateReservation,
  getReservationByUser,
  getReservationByDateRange,
  getReservationMadeInDateRange,
};
