const mongosse = require("mongoose");
const { Schema } = mongosse;
const ComercioNewSchema = new Schema(
  {
    title: { type: String },
    link: { type: String },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);
module.exports = mongosse.model("ComercioNew", ComercioNewSchema);
