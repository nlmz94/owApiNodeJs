const Article = require('../models/article.model.js');

exports.findAll = (req, res) => {
    Article.findAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    })
}

exports.findById = (req, res) => {
    Article.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Customer with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Anime with id " + req.params.id
                });
            }
        } else res.send(data);
    })
}
