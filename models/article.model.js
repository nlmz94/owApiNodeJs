const mysqlConnection = require("./db.js");

const Article = function (article) {
  this.title = article.title;
  this.body = article.body;
  this.created_at = article.created_at;
  this.author = article.author;
  this.cover = article.cover;
  this.category = article.category;
};

Article.findById = (id, result) => {
  mysqlConnection.query(
    `SELECT * FROM article WHERE id = ${id}`,
    (error, res) => {
      if (error) {
        result(error, null);
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

Article.findAll = (result) => {
  mysqlConnection.query(`SELECT * FROM article`, (err, res) => {
    if (err) {
      result(null, err);
      return;
    }
    result(null, res);
  });
};

module.exports = Article;
