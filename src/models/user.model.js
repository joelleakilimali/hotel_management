const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  name: { type: String, required: false },
  firstname: { type: String, required: false },
  gender: { type: String, required: false, enum: ["Male", "Female", "Other"] },
  address: { type: Object, required: false },
  password: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: false },
  role: {
    type: String,
    required: false,
    enum: ["CLIENT", "ROOM_OWNER", "ADMIN"],
    default: "CLIENT",
  },
});

module.exports = mongoose.model("User", schema);
