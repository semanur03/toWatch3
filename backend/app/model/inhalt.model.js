const sql = require("./db.js");

// constructor
const Inhalt = function(inhalt) {
    this.id = inhalt.id;
    this.titel = inhalt.titel;
    this.beschreibung = inhalt.beschreibung;
    this.genre = inhalt.genre;
    this.kategorie = inhalt.kategorie;
    this.was = inhalt.was;
    this.status = inhalt.status;
    this.bewertung = inhalt.bewertung;
};

Inhalt.create = (newInhalt, result) => {
    sql.query("INSERT INTO inhalt SET ? ", newInhalt, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created Inhalt: ", { id: res.insertId, ...newInhalt });
        result(null, { id: res.insertId, ...newInhalt });
    });
};

Inhalt.findById = (inhaltId, result) => {
    sql.query(`SELECT * 
               FROM inhalt
               WHERE id = ${inhaltId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found inhalt: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Inhalt with the id
        result({ kind: "not_found" }, null);
    });
};

Inhalt.findByGenre = (inhaltGenre, result) => {
    sql.query(`SELECT * FROM inhalt WHERE genre = ${inhaltGenre}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found inhalt: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Inhalt with the genre
        result({ kind: "not_found" }, null);
    });
};

Inhalt.findByKategorie = (inhaltKategorie, result) => {
    sql.query(`SELECT * FROM inhalt WHERE kategorie = ${inhaltKategorie}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found inhalt: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Inhalt with the kategorie
        result({ kind: "not_found" }, null);
    });


};Inhalt.findByWas = (inhaltWas, result) => {
    sql.query(`SELECT * FROM inhalt WHERE was = ${inhaltWas}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found inhalt: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Inhalt with the was
        result({ kind: "not_found" }, null);
    });

};Inhalt.findByStatus = (inhaltStatus, result) => {
    sql.query(`SELECT * FROM inhalt WHERE status = ${inhaltStatus}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found inhalt: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Inhalt with the status
        result({ kind: "not_found" }, null);
    });
}

Inhalt.getAll = (result) => {
    sql.query("SELECT * FROM inhalt;", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("inhalt: ", res);
        result(null, res);
    });
};

Inhalt.updateById = (id, inhalt, result) => {
    sql.query(
        "UPDATE inhalt SET titel = ?, beschreibung = ?, genre = ?, was = ?, kategorie = ?, status = ?, bewertung = ?, WHERE id = ?",
        [inhalt.titel, inhalt.beschreibung, inhalt.genre, inhalt.was, inhalt.kategorie, inhalt.status, inhalt.bewertung, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found Inhalt with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated inhalt: ", { id: id, ...inhalt });
            result(null, { id: id, ...inhalt });
        }
    );
};

Inhalt.remove = (id, result) => {
    sql.query("DELETE FROM inhalt WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Inhalt with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted inhalt with id: ", id);
        result(null, res);
    });
};

Inhalt.removeAll = result => {
    sql.query("DELETE FROM inhalt", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} inhalt`);
        result(null, res);
    });
};

module.exports = Inhalt;