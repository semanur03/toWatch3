module.exports = app => {
    const inhalt = require("../controller/inhalt.controller.js");

    // Create a new Inhalt
    app.post("/inhalt", inhalt.create);

    // GET all Inhalt
    app.get("/inhalt", inhalt.findAll);

    // GET one single Inhalt with inhaltId
    app.get("/inhalt/:inhaltId", inhalt.findOne);

    // GET  Inhalt with inhaltGenre
    app.get("/inhalt/genre/:inhaltGenre", inhalt.findByGenre);

    // GET  Inhalt with inhaltKategorie
    app.get("/inhalt/kategorie/:inhaltKategorie", inhalt.findByKategorie);

    // GET  Inhalt with inhaltWas
    app.get("/inhalt/was/:inhaltWas", inhalt.findByWas);

    // GET  Inhalt with inhaltStatus
    app.get("/inhalt/status/:inhaltStatus", inhalt.findByStatus);

    // Update one Inhalt with inhaltId
    app.put("/inhalt/:inhaltId", inhalt.update);

    // Delete the Inhalt with inhaltId
    app.delete("/inhalt/:inhaltId", inhalt.delete);

    // Delete all Inhalt
    app.delete("/inhalt", inhalt.deleteAll);
};