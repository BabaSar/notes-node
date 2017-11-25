//console.log("Starting app.js");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs'); //great for --key=value pairs

const notes = require("./notes.js");

var command = yargs.argv._[0];



if(command === 'add'){
    console.log("adding new note");
    //we want to be able to specify --title=someTitle --body=someBody
    notes.addNote(yargs.argv.title, yargs.argv.body);

}else if (command === 'list'){
    notes.getAll();

}else if (command === 'read'){
    notes.getNote(yargs.argv.title);

}else if (command === 'remove'){
    notes.removeNote(yargs.argv.title);

}else{
    console.log("command not recognized");
};



//getNote(title) / removeNote(title)