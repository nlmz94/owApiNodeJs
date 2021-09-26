module.exports = app => {
    const articles = require("../controllers/article.controller.js");
    app.get("/articles", articles.findAll);
    app.get("/articles/:id", articles.findById);
};
