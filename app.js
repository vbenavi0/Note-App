const fs = require('fs');
const getNotes = require('./notes.js')
const color = require('chalk');

// fs.writeFileSync('notes.txt', 'This file was created by node');

// fs.appendFileSync('notes.txt', 'Sup');

// const validator = require('validator');
// console.log(validator.isEmail('email@example.com'));
// console.log(color.blue('Success!'));

const command = process.argv[2];
console.log(command);

if(command === 'add'){
    console.log('Adding Note!')
}
else if(command === 'remove'){
    console.log('Removing Note!')
}