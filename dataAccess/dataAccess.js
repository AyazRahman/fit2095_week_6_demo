const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const url = "mongodb://localhost:27017/";

let db;

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) console.error(err.message);
  else {
    console.log("Connected successfully");
    db = client.db("fleet");
  }
});

exports.addCar = async (newCar) =>
  await db.collection("cars").insertOne(newCar);

exports.listAll = async () => await db.collection("cars").find({}).toArray();

exports.deleteById = async (id) =>
  await db.collection("cars").deleteOne({ _id: mongodb.ObjectId(id) });
