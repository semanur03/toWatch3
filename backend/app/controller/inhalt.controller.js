const Inhalt = require("../model/inhalt.model.js");

// Create and Save a new Inhalt
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Inhalt
    const inhalt = new Inhalt({
        titel: req.body.titel,
        beschreibung: req.body.beschreibung,
        genre: req.body.genre,
        kategorie: req.body.kategorie,
        was: req.body.was,
        status: req.body.status,
        bewertung: req.body.bewertung,
    });

    // Save Customer in the database
    Inhalt.create(inhalt, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Inhalt."
            });
        else res.send(data);
    });
};

// Retrieve all Inhalt from the database.
exports.findAll = (req, res) => {
    Inhalt.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Inhalte."
            });
        else res.send(data);
    });
};

// Find a single Inhalt with a inhaltId
exports.findOne = (req, res) => {
    Inhalt.findById(req.params.inhaltId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Inhalt with id ${req.params.inhaltId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Inhalt with id " + req.params.inhaltId
                });
            }
        } else res.send(data);
    });
};

exports.findByGenre = (req, res) => {
    Inhalt.findByGenre(req.params.inhaltGenre, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Inhalt with genre ${req.params.inhaltGenre}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Inhalt with genre " + req.params.inhaltGenre
                });
            }
        } else res.send(data);
    });
};

exports.findByKategorie = (req, res) => {
    Inhalt.findByKategorie(req.params.inhaltKategorie, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Inhalt with kategorie ${req.params.inhaltKategorie}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Inhalt with kategorie " + req.params.inhaltKategorie
                });
            }
        } else res.send(data);
    });
};

exports.findByWas = (req, res) => {
    Inhalt.findByWas(req.params.inhaltWas, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Inhalt with was ${req.params.inhaltWas}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Inhalt with was " + req.params.inhaltWas
                });
            }
        } else res.send(data);
    });
};

exports.findByStatus = (req, res) => {
    Inhalt.findByStatus(req.params.inhaltStatus, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Inhalt with status ${req.params.inhaltStatus}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Inhalt with status " + req.params.inhaltStatus
                });
            }
        } else res.send(data);
    });
};

// Update a Inhalt identified by the inhaltId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    
    const inhalt = new Inhalt({
        titel: req.body.titel,
        beschreibung: req.body.beschreibung,
        genre: req.body.genre,
        kategorie: req.body.kategorie,
        was: req.body.was,
        status: req.body.status,
        bewertung: req.body.bewertung,
    });

    Inhalt.updateById(
        req.params.inhaltId,
        new Inhalt(req.body),
        
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Inhalt with id ${req.params.inhaltId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Inhalt with id " + req.params.inhaltId
                    });
                }
            } else res.send(data);
        }
    );
};

// Delete a Inhalt with the specified inhaltId in the request
exports.delete = (req, res) => {
    Inhalt.remove(req.params.inhaltId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Inhalt with id ${req.params.inhaltId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Inhalt with id " + req.params.inhaltId
                });
            }
        } else res.send({ message: `Inhalt was deleted successfully!` });
    });
};

// Delete all Inhalt from the database.
exports.deleteAll = (req, res) => {
    Inhalt.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Inhalte."
            });
        else res.send({ message: `All Inhalte were deleted successfully!` });
    });
};
