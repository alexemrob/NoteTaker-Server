// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information.

var noteData = require("../data/noteData");



// ROUTING

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    app.get("/api/notes", function (req, res) {
        // res.json(noteData);
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a note... this data is then sent to the server...
    // Then the server saves the data to the notes array)
    app.post("/api/notes", function (req, res) {
        // var newNote = req.body;
        // handleNoteSave.push(newNote);
        // res.json(newNote);
    });
    
    app.post("/api/notes/:id", function (req, res) {

    });

};