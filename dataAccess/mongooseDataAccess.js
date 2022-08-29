const Car = require("./../models/carsModel");
const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/fleet";

mongoose.connect(url, function (err) {
  if (err) console.log("unable to connect to Mongoose");
  else console.log("connect to DB successfully");
});

exports.addCar = async (newCar) => {
  const car = new Car(newCar);
  //await db.collection("cars").insertOne(newCar);
  await car.save();
};
exports.listAll = async () => await Car.find({});

exports.deleteById = async (id) => await Car.deleteOne({ _id: id });
