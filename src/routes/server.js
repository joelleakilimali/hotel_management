require("dotenv").config();
const express = require("express");
const app = express();
const userRoute = require("./user.route");
const roomRoute = require("./room.route");
const reservedRoom = require("./reservation.route");
const authRoute = require("./auth.route");
const mongoose = require("mongoose");
const securedRoute = require("../middleware/securedRoute");
// database url
const url =
  "mongodb+srv://joenie:KoqMpIs2jn1LEBU9@cluster0.hxnaa.mongodb.net/room_management_db?retryWrites=true&w=majority";
//connect with the database
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Dabase connected..."));

app.use(express.json());
app.use("/api/users", securedRoute, userRoute);
app.use("/api/rooms", roomRoute);
app.use("/api/reservations", reservedRoom);
app.use("/api/auth", authRoute);
module.exports = { app };
