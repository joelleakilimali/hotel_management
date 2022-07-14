const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  name_custome: { type: Schema.Types.ObjectId, ref: "User", required: false },
  date_ceremony: { type: String, required: false },
  price: { type: Number, required: true },
  room_name: { type: Schema.Types.ObjectId, ref: "Room", required: false },
});
module.exports = mongoose.model("Reservation", schema);
