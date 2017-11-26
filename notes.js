const fs = require('fs');

var addNote = (title, body) => {
    console.log("Adding note:", title, body)
    var notes = [];
    var note = {
      title,
      body
    };

    try{
        //fetch the existing notes
        //check is title already exists (we don't want duplicates)
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);

        //loop through notes collection and check for duplicate
        for (var i=0; i<notes.length; i++)
        {
            if(notes[i].title === title){
                console.log("Duplicate detected!");
                break;
            }else{
                //push into array
                notes.push(note);
                //write JSON string to file
                fs.writeFileSync('notes-data.json', JSON.stringify(notes));
            }

            //console.log(notes[i].title);
        }
    }catch(e){
        console.log("Could not fetch from package.json file!");
    }






}

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