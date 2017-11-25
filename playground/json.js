// var obj = {
//   name: "Baba"
// };
//
// var stringObj = JSON.stringify(obj);
//
// console.log(typeof stringObj);
// console.log(stringObj);


// var stringPerson = '{"name": "Baba", "age":28}';
// //we need to take the string and convert it back into an object
//
// var resultObject = JSON.parse(stringPerson);
// console.log(resultObject);

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);



