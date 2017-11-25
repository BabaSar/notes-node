const fs = require('fs');

var addNote = (title, body) => {
    console.log("Adding note:", title, body)
    var notes = [];
    var note = {
      title,
      body
    };

    //push into array
    notes.push(note);

    //write JSON string to file
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));

};

var getAll = () => {
    console.log("Getting all notes");
};

var getNote = (title) => {
    console.log("Getting note:", title);
};

var removeNote = (title) => {
    console.log("Removing note:", title);
};

module.exports = {
    addNote: addNote,
    getAll: getAll,
    getNote: getNote,
    removeNote: removeNote
};