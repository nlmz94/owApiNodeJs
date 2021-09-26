module.exports = app => {
    const animes = require("../controllers/anime.controller.js");
    app.get("/animes", animes.findAll);
    app.get("/animes/:id", animes.findOne);
};
