const fs = require('fs');

var fetchNotes = () => {
    try{
        //fetch the existing notes
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString); //bring it back into an object

    }catch(e){
        return []; //returns an empty array as opposed to JSON array of objects
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    console.log("Adding note:", title, body)
    var notes =  fetchNotes();
    var note = {
      title,
      body
    };

    var dupes = [];

    for (var i=0; i<notes.length; i++) {
        //console.log(i, notes[i].title);

        if(notes[i].title === title){
            dupes.push(title);
        }
    }

    // var duplicateNotes = notes.filter(function(note){
    //     return note.title === title;
    // });

    //console.log("duplicateNotes: ", duplicateNotes);

    if (dupes.length === 0){
        //push into array
        notes.push(note);
        //write JSON string to file
        saveNotes(notes);
        //return the note thats getting added
        return note;
    }

}

var getAll = () => {
    console.log("Getting all notes");

    var notes =  fetchNotes();

    for (var i=0; i<notes.length; i++){
        console.log(notes[i].title + "-" + notes[i].body);
    }

};

var getNote = (title) => {
    console.log("Getting note:", title);

    var notes =  fetchNotes();

    for (var i=0; i<notes.length; i++){
        if(notes[i].title === title){
            console.log(notes[i].title + "-" + notes[i].body);
        }
    }


};

var removeNote = (title) => {
    console.log("Removing note:", title);

    var notes =  fetchNotes();
    var filteredNotes = notes.filter((note) => note.title != title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;

};

module.exports = {
    addNote: addNote,
    getAll: getAll,
    getNote: getNote,
    removeNote: removeNote
};