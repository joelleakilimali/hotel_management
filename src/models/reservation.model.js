const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  name_customer: { type: Schema.Types.ObjectId, ref: "User", required: false },
  date_ceremony: { type: Date, required: false },
  reservationDate: { type: Date, default: Date.now() },
  room: { type: Schema.Types.ObjectId, ref: "Room", required: false },
  status: {
    type: String,
    enum: ["CONFIRMED", "CANCELLED"],
    default: "CONFIRMED",
  },
});
module.exports = mongoose.model("Reservation", schema);
