const express = require("express");
const userRouter = require("./routes/users");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://joris:joris@cluster0-y6wlz.mongodb.net/test?retryWrites=true&w=majority",
    {useNewUrlParser: true, useUnifiedTopology: true}
  )
  .then(() => console.log("Database connected"))
  .catch(() => console.log("Database connection failed"));

app.get("/", (req, res) => res.send("Hello World! Hello ECE!"));

app.use("/user", userRouter);

const server = app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

module.exports = server;
