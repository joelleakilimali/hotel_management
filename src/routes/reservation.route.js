const express = require("express");
const {
  makeReservation,
  printReservation,
  printReservationById,
  update_Reservation,
  cancelReservation,
  getReservationByCustomerId,
  findReservationByDateRange,
  findtReservationMadeInDateRange,
} = require("../controllers/reservation.controllers");
const route = express.Router();

/**
 * @description: creation of a reservation
 * @method POST
 * @URL api/room
 */
route.post("/", makeReservation);

/**
 * @description : print all resrvations
 * @method : GET
 * @url api/room
 */
route.get("/", printReservation);

/**
 * @description get reservationby id
 * @method GET
 * @url /api/reservation/
 */
route.get("/:id", printReservationById);
/**
 * @description update a reservation
 * @method put
 * @url /app/reservation/
 */
route.put("/:id", update_Reservation);

/**
 * @description cancel a reservation
 * @method post
 * @url/app/reservation/cancel
 */

route.post("/cancel", cancelReservation);

/**
 * @description get reservation list of a customer
 * @method post
 * @url/app/reservation/list
 */
route.get("/list/:customerId", getReservationByCustomerId);

/**
 * @description get reservations within a giving range
 * @method post
 * @url /app/reservation/list/dates/ceremonie
 */
route.get("/list/dates/ceremonie", findReservationByDateRange);

/* @description get reservations within a giving range
 * @method post
 * @url /app/reservation/list/dates/madeDate
 */
route.post("/list/dates/madeDate", findtReservationMadeInDateRange);

module.exports = route;
