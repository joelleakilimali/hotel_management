const {
  createReservation,
  getRoom_reserved,
  getRoom_reservedbyId,
  updateReservation,
  getReservationByUser,
  getReservationByDateRange,
  getReservationMadeInDateRange,
} = require("../services/reservation.service");
const { getRoombyId, updateroom } = require("../services/room.service");
const { getUserById } = require("../services/user.service");

const makeReservation = async (req, res) => {
  let body = req.body;

  const today = new Date(today.getDate());

  if (body.date_ceremony < today) {
    return res.status(400).json({ error: "you can not book a passed date " });
  }

  if (!body) {
    return res.status(400).send({ error: "Empty body" });
  }

  if (!body.room || !body.date_ceremony || !body.name_customer) {
    return res.status(400).json({ error: "Missing field" });
  }
  const roomId = body.room;

  let room = await getRoombyId(roomId);

  if (!room) {
    return res.status(404).json({ error: "Room doesnt exists" });
  }

  if (room.reserved) {
    return res.status(400).json({ error: "Room already booked" });
  }

  customerId = body.name_customer;
  const user = await getUserById(customerId);

  if (!user) {
    return res.status(404).json({ error: "Client doesnt exists" });
  }

  if (!Date.parse(body.date_ceremony)) {
    return res.status(400).json({ error: "Invalid date" });
  }

  reservation = await createReservation({
    ...body,
    date_ceremony: new Date(body.date_ceremony),
  });

  await updateroom(roomId, { reserved: true });

  res.json({ data: { reservation }, statusCode: 201 });
};

//to print all reservations
const printReservation = async (req, res) => {
  allroom = await getRoom_reserved();
  console.log(allroom);
  return res.status(200).json({ data: allroom, statusCode: 200 });
};

const printReservationById = async (req, res) => {
  room_id = req.params.id;
  const room = await getRoom_reservedbyId(room_id);
  return res.status(200).json({ data: room });
};

const update_Reservation = async (req, res) => {
  rerervation_id = req.params.id;
  const body = req.body;
  const room_updated = updateReservation(rerervation_id, body);

  return res.status(200).json({ data: body });
};

const cancelReservation = async (req, res) => {
  let body = req.body;

  if (!body) {
    return res.status(400).send({ error: "Empty body" });
  }
  if (!body.room || !body.reservation) {
    return res.status(400).json({ error: "Missing field..." });
  }
  const reservationid = body.reservation;
  let reservation = await getRoom_reservedbyId(reservationid);
  if (!reservation) {
    return res.status(402).json({ error: "Reservation  doesnt exists" });
  }
  await updateReservation(reservationid, { status: "CANCELLED" });
  await updateroom(body.room, { reserved: false });

  res.json({ data: { reservation }, statusCode: 201 });
};

const getReservationByCustomerId = async (req, res) => {
  param = req.params;
  customerId = param.customerId;
  const user = await getUserById(customerId);
  if (!user) {
    return res
      .status(402)
      .json({ error: "there is no customer with this Id " });
  }
  const reservationList = await getReservationByUser(customerId);
  return res.status(200).json({ message: reservationList });
};

const findReservationByDateRange = async (req, res) => {
  const body = req.body;
  if (!body.date1 || !body.date2) {
    return res.status(400).json({ error: "Missing field..." });
  }
  if (!Date.parse(body.date1) || !Date.parse(body.date2)) {
    return res.status(400).json({ error: "Invalid date" });
  }
  const reservation = await getReservationByDateRange(body.date1, body.date2);
  return res.status(200).json({ data: reservation });
};
const findtReservationMadeInDateRange = async (req, res) => {
  const body = req.body;
  if (!body.date1 || !body.date2) {
    return res.status(400).json({ error: "Missing field..." });
  }
  if (!Date.parse(body.date1) || !Date.parse(body.date2)) {
    return res.status(400).json({ error: "Invalid date" });
  }
  const reservation = await getReservationMadeInDateRange(
    body.date1,
    body.date2
  );
  return res.status(200).json({ data: reservation });
};

module.exports = {
  makeReservation,
  printReservation,
  printReservationById,
  update_Reservation,
  cancelReservation,
  getReservationByCustomerId,
  findReservationByDateRange,
  findtReservationMadeInDateRange,
};
