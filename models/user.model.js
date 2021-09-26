const mysqlConnection = require("./db.js");

const User = function (user) {
  this.username = user.username;
  this.password = user.password;
  this.firstname = user.firstname;
  this.lastname = user.lastname;
  this.email = user.email;
  this.gender = user.gender;
  this.bio = user.bio;
  this.ip = user.ip;
  this.image = user.image;
};

User.findById = (id, result) => {
  mysqlConnection.query(`SELECT * FROM users WHERE id = ${id}`, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    if (res.length) {
      result(null, res[0]);
      return;
    }
    result({ kind: "not_found" }, null);
  });
};

User.findByUsername = (username, result) => {
  mysqlConnection.query(
    `SELECT * FROM users WHERE username LIKE "${username}"`,
    (err, res) => {
      if (err) {
        result(err, null);
        return;
      }
      if (res.length) {
        result(null, res[0]);
        return;
      }
      result({ kind: "not_found" }, null);
    }
  );
};

User.update = (user, id, result) => {
  mysqlConnection.query(
    `UPDATE users SET username=${user.username},password=${user.password},firstname=${user.firstname},lastname=${user.lastname},email=${user.email},gender=${user.gender},bio=${user.bio}, ip=${user.ip}, image=${user.image} WHERE id = ${id}`,
    (err, res) => {
      if (err) {
        result(err, null);
        return;
      }
      if (res.length) {
        result(null, res[0]);
        return;
      }
      result({ kind: "not_found" }, null);
    }
  );
};

module.exports = User;
