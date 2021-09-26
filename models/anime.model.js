const mysqlConnection = require("./db.js");

const Anime = function (anime) {
    this.title = anime.title;
    this.titleEnglish = anime.titleEnglish;
    this.synopsis = anime.synopsis;
    this.imgUrl = anime.imgUrl;
    this.episodes = anime.episodes;
    this.airing = anime.airing;
    this.aired = anime.aired;
    this.pegiEntity = anime.pegiEntity;
};

Anime.findById = (id, result) => {
    mysqlConnection.query(`SELECT * FROM anime WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found customer: ", res[0]);
            result(null, res[0]);
            return;
        }
        result({kind: "not_found"}, null);
    });
};

Anime.getAll = result => {
    mysqlConnection.query("SELECT * FROM anime", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("customers: ", res);
        result(null, res);
    });
};

module.exports = Anime;
