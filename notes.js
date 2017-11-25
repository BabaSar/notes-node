//console.log("starting notes.js");

var addNote = (title, body) => {
    console.log("title is",title);
    console.log("body is",body);
};

var getAll = () => {
    console.log("getting all notes");
};

var getNote = (title) => {
    console.log("getting note");
    console.log(title);
};

var removeNote = (title) => {
    console.log("removing note");
    console.log(title);
};

module.exports = {
    addNote: addNote,
    getAll: getAll,
    getNote: getNote,
    removeNote: removeNote
};