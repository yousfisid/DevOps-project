const express = require("express");
const users = require("../controllers/users");

const userRouter = express.Router();

userRouter
  .post("/", (req, res) => {
    const user = {
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname
    };
    users.create(user, (err, result) => {
      console.log(res);
      if (err) return res.status(400);
      res.status(201).json({username: result});
    });
  })
  .get("/:username", (req, res, next) => {
    // Express URL params - https://expressjs.com/en/guide/routing.html
    // TODO Create get method API
    const username = req.params.username;
    users.get(username, (err, result) => {
      if (err) return res.status(400);
      res.status(200).json({
        username: result.username,
        firstname: result.firstname,
        lastname: result.lastname
      });
    });
  });
module.exports = userRouter;
