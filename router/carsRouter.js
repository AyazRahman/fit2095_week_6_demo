const express = require("express");
const carsRouter = express.Router();
const path = require("path");
const { carsDb: db } = require("../dataAccess");

carsRouter.get("/addcar", function (_, res) {
  res.sendFile(path.join(__dirname, "..", "views", "addcar.html"));
});

carsRouter.get("/delcar", function (_, res) {
  res.sendFile(path.join(__dirname, "..", "views", "delbyid.html"));
});

carsRouter.post("/newcar", async (req, res) => {
  let newCar = req.body;
  await db.addCar(newCar);

  res.redirect("/getcars");
});

carsRouter.get("/getcars", async (_, res) => {
  // all database operations are asynchronous
  let cars = await db.listAll();
  res.render("getcars", { cars });
});

carsRouter.post("/delcar", async (req, res) => {
  const { id } = req.body;
  await db.deleteById(id);

  res.redirect("/getcars");
});

module.exports = carsRouter;
