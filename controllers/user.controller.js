const User = require("../models/user.model.js");

exports.findById = (req, res) => {
  User.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.id}.`,
        });
      } else {
        console.log(err);
        res.status(500).send({
          message: "Error retrieving Anime with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

exports.findByUsername = (req, res) => {
  User.findByUsername(req.params.username, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with id ${req.params.username}.`,
        });
      } else {
        console.log(err);
        res.status(500).send({
          message: "Error hhhhhh User with id " + req.params.username,
        });
      }
    } else res.send(data);
  });
};

exports.update = (req, res) => {
  User.update(req.body, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with id ${req.body.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving User with id " + req.body.id,
        });
      }
    } else res.send(data);
  });
};
