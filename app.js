//console.log("Starting app.js");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require("./notes.js");

var command = process.argv[2];

if(command === 'add'){
    console.log("adding new note");
}else if (command === 'list'){
    console.log("listing all notes");
}else if (command === 'read'){
    console.log("reading note");
}else if (command === 'remove'){
    console.log("removing note");
}else{
    console.log("command not recognized");
};



