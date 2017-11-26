//console.log("Starting app.js");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs'); //great for --key=value pairs

const notes = require("./notes.js");

var command = yargs.argv._[0];



if(command === 'add'){
    console.log("adding new note");
    //we want to be able to specify --title=someTitle --body=someBody
    var note = notes.addNote(yargs.argv.title, yargs.argv.body);

    if (note === undefined){ //if(note) works too
        console.log("undefined was returned");
    }else{
        console.log("note created...");
    }

}else if (command === 'list'){
    notes.getAll();

}else if (command === 'read'){
    notes.getNote(yargs.argv.title);

}else if (command === 'remove'){
    var noteRemoved = notes.removeNote(yargs.argv.title);
    
    if (noteRemoved){
        console.log("note removed");
    }else{
        console.log("note not found");
    }

}else{
    console.log("command not recognized");
};



//getNote(title) / removeNote(title)