const mongosse = require("mongoose");
const { Schema } = mongosse;
//esta es la manera de correcta de crear un model
//instanciando la clase Schema
const BreakingNewSchema = new Schema(
  {
    title: { type: String },
    link: { type: String },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongosse.model("Cat", BreakingNewSchema);
