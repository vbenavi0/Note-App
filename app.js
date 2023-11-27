const fs = require('fs');
const color = require('chalk');

fs.writeFileSync('notes.txt', 'This file was created by node');

fs.appendFileSync('notes.txt', 'Sup');

const validator = require('validator');
console.log(validator.isEmail('email@example.com'));
console.log(color.green('Success!'));