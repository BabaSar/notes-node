const fs = require('fs');

var fetchNotes = () => {

};

var saveNotes = () => {

};

var addNote = (title, body) => {
    console.log("Adding note:", title, body)
    var notes = [];
    var note = {
      title,
      body
    };

    try{
        //fetch the existing notes
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString); //bring it back into an object




    }catch(e){
        console.log("Could not fetch from notes-data.json file!");
        console.log("notes-data.json file will be created")
    }

    var dupes = [];

    for (var i=0; i<notes.length; i++) {
        console.log(i, notes[i].title);

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
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }





}

var getAll = () => {
    console.log("Getting all notes");

    try{
        var notesString = fs.readFileSync('notes-data.json'); //read JSON string into variable
        notes = JSON.parse(notesString); //parse it back into an object
    }catch(e){
        console.log("Could not get json file");
    }

    for (var i=0; i<notes.length; i++){
        console.log(notes[i].title + "-" + notes[i].body);
    }

};

var getNote = (title) => {
    console.log("Getting note:", title);

    try{
        var notesString = fs.readFileSync('notes-data.json'); //read JSON string into variable
        notes = JSON.parse(notesString); //parse it back into an object
    }catch(e){
        console.log("Could not get json file");
    }

    for (var i=0; i<notes.length; i++){
        if(notes[i].title === title){
            console.log(notes[i].title + "-" + notes[i].body);
        }
    }


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