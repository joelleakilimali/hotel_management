const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  name: { type: String, required: true },
  type: {
    type: String,
    required: false,
    enum: ["Wedding", "Conference", "Other"],
  },
  address: { type: Object, required: false },
  owner: { type: Schema.Types.ObjectId, ref: "User", required: false },
});
module.exports = mongoose.model("Room", schema);
