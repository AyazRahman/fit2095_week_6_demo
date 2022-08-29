const mongoose = require("mongoose");

const carsSchema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  maker: {
    type: String,
    required: true,
    validate: {
      validator: (makerValue) => makerValue.length >= 3,
      message: "Maker should be atleast 3 characters",
    },
  },
  model: { type: String, required: true },
});

module.exports = mongoose.model("cars", carsSchema);
