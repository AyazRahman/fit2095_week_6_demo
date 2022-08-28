const express = require("express");

const path = require("path");

const { carsRouter } = require("./router");

const app = express();

const getPortNumber = (portNumber) => (!isNaN(portNumber) ? portNumber : 8080);

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public/imgs"));
app.use(express.static("public/css"));

// Configure Express for EJS
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

// Using Cars Router
app.use("/", carsRouter);

app.get("/", function (_, res) {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("*", function (_, res) {
  res.sendFile(path.join(__dirname, "views", "404.html"));
});

const PORT_NUMBER = getPortNumber(process.argv[2]);

app.listen(PORT_NUMBER, () => {
  console.log(`Listening on port ${PORT_NUMBER}`);
});
